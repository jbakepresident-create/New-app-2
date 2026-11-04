# Steadily landing page: demand test

A single-file landing page (`index.html`) for testing demand for **Steadily**, a GLP-1 tracker built around "your data is never held hostage". It collects waitlist emails plus four survey answers: journey stage, medication form, current tracker, and which plan they'd pick.

## Live on Wix (current setup)

The page is hosted on a Wix Headless site in the owner's Wix account, and signups go to Wix Forms.

| | |
|---|---|
| Live page | https://headless-wgtroynfext-jbakepresident-140e.wix-site-host.com |
| Wix dashboard | https://manage.wix.com/dashboard/f16ea781-2646-4b18-b8cf-0046d94a76aa |
| **Signups** (view + export CSV) | https://manage.wix.com/dashboard/f16ea781-2646-4b18-b8cf-0046d94a76aa/wix-forms/form/48fe3a7b-ba29-4d44-a1da-64b675ceb9d2/submissions |
| Edit the form's questions | https://manage.wix.com/dashboard/f16ea781-2646-4b18-b8cf-0046d94a76aa/wix-forms/form/48fe3a7b-ba29-4d44-a1da-64b675ceb9d2 |
| Site ID / form ID | `f16ea781-2646-4b18-b8cf-0046d94a76aa` / `48fe3a7b-ba29-4d44-a1da-64b675ceb9d2` |

How it works:
- `index.html` sets `wixFormId` in `STEADILY_CONFIG`. When that is set, it loads `js/waitlist-wix.js`.
- That script reads the form's live schema through Wix's form modules in `js/wix/`, which Wix installs on the site; they are not in this repo.
- It shows the form in the page's own design.
- The hidden **Traffic source** field is filled from `utm_source / utm_campaign / utm_medium / utm_content`, or from the referrer, so every signup shows where it came from.
- Questions edited in the Wix dashboard show up on the page with no code change. Keep the label "Traffic source" on that hidden field.
- Each signup also creates a contact in the site's Wix Contacts, through the email field.
- Free Wix plan limits: 4 forms, 10 fields per form.

To update the live page, upload the changed files to the same site ID with the Wix connector. Files to upload: `index.html`, `js/waitlist-wix.js`.

Still missing: a visitor counter, needed for the signup rate. Wix Headless static hosting doesn't add analytics on its own. Add a Cloudflare Web Analytics or Plausible snippet (step 2), or read visit numbers from each channel (Reddit post views, TikTok views).

## 0. Run it locally (no accounts needed)

```bash
python3 landing/server.py            # http://localhost:8080
```

`server.py` stands in for steps 1–3 below while you run the page on your own computer:

| Step | Hosted version | Local version |
|---|---|---|
| Signup form | Formspree | `POST /api/waitlist` saves to `landing/data/signups.csv`. Duplicate emails are ignored. |
| Visitor count | Plausible / Cloudflare | Each page view goes to `landing/data/visits.csv`, with its `utm_source` |
| Results | Formspree CSV + spreadsheet | **`http://localhost:8080/stats`**: live dashboard with Go/Maybe/Stop against the targets in step 5 |

It only needs Python's standard library. `landing/data/` is git-ignored because it holds emails. If `WAITLIST_ENDPOINT` is set in `index.html`, the local server leaves it alone.

For real traffic, the page still needs a public host (step 3) and a hosted form (step 1).

## 1. Connect the signup form (about 5 minutes)

The form sends JSON to whatever URL you put in `WAITLIST_ENDPOINT` near the bottom of `index.html`. Until you set it, the form shows "Signups aren't connected yet", so no signups get lost silently.

**Easiest option: Formspree** (free for 50 submissions a month, $10/mo after that)
1. Sign up at formspree.io and create a new form.
2. Copy the form endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
3. Paste it into `index.html`: `const WAITLIST_ENDPOINT = "https://formspree.io/f/abcdwxyz";`
4. Submit a test signup and check that it appears in Formspree. Export submissions as CSV when you analyse the results.

Any service that accepts a JSON POST also works: Formspark, Basin, a Google Apps Script web app, or a Supabase edge function.

Each submission includes: `email, stage, form, tracker, plan, utm_source, utm_medium, utm_campaign, utm_content, referrer, submitted_at`.

## 2. Count visitors (needed to compute the conversion rate)

Add a privacy-friendly analytics snippet where the `<!-- Analytics -->` comment sits in `<head>`. Either of these works:
- **Cloudflare Web Analytics**: free, no cookies.
- **Plausible**: paid, no cookies. The page already sends a `Signup` custom event to Plausible when it's installed.

## 3. Put it online (about 5 minutes)

Pick one:
- **Netlify Drop**: drag the `landing/` folder onto app.netlify.com/drop. You get a free URL instantly.
- **Cloudflare Pages** or **GitHub Pages**: point either at the `landing/` folder.
- **Custom domain**: buy something like `steadily.app` or `getsteadily.com`, after checking availability, and connect it. A real domain lifts trust and signup rates.

## 4. Run the test (2 weeks)

Use a separate UTM link per channel so you can see which audience converts, for example:
`https://yourdomain/?utm_source=reddit&utm_campaign=zepbound`

| Channel | How | Notes |
|---|---|---|
| Reddit GLP-1 communities (r/Zepbound, r/Semaglutide, r/Mounjaro, r/GLP1_Ozempic_Wegovy) | A genuine post: "I'm building a GLP-1 tracker that never paywalls your history. What would you need?" with the link | Read each subreddit's self-promotion rules first. Be transparent that you're the builder. |
| Facebook GLP-1 support groups | Same approach, with admin permission | Older audience who pay readily |
| TikTok / Instagram Reels | 3–5 short videos: "POV: your tracker update deleted 2 years of data" → app demo mockup | No paid spend needed at first |
| Small paid test (optional) | $100–200 on Meta ads targeted at GLP-1 interests | Gives a clean visitor → signup rate. Health ad rules apply; don't name drugs in ad copy. |

Don't name or disparage competitor apps in ads. The page's quotes are attributed only as "App Store review".

## 5. Read the results

| Metric | Go | Maybe | Stop |
|---|---|---|---|
| Visitor → waitlist signup | **≥ 5%** | 2–5% | < 2% |
| Signups choosing a paid plan in the survey | **≥ 30%** | 15–30% | < 15% |
| Total signups after 2 weeks | **≥ 300** | 100–300 | < 100 |

Also look at:
- **`tracker`**: how many signups currently use Shotsy, i.e. the size of the "refugee" opportunity.
- **`stage`**: what share are stepping down or stopped, i.e. demand for maintenance mode.
- **`form`**: pill vs injection mix, which affects onboarding.
- **`utm_source`**: which channel to double down on.

If the **Go** thresholds are hit, start the MVP build in `docs/steadily-product-spec.md` immediately. The Shotsy window is time-sensitive.

## Before going live: checklist
- [ ] `WAITLIST_ENDPOINT` set and a test signup received
- [ ] Analytics snippet added
- [ ] Name/domain availability checked; "Steadily" is a working name, so search the USPTO and the App Store before committing
- [ ] Add a simple privacy policy page and link it in the footer (Formspree stores emails)
