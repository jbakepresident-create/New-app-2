#!/usr/bin/env python3
"""Local server for the Steadily landing page demand test.

Stands in for the hosted services in README.md while running on your machine:
  - serves the landing page                 (instead of Netlify / Cloudflare Pages)
  - POST /api/waitlist saves signups to CSV (instead of Formspree)
  - counts page visits by utm_source        (instead of Plausible / Cloudflare Analytics)
  - GET /stats shows the results dashboard  (the "Read the results" table)

Usage:  python3 landing/server.py [--port 8080]
Data is written to landing/data/ (git-ignored, because it contains emails).
Standard library only; no install needed.
"""
import argparse
import csv
import html
import json
import os
import re
import threading
from collections import Counter
from datetime import datetime, timezone
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import parse_qs, urlparse

ROOT = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(ROOT, "data")
SIGNUPS = os.path.join(DATA, "signups.csv")
VISITS = os.path.join(DATA, "visits.csv")
SIGNUP_FIELDS = ["submitted_at", "email", "stage", "form", "tracker", "plan",
                 "utm_source", "utm_medium", "utm_campaign", "utm_content", "referrer"]
VISIT_FIELDS = ["ts", "utm_source", "utm_campaign", "referrer"]
EMAIL_RE = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")
ALLOWED = {
    "stage": {"", "starting_soon", "on_it", "stepping_down", "stopped"},
    "form": {"", "injection", "pill", "unsure"},
    "tracker": {"", "shotsy", "meagain", "other_app", "notes", "nothing"},
    "plan": {"", "free", "plus_monthly", "plus_yearly"},
}
LOCK = threading.Lock()


def append_row(path, fields, row):
    with LOCK:
        new = not os.path.exists(path)
        with open(path, "a", newline="", encoding="utf-8") as f:
            w = csv.DictWriter(f, fieldnames=fields)
            if new:
                w.writeheader()
            w.writerow({k: row.get(k, "") for k in fields})


def read_rows(path):
    if not os.path.exists(path):
        return []
    with open(path, newline="", encoding="utf-8") as f:
        return list(csv.DictReader(f))


