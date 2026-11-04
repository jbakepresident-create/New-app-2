# App Store Review Update — What 17,881 Real Reviews Changed

*Update to "App opportunity deep dive", 4 Nov 2026*

## What was done

With App Store access enabled, I pulled the **most recent reviews (up to 500 per app) for 48 competitor apps** directly from Apple's public US review feed: **17,881 reviews, 5,651 of them 1–3★**. They cover the competitors of the top five ideas plus the two runners-up (phone blockers, household chores). Each 1–3★ review was tagged by complaint type using keyword matching, so the percentages are approximate. I then read the actual reviews behind every finding below.

Raw data: `research_data/appstore/reviews/` (one JSON file per app). Theme tables: `research_data/appstore/review_themes.md`.

Reddit could not be added: Reddit blocks unofficial access from cloud servers, and the official API key setup did not authenticate.

---

## The headline: ranking changes

| Rank | Idea | Before | After reviews | What changed |
|---|---|---|---|---|
| **1** | **GLP-1 companion** | #2 (50/70) | **#1** | The market leader just alienated its free users, and that window is open now |
| **2** | **Watch Pacer** (Apple Watch energy pacing) | #3 (48/70) | **#2** | Visible's own users are asking for exactly this, in their own words |
| **3** | **ADHD "Start Now"** | #1 (53/70) | **#3** | The "cozy companion" part is already owned by beloved apps; the real complaint is billing traps |
| 4 | Talk-to-quote for trades | #4 | #4 | Pain confirmed, but it's about price creep and fees, not quoting speed |
| 5 | Phone blocker with a physical/friend "key" | Not ranked | **#5 (new)** | Opal's users are in revolt, and a physical barrier is what neurodivergent users love |
| — | Shared pet medication log | #5 | Dropped | Existing apps (DogLog, DogNote) already satisfy shared logging; the market is small |

---

## 1. GLP-1 companion — now #1, with a time-limited opening

**The new evidence**
- **Shotsy, the category leader (34K ratings), removed its free version in late October 2026.** Users report being sent back to onboarding and **losing months or years of data**. In October, 19 of its 23 one- and two-star reviews were about data loss or the forced paywall:
  - *"I've been using the free version of the Shotsy app for two years… the free version is no longer available and it's only a paid app."* (1★, Nov 2)
  - *"I lost over a year's worth of data and information to provide to…"* [my doctor] (1★, Oct 22)
  - *"With the latest update all my information was deleted and 7 months of data gone."* (1★, Oct 21)
- **MeAgain (40K ratings) shows the winning formula.** Only 11% of its recent reviews are 1–3★. Users love protein, fiber and water tracking, photo food scanning, a capybara companion, and a generous free tier: *"Most other trackers put so many features behind a paywall. MeAgain has so much to offer even free users."*
- **App Store risk confirmed.** In October 2026, Apple made Pep AI remove dose-unit calculators. Its users are furious (*"Apple made them remove Units from doses, the most useful feature of the entire app"*). **Any dose math is off-limits.** Log what the doctor prescribed; never calculate.
- **The "off-ramp/maintenance" angle is not what reviewers talk about**: only about 4% of low-star reviews mention it. People on the drug care about protein, logging speed, side effects and keeping their data. Maintenance should be a feature, not the pitch.

**Sharpened concept:** *"The GLP-1 tracker that never holds your data hostage."*
- Free core: shot log, protein/water/fiber, weight.
- One-tap **import from Apple Health** and a CSV import for Shotsy refugees.
- Export anytime.
- Paid tier: AI photo food logging, doctor-visit PDF, and a "life after the shot" maintenance mode.
- No dose calculators.

**Why #1:** it has the biggest market (about 12% of US adults), the best category economics (Health & Fitness), proven willingness to pay, and an incumbent that just broke trust. **The window is weeks, not months.**

## 2. Watch Pacer — moved up: users are asking for it directly

Visible, the leading pacing app (3.7K ratings, only 11% recent low-star), is well liked. But its users repeatedly ask to use the Apple Watch they already own instead of buying Visible's armband:
- *"I'd love to be able to demo the app with my new apple watch which has continuous monitoring! Until then I'm not going to wear a second contraption. Let me know when this changes and if the system works **I'll throw money at you!**"* (2★, Oct 15)
- *"I have to use the tachymon app with my Apple Watch"* to get continuous exertion alerts (4★, Sept 19)
- *"No Apple Watch integration, nothing you can glance at"* (2★, Sept 23)
- Cost is a recurring barrier: *"the cost of this app's monthly service plus the cost of the wearable really feels out of reach"* (4★, Aug 5)

