# Consumer pain points and unmet app needs: Productivity, To-dos, Calendars, Notes, Email, Focus/ADHD, Habits, Screen Time, Students, Language Learning, Reading, Career/Job Search (as of Nov 2026)

> **Method and hard limits (read first).** In this session the network allowlist blocked `itunes.apple.com` (the iTunes Search API and the customer-reviews RSS), `apps.apple.com`, `reddit.com`/`old.reddit.com`, `api.pullpush.io`, and third-party review mirrors such as `appshunter.io`. Both curl and WebFetch got 403 or DNS failures. **No raw App Store reviews or Reddit threads could be pulled.** After four batches of WebSearch (about 20 queries), the turn's shared web-search budget ran out ("limit: 200 WebSearch calls per turn, shared by every agent"). Everything below therefore comes from WebSearch result summaries, which often paraphrase. Fragments in quotation marks are the wording as surfaced by search; most lack a review date and could not be checked against the original. Several sources are vendor or affiliate blogs, flagged where relevant. To fill the missing verbatim-review layer, the user must allow `itunes.apple.com` and `reddit.com` in the session network settings, or raise `CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION`, and re-run.

---

## Q1. What do 1–3 star reviews of the leading productivity, focus and learning apps complain about most?

### Takeaway
In the evidence that surfaced, the dominant complaint across planners, to-do apps, blockers and AI tutors is **monetization rather than missing features**: basic features moved behind paywalls, price rises, removed lifetime plans, unclear pricing, and billing/refund friction. The second theme is **reliability**: sync, blockers that silently stop working, regressions after updates. Feature gaps come third. In the incumbents' own reviews, the opening for a newcomer is mostly about trust and pricing, plus doing one job reliably.