def verdict(value, go, maybe):
    return "Go" if value >= go else ("Maybe" if value >= maybe else "Stop")


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=ROOT, **kw)

    def log_message(self, fmt, *args):  # quieter console
        pass

    def _send(self, code, body, ctype):
        data = body.encode("utf-8") if isinstance(body, str) else body
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(data)

    def do_GET(self):
        url = urlparse(self.path)
        if url.path in ("/", "/index.html"):
            q = parse_qs(url.query)
            append_row(VISITS, VISIT_FIELDS, {
                "ts": datetime.now(timezone.utc).isoformat(timespec="seconds"),
                "utm_source": q.get("utm_source", [""])[0][:80],
                "utm_campaign": q.get("utm_campaign", [""])[0][:80],
                "referrer": self.headers.get("Referer", "")[:200],
            })
            with open(os.path.join(ROOT, "index.html"), encoding="utf-8") as f:
                page = f.read()
            # Point an unconfigured form at this local server; a configured endpoint is left alone.
            page = page.replace('const WAITLIST_ENDPOINT = "";', 'const WAITLIST_ENDPOINT = "/api/waitlist";')
            return self._send(200, page, "text/html; charset=utf-8")
        if url.path == "/stats":
            return self._send(200, self.stats_page(), "text/html; charset=utf-8")
        if url.path.startswith("/data/") or url.path.endswith(".py"):
            return self._send(404, "Not found", "text/plain")
        return super().do_GET()

    def do_POST(self):
        if urlparse(self.path).path != "/api/waitlist":
            return self._send(404, json.dumps({"ok": False}), "application/json")
        try:
            length = min(int(self.headers.get("Content-Length", 0)), 10_000)
            body = json.loads(self.rfile.read(length) or b"{}")
        except (ValueError, json.JSONDecodeError):
            return self._send(400, json.dumps({"ok": False, "error": "bad json"}), "application/json")
        email = str(body.get("email", "")).strip()[:254]
        if not EMAIL_RE.match(email):
            return self._send(422, json.dumps({"ok": False, "error": "invalid email"}), "application/json")
        row = {k: str(body.get(k, ""))[:200] for k in SIGNUP_FIELDS}
        row["email"] = email
        for k, allowed in ALLOWED.items():
            if row[k] not in allowed:
                row[k] = ""
        row["submitted_at"] = datetime.now(timezone.utc).isoformat(timespec="seconds")
        if any(r["email"].lower() == email.lower() for r in read_rows(SIGNUPS)):
            return self._send(200, json.dumps({"ok": True, "duplicate": True}), "application/json")
        append_row(SIGNUPS, SIGNUP_FIELDS, row)
        return self._send(200, json.dumps({"ok": True}), "application/json")

    def stats_page(self):
        visits, signups = read_rows(VISITS), read_rows(SIGNUPS)
        v, s = len(visits), len(signups)
        conv = 100 * s / v if v else 0.0
        paid = sum(1 for r in signups if r["plan"] in ("plus_monthly", "plus_yearly"))
        answered_plan = sum(1 for r in signups if r["plan"])
        paid_pct = 100 * paid / answered_plan if answered_plan else 0.0

        def table(title, counter, total):
            rows = "".join(
                f"<tr><td>{html.escape(k or '(none)')}</td><td>{n}</td><td>{(100 * n / total if total else 0):.0f}%</td></tr>"
                for k, n in counter.most_common())
            return f"<div class='card'><h3>{title}</h3><table><tr><th>Answer</th><th>#</th><th>%</th></tr>{rows or '<tr><td colspan=3>No data yet</td></tr>'}</table></div>"

        src_v = Counter(r["utm_source"] or "direct" for r in visits)
        src_s = Counter(r["utm_source"] or "direct" for r in signups)
        src_rows = "".join(
            f"<tr><td>{html.escape(k)}</td><td>{src_v[k]}</td><td>{src_s.get(k, 0)}</td><td>{(100 * src_s.get(k, 0) / src_v[k] if src_v[k] else 0):.1f}%</td></tr>"
            for k, _ in src_v.most_common())
        tiles = [
            ("Visitors", f"{v}", ""),
            ("Signups", f"{s}", "Go" if s >= 300 else f"Need {300 - s} more (2-week target: 300)"),
            ("Visitor → signup", f"{conv:.1f}%", verdict(conv, 5, 2) if v >= 50 else "Need ≥50 visits"),
            ("Chose a paid plan", f"{paid_pct:.0f}%", verdict(paid_pct, 30, 15) if answered_plan >= 10 else "Need ≥10 answers"),
        ]
        tile_html = "".join(
            f"<div class='tile'><small>{t}</small><b>{val}</b><span class='v {html.escape(ver.split()[0].lower()) if ver else ''}'>{html.escape(ver)}</span></div>"
            for t, val, ver in tiles)
        return f"""<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1"><title>Steadily Test Results</title>
<style>
:root{{--bg:#FBF8F3;--card:#fff;--ink:#14302B;--muted:#556A64;--line:#E6DFD3;--go:#1F6F5C;--maybe:#B7791F;--stop:#B4442F}}
@media (prefers-color-scheme: dark){{:root{{--bg:#0F1715;--card:#182623;--ink:#E9F2EF;--muted:#9DB3AC;--line:#263632;--go:#5CC3A5;--maybe:#F3B76E;--stop:#F08A73}}}}
body{{margin:0;background:var(--bg);color:var(--ink);font:15px/1.5 system-ui,-apple-system,sans-serif;padding:24px 16px}}
.wrap{{max-width:1000px;margin:0 auto}} h1{{margin:0 0 4px}} .muted{{color:var(--muted)}}
.tiles{{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin:20px 0}}
.tile,.card{{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px}}
.tile small{{color:var(--muted);font-weight:600;text-transform:uppercase;font-size:.72rem;letter-spacing:.06em}}
.tile b{{display:block;font-size:2rem;margin:4px 0}} .v{{font-weight:700;font-size:.85rem}}
.v.go{{color:var(--go)}} .v.maybe{{color:var(--maybe)}} .v.stop{{color:var(--stop)}} .v.need{{color:var(--muted)}}
.grid{{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:12px}}
table{{width:100%;border-collapse:collapse}} th,td{{text-align:left;padding:6px 4px;border-bottom:1px solid var(--line)}} h3{{margin:0 0 8px;font-size:1rem}}
</style></head><body><div class="wrap">
<h1>Steadily: demand test results</h1>
<p class="muted">Live from landing/data/. Targets: signup rate ≥5%, ≥30% choosing a paid plan, ≥300 signups in 2 weeks. Refresh to update. Page: <a href="/">/</a></p>
<div class="tiles">{tile_html}</div>
<div class="card" style="margin-bottom:12px"><h3>By traffic source (utm_source)</h3><table><tr><th>Source</th><th>Visits</th><th>Signups</th><th>Rate</th></tr>{src_rows or '<tr><td colspan=4>No visits yet</td></tr>'}</table></div>
<div class="grid">
{table("Plan they'd pick", Counter(r["plan"] for r in signups), s)}
{table("Current tracker", Counter(r["tracker"] for r in signups), s)}
{table("Journey stage", Counter(r["stage"] for r in signups), s)}
{table("Medication form", Counter(r["form"] for r in signups), s)}
</div></div></body></html>"""


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--port", type=int, default=8080)
    ap.add_argument("--host", default="0.0.0.0")
    args = ap.parse_args()
    os.makedirs(DATA, exist_ok=True)
    srv = ThreadingHTTPServer((args.host, args.port), Handler)
    print(f"Steadily landing page:  http://localhost:{args.port}/")
    print(f"Results dashboard:      http://localhost:{args.port}/stats")
    print(f"Signups saved to:       {SIGNUPS}", flush=True)
    srv.serve_forever()


if __name__ == "__main__":
    main()