Welltory, the general heart-rate app, shows the downside: 52% of its recent reviews are 1–3★, mostly about price and billing.

**Concept unchanged:** "Your Apple Watch is your pacing band." Alerts at a personal heart-rate threshold, an energy budget, a doctor report, and an honest price.

## 3. ADHD "Start Now" — moved down: the companion part is taken

- **Companion apps already win here.** Finch has 771K ratings at 4.95★, with only 12% recent low-star. Hank Green's Focus Friend has 10K ratings at 4.83★, with only 6% low-star. Users say Focus Friend *"feels like body doubling when I look down and see my bean knitting."*
- **"Can't get started" is only about 11% of low-star complaints, and body doubling barely appears.** The dominant complaints are **price/paywall (30%) and billing/cancellation traps (20%)**:
  - Inflow: 61% of recent reviews are 1–3★, half about billing. *"They just charged me $199.00 yesterday and I can't get a refund."*
  - A telling ADHD-specific complaint: *"I committed to it for a day and forgot it was there"*, then got charged for the trial.
- **What would still work:** an ADHD-safe business model as the differentiator. That means no surprise annual charge, a trial-end warning built in, and one-tap cancel, paired with the "one tiny first step" button. It's a real angle, but weaker than it looked.

## 4. Talk-to-quote for trades — confirmed pain, different emphasis

Across 1,352 low-star reviews of Jobber, Joist, Invoice2go, Housecall Pro, Invoice Simple and Square, the top complaints are:
- invoices, payments and fees (45%)
- price/paywall (22%)
- unresponsive support (22%)
- billing traps (18%)

Typical reviews:
- *"Every time there's an update, something is taken away… then the limit on quantity of invoices"* (Joist 1★)
- *"After I cancelled the subscription… I was unable to access or view the invoices and bids I had already paid for"* (Joist 1★)
- *"they will not honor your paid unlimited plan mid term"* (Invoice Simple 1★)
- *"too complicated for small businesses"* (Housecall Pro 3★)

Nobody is asking for AI voice quoting. Tradespeople want **fair, stable pricing, their data kept, and simplicity**. Voice-to-quote is a nice demo, but "honest, simple, yours" is the positioning.

## 5. NEW: Phone blocker with a physical or friend "key"

- **Opal is in trouble:** 71% of its last 500 reviews, all since July 2026, are 1–3★. Most blame a redesign: *"after a recent update I find it unusable"*, *"The new user interface broke the app."*
- **The physical-barrier model is loved:** *"I've always struggled with bypassing app blockers but putting the physical barrier there is life-changing"* (Brick 5★, neurodivergent user).
- **Free competitor:** ScreenZen is free and well liked.
- **The gap:** a Brick-style experience without buying $59 hardware. Unlock with a cheap NFC sticker, a place, or a friend's approval, plus honest pricing aimed at Opal's frustrated users.
- **Risk:** iOS Screen Time API bugs. They hit everyone; 15% of low-star reviews mention them.

## Dropped: shared pet medication log

DogLog and DogNote users are mostly happy. Shared "who fed the dog / gave the meds" logging already works for them (*"Necessity for multiple caregivers"*). Review volume is tiny (DogLog: 148 reviews in 9 years), which points to a small market.

## Also noted: household chores

The top complaint about Sweepy and Tody is that **sharing chores with a partner requires paying**: *"you can only use it for free if it's just for your own tasks which kind of sucks and defeats the purpose."* A chore app with free partner sharing would win goodwill, but it undercuts the obvious way to charge.

---

## The pattern across all 48 apps

The most common reason for a bad review in every category is the **business model, not missing features**:
- paywalls on features that used to be free
- trial-to-annual billing traps
- data lost or locked when an update or cancellation hits
- support that doesn't answer

Whichever idea we build, **"generous free core, honest billing, export anytime, never take features away"** is a real competitive weapon, not just a nicety.

## Recommended next step

Run the **GLP-1 test first**, because its window is closing:
1. A landing page: "Your GLP-1 data, never held hostage — import from Apple Health, free core forever."
2. Share it where Shotsy refugees are looking.
3. Target: 5%+ waitlist signups.

Run a **TestFlight build of Watch Pacer** in parallel. It's a small, focused build with users already asking for it.