### Cited Findings
**Todoist** (to-do)
- Todoist raised prices in **December 2025**, the first increase since 2022. Pro is now **$5/mo billed annually ($60/yr) or $7/mo billed monthly**. — [Morgen](https://www.morgen.so/blog-posts/todoist-pricing); [Ellie Planner](https://ellieplanner.com/productivity-copilot/todoist-pricing) (both vendor or competitor blogs)
- A review roundup reports that long-time subscribers on **Google Play and Trustpilot** (not the App Store) felt "pushed toward paying for AI features they never asked for, just to keep basic things like reminders and more than 5 projects." The exact article could not be isolated; it surfaced alongside [Lifestack](https://lifestack.ai/blog/todoist-review) and [Hackceleration](https://hackceleration.com/labs/review/todoist).
- Price criticism tends to come from people who like the app but "cannot see enough distance between the generous free plan and a $60 annual subscription." — same roundup set ([Hackceleration](https://hackceleration.com/labs/review/todoist))
- A third-party snapshot from July 2026 shows the US App Store listing at **4.8/5 from 127,450 ratings**. The source within the result set was not isolated; treat it as approximate. — [Todoist review roundups via search](https://lifestack.ai/blog/todoist-review)

**Structured** (visual daily planner, popular with ADHD users)
- Reviewers call **recurring tasks behind the paywall** "the sharpest complaint." One reviewer deleted the app because "If you want to use the structured templates you have to have premium." — [AppSupports negative reviews](https://appsupports.co/1499198946/structured-day-planner/negative-reviews); [JustUseApp](https://justuseapp.com/en/app/1499198946/structured-day-planner/reviews); [Saner.ai review](https://blog.saner.ai/structured-review/) (competitor blog)
- A Play Store reviewer: "Features i consider absolutely basic are locked behind the subscription, like notifications." They also complained there is no way to test full features before paying. — [Google Play listing](https://play.google.com/store/apps/details/Structured_Daily_Planner?id=io.unorderly.structured&hl=en_GB)
- The lifetime tier was **$29.99 in June 2024** and "has more than tripled." Quoted current US pricing is **$6.99/mo, $29.99/yr, $99.99 lifetime**; not verified against Apple. — [HabitBox review](https://habitbox.app/blog/structured-app-review) (competitor blog)
- Other complaints: "you can't modify calendar events within the app"; "Great App but with iCloud sync issues"; the Mac app crashes; Android lacks Reminders import, Replan and duplicate days; there is no sharing or collaboration. — [Saner.ai](https://blog.saner.ai/structured-review/); [WorldsApps](https://worldsapps.com/reviews-structured-day-planner)

**Tiimo** (ADHD visual planner, Apple's 2025 iPhone App of the Year)
- Tiimo was named **iPhone App of the Year** in the 2025 App Store Awards. — [Daring Fireball](https://daringfireball.net/2025/12/2025_app_store_award_winners); [Tiimo](https://www.tiimoapp.com/resource-hub/tiimo-winner-2025-app-store-awards)
- Web pricing is **$42/yr ($3.50/mo) or $10/mo**. — [Daring Fireball](https://daringfireball.net/2025/12/2025_app_store_award_winners)
- Listings show **3M+ downloads worldwide**; a Japanese App Store mirror shows **37K+ ratings**. — [MWM mirror](https://mwm.ai/ja/apps/tiimo-ai-planner-to-do/1480220328); [Screenwise](https://screenwiseapp.com/media/tiimo-app)
- Complaints: the **lifetime plan disappeared** just as one user was about to buy it ([Tiimo feedback board](https://tiimo.nolt.io/2439)); subscription cost "isn't apparent before signing up" ([Healthify NZ](https://healthify.nz/apps/t/tiimo-app)); pricing "isn't available anywhere on the app description or support site" ([Apptail](https://apptail.io/app/tiimo-to-do-list-ai-planner-nYs/united-states)); the app is "free to download but then requires payment." The developer replied that a 14-day trial is offered. — [Apptail](https://apptail.io/app/tiimo-to-do-list-ai-planner-nYs/canada)
- One aggregator reports a 4.5 average from 3,715 ratings; the storefront is unclear. A Trustpilot 1-star cites the lack of an Android app. — [Trustpilot](https://ca.trustpilot.com/review/tiimo.dk)
- A claim of "500,000 users, 50,000 paying subscribers" appears on one low-quality site only; **do not rely on it**. — [valhalla-ai-launchpad](https://valhalla-ai-launchpad-nordic.pages.dev/companies/tiimo/)

**Opal** (screen-time blocker)
- Annual plan is about **$99.99**, and reviewers compare it unfavourably with free iOS Screen Time. — [Unstar ranking 2026](https://unstar.app/ko/blog/opal-forest-freedom-one-sec-jomo-screen-time-apps-ranked-2026)
- Bypass complaints: a user can switch Opal off in Screen Time settings ([Make Headway](https://makeheadway.com/blog/opal-app-review/)); a Mac bypass bug has been "unfixed since March 2025" and Deep Focus can be beaten by logging out ([TryHugo](https://www.tryhugo.app/blog/opal-app-review-2026), competitor); blocking "relies on iOS content restrictions, which can be bypassed" ([HabitDoom](https://habitdoom.com/blog/best-apps-reduce-screen-time), competitor). **Conflicting:** [Floviu](https://floviu.com/blog/opal-app-review/) calls Deep Focus hard to bypass.
- **August 2026** review excerpts on an aggregator: a new update "made the app harder to use" with extra wait screens and freezes, and "daily limits stopped working." The same site claims it analysed **1,184 complaints** across app blockers (unverified single source). — [AppImp app-blocker market](https://appimp.app/markets/app-blocker)
- A quoted anonymous review says Screen Time permission was lost after an iOS update and blocking silently stopped for a week. — [Unstar](https://unstar.app/ko/blog/opal-forest-freedom-one-sec-jomo-screen-time-apps-ranked-2026)
- Ratings: the App Store listing claims 4.8; third parties report 4.7 on iOS and 4.0 on Google Play. — [App Store listing](https://apps.apple.com/app/opal-screen-time-for-focus/id1497465230); [Unstar](https://unstar.app/ko/blog/opal-forest-freedom-one-sec-jomo-screen-time-apps-ranked-2026)

**Praktika** (AI language tutor); Speak
- Trustpilot reviewers report repeated charges after support said the issue was fixed, replies "from automated bots," and a confirmed refund still pending while Apple refused one. — [Trustpilot IE](https://ie.trustpilot.com/review/praktika.ai)
- App Store reviewers say they couldn't cancel an annual plan mid-year and got no refund after two months; a refund request made the day after the trial ended went unanswered. — [App Store (IL) reviews](https://apps.apple.com/il/app/praktika-ai-language-tutor/id1624701477?see-all=reviews)
- Product complaints: poor pronunciation feedback, weak level-gauging, the tutor switching into Japanese ([Trustpilot IE](https://ie.trustpilot.com/review/praktika.ai)); conversations feel "robotic or repetitive" ([LingoStar](https://lingostar.ai/blog/praktika-review/), competitor). Trustpilot is about **3.7** while the App Store rating is high ([LingoStar](https://lingostar.ai/blog/praktika-review/)).
- Speak is listed at about **$18–20/mo**, less if billed annually. — [Make Headway](https://makeheadway.com/blog/praktika-review/)

**Quizlet** (study)
- Learn mode, Test mode and Expert Solutions are now premium; Quizlet Plus is listed at **$35.99/yr**. "Users largely complain about the recent paywall, saying they had built study habits around the free version." — [Words on Repeat](https://wordsonrepeat.com/blog/quizlet-paywall-2026-free-alternatives) (competitor); [MyEngineeringBuddy](https://www.myengineeringbuddy.com/blog/quizlet-reviews-alternatives-pricing-offerings/)
- A **1.4/5 Trustpilot** score is reported but unverified. Sources disagree on when the paywall tightened: from 2022 through 2024 per one source, 2026 for Learn mode per another. — [MyEngineeringBuddy](https://www.myengineeringbuddy.com/blog/quizlet-reviews-alternatives-pricing-offerings/); [Words on Repeat](https://wordsonrepeat.com/blog/quizlet-paywall-2026-free-alternatives)

**Teal / Huntr / Simplify** (job-search tools)
- **Teal** Trustpilot figures conflict: 3.0/5 from 9 reviews (about two-thirds 1-star, billing complaints) per [Resumly](https://resumly.ai/alternatives/teal-alternatives), versus **2.1/5 from 110 reviews** citing wrong form filling and poor support per [FlashFire](https://www.flashfirejobs.com/blog/huntr-alternatives). Both are competitor sites. Trustpilot page: [tealhq.com](https://www.trustpilot.com/review/tealhq.com?page=5).
- **Huntr:** autofill praised as "Genuinely good application autofill across Workday, Greenhouse, Lever, Ashby"; the resume builder is "clunky"; "support can be hard to reach when canceling"; about 19 Trustpilot reviews. — [Scoutify](https://scoutify.com/blog/huntr-review); [FlashFire](https://www.flashfirejobs.com/blog/huntr-alternatives)
- **Simplify:** Product Hunt ratings conflict (3.9/5 from 6 reviews vs 2.3 from 6); the paid tier is reportedly **$39.99/mo**. — [Product Hunt](https://www.producthunt.com/posts/simplify-4/reviews); [Jobr](https://jobr.pro/post/jobr-vs-teal-huntr-simplify) (competitor)

### Inferences
- **Paywall-on-basics is the most common 1–3 star trigger** in this evidence: Structured (recurring tasks, notifications), Quizlet (Learn/Test), Todoist (reminders, more than 5 projects), Tiimo (opaque pricing, lifetime removed). A newcomer can turn this into positioning: a generous core, a paywall only on AI or compute-costly features, and an honest lifetime option. Productivity users clearly reward one-time or lifetime options (praised in Structured reviews; Tiimo lifetime-removal anger).
- **Reliability is the second trigger** for blockers, because the whole value proposition fails silently when Screen Time permissions drop.
- High star averages (Todoist 4.8, Opal 4.7–4.8, Tiimo about 4.5) coexist with loud niche complaints. The complaints point to segments that are underserved, such as price-sensitive users and users who need a strict lock. They do not show that whole categories are failing.

### Gaps
- **No per-app counts of 1–3 star review themes** were produced, because the RSS endpoint was blocked. Not covered at all: Things 3, TickTick, Notion, Routinery, Finch, Habitica, Streaks, one sec, Forest, Duolingo (App Store reviews), Babbel, AnkiMobile, Gauth, Photomath, Readwise, Otter, Goblin.tools, Motion, Reclaim. Re-run the planned curl script (iTunes Search plus customerreviews RSS pages 1–10) once `itunes.apple.com` is allowed.
- Review dates are missing for almost every quote above (except the August 2026 Opal items).
- The search budget ran out before queries on Finch, Habitica, Streaks, Motion, Reclaim, Goblin.tools, Otter and email apps returned results. One Finch query returned only background: free tier usable; one blogger felt "guilt over notifications" ([Dishabhatia Substack](https://dishabhatia.substack.com/p/the-self-care-bird-app-finch)).
- **Leads to verify (background knowledge, not confirmed this session):** Motion moved upmarket toward teams/"AI employees" with higher prices; Reclaim.ai was acquired by Dropbox (2024); Superhuman was acquired by Grammarly (2025); Otter cut free-tier minutes. Each needs a source before use.

---

## Q2. ADHD adults: what do they keep asking for, which apps succeeded and why, and is the category really "too crowded"?

### Takeaway
Demand is large and validated: 15.5M diagnosed US adults, over half diagnosed as adults, and Apple's 2025 App of the Year went to an ADHD planner. The *visual day-planner* layer (Tiimo, Structured) is genuinely crowded. The **task-initiation / "help me start now" layer** (async body doubling, micro-steps, low-guilt nudges) is not well served: the main body-doubling tools need scheduled live video, and the planners monetize by paywalling basics. The earlier "too crowded" verdict is **only half right**. It is crowded for planners and open for initiation and execution, though churn risk is real everywhere.

### Cited Findings
- **Market size:** 6.0% of US adults (about **15.5M**) have a current ADHD diagnosis; **55.9%** were diagnosed in adulthood; **50.4%** were prescribed ADHD medication in the past 12 months; **71.5%** of stimulant users had trouble filling prescriptions (CDC NCHS Rapid Surveys System, Oct–Nov 2023 data, published Oct 2024). — [CDC MMWR via PMC](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11466376/); [ADDitude](https://www.additudemag.com/adult-adhd-diagnosis-cdc-report/)
- Coverage also reports that about **40% of men and 61% of women** were diagnosed in adulthood. This is a secondary summary; check it against the MMWR tables. — [Shimmer summary](https://shimmer.care/blog/what-the-latest-cdc-report-reveals-about-adult-adhd)
- **Proven success:** Tiimo, an AI visual planner "designed to help people with ADHD and other neurodivergent traits," won **iPhone App of the Year 2025** with 3M+ downloads, at **$42/yr web** or $10/mo. — [Yahoo Tech](https://tech.yahoo.com/ai/apple-intelligence/articles/apples-iphone-app-ai-tool-123900823.html); [Daring Fireball](https://daringfireball.net/2025/12/2025_app_store_award_winners); [Screenwise](https://screenwiseapp.com/media/tiimo-app)
- **Body-doubling options are friction-heavy:** Focusmate is ranked first for body doubling but is "synchronous only and requires a camera," with a free tier of 3 sessions/week. Cofocus runs 50-minute video sessions. Flow Club offers a Pomodoro timer, a to-do list and "some asynchronous peer support." Brili sets start times and durations per routine step for time blindness. — [AISOTools 2026 roundup](https://aisotools.com/blog/best-adhd-apps-for-adults-2026); [Shimmer best body-doubling apps](https://www.shimmer.care/blog/best-body-doubling-apps); [Flow Club](https://www.flow.club/blog/adhd-time-blindness) (all vendor or affiliate)
- **Indie supply is high:** multiple 2025–2026 "I have ADHD, I built the focus tool I couldn't find" launches exist, e.g. [Indie Hackers post](https://www.indiehackers.com/post/i-have-adhd-i-built-the-focus-tool-i-couldnt-find-mQLsOWYvU7XGHoESFpVs), [SnapIt body-doubling page](https://snapit-website.pages.dev/adhd-body-doubling-app.html) and [FocusMind](https://focusmind.agentive.bz), confirming crowding at the long tail.
- **Planner monetization pain** (see Q1): Structured paywalls recurring tasks and notifications and has raised its lifetime price about 3x; Tiimo removed lifetime and hides pricing. — [AppSupports](https://appsupports.co/1499198946/structured-day-planner/negative-reviews); [HabitBox](https://habitbox.app/blog/structured-app-review); [Tiimo feedback board](https://tiimo.nolt.io/2439)
- **Prior internal note** (this repo, `research/app-ideas.md`, secondhand): habit/ADHD apps fail on "setup and logging friction," and people use them for 1–3 weeks and then stop. It cites [DEV: why medication/ADHD apps fail](https://dev.to/wellnestapp/why-most-medication-apps-fail-adhd-brains-3hea) (vendor blog).

### Inferences
- **Why Tiimo, Finch and Structured succeeded** (inferred from positioning and complaints, not verified user research): they feel calm and visual rather than demanding, using a timeline in place of a list (Tiimo, Structured) or a pet in place of a streak (Finch). They are built for iOS first and earn Apple editorial features, which work as free distribution (Tiimo's award). They also price low (Tiimo $42/yr) relative to Todoist plus Motion stacks.
- **Challenge to "too crowded":** the crowding is in *planning UIs*. What ADHD users describe as the actual failure point is **initiation** (starting), **time blindness during a task**, and **re-entry after falling off**. Existing body doubling needs a camera and an appointment (Focusmate, Cofocus), which is the opposite of the "I need to start this dishwasher load right now" moment. An **async, voice- or ambient-presence body double** with micro-step breakdown and no-guilt re-entry is a plausibly under-served wedge. Evidence for unmet demand is indirect: the number of indie builders attempting it, plus unverified anecdotal Reddit demand. It needs validation.
- **Risk:** ADHD users churn fast (the 1–3 week abandonment pattern). A subscription must deliver value in the first session and survive gaps of several weeks. Re-engagement design ("welcome back," not "you broke your streak") is a product requirement, not a nicety.

### Gaps
- No r/ADHD, r/adhdwomen or r/ADHD_Programmers threads could be read (Reddit blocked; the search returned only blogs). The frequency of specific asks (body doubling, time blindness, "do it for me") could not be quantified.
- No revenue or subscriber data for Tiimo, Structured, Finch or Routinery from a reliable source (Sensor Tower/Appfigures not reachable).
- **Lead to verify:** Hank Green's "Focus Friend" (a passive companion "bean" body-double timer) was reported in 2025 to have hit #1 on the US App Store. If confirmed, it is the strongest evidence that low-friction, non-video body doubling has mass appeal. Not confirmed this session (search budget exhausted).
- Goblin.tools (Magic ToDo task breakdown) complaints and traction were not retrieved.

---

## Q3. Phone addiction and doomscrolling: what is unmet, and is it really blocked by iOS limits?

### Takeaway
iOS limits are **real engineering pain but not a market blocker**. Apple's FamilyControls / DeviceActivity APIs have documented iOS 26 regressions and missing hooks, yet Brick, a $59 NFC token on top of the same APIs, reports more than 500K active users and "multiple eight figures" in revenue. The unmet need is less "unbypassable software" and more **commitment devices that make bypassing feel costly** (physical, social, time-delayed), plus **reliability** and fairer pricing than Opal's about $100/yr.

### Cited Findings
- **API pain (developer evidence):** DeviceActivity thresholds fire immediately after an event is created rather than when usage reaches the threshold. This was reported to Apple on iOS 26 beta 1 (June 2025) and was still unresolved about ten months later per the poster. — [Apple Developer Forums thread 819997](https://developer.apple.com/forums/thread/819997)
- On iOS 26.2/26.3, `eventDidReachThreshold` fires intermittently "even when iOS Screen Time shows 0 minutes for the selected apps." — [Apple Developer Forums, Device Activity tag](https://developer.apple.com/forums/tags/device-activity)
- There is **no official API for a shield's action button to open the parent app**; "many apps on the App Store rely on private API," and the shipped workaround is a local notification fired from the ShieldConfiguration extension. — [DEV: iOS Screen Time API in 2026](https://dev.to/twillywill/the-ios-screen-time-api-in-2026-what-apples-docs-dont-tell-you-151e); [HonorFit (FR)](https://honorfitapp.com/fr/blog/ios-screen-time-api-guide/)
- Scheduling imprecision: a monitor scheduled for 90 minutes out "might fire at 60." The recommended setup is shield extension plus DeviceActivity monitor plus a foreground check, so the lock survives a force-quit or restart. — [HabitDoom: Apple's Screen Time API](https://habitdoom.com/blog/apple-screen-time-api-guide)
- Entitlement friction: a FamilyControls entitlement for a Shield extension sat in "Submitted" for 2+ weeks; FamilyActivityPicker lost its search field on iPadOS 26. — [Apple Developer Forums, Family Controls tag](https://developer.apple.com/forums/tags/family-controls?page=3)
- **Market proof despite limits:** Brick ($59 device; tap the phone to block apps, tap again to unlock; five "Emergency Unbricks") reports **500,000+ active users in 180 countries** and "multiple eight figures in revenue" (undated, company-sourced). — [Entrepreneur](https://www.entrepreneur.com/business-news/these-founders-built-a-device-that-solves-phone-addiction); [getbrick.com](https://getbrick.com/products/brick)
- Brick launched a second product, **Brick Night** (automatic bedroom blocking). — [Fast Company](https://www.fastcompany.com/91628593/brick-night-bedtime-screentime)
- Cultural tailwind: "Bricking your phone is the new Dry January" (Business Insider, Jan 2026); a Gen Z "analog" movement with app blockers and dumbphones (Fortune, Feb 13 2026); NBC Select tested Brick for two weeks. — [BI via Scour](https://scour.ing/@hugonoss/p/https://www.businessinsider.com/bricking-your-phone-analog-movement-the-new-dry-january-2026-1); [Fortune](https://fortune.com/2026/02/13/analog-gen-z-phone-addiction-bloom-brick-app-blockers-dumb-phones-social-media/); [NBC News Select](https://www.nbcnews.com/select/shopping/brick-phone-app-blocker-review-rcna259740)
- **Incumbent weaknesses:** Opal costs about $99.99/yr; users report bypasses via Screen Time settings or logout, an August 2026 update causing freezes and broken daily limits, and silent failure after iOS updates (see Q1). — [Unstar](https://unstar.app/ko/blog/opal-forest-freedom-one-sec-jomo-screen-time-apps-ranked-2026); [AppImp](https://appimp.app/markets/app-blocker); [Make Headway](https://makeheadway.com/blog/opal-app-review/)

### Inferences
- **Bypassability is a design problem, not only an OS problem.** Every iOS blocker can ultimately be disabled in Settings. Brick wins by making the "off switch" physically remote, not by being unbreakable. Software-only routes to the same effect: a *friend key* (an accountability partner approves the unlock), *time-delayed unlock* with escalating waits, a *location key*, or cheap NFC stickers or QR codes the user places elsewhere (one-time hardware cost of a few dollars versus Brick's $59).
- **Reliability is a moat.** Since DeviceActivity misfires, an app that self-tests (detects permission loss or missed thresholds and alerts the user) addresses the most damaging complaint, "silently stopped blocking for a week."
- **Kids versus adults:** this research found no 2025–2026 evidence on parental-control pain. Adult self-control is the segment with clear willingness to pay (Opal at $100/yr, Brick at $59).
- **Is it crowded?** Yes: Opal, one sec, ScreenZen, Brick, Jomo, Clearspace, Forest and many "habit" blockers. A solo entrant needs a sharp mechanic, such as a social or friend key, as its headline differentiator.

### Gaps
- No one sec, ScreenZen, Forest or Clearspace review themes were retrieved.
- No reliable US adult screen-time statistics (hours/day, share who want to cut back) were retrieved this session.
- The parental-control and teen segment was not researched (the search budget ran out).
- AppImp's "1,184 complaints" and "67% negative" figures are single-source and unverified.

---

## Q4. Students (high school and college): where are the gaps in homework, planning, studying and lecture notes after ChatGPT?

### Takeaway
AI use for coursework is now near-universal (about 85% in the past year), so "AI homework answers" is a commodity (and an academic-integrity minefield). The visible consumer pain is **paywalls on study tools** (Quizlet moving Learn and Test to paid, $35.99/yr) and a scramble to free alternatives (Knowt, Anki). Willingness to pay among students is weak. The better opening is **learning-integrity-safe study aids**: active recall built from the student's own materials, plus planning around real deadlines. Evidence for specific planner or lecture-notes pain was not retrieved.

### Cited Findings
- **85%** of students relied on AI tools for coursework in the past year (79% at community colleges, 86% at four-year schools). — [eWeek on Inside Higher Ed Student Voice 2025](https://www.eweek.com/news/student-voice-survey-2025/)
- Harvard Crimson survey (April 2026, n=303): nearly **two-thirds** use ChatGPT; students estimate about **34.5% of homework** was done with AI. — [Harvard Students' AI usage summary](https://bittide.aicompass.dev/article/50c54a7d-a2c0-4d6e-a899-3d19e901e3f0) (secondary; single campus)
- HERI first-year survey at Tulane: **62%** used generative AI frequently or occasionally for coursework, versus **21% in Fall 2023**. — [Tulane OAIR](https://oair.tulane.edu/node/2831)
- Older: McGraw Hill found 80% use ChatGPT, TikTok or YouTube for study help (date unclear). — [EdScoop](https://edscoop.com/?p=24536)
- Quizlet's paywall moved Learn, Test and Expert Solutions to Plus ($35.99/yr). Users "had built study habits around the free version." Knowt markets free Learn mode plus one-click Quizlet import. Anki is called the strongest free spaced-repetition option but has a "steeper learning curve." — [Words on Repeat](https://wordsonrepeat.com/blog/quizlet-paywall-2026-free-alternatives); [Knowt](https://knowt.com/); [StudyGenie](https://studygenie.io/blog/quizlet-alternatives) (all competitors)
- There is no free replacement for classroom features like Quizlet Live. — [Words on Repeat](https://wordsonrepeat.com/blog/quizlet-paywall-2026-free-alternatives)

### Inferences
- With AI answers commoditized, the remaining student pain is **retention before exams** (spaced repetition is effective, but Anki is intimidating) and **organization** (deadlines scattered across Canvas, Google Classroom, email and syllabi). A "syllabus/LMS to plan to daily review" app is plausible, but students' low willingness to pay and LMS API access (school-controlled) are problems.
- **Parents pay, not students**, for high schoolers. A parent-visible study-accountability angle may monetize better, but overlaps with the school/family inbox idea in the prior note.
- The market is crowded with funded AI-study entrants (Knowt, StudyFetch, Turbolearn, Gauth) and is very seasonal (exam peaks), with poor annual retention expected.

### Gaps
- No App Store review themes for Gauth, Photomath, AnkiMobile, Notability, GoodNotes or AI lecture-notes apps were retrieved.
- No r/college or r/GetStudying evidence (Reddit blocked).
- No data on student subscription conversion or retention (RevenueCat Education benchmark not retrieved; the search budget ran out).

---

## Q5. Language learners: complaints about Duolingo after its AI pivot, and demand for speaking practice and real conversation

### Takeaway
Duolingo's April 2025 "AI-first" memo caused a visible user backlash (deleted streaks, viral negative content), but investors rewarded it and revenue guidance rose above $1B. Users did not leave en masse in any measurable way. The persistent learner complaint is that Duolingo does not build **speaking ability**. AI speaking tutors (Speak at about $18–20/mo, Praktika) monetize that need, but they draw billing/refund anger and "robotic" conversation complaints. The gap is a **trustworthy, honest-billing speaking coach** that feels like real conversation and gives accurate pronunciation feedback.

### Cited Findings
- After Duolingo's AI-first announcement (April 2025), "users rebelled, deleting multi-year streaks, flooding comment sections"; users heard "more automation, less human judgment." — [Hiten Shah](https://www.hiten.show/p/duolingo-has-an-ai-problem); [Inc.](https://www.inc.com/robin-landa/duolingo-made-a-huge-announcement-what-happened-next-was-anything-but-expected/91193614); [CBC](https://www.cbc.ca/1.7539838)
- Despite the backlash, Duolingo raised full-year guidance above **$1B** and its market value rose. — [Yahoo Creators](https://creators.yahoo.com/lifestyle/story/duolingos-ai-shift-faced-backlash-then-fueled-a-1b-surge-033456855.html)
- Claims of mass quitting are weakly sourced (e.g. "videos tagged Duolingo AI racked up over 10 million views"). There is no reliable churn data. — [Unanswered.io](https://unanswered.io/guide/why-are-people-leaving-duolingo) (low quality); [TheD3List](https://thed3list.substack.com/p/massive-backlash-against-duolingo)
- A reviewer who switched to Speak: "speaking a language is the best way to learn, and I was always frustrated by how Duolingo did not prioritize this crucial aspect." — [Android Police](https://www.androidpolice.com/i-ditched-duolingo-for-this-language-app-it-was-total-reality-check/)
- Speak costs about $18–20/mo (less annually), which is high willingness to pay for speaking practice. — [Make Headway](https://makeheadway.com/blog/praktika-review/)
- Praktika complaints: billing after cancellation, bot-only support, refund ping-pong between Praktika and Apple, inaccurate pronunciation feedback, the tutor switching language mid-session, "robotic or repetitive" conversations. — [Trustpilot](https://www.trustpilot.com/review/praktika.ai); [PracticeMe](https://practiceme.app/vs/praktika); [LingoStar](https://lingostar.ai/blog/praktika-review/)

### Inferences
- **Speaking anxiety plus real-use goals** (travel, heritage language, a partner's family, work) are the underserved jobs. Speak and Praktika prove willingness to pay at $15–20/mo; their reviews show trust and quality are the weak flanks.
- **Solo feasibility is the issue:** realtime voice LLM cost per minute is the main unit-economics risk (cost not sourced; see Gaps). A narrow niche (one language pair, or a "talk with family" scenario pack) with honest billing (clear trial, easy cancel, pro-rated refunds) could differentiate.
- Duolingo's own AI features (Max video call) are a strong incumbent threat (not verified this session).

### Gaps
- Duolingo, Babbel, Speak and Pimsleur App Store review themes were not retrieved; nor were r/languagelearning threads.
- No current per-minute cost figures for realtime speech-to-speech models (needed for a margin model).
- Duolingo DAU/paid-subscriber 2026 figures were not retrieved.

---

## Q6. Job seekers in the tough 2025–2026 market: which consumer tools are wanted?

### Takeaway
The pain is acute and quantified: about **291–300+ applications per hire** (about 3x 2021) and **roughly half to two-thirds of seekers ghosted**. Existing trackers (Teal, Huntr, Simplify) are web/Chrome-first with poor trust scores, and none does true auto-apply. A mobile-first **"pipeline plus follow-up autopilot"** (auto-capture applications from email confirmations, nudge follow-ups, detect ghosting, track interview prep) is plausible. But job-search apps churn by design (users leave when hired), so pricing must be monthly or a time-boxed pass.

### Cited Findings
- Applications per hire have reached about **291** (Ashby data via Axios), up from about 100 in early 2021; another compilation says "more than 300 — roughly triple the 2021 level." — [Dear Hiring Manager stats](https://dearhiringmanager.io/job-search-statistics) (vendor compilation)
- Employer ghosting: **53%** of seekers were ghosted in the past year (up from 48% in 2025 and 38% in 2024), attributed to Criteria Corp 2026 via Fortune; **conflicting** attribution to iHire's 2026 survey. — [CueCopilot](https://cuecopilot.com/candidate-ghosting-statistics/); [InstantInterview](https://instantinterview.app/blog/interview-ghosting-statistics-2026) (vendor blogs)
- Greenhouse: **63%** of US candidates ghosted after an interview (self-reported, likely overstated). Employ/Zogby: **32%** ghosted this year, up from 30% in 2025. — [Pin Employer Ghosting Index 2026](https://www.pin.com/blog/employer-ghosting-index/); [Recruiting News Network](https://www.recruitingnewsnetwork.com/posts/ghosting-in-hiring-is-a-blame-game-nobodys-actually-winning)
- Headline from Sept 2026: "**66% of job seekers have been ghosted** by employers during the hiring process." — [Allwork.space](https://allwork.space/2026/09/66-of-job-seekers-have-been-ghosted-by-employers-during-the-hiring-process) (headline only; underlying survey not read)
- Ghost jobs (postings with no real intent to hire) are a recognized phenomenon. — [Wikipedia: Ghost job](https://en.wikipedia.org/wiki/Ghost_job); [Apollo Technical](https://www.apollotechnical.com/ghost-job-statistics/)
- Tools: none of Huntr, Teal or Simplify does true auto-apply; Huntr and Simplify offer autofill. Teal has a weak Trustpilot score (2.1–3.0) with billing and support complaints; Huntr has cancellation-support complaints; Simplify paid is about $39.99/mo. — [Resumly](https://resumly.ai/alternatives/teal-alternatives); [FlashFire](https://www.flashfirejobs.com/blog/huntr-alternatives); [Jobr](https://jobr.pro/post/jobr-vs-teal-huntr-simplify) (all competitors)

### Inferences
- **The core frequent pain is organizational and emotional**: hundreds of applications, little feedback, and no idea where things stand or whom to follow up with. A tracker that requires manual entry fails at 291 applications. **Auto-capture** (forwarding or reading "Thanks for applying" emails, LinkedIn/Indeed confirmations) is the unlock, the same "remove the input step" thesis as the prior note's Deadline Autopilot.
- Mobile-first is under-served: the tools are Chrome extensions plus web dashboards, while follow-ups, interview reminders and recruiter calls happen on the phone.
- Willingness to pay is real but time-boxed. Monthly prices of $20–40 are tolerated (Simplify $39.99/mo), but expected lifetime is the length of the search (months). An "until you're hired" pass, or pausing instead of cancelling, fits better than annual.
- Avoid auto-apply bots: arms race, ATS bans, reputational risk, and low quality.

### Gaps
- No App Store review data for LinkedIn, Indeed or Jobright, and no r/jobs or r/recruitinghell threads (blocked).
- No figures on job-scam prevalence (FTC data) were retrieved.
- Unemployment duration and number of active US job seekers in late 2026 were not retrieved.

---

## Q7. "Capture everything" problems (notes, voice notes, screenshots, saved links, email, reading): what is unmet?

### Takeaway
The clearest dated signal is **Pocket's shutdown on July 8, 2025** (data export ended Oct 8, 2025). It left millions of read-later users scattered across Instapaper, Wallabag and a wave of small AI readers, and the well-known "saved 400, read 40" backlog problem remains unsolved. Evidence on screenshots, voice notes and email overload was not retrieved this session. The cross-category pattern from the prior internal note still holds: **capture is easy; processing the pile is the unmet job.**

### Cited Findings
- Mozilla shut down Pocket on **July 8, 2025**; exports were available until **Oct 8, 2025**, after which data was deleted. (One site gives Nov 12, 2025; treat that as unreliable.) — [TechRadar](https://www.techradar.com/computing/websites-apps/mozilla-is-shutting-down-pocket-here-are-the-3-best-bookmarking-alternatives); [Mozilla support](https://support.mozilla.org/ln/questions/1514786)
- Anecdote: an author has "427 articles saved in a Pocket alternative and read maybe 40 of them." — [DEV: Pocket alternatives 2026](https://dev.to/fisher_shenfisher_1c32/pocket-alternative-2026-8-worth-trying-after-mozillas-shutdown-4l71)
- Alternatives named: Instapaper ([TechRadar](https://www.techradar.com/computing/websites-apps/mozilla-is-shutting-down-pocket-here-are-the-3-best-bookmarking-alternatives)), Wallabag ([TechPP](https://techpp.com/2025/05/24/best-pocket-alternatives/)), and many self-promoting AI readers (Linkflare, Slax Reader, CosyReader, ContextBolt) whose pages are vendor content. — [Linkflare](https://linkflare-site.pages.dev/articles/pocket-alternative-apps-2026); [Slax](https://slax-home-dev.pages.dev/reader/alternatives/pocket/)
- Prior internal note (`research/app-ideas.md`): across niches the complaint is "There are apps for this, but I still have to do the boring part myself," and AI that reads what people already receive (emails, screenshots, PDFs) is the 2026 opening. — [ReachFront Reddit roundup](https://reachfront.ai/blog/app-ideas-from-reddit) (secondhand)

### Inferences
- A **"backlog digester"** would turn saved links, screenshots and voice memos into a weekly 10-minute brief: summarize, cluster, surface the three worth reading, and archive the rest with permission. It targets guilt and overload, not storage. Willingness to pay is uncertain: read-later users are a niche, and Readwise Reader already targets power users (price not verified this session).
- The many small Pocket-replacement AI readers suggest a crowded long tail with no breakout winner. Distribution, not features, is the hard part.
- Screenshot pile-up is a plausible mass-market pain (everyone screenshots as a to-do), but iOS 26 Visual Intelligence and Apple Photos search may absorb it. Not verified.

### Gaps
- No data on screenshot volume or behaviour, voice-memo app complaints (Otter, AudioPen, Voicenotes), or Readwise review themes.
- **Email** (consumer inbox overload, Superhuman, Spark, Gmail Gemini) was **not researched**: the search budget ran out before email queries.
- **Reading habits** (Goodreads frustrations, StoryGraph growth, reading-streak apps) were **not researched**.
- **Calendars / AI scheduling** (Motion, Reclaim, Fantastical) were **not researched** beyond the Structured calendar-editing complaint.

---

## Q8. Candidate problem catalog (problem, who, frequency, evidence, incumbents, gap, willingness to pay, feasibility, concept) and top picks

### Takeaway
Of 12 candidates, the best-evidenced, solo-feasible, subscription-friendly opportunities are: **(1) an ADHD "start-now" companion** (async body double plus micro-steps; challenges the "too crowded" verdict); **(2) a commitment-based doomscroll blocker** (friend, location or tag keys plus self-healing reliability; challenges the "blocked by iOS" verdict); **(3) a mobile-first job-search pipeline with email auto-capture and follow-up autopilot**; and, more conditionally, **(4) a narrow, honest-billing AI speaking coach**. Student and read-later ideas have real pain but weak willingness to pay or crowded free alternatives.

### Cited Findings
Fields: (a) problem; (b) who/how many; (c) frequency; (d) evidence; (e) incumbents and complaints; (f) gap; (g) willingness to pay; (h) feasibility; (i) concept. Facts carry sources; unsourced items are marked as inference.

**C1. "I can't make myself start" (ADHD task initiation and time blindness during tasks)**
- (a) Knowing what to do but being unable to start; losing track of time once started.
- (b) About 15.5M US adults with diagnosed ADHD — [CDC MMWR](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11466376/). Undiagnosed and subclinical procrastinators widen the pool (inference).
- (c) Daily, many times per day (inference from the nature of the condition).
- (d) Body-doubling tools need cameras and schedules (Focusmate is "synchronous only and requires a camera") — [AISOTools](https://aisotools.com/blog/best-adhd-apps-for-adults-2026); there is an indie stream of "I built the focus tool I couldn't find" — [Indie Hackers](https://www.indiehackers.com/post/i-have-adhd-i-built-the-focus-tool-i-couldnt-find-mQLsOWYvU7XGHoESFpVs). **No verbatim r/ADHD quotes captured** (blocked).
- (e) Tiimo (App of the Year 2025, 3M+ downloads, $42/yr web) — pricing opacity, lifetime removed — [Daring Fireball](https://daringfireball.net/2025/12/2025_app_store_award_winners), [Tiimo feedback board](https://tiimo.nolt.io/2439); Structured — recurring tasks and notifications paywalled — [AppSupports](https://appsupports.co/1499198946/structured-day-planner/negative-reviews); Focusmate free 3 sessions/week — [AISOTools](https://aisotools.com/blog/best-adhd-apps-for-adults-2026).
- (f) Nothing combines *instant*, *no-camera*, *ambient* accountability with automatic micro-step breakdown and guilt-free re-entry (inference).
- (g) Tiimo $42/yr or $10/mo; Structured $29.99/yr or $99.99 lifetime — [Daring Fireball](https://daringfireball.net/2025/12/2025_app_store_award_winners), [HabitBox](https://habitbox.app/blog/structured-app-review).
- (h) High feasibility: Live Activities and Dynamic Island for a visible timer, an LLM for step breakdown, optional voice check-ins, and synthetic or async "co-worker" presence. No special entitlements. LLM cost per breakdown is small (not sourced).
- (i) **Concept "Start Now":** press one button, say the task, and get three tiny first steps. A Live Activity "co-worker" stays on the lock screen with gentle check-ins ("still on step 2?"), and a time-elapsed bar shows on the lock screen. There are no streaks, just "welcome back" re-entry. Optional *async* body-doubling rooms show others working in silence with no camera.

**C2. Visual day planning / time blindness (planner layer)**
- (a) Not seeing how the day fits; plans collapse.
- (b) Same ADHD pool plus general planners.
- (c) Daily.
- (d)/(e) Structured paywalls, calendar events not editable, iCloud sync issues — [Saner.ai](https://blog.saner.ai/structured-review/); Tiimo pricing complaints — [Healthify](https://healthify.nz/apps/t/tiimo-app).
- (f) A cheaper or lifetime alternative with editable calendar sync (inference). **Crowded**: Tiimo, Structured, Sunsama and others.
- (g) As C1.
- (h) Easy (EventKit), but commoditized.
- (i) Fold into C1 as a secondary view rather than a standalone app. **Not recommended standalone.**

**C3. Forgiving habit tracking (streak guilt)**
- (a) Breaking a streak triggers shame and abandonment.
- (b) Broad. (c) Daily.
- (d) One Finch user describes "guilt over notifications" after stepping away — [Dishabhatia Substack](https://dishabhatia.substack.com/p/the-self-care-bird-app-finch); the prior internal note says users abandon in 1–3 weeks — [DEV](https://dev.to/wellnestapp/why-most-medication-apps-fail-adhd-brains-3hea).
- (e) Finch, Habitica and Streaks complaints **not retrieved**.
- (f) Unclear; Finch already does a soft, pet-based approach.
- (g) Finch Plus has multiple price points — [AlternativeTo](https://alternativeto.net/software/finch--self-care-pet/about).
- (h) Easy.
- (i) Better as a "re-entry" feature inside C1. **Not recommended standalone** (crowded, weak evidence this session).

**C4. Doomscrolling: blockers that are too easy to bypass, or silently fail**
- (a) "I set limits and blow through them," or the blocker stops working without telling me.
- (b) Broad adult smartphone users; a cultural movement in 2026 — [Fortune](https://fortune.com/2026/02/13/analog-gen-z-phone-addiction-bloom-brick-app-blockers-dumb-phones-social-media/), [BI](https://scour.ing/@hugonoss/p/https://www.businessinsider.com/bricking-your-phone-analog-movement-the-new-dry-january-2026-1).
- (c) Many times daily.
- (d) Opal Aug 2026 complaints: "daily limits stopped working," freezes — [AppImp](https://appimp.app/markets/app-blocker); permission loss after an iOS update, blocking silently stopped for a week — [Unstar](https://unstar.app/ko/blog/opal-forest-freedom-one-sec-jomo-screen-time-apps-ranked-2026); bypass via Settings or logout — [Make Headway](https://makeheadway.com/blog/opal-app-review/), [TryHugo](https://www.tryhugo.app/blog/opal-app-review-2026).
- (e) Opal (about $99.99/yr, 4.7–4.8); Brick ($59 hardware, 500K+ active users, "multiple eight figures") — [Entrepreneur](https://www.entrepreneur.com/business-news/these-founders-built-a-device-that-solves-phone-addiction); one sec, ScreenZen, Forest (not retrieved).
- (f) Commitment without $59 hardware: a friend key, location key or cheap NFC sticker; self-diagnosing reliability; fair pricing (inference).
- (g) Opal about $100/yr; Brick $59 one-time plus app — sources above.
- (h) Medium. Requires the FamilyControls entitlement (reported waits of 2+ weeks), with known DeviceActivity misfires on iOS 26 and no official shield-to-app hook — [Apple Dev Forums](https://developer.apple.com/forums/thread/819997), [DEV](https://dev.to/twillywill/the-ios-screen-time-api-in-2026-what-apples-docs-dont-tell-you-151e). Every block remains removable in Settings by design.
- (i) **Concept "Keyholder":** pick apps and a schedule; unlocking requires a "key": a friend's approval in the app, being at a chosen place, scanning a $2 NFC sticker left at the office, or waiting out an escalating delay. A daily self-check alerts "your blocks are OFF" if permissions drop. Subscription about $3–5/mo, with a lifetime option.

**C5. Parental control of kids' and teens' screen time**
- Not researched this session (no evidence retrieved). Marked as a gap.

**C6. Speaking a new language with confidence**
- (a) Years of app streaks but no ability to hold a conversation.
- (b) Duolingo-scale audience, revenue guidance above $1B — [Yahoo Creators](https://creators.yahoo.com/lifestyle/story/duolingos-ai-shift-faced-backlash-then-fueled-a-1b-surge-033456855.html).
- (c) Daily practice sessions.
- (d) "I was always frustrated by how Duolingo did not prioritize [speaking]" — [Android Police](https://www.androidpolice.com/i-ditched-duolingo-for-this-language-app-it-was-total-reality-check/); the AI-first backlash — [Hiten Shah](https://www.hiten.show/p/duolingo-has-an-ai-problem).
- (e) Speak ($18–20/mo); Praktika (billing, refund and bot-support anger; robotic conversations; poor pronunciation feedback) — [Trustpilot](https://ie.trustpilot.com/review/praktika.ai), [LingoStar](https://lingostar.ai/blog/praktika-review/).
- (f) An honest-billing, scenario-specific coach with reliable pronunciation feedback (inference).
- (g) Speak about $18–20/mo — [Make Headway](https://makeheadway.com/blog/praktika-review/).
- (h) Medium to hard: realtime voice model costs per minute (unsourced) squeeze margins; quality pronunciation scoring is non-trivial; Duolingo's AI features compete.
- (i) **Concept "Real Talk":** one target scenario (e.g. "meet your partner's family in Spanish" or heritage-language reconnection), 10-minute daily voice role-plays, and a phrasebook built from your own mistakes. A transparent trial with a one-tap in-app cancel and pro-rated refund policy is part of the brand.

**C7. Students: "what's due and am I ready?" (planning plus retention)**
- (a) Deadlines scattered across LMS, email and syllabi; cramming.
- (b) About 85% of college students use AI for coursework — [eWeek](https://www.eweek.com/news/student-voice-survey-2025/).
- (c) Daily during term; seasonal.
- (d) Quizlet paywall resentment — [Words on Repeat](https://wordsonrepeat.com/blog/quizlet-paywall-2026-free-alternatives).
- (e) Quizlet Plus $35.99/yr; Knowt free; Anki free but steep — [StudyGenie](https://studygenie.io/blog/quizlet-alternatives).
- (f) A free-feeling, integrity-safe tool that turns a syllabus into a plan and the student's own notes into spaced review (inference).
- (g) Weak (students flee paywalls).
- (h) Easy technically (photo of syllabus to LLM to plan; on-device flashcards); LMS integrations are school-controlled.
- (i) **Concept "Syllabus Autopilot":** snap each syllabus at term start; the app builds a term calendar plus a daily 15-minute review queue generated from photos of notes. **Ranked lower** because of weak willingness to pay and seasonality.

**C8. Lecture to notes to flashcards (AI notetaking)**
- Evidence not retrieved. Crowded with funded entrants (Knowt, StudyFetch, Turbolearn named in alternatives lists — [StudyGenie](https://studygenie.io/blog/quizlet-alternatives)). **Ranked lower.**

**C9. Job-search pipeline chaos and ghosting**
- (a) Hundreds of applications with no feedback; losing track of what I applied to and whom to follow up with.
- (b) Active US job seekers (number not retrieved); about 291 applications per hire — [Dear Hiring Manager](https://dearhiringmanager.io/job-search-statistics).
- (c) Daily during a search (months).
- (d) 53–66% report being ghosted — [CueCopilot](https://cuecopilot.com/candidate-ghosting-statistics/), [Allwork.space](https://allwork.space/2026/09/66-of-job-seekers-have-been-ghosted-by-employers-during-the-hiring-process). **No verbatim r/jobs quotes captured.**
- (e) Teal (Trustpilot 2.1–3.0; billing and support complaints), Huntr (clunky resume builder; hard to cancel), Simplify ($39.99/mo; thin ratings) — [FlashFire](https://www.flashfirejobs.com/blog/huntr-alternatives), [Resumly](https://resumly.ai/alternatives/teal-alternatives), [Jobr](https://jobr.pro/post/jobr-vs-teal-huntr-simplify).
- (f) A mobile-first tracker with zero manual entry (auto-capture from confirmation emails), follow-up timing, ghost detection ("no reply in 14 days, move on or nudge"), and morale support (inference).
- (g) Simplify $39.99/mo shows tolerance for high monthly prices during a search.
- (h) Easy to medium: an email-forwarding address avoids Gmail restricted-scope review (per the prior note, unsourced); LLM parsing of confirmation emails; local notifications. Churn is structural (users get hired).
- (i) **Concept "Pipeline":** set up one Gmail filter that forwards "application received / interview / rejection" emails. The app builds a Kanban automatically, schedules polite follow-up drafts, flags likely ghost jobs, and celebrates progress such as interviews per week. Priced at $9.99/mo or a $24.99 "3-month search pass."

**C10. Read-later and saved-content backlog (post-Pocket)**
- (a) Saving hundreds of links and reading almost none, with guilt.
- (b) Former Pocket users (count not retrieved).
- (c) Daily saving, rare reading.
- (d) "427 articles saved… read maybe 40" — [DEV](https://dev.to/fisher_shenfisher_1c32/pocket-alternative-2026-8-worth-trying-after-mozillas-shutdown-4l71); Pocket shut down July 8, 2025 — [TechRadar](https://www.techradar.com/computing/websites-apps/mozilla-is-shutting-down-pocket-here-are-the-3-best-bookmarking-alternatives).
- (e) Instapaper, Wallabag, and many small AI readers (vendor pages).
- (f) Processing, not storing: a weekly digest with permission to let go (inference).
- (g) Unclear (Readwise pricing not verified).
- (h) Easy: Share Extension plus LLM summarization.
- (i) **Concept "Backlog Zero":** a share sheet for links, screenshots and voice memos; a Sunday 10-minute "brief" ranks the top three to read, summarizes the rest, and auto-archives after 30 days. **Ranked mid**: willingness to pay is unproven and the field is crowded with small entrants.

**C11. Subscription and paywall fatigue across productivity apps (cross-cutting)**
- Todoist's Dec 2025 price rise — [Morgen](https://www.morgen.so/blog-posts/todoist-pricing); Structured's lifetime price tripled — [HabitBox](https://habitbox.app/blog/structured-app-review); Tiimo lifetime removed — [Tiimo feedback board](https://tiimo.nolt.io/2439); Quizlet paywall — [Words on Repeat](https://wordsonrepeat.com/blog/quizlet-paywall-2026-free-alternatives).
- This is a positioning lever for C1, C4 and C9 (generous free core plus lifetime option), not a standalone app.

**C12. Email overload, AI scheduling (Motion/Reclaim), and reading habits**
- **Not researched** (the search budget ran out). Listed so the report writer knows these categories were not evaluated, rather than evaluated and rejected.

**Top picks and reasoning**
1. **C1 "Start Now" ADHD initiation companion.** Largest, best-documented audience (15.5M diagnosed adults — [CDC](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11466376/)); proven App Store editorial appetite (Tiimo App of the Year — [Daring Fireball](https://daringfireball.net/2025/12/2025_app_store_award_winners)); incumbents' friction (camera-based body doubling — [AISOTools](https://aisotools.com/blog/best-adhd-apps-for-adults-2026)) and paywall anger ([AppSupports](https://appsupports.co/1499198946/structured-day-planner/negative-reviews)); no entitlement barriers. Main risk: rapid churn and many indie copycats.
2. **C4 "Keyholder" commitment blocker.** Proven willingness to pay (Opal about $100/yr; Brick $59 with 500K+ users — [Entrepreneur](https://www.entrepreneur.com/business-news/these-founders-built-a-device-that-solves-phone-addiction)); documented incumbent failures (silent failure, bypasses — [AppImp](https://appimp.app/markets/app-blocker)); a mechanic (friend, location or tag key) that answers the bypass complaint inside iOS limits. Main risks: Screen Time API bugs ([Apple Dev Forums](https://developer.apple.com/forums/thread/819997)) and a crowded field.
3. **C9 "Pipeline" job-search autopilot.** Severe, quantified pain (about 291 applications per hire; 53–66% ghosted); weak incumbents on trust and mobile; reuses the prior note's "forward email, AI extracts" engine (synergy with Deadline Autopilot). Main risk: structural churn, so a time-boxed pass is preferable to annual pricing.
4. **(Conditional) C6 "Real Talk" speaking coach.** Proven willingness to pay ($18–20/mo for Speak) and incumbent trust problems (Praktika billing) — [Trustpilot](https://ie.trustpilot.com/review/praktika.ai), but voice-model costs and Duolingo's AI features make it the riskiest solo bet.

### Inferences
- **Shared engine:** C1, C9 and C10 all rest on the prior note's thesis of capture with zero typing, then AI processing, then a nudge at the right moment. A solo builder could share infrastructure across them.
- **Challenge to the earlier verdicts.** "ADHD is too crowded" holds for planners, not for initiation or execution tools. "Screen time is blocked by iOS" is wrong as a market claim: Brick shows the API is enough when paired with a commitment mechanic. It is right as an engineering-cost claim.
- **Ranking criteria used:** daily frequency multiplied by evidence of willingness to pay, minus crowding, minus build or unit-cost risk. Student and read-later ideas lose on willingness to pay; email, calendars and reading are unranked because they were not researched.

### Gaps
- **Verbatim App Store 1–3 star quotes with dates and URLs** for most named apps, and **all Reddit quotes**, are missing. Blocked hosts: `itunes.apple.com`, `apps.apple.com`, `reddit.com`, `appshunter.io`. The search budget was also exhausted. This is the most important validation step before choosing.
- RevenueCat 2026 Productivity and Education benchmarks (trial conversion, annual retention) were not retrieved. The prior note's "about 86% annual retention for productivity (RevenueCat 2026)" is **unverified and looks implausibly high**; it may be a different metric. Recheck at [RevenueCat State of Subscription Apps](https://www.revenuecat.com/state-of-subscription-apps).
- No Sensor Tower or Appfigures revenue or download estimates for Tiimo, Structured, Opal, one sec, Speak or Finch.
- Realtime voice-AI and LLM per-minute or per-call costs were not sourced (needed for C1 voice features and C6).
- Unresearched categories: email, calendars and AI scheduling, reading habits, kids' screen time, lecture-notes AI, voice notes and screenshots.
