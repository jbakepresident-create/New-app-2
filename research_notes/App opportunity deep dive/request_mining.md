# Request Mining: What Apps Ordinary People Explicitly Ask For (as of Nov 2026)

> **Read first: coverage was badly limited this pass.** The research plan relied on Reddit, the HN Algolia API and Apple's iTunes Search API. All three were unreachable from this session:
> - `curl` to www.reddit.com, old.reddit.com, hn.algolia.com and itunes.apple.com was refused by the egress proxy (CONNECT 403).
> - WebFetch could not resolve news.ycombinator.com or hn.algolia.com.
> - WebSearch refuses `reddit.com` as a domain ("not accessible to our user agent").
> - The shared 200-call WebSearch budget for this turn ran out after about 14 of my queries.
>
> As a result, **no Reddit thread was read directly, no upvote or comment counts were collected, and no App Store rating, review count or price was verified.** The findings below come from:
> 1. Hacker News thread titles and comment snippets surfaced through WebSearch.
> 2. GummySearch's public stats page for r/SomebodyMakeThis, as summarized by WebSearch.
> 3. A prior research file in this repo (`research/app-ideas.md`), whose Reddit-roundup sources I could not re-open. Anything taken from it is labelled **[prior repo research, not re-verified]**.
>
> Quoted snippets came through a search summarizer, not from fetched pages, so treat their exact wording as **probable, not confirmed**. The frequency ranking requested in the brief **could not be produced to the required standard**. What follows is a provisional, evidence-tiered theme list plus a ready-to-run plan for finishing the job.

## Q1. Which request themes recur most across sources (grouped, counted, ranked)?

### Takeaway
A true frequency ranking from Reddit was not possible this pass. The available signal points to a few consumer themes that recur across independent sources:
- automating "life admin" (subscriptions, free trials, forgotten accounts, deadlines)
- screen-time and focus control that actually works
- reducing the household and family coordination load
- consolidating scattered personal data

Hacker News "what do you wish existed" threads lean heavily toward developer and self-hosted tools. They are a weak proxy for ordinary consumers.

### Cited Findings

