# Steadily: project context for Claude

This file brings a new Claude session up to speed. The work so far happened in a cloud session; continue from here.

## What this project is
Research picked an app to build, and now a 2-week demand test is running before any app code is written.

- **Product:** *Steadily*, an iPhone GLP-1 tracker. Pitch: "the GLP-1 tracker that never holds your data hostage". Free core forever, export anytime, honest billing, plus a "life after the shot" maintenance mode.
- **Why:** the market leader (Shotsy) removed its free version in Oct 2026, and its users reported losing their data. See `reports/App Store review update.md`.
- **Spec:** `docs/steadily-product-spec.md`. App Store rules: no dose calculators (Guideline 1.4.2), and no health data in iCloud (5.1.3).

## Key files
| Path | What |
|---|---|
| `reports/App opportunity deep dive.md` | Full research report (11 finalists scored) |
| `reports/App Store review update.md` | Re-ranking from 17,881 real App Store reviews |
| `research_data/appstore/` | Raw reviews of 48 competitor apps |
| `docs/steadily-product-spec.md` | MVP product spec |
| `landing/` | Waitlist landing page (`index.html`, `js/waitlist-wix.js`, local `server.py`) plus README with test targets |
| `marketing/launch-posts.md` | Reddit posts, reply templates, video scripts, tracking links, 2-week plan |
| `marketing/video/` | Video scene renderer, build script, finished MP4s in `out/`, carousel JPEGs |
| `marketing/brand/` | Profile pictures (avatar-green / avatar-cream) |

## Live services and IDs
- **Live landing page (Wix Headless):** https://headless-wgtroynfext-jbakepresident-140e.wix-site-host.com
  - Wix site ID: `f16ea781-2646-4b18-b8cf-0046d94a76aa` · client/app ID `b8bff0e8-f370-4b42-be48-4cffe8548764`
  - Wix Forms waitlist form ID: `48fe3a7b-ba29-4d44-a1da-64b675ceb9d2`
  - Signups: Wix dashboard → Forms → Steadily waitlist → Submissions. Or query `POST /form-submission-service/v4/submissions/namespace/query` with filter `{formId, namespace: "wix.form_app.form"}`.
  - Update the page by uploading changed files to the same site ID with the Wix connector.
- **TikTok:** new business account (email hello.steadilyapp@gmail.com), connected via the Higgsfield connector, connector ID `b99ab96d-87b4-449d-8da9-e9716621491f`. Posting needs the publish-form widget, which only displays in clients that support MCP Apps (claude.ai / Claude desktop chat), not the Claude Code CLI.
  - Videos already uploaded to Higgsfield, base URL `https://d2ol7oe51mr4n9.cloudfront.net/user_3GQPQH9pqLg7UH26yzjdK6uKVIT/`:
    - 01 data loss `f3890fc8-ee1b-4101-8e17-31de94c9f82f.mp4` (**posted 2026-11-05**)
    - 02 protein `7623e180-9cdd-4a2f-8448-550c21060d27.mp4`
    - 03 life after `f58035e2-b6bc-4e81-a429-e915c0ebf71a.mp4`
    - 04 promises `5ed1a258-5508-46a5-8304-49f51c941611.mp4`
    - 05 reviews `beedcf29-d89e-4ceb-88d6-81f9ec67d647.mp4`
- **Brand email:** hello.steadilyapp@gmail.com

## Status (as of 2026-11-05)
- Landing page live; waitlist had 0 signups at last check (video 1 had just been posted; no Reddit posts yet).
- TikTok: Business-account switch was pending review. Profile picture set. Bio and website link may still need adding (text in `marketing/launch-posts.md` and below).
- Reddit: no account yet. Plan: create account → about 7 days of the owner's own genuine comments → post (schedule in `marketing/launch-posts.md`).

## Next steps
1. TikTok: one video a day (02 → 04 → 03 → 05). Captions are in `marketing/launch-posts.md`.
2. Reddit: owner creates the account and warms it up. Then post Post 1 in r/Zepbound, Post 4 in r/SideProject, Post 1 in r/Semaglutide and Post 3 in r/GLP1_Ozempic_Wegovy, spaced out.
3. Day 7 and day 14: pull signups by traffic source and compare against the go/no-go targets in `landing/README.md` (≥5% signup rate, ≥30% picking a paid plan, ≥300 signups in 2 weeks).
4. If Go: start the MVP build per `docs/steadily-product-spec.md`.

## Ground rules
- Never post on the owner's behalf without disclosure. Never write fake "community member" comments or farm karma. Never get around CAPTCHAs.
- No medical claims and no dose calculations. Label unbuilt features "coming soon".
- TikTok bio (≤80 chars): `The GLP-1 tracker that never holds your data hostage. Free core forever ↓`
- TikTok website link: `https://headless-wgtroynfext-jbakepresident-140e.wix-site-host.com/?utm_source=tiktok&utm_campaign=bio`
