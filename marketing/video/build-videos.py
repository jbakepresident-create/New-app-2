#!/usr/bin/env python3
"""Joins rendered scene PNGs into vertical MP4s (1080x1920, 30 fps, H.264).

Usage: python3 marketing/video/build-videos.py marketing/video/videos.json <scenesDir> <outDir>
Each scene gets a slow push-in; scenes are joined with hard cuts (crossfades ghost the text). Videos are silent:
add a sound inside TikTok/Instagram when posting (trending sounds can't be added via upload).
"""
import json, os, subprocess, sys

FPS = 30
spec_path, scenes_dir, out_dir = sys.argv[1:4]
os.makedirs(out_dir, exist_ok=True)
spec = json.load(open(spec_path))

for video in spec["videos"]:
    vid = video["id"]
    scenes = video["scenes"]
    inputs, filters = [], []
    for i, s in enumerate(scenes):
        png = os.path.join(scenes_dir, vid, f"{i + 1:02d}.png")
        dur = s["dur"]
        frames = int(round(dur * FPS))
        inputs += ["-loop", "1", "-framerate", str(FPS), "-t", f"{dur:.3f}", "-i", png]
        # slow push-in from 1.00 to ~1.04; upscale first so zoompan stays smooth
        filters.append(
            f"[{i}:v]scale=2160:3840,zoompan=z='1+0.04*on/{frames}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':"
            f"d=1:s=1080x1920:fps={FPS},format=yuv420p,setsar=1[v{i}]"
        )
    # hard cuts
    filters.append("".join(f"[v{i}]" for i in range(len(scenes))) + f"concat=n={len(scenes)}:v=1:a=0[out]")
    last = "out"
    out_path = os.path.join(out_dir, f"{vid}.mp4")
    cmd = ["ffmpeg", "-y", "-loglevel", "error", *inputs, "-filter_complex", ";".join(filters),
           "-map", f"[{last}]", "-c:v", "libx264", "-preset", "medium", "-crf", "20",
           "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-r", str(FPS), out_path]
    subprocess.run(cmd, check=True)
    # cover image = first scene
    subprocess.run(["cp", os.path.join(scenes_dir, vid, "01.png"), os.path.join(out_dir, f"{vid}-cover.png")], check=True)
    total = sum(s["dur"] for s in scenes)
    print(f"{vid}: {len(scenes)} scenes, {total:.1f}s -> {out_path}")