**r/SomebodyMakeThis composition (third-party stats, date window not stated):**
- r/SomebodyMakeThis has about 102k members. Its most frequent topic keywords are "app" (79 posts), "idea" (47), "AI" (41), "tool" (24), "website" (19) and "music" (11). — [GummySearch r/SomebodyMakeThis stats](https://gummysearch.com/r/SomebodyMakeThis/)
- The most common post flair is "Software" (84 posts), followed by "physical product" (36). — [GummySearch](https://gummysearch.com/r/SomebodyMakeThis/)
- One example software request on that page is a *"Recipe App that gives you Just The Recipe"* (snippet surfaced via search). — [GummySearch](https://gummysearch.com/r/SomebodyMakeThis/)
- SomebodyMakeThis.org's "app ideas 2025" page lists parking finders, food donation, mood tracking and meditation as popular categories. The search summarizer noted this page is **not** derived from the subreddit's actual posts, so it is weak evidence. — [somebodymakethis.org/app-ideas-2025](https://somebodymakethis.org/app-ideas-2025)

**Hacker News "wish existed" threads (2024–2026).** Dates are approximate. Where the title doesn't say, I inferred them from the HN item-ID sequence: 45.5M ≈ Oct 2025, 48.5M ≈ Jun 2026.
- *"Ask HN: What is some software that you wish existed?"* (item 49259602, ≈ Aug 2026; the search tool reported its age as about 85 days). Requests surfaced:
  - an open hardware video streamer (an "open Roku/Apple TV") and an open alternative to AirPlay
  - an open-source Spotify-like music manager, similar to Zotero
  - a federated library system for books and media
  - *"a city map for cyclists that is updated and reviewed by other cyclists"*
  - *"a proxy that sits between my browser and the internet"* to record and annotate everything browsed
  - a browser extension acting as a spam filter for AI-generated content on Reddit-like sites
  - Python inside Outlook for custom mail rules
  - Mac macros via accessibility APIs; another commenter said this already exists as Keysmith

  Source: [HN 49259602](https://news.ycombinator.com/item?id=49259602)
- *"Ask HN: What non-existent app or tool would you pay for right now?"* (item 43772295, ≈ Apr 2025). Requests surfaced:
  - a **"Digital Life Concierge"** that audits subscriptions, passwords and cloud accounts, flags forgotten paid services and security risks, and lets you **close accounts "in one click"**
  - a focus app that *"could block time-wasters, play music, and nag"*, because **Apple Screen Time falls short** on fine-grained, context-aware rules
  - a computer-vision water turret to deter deer and raccoons

  Source: [HN 43772295](https://news.ycombinator.com/item?id=43772295)
- *"Ask HN: What do you wish existed? (October 2025)"* (item 45500937). The search summarizer described it as a small thread with a handful of replies. Requests surfaced:
  - *"A TurboTax-quality tax filing service for American expats with American investme[nts]…"* (comment 45535565), with stated willingness to pay **$1–2k/year**
  - a robot that weeds without being moved by hand
  - a way to trim a local print newspaper down to only the topics you care about
  - a usable daily-driver Genode OS
  - a working Memex

  Sources: [HN 45500937](https://news.ycombinator.com/item?id=45500937); [HN 45535565](https://news.ycombinator.com/item?id=45535565)
- An HN "What are you working on" post from 2026 describes a builder making *"a tiny iOS app for answering 'which of my friends is free to talk right now?'"*. This is supply responding to a social-coordination need, not a request. The search cited both the June 2026 and Nov 2025 threads and did not say which one holds the post. — [HN 48528779](https://news.ycombinator.com/item?id=48528779) / [HN 45869146](https://news.ycombinator.com/item?id=45869146)

**Older but thematically relevant HN threads:**
- One commenter wanted one app that syncs bookmarks, notes, passwords and files across devices (*"a tool that seamlessly organizes my digital life across devices"*). — [HN 37203948, ≈ 2023](https://news.ycombinator.com/item?id=37203948)
- Revivals of discontinued products (Google Reader, Winamp, Microsoft Money) were among the most frequent wishes in a "discontinued product" thread. — [HN 18225760 (2018)](https://news.ycombinator.com/item?id=18225760)
- Other 2024–2026 wish threads exist but skew developer: "What developer tool do you wish existed in 2026?" ([HN 46345827](https://news.ycombinator.com/item?id=46345827)), "What desktop utility apps do you wish existed?" ([HN 42197699, ≈ Nov 2024](https://news.ycombinator.com/item?id=42197699)), and "What software product do you wish existed that you'd use?" ([HN 42599446, ≈ Jan 2025](https://news.ycombinator.com/item?id=42599446))

**Prior repo research [not re-verified]:**
- r/personalfinance and r/frugal "reportedly ask for a 'free-trial watchdog' almost every month". A "receipt-to-warranty reminder" is described as another repeat request. — [ReachFront Reddit roundup 2026](https://reachfront.ai/blog/app-ideas-from-reddit); [StealWhatWorks](https://stealwhatworks.com/blogs/news/reddit-app-ideas-people-requesting-now); [IdeaFast app pains](https://www.ideafast.pro/pains/apps) (all cited in `research/app-ideas.md`)
- Other themes with strong demand in that research:
  - ADHD-friendly "forgiving" habit and body-doubling apps
  - screen-time and doomscroll blockers
  - aging-parent caregiving coordination
  - home maintenance reminders
  - pantry and meal planning ("very crowded")
  - school and family email overload
  - medical-bill checking

  Source: `research/app-ideas.md`, citing [Unstar screen-time ranking 2026](https://unstar.app/blog/opal-forest-freedom-one-sec-jomo-screen-time-apps-ranked-2026), [DEV: why medication/ADHD apps fail](https://dev.to/wellnestapp/why-most-medication-apps-fail-adhd-brains-3hea), [Cozi reviews (JustUseApp)](https://justuseapp.com/en/app/407108860/cozi-family-organizer/reviews), and [The Spinoff on mental load](https://thespinoff.co.nz/society/12-09-2026/can-you-actually-outsource-your-mental-load-i-desperately-tried-to)

**Low-yield channels this pass:**
- Quora: a search for "is there an app that" everyday-life questions returned only two off-target threads (apps that pay for answers; animating drawings). — [Quora 1](https://www.quora.com/Is-there-an-app-that-pays-you-for-answers-to-questions?top_ans=1477743735799131), [Quora 2](https://www.quora.com/Is-there-an-app-that-brings-drawings-to-life)
- X/Twitter: a search for "someone please make an app" and "why is there no app" returned no matching tweets. — (no relevant results)

### Inferences

**Provisional theme ranking.** This is ranked by evidence breadth: the number of *independent source types* where the theme appeared. It is **not** a Reddit frequency count. "Instances" counts distinct request mentions I actually saw this pass, plus prior-repo mentions shown separately.

| Rank | Theme (consumer, everyday-life) | Instances seen this pass | Prior-repo signal | Evidence tier |
|---|---|---|---|---|
| 1 | Life-admin autopilot: forgotten subscriptions, free-trial conversions, accounts, renewals, returns and warranties | 1 HN (2025, pay-for thread) | Yes (roundups and surveys; "almost every month" claim) | A (multi-source) |
| 2 | Screen-time / focus blocker with granular, context-aware rules that can't be bypassed | 1 HN (2025, pay-for thread) | Yes (Unstar 2026; Opal ~$100/yr) | A |
| 3 | Household / family mental load, including the school-communication flood | 0 | Yes (surveys, Cozi reviews, Spinoff) | B (prior repo only) |
| 4 | ADHD-friendly, low-setup habit / task / medication tools | 0 | Yes (DEV article) | B |
| 5 | One hub for scattered personal data (bookmarks, notes, passwords, files; "Memex") | 3 HN (2023, Oct 2025, ≈ Aug 2026) | No | B (HN-skewed) |
| 6 | "Just the recipe" / clutter-free recipe capture | 1 (GummySearch example) | Pantry / meal planning "very crowded" | B |
| 7 | Social coordination: which friends are free now | 1 HN (builder, 2026) | No | C |
| 8 | Personalized, trimmed local news digest | 1 HN (Oct 2025) | No | C |
| 9 | Filter for AI-generated "slop" in social feeds | 1 HN (≈ Aug 2026) | No | C |
| 10 | Crowd-edited cycling safety map | 1 HN (≈ Aug 2026) | No | C |
| 11 | Expat tax filing (niche, high willingness to pay) | 1 HN (Oct 2025) | No | C |
| 12 | Aging-parent caregiving coordination | 0 | Yes | B |
| 13 | Home maintenance reminders | 0 | Yes | B |
| 14 | Medical-bill error checking | 0 | Yes | B |
| 15 | Music tools (11 r/SomebodyMakeThis posts keyword-tagged "music") | GummySearch count | No | C (no detail) |

Notes on the ranking:
- Some HN wishes are out of scope for consumer iOS: open hardware streamers, self-hosted Heroku, codebase heatmaps, and home robots (laundry folding, weeding, pest turret). The robot requests do show a recurring "do my chores" desire.
- The GummySearch keyword counts suggest "AI" is now a dominant framing in r/SomebodyMakeThis (41 posts tagged). Requesters increasingly expect AI to remove manual input. This matches the prior repo finding that "the winning apps in 2026 remove the input step".

### Gaps
- **No direct Reddit data.** The brief targeted r/SomebodyMakeThis, r/AppIdeas, r/lifehacks, r/NoStupidQuestions, r/iphone, r/apple, r/ios, r/Productivity, r/Frugal and r/AskReddit. None could be fetched or searched, so per-theme Reddit instance counts, upvotes, comment counts and post dates are all missing. These are the core of the requested frequency ranking.
- **No engagement data for HN threads** (points and comment counts), because pages could not be fetched.
- **Product Hunt discussions not reached.** The search was refused after the budget ran out.
- **Quotes are search-summarizer snippets**, not verified page text.
- **Ready-to-run plan to finish this.** It needs the network allowlist to include www.reddit.com, hn.algolia.com, news.ycombinator.com and itunes.apple.com, plus a fresh search budget:
  1. `https://www.reddit.com/r/SomebodyMakeThis/top.json?t=year&limit=100` (and `&after=` pagination); repeat for r/AppIdeas.
  2. `https://www.reddit.com/r/{lifehacks,NoStupidQuestions,iphone,apple,ios,productivity,Frugal}/search.json?q=%22is+there+an+app%22&restrict_sr=1&sort=top&t=year&limit=100`
  3. `https://www.reddit.com/search.json?q=%22I+wish+there+was+an+app%22&sort=top&t=year&limit=100`, plus the variants "why is there no app", "somebody make an app", and "I'd pay for an app".
  4. `https://hn.algolia.com/api/v1/search?query=wish%20existed&tags=story&numericFilters=created_at_i>1704067200`, then `tags=comment,story_<id>` for each of items 49259602, 45500937, 43772295, 42599446 and 42197699, to get every comment with points.
  5. Tag each post to a theme, count instances, and sum the score of the 2024–2026 posts.

## Q2. Which requests carry emotional intensity (money lost, time wasted, stress) and explicit willingness to pay?

### Takeaway
The strongest emotional and willingness-to-pay signals found are around **money leaking through forgotten subscriptions and trials**, and **loss of control over attention** (screen time). Both appeared in an HN thread framed explicitly around what people "would pay for". One niche request (expat taxes) carried the highest stated price, $1–2k/year.

### Cited Findings
- The April 2025 HN thread itself asks *"What non-existent app or tool would you pay for right now?"*. Every answer in it is therefore a willingness-to-pay statement. The top surfaced answers were the subscription/account "Digital Life Concierge" and a stricter focus/screen-time tool. — [HN 43772295](https://news.ycombinator.com/item?id=43772295)
- The October 2025 HN thread asked respondents what they would pay. The expat-tax requester named **$1–2k per year**. — [HN 45500937](https://news.ycombinator.com/item?id=45500937); [HN 45535565](https://news.ycombinator.com/item?id=45535565)
- The screen-time request is framed as frustration with an incumbent: Apple's Screen Time "falls short" on fine-grained rules. — [HN 43772295](https://news.ycombinator.com/item?id=43772295) (as summarized by search)

**Money-loss intensity [prior repo research, not re-verified]:**
- About 48% of Americans have forgotten to cancel a free trial and been charged. — [CableTV.com survey](https://www.cabletv.com/news/streaming-free-trial-cancellation-survey)
- One survey puts the cost at about $45/month among those affected. — [Cord Cutters News](https://cordcuttersnews.com/?p=256654)
- Hidden subscription fees survey. — [BestMoney](https://www.bestmoney.com/credit-cards/learn-more/hidden-subscription-fees-survey)
- Nearly half of insured working adults got a bill for something they thought insurance covered (Commonwealth Fund, ~5,600 adults). — [HealthDay](https://www.healthday.com/health-news/general-health/common-medical-billing-errors-keep-many-americans-from-care-report)

**Stress and mental-load intensity [prior repo research, not re-verified]:**
- 56% of parents say they get too many school emails, and 22% can't find the one they need. — [iHeart/WCOS](https://975wcos.iheart.com/featured/morning-rush/content/2024-08-29-schools-are-overwhelming-parents-with-emails)
- Family-organizer apps are criticized because *"you have to write it down, tell it, forward emails… this adds a layer to your mental load."* — [The Spinoff](https://thespinoff.co.nz/society/12-09-2026/can-you-actually-outsource-your-mental-load-i-desperately-tried-to); [Cozi reviews](https://justuseapp.com/en/app/407108860/cozi-family-organizer/reviews)

### Inferences
- The requests that combine **concrete, recurring money loss** with a **clear trigger** (a trial converting, a return window closing, an unexpected bill) are best placed for consumer willingness to pay. They fit a "pays for itself" pitch.
- Attention and screen-time requests carry frustration and stated willingness to pay. They fight iOS platform limits, and per prior repo research the market already has a ~$100/yr incumbent (Opal).
- The highest stated price (expat taxes, $1–2k/yr) is a niche, regulated, non-mobile-first service. It is a poor fit for a consumer iOS app.

### Gaps
- No "I'd pay for this" counts by theme from Reddit. That would need comment-text mining (search for "I'd pay", "take my money", "shut up and take") once Reddit is reachable.
- No sentiment scoring was possible: no full-text corpus was collected.

## Q3. Which recurring requests are already solved but poorly marketed (discovery gap) vs genuinely unsolved, and what exists for the top themes?

### Takeaway
At least two requests surfaced this pass already have commercial answers that the requester didn't know about or hadn't tried: subscription and account auditing, and Mac macros (Keysmith). This is direct evidence of a discovery gap. For life-admin deadlines, focus control and family coordination, prior repo research suggests the problem is **"exists but requires manual input or can't see the event in time"**, rather than "doesn't exist". **App Store ratings, review counts and prices for incumbents could not be verified this pass** (itunes.apple.com blocked, search budget exhausted).

### Cited Findings

**Discovery gap, direct evidence:**
- On the "Digital Life Concierge" request, a reply says ads for **at least two different companies** targeting exactly this problem already exist, though that commenter had not tried them. — [HN 43772295](https://news.ycombinator.com/item?id=43772295)
- A Mac macro-via-accessibility-API request drew a reply that it **already exists as Keysmith**. — [HN 49259602](https://news.ycombinator.com/item?id=49259602)

**Exists but structurally insufficient [prior repo research, not re-verified]:**
- **Subscriptions and trials.** Rocket Money and other bank-linked trackers "see a charge only after it happens", so they can't warn before a trial converts. Their reviews include billing and cancellation complaints. — [Rocket Money Trustpilot](https://ca.trustpilot.com/review/rocketmoney.com?page=2)
- **Returns, warranties and renewals.** "Dozens of indie" trackers each cover one deadline type, need manual entry, and have few ratings. Example: [Return Radar (App Store)](https://apps.apple.com/ph/app/return-radar/id6761351819)
- **Habit and ADHD apps.** These fail because of setup and logging friction; people use them for 1–3 weeks and stop. — [DEV](https://dev.to/wellnestapp/why-most-medication-apps-fail-adhd-brains-3hea)
- **Screen time.** iOS Screen Time API limits mean bypass complaints are hard to fix, and Opal prices at about $100/yr. — [Unstar 2026](https://unstar.app/blog/opal-forest-freedom-one-sec-jomo-screen-time-apps-ranked-2026)
- **Family and school apps.** Existing family organizers and school-message assistants (Cozi; Maple, Ohai and Carly named as competitors) are criticized for adding input work. — [Cozi reviews](https://justuseapp.com/en/app/407108860/cozi-family-organizer/reviews); [The Spinoff](https://thespinoff.co.nz/society/12-09-2026/can-you-actually-outsource-your-mental-load-i-desperately-tried-to)
- **Pantry and meal planning.** Described as "very crowded", with dozens of AI pantry apps launched in 2026 that got almost no traction. — `research/app-ideas.md` (source not individually linked there)
- **Medical bills.** Several funded startups are active (FairMedBill, MedBillAI, Avelis, Better). — [FairMedBill launch](https://www.pr.com/press-release/961336)

### Inferences

**Provisional "solved vs unsolved" classification.** For the top themes, the candidate incumbents below come from background knowledge or prior repo notes. They are **leads to verify, not verified facts**. No ratings, review counts or prices are claimed.

| Theme | Status (provisional) | Candidate incumbents to verify on the App Store | Likely reason requesters stay unsatisfied |
|---|---|---|---|
| Life-admin / subscription / trial / deadline tracking | Partially solved | Rocket Money, Bobby, Return Radar | Bank-linked tools act too late; single-purpose tools need manual entry; unaware of options (HN reply) |
| Screen-time / focus control | Partially solved | Opal, one sec, Jomo, Freedom, Forest | iOS API limits allow bypass; price (~$100/yr Opal); not granular or context-aware enough |
| Family / school coordination | Partially solved | Cozi, Maple, Ohai, Carly, TimeTree | Adds input work instead of removing it |
| ADHD habit / medication | Crowded | Tiimo, Structured, Medisafe (verify) | Setup friction, streak punishment, high churn |
| "Just the recipe" | Likely solved (discovery gap) | Paprika, Mela, Pestle, Crouton (verify) | Unaware; paid upfront price; browser reader modes not known |
| Unified personal data / Memex | Genuinely unsolved for mainstream users | (no clear consumer leader known) | Fragmented ecosystems; privacy |
| Friends-free-now coordination | Thin supply | Howbout and similar (verify) | Network effects: needs friends to adopt |
| Personalized local news digest | Partially solved | Ground News, Particle (verify) | Local coverage gap |
| AI-content filter for social feeds | Unsolved (new 2025–26 need) | none known | Platform access limits |
| Crowd-edited cycling map | Partially solved | Komoot, Ride with GPS, OpenStreetMap-based apps (verify) | The OSM wiki model exists, but isn't packaged as "report a dangerous stretch"; discovery gap |
| Expat taxes | Solved by services | Expat tax-prep firms (verify) | Not "TurboTax-quality" self-serve; niche |
| Caregiving coordination | Weak competitors (prior repo) | Medisafe, CaringBridge, Lotsa Helping Hands (verify) | Sensitive data; fragmented |
| Home maintenance | Partially solved | HomeZada, Centriq (verify) | Low frequency; poor subscription fit |
| Medical-bill checking | Emerging, funded competition | FairMedBill, MedBillAI | Infrequent use; trust and liability |

Overall pattern:
- The modal reason a recurring request persists is **not** that no app exists.
- The real reasons are a mix of:
  - (a) discovery gaps, where people ask before searching, or don't trust small apps;
  - (b) apps that still demand **manual input**;
  - (c) platform limits, from iOS Screen Time or bank data arriving after the fact.
- This favours AI-driven, zero-input versions of already-validated categories over brand-new categories.

### Gaps
- **No App Store data was verified.** That means no ratings, review counts, prices, Android-only status or last-update dates for any incumbent. Run `https://itunes.apple.com/search?term=<name>&entity=software&country=us&limit=5` for each candidate above and record `averageUserRating`, `userRatingCount`, `price`/`formattedPrice` and `currentVersionReleaseDate`.
- **The "why still unsatisfied" reasons are only partly sourced.** They come from prior repo research and two HN replies, not from requester comment threads (e.g. "I tried X but…"). The Reddit comment mining in the Q1 plan would close this.
- **Shutdown status of possible incumbents was not checked.** Some older apps in these categories may have shut down, and that alone could drive repeat requests.
