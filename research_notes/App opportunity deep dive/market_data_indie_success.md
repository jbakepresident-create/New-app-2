# iOS Consumer Subscription App Market (as of Nov 2026): Category Economics, Indie Winners, Saturation, Channels, and New Apple Capabilities

> Method and verification note: all findings below come from web-search result summaries gathered on 2026-11-04. Direct page fetches of revenuecat.com, adapty.io and the Apple iTunes Search API (itunes.apple.com) were blocked by this session's network policy, so (a) primary report PDFs could not be read in full, and (b) no App Store rating or review counts could be verified. The shared web-search budget ran out before the Apple-platform (iOS 26 specifics) and "saturated categories" queries could run; those areas are thinner and flagged in Gaps. Treat numbers marked "secondary" as paraphrases of the primary reports that should be checked against the original before being quoted externally.

## 1. Category-level subscription economics (RevenueCat, Adapty, others, 2025–2026)

### Takeaway
Health & Fitness is the best-documented "good economics" category for a small app (highest install LTV at $1.21 in Adapty's data, top-tier trial-to-paid, lowest reliance on weekly plans), with Travel and Business strong on retention but weaker on usage frequency. Across all categories, hard paywalls convert about 5x better than freemium (10.7% vs 2.1% download-to-paid by day 35) with the same year-1 retention (27% vs 28%). Revenue is extremely concentrated: the top 10% of apps capture 94.5% of revenue.

### Cited Findings

**Dataset scope and market structure**
- RevenueCat State of Subscription Apps 2026 covers about 115,000 apps, more than $16B in revenue and over 1B transactions; released in two parts (March 2026 and late May 2026); about 338–339 pages — [RevenueCat SOSA 2026](https://www.revenuecat.com/state-of-subscription-apps); [SaaStr summary](https://saastr.com/the-top-10-learnings-from-revenuecats-state-of-subscription-apps-how-115000-mobile-apps-deliver-16b-in-revenue-whats-working-whats-quietly-killing-growth)
- New subscription app launches rose from about 2,000/month in 2022 to about 14,700 in January 2026 (RevenueCat citing Appfigures), attributed to AI coding tools — [dev.to summary of RC 2026](https://dev.to/axrisi/app-economy-2026-why-new-apps-get-3-of-subscription-revenue-3cj8)
- Apps launched before 2020 still generate 69% of subscription revenue; only 4.6% of new apps reach $10K MRR within 2 years — [dev.to summary of RC 2026](https://dev.to/axrisi/app-economy-2026-why-new-apps-get-3-of-subscription-revenue-3cj8); [RevenueCat SOSA 2026](https://www.revenuecat.com/state-of-subscription-apps)
- MRR growth dispersion: top 25% of apps grew MRR by 80%+ YoY, bottom 25% shrank more than 33%, top 10% grew more than 306%, median growth 5.3% — [9to5Mac, Mar 2026](https://9to5mac.com/2026/03/04/new-report-looks-into-the-sustainability-of-the-subscription-app-market-for-2026/); [RevenueCat 10-minute summary](https://www.revenuecat.com/blog/growth/subscription-app-trends-benchmarks-2026)
- Median subscription app earns $492/month, down 22% YoY (secondary, Medium) — [Medium: State of App Monetization 2026](https://chuvak-pavel.medium.com/state-of-app-monetization-2026-key-trends-from-revenuecat-and-adapty-8bdc23a4bb6f). CONFLICT: another blog cites RC 2026 as saying the median app's monthly revenue after 12 months is under $50 — [theswiftk blog](https://theswiftk.it.com/blog/zero-to-10k-mrr-indie-ios-app). The two likely use different denominators (all apps with revenue vs. new cohort at month 12); unresolved.
- Time to milestones (all-category medians, for apps that reach them): 58 days to $1K, 109 days to $10K (per RC's education-vertical page) — [RC SOSA 2026 Education](https://www.revenuecat.com/state-of-subscription-apps-2026-education)
- Year-one revenue per paying user: median about $23, top 10% above $74 (secondary blog, not verified on RC pages) — [arpubrothers summary](https://arpubrothers.com/blog/revenuecat-subscription-app-report-2026/)
- Adapty State of In-App Subscriptions 2026: about 16,000 apps, more than $3B gross revenue in 2025 — [Adapty SOIS 2026](https://adapty.io/state-of-in-app-subscriptions/)
- Adapty: top 10% of apps capture 94.5% of subscription revenue (up from 92.7% in 2023); Lifestyle is the most concentrated category at 97.9% — [ppc.land on Adapty 2026](https://ppc.land/95-of-app-subscription-revenue-goes-to-top-10-adaptys-2026-benchmark-report/); [Adapty blog 2026](https://adapty.io/blog/mobile-app-monetization-2026/)
- Adapty: 57.7% of new subscription apps generate less than $1,000 total revenue; 22.4% earn $1,000–$10,000 — [ppc.land on Adapty 2026](https://ppc.land/95-of-app-subscription-revenue-goes-to-top-10-adaptys-2026-benchmark-report/)

**Conversion: hard paywall vs freemium, trial length, trial-to-paid by category**
- Median day-35 download-to-paid: hard paywall 10.7% vs freemium 2.1% (about 5x); top 10% of hard-paywall apps reach 38.7% — [RevenueCat SOSA 2026](https://www.revenuecat.com/state-of-subscription-apps); [buildmvpfast summary](https://www.buildmvpfast.com/blog/hard-paywall-vs-free-trial-revenuecat-indie-app-2026)
- Revenue per install: hard paywall $3.09 vs freemium $0.38 at day 60 (about 8x); at day 14, $2.32 vs $0.27 — [RevenueCat hard paywall vs freemium](https://www.revenuecat.com/blog/growth/hard-paywall-vs-freemium); [buildmvpfast summary](https://www.buildmvpfast.com/blog/hard-paywall-vs-free-trial-revenuecat-indie-app-2026)
- Year-1 retention is virtually identical: 27% (hard paywall) vs 28% (freemium) — [RevenueCat SOSA 2026](https://www.revenuecat.com/state-of-subscription-apps)
- Hard paywall conversion fell from 12.1% (2025) to 10.7% (2026); freemium flat at about 2.1% (another source gives 2.2% for 2025) — [buildmvpfast summary](https://www.buildmvpfast.com/blog/hard-paywall-vs-free-trial-revenuecat-indie-app-2026)
- RC 2026: Travel and Health & Fitness lead median trial-to-paid; Photo & Video and Gaming "lag significantly"; Health & Fitness download-to-paid median listed at 2.9% — [RevenueCat SOSA 2026](https://www.revenuecat.com/state-of-subscription-apps)
- OLDER (RC 2025, 75,000 apps): trial-to-paid medians Travel 48.7%, Media & Entertainment 43.8%, Health & Fitness 39.9% — [pricepush (citing RC 2025)](https://pricepush.app/blog/trial-to-paid-conversion-rate-benchmarks); [RC SOSA 2025](https://www.revenuecat.com/state-of-subscription-apps-2025)
- Education: top iOS apps reach 12–14% download-to-paid (upper tier, not median) — [RC SOSA 2026 Education](https://www.revenuecat.com/state-of-subscription-apps-2026-education)
- Trial length: 17–32 day trials have median trial-to-paid of 42.5% (top quartile above 59.4%) vs 25.5% for trials of 4 days or less (top quartile above 38.5%) — [RevenueCat free trial length](https://www.revenuecat.com/blog/growth/free-trial-length); [consumoteca summary](https://consumoteca.com.co/articles/en/revenuecat-recurring-subscriptions-explained-platform-pricing-and-2026-benchmarks)
- Adapty 2026 global averages: install-to-trial 10.9%, trial-to-paid 25.6%; Health & Fitness best trial-to-paid at 35.0%, Entertainment worst at 19.1% — [ppc.land on Adapty 2026](https://ppc.land/95-of-app-subscription-revenue-goes-to-top-10-adaptys-2026-benchmark-report/)
- CONFLICT: an unofficial mirror of Adapty's report shows trial start 27.8%, trial-to-paid 59.2%, first renewal 45.1%, fifth renewal 8.3% (labels unclear; may be a different denominator) — [adapty-sois.vercel.app mirror](https://adapty-sois.vercel.app/)
- Adapty: for direct (no-trial) purchases, install-to-paid reaches 18–38% in Lifestyle and Productivity (figure as reported; denominator may be paywall views rather than installs, verify) — [ppc.land on Adapty 2026](https://ppc.land/95-of-app-subscription-revenue-goes-to-top-10-adaptys-2026-benchmark-report/)
- Adapty: trials raise annual-plan LTV in Utilities, Health & Fitness, Education; direct buyers are worth more in Productivity, Lifestyle, Entertainment, Graphics & Design — [Adapty SOIS 2026](https://adapty.io/state-of-in-app-subscriptions/)
- In Productivity, trials reduce LTV by 13.7% (secondary) — [Medium: State of App Monetization 2026](https://chuvak-pavel.medium.com/state-of-app-monetization-2026-key-trends-from-revenuecat-and-adapty-8bdc23a4bb6f)

**LTV per install (Adapty, median, 1-year)**
- Health & Fitness $1.21; Productivity $1.10; Utilities $1.09 (top three App Store categories) — [Adapty SOIS 2026](https://adapty.io/state-of-in-app-subscriptions/); [ppc.land](https://ppc.land/95-of-app-subscription-revenue-goes-to-top-10-adaptys-2026-benchmark-report/)

**Plan mix and prices**
- Weekly plans are 4% to 47% of subscriptions sold depending on category; Social highest, Health & Fitness lowest — [consumoteca summary of RC](https://consumoteca.com.co/articles/en/revenuecat-recurring-subscriptions-explained-platform-pricing-and-2026-benchmarks)
- Adapty: weekly plans' share of revenue is highest in Utilities (73.6%), then Entertainment and Productivity — [ppc.land on Adapty 2026](https://ppc.land/95-of-app-subscription-revenue-goes-to-top-10-adaptys-2026-benchmark-report/)
- Common price tiers (secondary, attributed to RC data, not verified on RC pages): $4.99–$6.99 weekly, $7.99–$9.99 monthly, $29.99–$39.99 annually — [consumoteca](https://consumoteca.com.co/articles/en/revenuecat-recurring-subscriptions-explained-platform-pricing-and-2026-benchmarks)
- Adapty: subscription prices vary 4x between countries — [Adapty SOIS 2026](https://adapty.io/state-of-in-app-subscriptions/)

**Retention and renewals**
- Annual plan median first renewal: 23%–40% across top categories; Travel and Business highest (40%); Productivity and Photo & Video lowest (23%) — [RC renewal rates by category](https://www.revenuecat.com/blog/growth/average-subscription-renewal-rates-by-app-category)
- Monthly plan median renewal: Business highest (61%); Social & Lifestyle lowest (42%) — [RC renewal rates by category](https://www.revenuecat.com/blog/growth/average-subscription-renewal-rates-by-app-category)
- Weekly plan median renewal: Education highest (58%) — [RC renewal rates by category](https://www.revenuecat.com/blog/growth/average-subscription-renewal-rates-by-app-category)
- Year-1 annual retention of 23–36% (secondary) — [consumoteca](https://consumoteca.com.co/articles/en/revenuecat-recurring-subscriptions-explained-platform-pricing-and-2026-benchmarks)
- Month 1 accounts for 35% of all annual-plan cancellations; annual subscribers who cancel rarely come back (RC 2026 part two) — [9to5Mac, May 2026](https://9to5mac.com/2026/05/27/new-report-shows-annual-app-subscribers-rarely-return-after-they-cancel/); [dev.to summary](https://dev.to/axrisi/app-economy-2026-why-new-apps-get-3-of-subscription-revenue-3cj8)
- Involuntary billing failures: nearly 1/3 of Google Play cancellations vs 14% on the App Store — [dev.to summary of RC 2026](https://dev.to/axrisi/app-economy-2026-why-new-apps-get-3-of-subscription-revenue-3cj8)

**AI apps**
- AI-powered apps earn about 41% more revenue per payer but churn about 30% faster — [ppc.land on RC 2026](https://ppc.land/ai-apps-earn-41-more-per-user-but-churn-30-faster-revenuecat-finds/)

**Refund rates**
- No RevenueCat-published category refund table was found. Adapty benchmarks: Education 4.86–5.1%, Health & Fitness 4.71%, Productivity 2.5–3.5%, Gaming 2.67%, Travel 1.51% — [Adapty refund benchmarks](https://adapty.io/blog/refund-rate-metrics-and-benchmarking/)
- Adapty guide: Social Networking highest at up to 6.5%, Utilities & Productivity around 5%; median 2.71%; annual subscriptions have the highest refund rates (6%–7.6%); general range 2–5% of payers — [Adapty refunds guide (PDF)](https://uploads.adapty.io/the_guide_on_managing_refunds_for_subscription_apps.pdf). Note the two Adapty sources disagree on Productivity (2.5–3.5% vs about 5%).
- RC 2025 reportedly found Health & Fitness leads revenue per download but has "unusually high" refunds (secondary) — [dev.to](https://dev.to/rikh81/what-subscription-developers-can-learn-from-this-years-benchmark-data-3ke9); a RevenueCat staff member said on the community forum they see higher refund rates in AI apps (anecdotal) — [RC community](https://community.revenuecat.com/general-questions-7/higher-refund-rate-6814)

### Inferences
- Best-documented economics for a small app, ranked from these benchmarks: (1) Health & Fitness, with the highest install LTV, strong trial-to-paid (35–40%), annual-heavy mix, but about 4.7% refunds and expensive CPI; (2) Utilities, close LTV ($1.09) but monetized mostly by weekly plans (73.6% of revenue), which means high churn and refund exposure; (3) Productivity, LTV $1.10 but lowest annual renewal (23%) and trials hurt LTV, so it favors direct purchase and lifetime; (4) Education, with good weekly renewal (58%) and top-app 12–14% conversion but about 5% refunds and the most expensive search-ad taps; (5) Travel and Business, best renewal and lowest refunds but (by inference) lower daily-use frequency and smaller consumer TAM. Photo & Video, Gaming, Entertainment, Social and Lifestyle look worst on conversion, renewal or concentration.
- A small app should default to a hard paywall (or at least an onboarding paywall) with an annual-first offer and a 1–4 week trial where the category benefits from trials (Health & Fitness, Education, Utilities). Day-0 to Day-30 retention matters most because 35% of annual cancellations occur in month 1.
- Unit economics math: with a hard paywall (10.7% download-to-paid) and median Y1 revenue per payer of about $23, a new app makes about $2.50 per install in year 1. That roughly matches RC's $3.09 RPI at day 60 and implies paid US installs costing more than $2–3 are unprofitable for a median app.

### Gaps
- Exact 2026 per-category medians from RevenueCat (trial-to-paid, download-to-paid, price medians, revenue-after-1-year percentiles) could not be extracted. The primary pages were blocked and search snippets only gave rankings. The 338-page PDF must be read directly.
- No RevenueCat refund-by-category figures were found. Adapty's figures are internally inconsistent.
- Superwall and Appfigures did not publish category conversion benchmarks that surfaced in search, and no Sensor Tower category-level subscription conversion data was found.

## 2. Fastest-growing categories 2025–2026 and the AI wave (who grew, who saturated/collapsed)

### Takeaway
2025 was the first year non-game app spending beat games, driven by AI. AI app revenue grew +254% YoY, followed by short dramas (+115%) and media editing (+71%). AI revenue is concentrated in a few general assistants, though ChatGPT's lead is narrowing. Consumer AI "single-trick" apps (face rating, AI photo, image-model spikes) show fast rise and fast decay. The durable AI winners tie AI to an existing high-LTV job such as calorie tracking (Cal AI).

### Cited Findings
- Sensor Tower State of Mobile 2026: 2025 global app (non-game + game) consumer spending $167B; first year users spent more on non-game apps than games; AI apps revenue +254% YoY, short dramas +115%, media editing +71%; AI app downloads +148%. Social media, streaming video and dating remain the largest non-game IAP revenue sources — [Sensor Tower press release](https://sensortower.com/press/press-release-boosted-by-gen-ai-services-consumers-spent-more-money-in-apps-than-games-for-first-time); [GameDevReports summary](https://gamedevreports.substack.com/p/sensor-tower-the-state-of-the-mobile)
- Sensor Tower State of AI 2026 (June 2026): AI app IAP revenue on track to surpass $4B in H1 2026, +36% half-over-half; time spent in GenAI apps projected at 36B hours in H1 2026 vs 17.2B in H1 2025; ChatGPT fastest app to 1B MAU — [Sensor Tower State of AI 2026](https://sensortower.com/press/sensor-tower-state-of-ai-2026-report-global-time-spent-on-generative-ai-apps-projected-to-more-than-double-year-over-year)
- Appfigures (via TechCrunch): 2025 global downloads about 106.9B (down 2.7%; down from 135B peak in 2020) while non-game app spending rose 33.9% to $82.6B; total consumer spending nearly $156B — [TechCrunch, Jan 2026](https://techcrunch.com/2026/01/14/app-downloads-declined-again-in-2025-but-consumer-spending-soared-to-nearly-156b/)
- ChatGPT's revenue lead over rivals narrowed from 18.5x the rest combined (Jan 2025) to a little over 2x (Apr 2026) — [Appfigures: ChatGPT at 3](https://appfigures.com/resources/insights/chatgpt-ai-chatbot-revenue-rivals)
- AI took three of the global top-10 download spots in April 2026 — [Appfigures April 2026](https://appfigures.com/resources/insights/most-downloaded-highest-earning-apps-april-2026)
- Image-model launches drove 6.5x more downloads than other model updates, but most did not convert to revenue; Nano Banana drove only about $181K gross consumer spending in its 28-day window — [TechCrunch, May 2026](https://techcrunch.com/2026/05/04/image-ai-models-now-drive-app-growth-beating-chatbot-upgrades/)
- AI photo trend (historical): peaked mid-2023 at 23M downloads/month, then settled near 7M/month while revenue held — [Appfigures This Week in Apps, Feb 2026](https://appfigures.com/resources/this-week-in-apps/20260213)
- Cal AI (AI calorie photo tracker): over $30M revenue in 2025 (TechCrunch); acquired by MyFitnessPal on March 2, 2026 (terms undisclosed) — [TechCrunch](https://techcrunch.com/2026/03/02/myfitnesspal-has-acquired-cal-ai-the-viral-calorie-app-built-by-teens/). Forbes: $30M prior year, projecting $50M in 2026 — [Forbes](https://www.forbes.com/sites/zoyahasan/2026/03/06/this-u30-kept-launching-apps-until-one-worked-then-sold-it-to-myfitnesspal/); Inc. and Latka say about $40M — [Inc.](https://www.inc.com/ben-sherry/he-built-an-ai-app-in-high-school-made-40m-and-sold-to-myfitnesspal-now-hes-aiming-even-bigger/91307748); [Latka](https://getlatka.com/companies/calai.app)
- Umax (AI looksmaxxing) monthly revenue reportedly fell from about $330K (Feb 2024) to about $170K (Aug 2024), roughly a 50% decay in 6 months — [Baijing](https://www.baijing.cn/article/50157)
- US app revenue fell 3% in a 2026 quarter while India rose 35% to a record $345M (context for US saturation; quarter definition unclear in snippet) — [Sensor Tower State of AI coverage via Yahoo](https://sg.finance.yahoo.com/news/sensor-tower-state-ai-2026-103000739.html)
- Data Analysis Journal frames 2026 benchmarks as "more apps, less quality" — [Data Analysis Journal](https://dataanalysis.substack.com/p/2026-benchmarks-more-apps-less-quality)

### Inferences
- Categories growing with AI tailwinds that suit small teams: AI-assisted tracking in Health & Fitness (photo-based food logging), media editing (+71% revenue), and study/education helpers. General chat assistants are a winner-take-most market dominated by ChatGPT and frontier labs. "Wrapper" assistants have no defensible position.
- Pure-novelty AI (face scoring, AI headshots, image-model trend apps) shows a spike-then-decay pattern: Umax lost about 50% of revenue in 6 months, and image-model spikes don't monetize. Treat those as short-lived arbitrage plays, not durable subscription businesses.
- The AI premium (+41% revenue per payer) is offset by faster churn (+30%) and inference cost. On-device or free-tier models (see Section 6) change that math.

### Gaps
- No 2026 data was found for AI headshot apps, AI companion apps or AI study helpers specifically. The only companion figures seen were 2025 numbers attributed to Appfigures via TechCrunch (about 220M downloads by July 2025, $82M H1 2025 spend, top 10% taking 89% of revenue), and the source URL was not retrieved, so they are unverified here.
- No source explicitly declared any AI sub-category "collapsed" in 2026. The decay evidence is app-level (Umax) and trend-level (AI photo 2023).
- Sensor Tower category-level US subscription growth tables were not accessible.

## 3. Indie and solo success stories, 2024–2026 (disclosed revenue)

### Takeaway
At least 25 cases were found, and they share one pattern. Winners solve an emotionally loaded, identity-linked problem (quitting porn or vaping, panic attacks, weight, looks, faith, manifestation) with a single demo-able "magic moment". They distribute through short-form video, often many faceless or persona TikTok accounts. They monetize with hard paywalls (often weekly or annual) and heavy paywall testing. The evergreen exception is HabitKit, which won in a crowded utility category through design, ASO and low prices over about 4 years. Almost all revenue figures are self-reported or estimated. Only two (Dailyglowup and Rewired) are payment-provider-verified, and both are small.

### Cited Findings

Verification key: **V** = payment-provider verified (TrustMRR/RevenueCat-connected); **P** = reputable press reporting the figure; **S** = founder self-report (interview, podcast, Starter Story, Indie Hackers, X); **E** = third-party estimate (Sensor Tower, Latka, AppGoblin, teardown sites) or viral claim.

| # | App | Category | Problem solved | Price (if found) | Revenue claim | Team | Main growth channel | Verif. | Sources |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Cal AI | Health & Fitness (AI) | Log calories by photo | n/f | >$30M 2025 revenue; $40–50M ARR estimates; acquired by MyFitnessPal Mar 2026 | Teen co-founders, small team | Influencer/creator content; aggressive paywall testing (123 experiments across 46 trigger points, +31% trial-to-paid, revenue 3x+ in 10 months) | P / S | [TechCrunch](https://techcrunch.com/2026/03/02/myfitnesspal-has-acquired-cal-ai-the-viral-calorie-app-built-by-teens/); [Forbes](https://www.forbes.com/sites/zoyahasan/2026/03/06/this-u30-kept-launching-apps-until-one-worked-then-sold-it-to-myfitnesspal/); [Superwall case study](https://superwall.com/case-studies/cal-ai) |
| 2 | Umax | Lifestyle (AI looksmaxxing) | Face rating + improvement tips | n/f | About $5M/yr; one interview claims about $500K/month and 10M+ downloads; estimated decline from $330K to $170K/month (Feb–Aug 2024) | Blake Anderson + small team | TikTok/influencer virality | S / E | [Sliplane/YouTube digest](https://onepage-research.sliplane.app/articles/youtube.com/yt-5u9u8yzPEpA); [Audioscrape transcript](https://audioscrape.com/podcast/the-startup-ideas-podcast/episode/how-to-build-1m-viral-ai-apps); [Baijing](https://www.baijing.cn/article/50157) |
| 3 | RizzGPT / Plug AI | Lifestyle/Dating (AI) | Writes dating-app replies | n/f | About $80K/month early; about $2.5M/yr later | Blake Anderson | Influencer marketing | S / E | [Scale Nuggets](https://scalenuggets.beehiiv.com/p/23yearold-whos-making-11myear-ai-apps); [BAAI Hub](https://hub.baai.ac.cn/view/43658); [Stormy influencer case](https://stormy.ai/blog/riz-gpt-influencer-marketing-case-study) |
| 4 | QUITTR | Health (addiction) | Quit porn | n/f | $50K/month (Dec 2024); "almost $3M" for a year (The Week); a single day of about $35K (founder post) | 2 founders (Alex Slater); started with $3K | Short-form social (TikTok link not confirmed in sources); later paid-ads testing | S / P | [Starter Story](https://www.starterstory.com/quittr-breakdown); [The Week](https://theweek.com/health/the-app-tackling-porn-addiction); [vc.ru](https://vc.ru/growth/1762617-kak-quittr-dorosli-do-35k-den); [podcast](https://www.buzzsprout.com/2604336/episodes/18884194-what-actually-works-to-scale-a-mobile-app-in-2026-w-alex-slater-from-quittr) |
| 5 | HabitKit | Productivity (habit tracker) | Visual habit grid | About $2/month iOS + lifetime tier | $3K MRR end-2023, $15K late-2024; secondary roundup: $28K MRR, 562K downloads, 25.1K payers by Dec 2025; AppGoblin estimate under $10K/month (conflict) | Solo (Sebastian Röhl) | ASO, building in public, about $100/month Apple Search Ads, MKBHD feature, RevenueCat Times Square contest | S / E | [Starter Story via Rosetta](https://rosetta.to/u/starterstory/how-i-built-it-15k-month-mobile-app); [Starter Story monetization](https://www.starterstory.com/businesses/habitkit/monetization); [theswiftk roundup](https://theswiftk.it.com/blog/zero-to-10k-mrr-indie-ios-app); [AppGoblin](https://appgoblin.info/apps/com.roehl.habitkit); [Röhl 2024 review](https://sebastianroehl.substack.com/p/2024-my-indie-app-business-year-in) |
| 6 | Vix | Lifestyle (AI manifestation) | Manifestation/affirmations | n/f | About $30K/month net within a year | Solo non-coder (Reza) | 25 TikTok accounts with persona-led content; concept tested on TikTok before build | S | [Starter Story podcast digest](https://finance.biggo.com/podcast/fbb0f4aa8eac0d9b) |
| 7 | Scroll The Bible | Lifestyle/Religion | Short-form Bible feed ("TikTok for the Bible") | n/f | Viral claim of $2M MRR 10 months after launch (Oct 27, 2026); teardown estimate about $1.8M/month; founder has not confirmed | Solo (Gabriel Jacobson) | TikTok UGC | E | [X post](https://x.com/jacobrodri_/status/2115060267545731513); [Handler teardown](https://gethandler.ai/teardowns/scroll-the-bible/) |
| 8 | Finch | Health & Fitness (self-care) | Gamified self-care pet | Free + Finch Plus subscription | Claim of about $4M/month, bootstrapped; Sensor Tower about $2M in latest month; Noctral $0.5–1M/month (US) | Small bootstrapped team | Retention-led word of mouth (claims D30 beating Duolingo/Calm) | E | [X post](https://x.com/ArfurRock/status/1924499333929373958); [Sensor Tower](https://app.sensortower.com/overview/1528595748?country=US); [Noctral](https://noctralspy.com/en/apps/finch) |
| 9 | Rootd | Health (mental) | Panic attack/anxiety relief | n/f | $83K+/month (case study); $1.2M 2024 (Latka); 2–4M downloads | Founder says no employees; Latka says 3 | Not detailed in snippets (ASO/organic implied) | S / E | [Marketing Crafted](https://marketingcrafted.com/case-studies/rootd); [Latka](https://getlatka.com/companies/rootd); [Sub Club](https://subclub.com/episode/hitting-2m-downloads-without-funding-employees-or-learning-to-code-ania-wysocka-rootd) |
| 10 | stoic. | Health (journaling) | AI/mental-health journal | n/f | Store estimates $15–20K/month; Latka estimate $1.5M ARR | About 10 (Poland) | n/f | E | [Latka](https://getlatka.com/companies/getstoic.com); [AppstoreSpy](https://appstorespy.com/android-google-play/com.stoicroutine.stoic-trends-revenue-statistics-downloads-ratings) |
| 11 | Floga | Health & Fitness (yoga) | Yoga practice for teachers/practitioners | Subscriptions + annual; lifetime deal off-store | About $10K MRR; lifetime pre-launch sold over $120K in 24h outside the App Store (kept 100%) | Solo non-engineer (Umberto Mezzadra) | Pre-existing audience from physical product; off-store pre-sale | S | [Indie Hackers](https://www.indiehackers.com/post/tech/from-physical-product-to-10k-mo-app-JLVZDxJ9RfjdYdvINqgp) |
| 12 | STOPPR + portfolio | Health (habit/addiction) | Quit-type app | n/f | Portfolio about $10K/month within a year | Solo (David Attias) | Copied the playbook of a "mediocre but successful" app | S | [Indie Hackers](https://www.indiehackers.com/post/tech/from-zero-to-10k-mo-app-portfolio-in-a-year-71h2PPGYn1VnPOkj9qi6) |
| 13 | Dailyglowup | Lifestyle (looks) | Face rating/glow-up plan | n/f | $15,516 last 30 days; about $108.7K all-time | n/f | n/f | **V** (RevenueCat via TrustMRR) | [TrustMRR](https://trustmrr.com/startup/dailyglowup) |
| 14 | GlamUp | Lifestyle (beauty, AI) | Glow-up/beauty | n/f | Peak $150K MRR | Nicole Cheung (recent grad) | n/f | S (source page not confirmed; appeared in the stork.ai cluster) | [stork.ai](https://www.stork.ai/blog/no-code-founders-8m-ai-empire) |
| 15 | FaceKit | Lifestyle (looksmaxxing) | Face analysis | n/f | 100K downloads in 2 months; about $100K in 2 months (title claim) | 19-year-old (Rafael Kramer) | AI-generated influencer accounts on TikTok | S | [stork.ai](https://www.stork.ai/blog/this-ai-trick-made-100k-heres-how) |
| 16 | Unnamed 4-app portfolio | AI consumer apps | Various | n/f | About $600K/month across 4 AI apps | No-code founder | n/f | S/E (single blog) | [stork.ai](https://www.stork.ai/blog/no-code-founders-8m-ai-empire) |
| 17 | Unnamed iOS screen-time app (Flippa listing) | Productivity (screen time) | Reduce phone use | n/f | $7.5K MRR, $90K ARR, 1,500 subscribers (seller-reported for sale) | n/f | n/f | S (marketplace listing) | [Flippa](https://flippa.com/13936174-profitable-fast-growing-ios-screentime-app-7-5k-mrr-90k-arr-1-500-subscribers) |
| 18 | Rewired | Productivity (screen-time blocker) | Arcade challenge to unlock blocked apps | n/f | $1,905 MRR, about $25.7K all-time; page title shows $560 last 30 days (conflict) | Solo | n/f | **V** (TrustMRR) | [TrustMRR](https://trustmrr.com/startup/rewired-screen-time-blocker) |
| 19 | Habit Pixel | Productivity (habit tracker) | Habit tracking | n/f | $208 MRR about 6 months after May 2025 launch; $1K MRR at month 8 | Solo | Organic | S | [Indie Hackers](https://www.indiehackers.com/post/from-0-to-1k-mrr-in-8-months-bootstrapping-habit-pixel-as-a-solo-dev-684b6c056d) |
| 20 | Sebastian Szturo's utility apps | Utilities | Utility apps | Mostly weekly subscriptions | Revenue doubled Jan–Jun 2026 with flat installs after paywall-stack change | Solo | Paywall optimization | S (vendor case study) | [Superwall case study](https://superwall.com/case-studies/how-an-indie-developer-switched-from-revenuecat-back-to-superwall) |
| 21 | Lorik Morina's portfolio | Consumer apps | Various | n/f | $6,772 MRR | Solo | Meta ads at $20/day | S | [MRR Story](https://www.mrrstory.com/stories/this-indie-hacker-reached-6772-mrr-with-just-20day-meta-ads) |
| 22 | Sunflower | Health (habit/recovery, per name; category not confirmed) | n/f | n/f | $1M ARR in 10 months; one paywall change gave +48% revenue | n/f | Paywall optimization | S (third-party guide) | [Stormy](https://stormy.ai/blog/optimizing-paywall-superwall-revenue-increase-2026) |
| 23 | Flirt AI | Dating (AI) | Dating replies | n/f | +83% MRR growth via audience targeting (title only) | n/f | Paywall targeting | S (vendor) | [Superwall case studies](https://superwall.com/case-studies) |
| 24 | George's app | Consumer (n/f) | n/f | n/f | About $17K/month (episode) vs founder's "$8K from monthly subs" (conflict) | Solo non-coder | n/f | S | [Starter Story](https://www.starterstory.com/George) |
| 25 | Hassam's app | Consumer (n/f) | n/f | n/f | $25K MRR, built with Cursor | Solo | n/f | S | [Starter Story](https://www.starterstory.com/hassam) |
| 26 | "Habitat"/$15K MRR app | Productivity | n/f | n/f | $15K MRR with no paid marketing budget (may be the HabitKit episode) | Solo | Content, frugal search ads, ASO | S | [Starter Story episode](https://podsized.io/podcasts/starter-story/episodes/growth-15k-mrr-mobile-app-starter-story-636b57a6-0e79-4bea-a63e-f74449130ec1) |

Additional context:
- Blake Anderson's three-app portfolio (RizzGPT, Umax, Cal AI involvement) is described as more than $10M combined revenue — [Stormy](https://stormy.ai/blog/riz-gpt-influencer-marketing-case-study); [Starter Story via Rosetta: "$10M with 3 iPhone apps"](https://rosetta.to/u/starterstory/he-made-10m-with-3-iphone-apps)
- Superwall's write-up of paywall tactics used by $100K/month apps — [Superwall blog](https://superwall.com/blog/the-paywall-tactics-behind-usd100k-month-apps); Hunter Isaacson "$1M MRR consumer app playbook" — [Stormy](https://stormy.ai/blog/hunter-isaacson-consumer-app-playbook-1m-mrr)
- A secondary roundup reports a solo developer's 2025 revenue of about $602K (about $28K MRR, 25K+ payers), which closely matches the HabitKit numbers and may be the same person — [buildmvpfast](https://www.buildmvpfast.com/blog/602k-revenue-solo-indie-hacker-app-portfolio-breakdown-2026)
- Starter Story runs an iOS-app revenue leaderboard with a "solo score", sourced from founder interviews (self-reported) — [Starter Story iOS data](https://www.starterstory.com/data/ios-app-ideas)
- Verified-MRR leaderboards for mobile apps exist (TrustMRR main list via Stripe/RevenueCat; AppOrbit and StoreMRR via RevenueCat), useful for future verification — [TrustMRR example](https://trustmrr.com/startup/plantrip); [AppOrbit](https://chatgate.ai/post/apporbit); [StoreMRR](https://peerpush.com/p/storemrr)

### Inferences
Patterns shared by the winners:
1. **Emotional or identity "pain" over productivity "nice-to-have".** Quitting porn, panic attacks, looks, weight, faith and manifestation recur. These carry high willingness to pay and high shareability, and they map to Health & Fitness and Lifestyle, the categories with the best trial-to-paid and LTV.
2. **A single 3-second demo moment** (photo → calories, selfie → score, scroll → Bible verse) that works as a TikTok hook.
3. **Distribution before product.** Multiple faceless or persona TikTok accounts (Vix: 25 accounts; FaceKit: AI influencer accounts), concept-testing on TikTok before building.
4. **Hard paywall plus relentless paywall experimentation** (Cal AI: 123 experiments; Sunflower: +48% from one change; Szturo: 2x with flat installs). Weekly plans are common in utilities and AI.
5. **The evergreen ASO path works but is slow.** HabitKit took about 4 years to reach about $28K MRR in a "saturated" category, competing on design, low price ($2/month) and lifetime options, while Habit Pixel sat at $208 MRR after 6 months.
6. **Portfolio approach** (STOPPR, Lorik Morina, Blake Anderson) as a hedge against fad decay.
7. **Fad decay is real.** Umax lost about 50% of revenue in 6 months. Looks and novelty-AI apps need a retention mechanism or a portfolio.
8. **Off-store monetization of an existing audience** (Floga's $120K lifetime pre-sale) is now more viable given US link-out rules (Section 6).

### Gaps
- I could not verify App Store ratings or review counts via the iTunes Search API (blocked), so no app's traction proxy was independently checked.
- Prices for most apps were not found in search snippets.
- Most revenue figures are self-reported or estimated. Only Dailyglowup and Rewired are payment-verified, and both are under $20K/month. Scroll The Bible's $2M MRR claim is unverified.
- Some cases from the search cluster lacked a reliably attributable URL and were excluded: Rasty's "$41K/month first iOS app built in 3 weeks" (Starter Story), "8 products, $1,464 total in year one", and a "305 mobile startups: median $143 MRR, 22% reach $1K, 5% reach $10K" dataset.
- Additional well-known indie apps (one sec, Opal, Structured, Flighty, Streaks, Dark Noise, Widgetsmith, Locket) were not researched because the search budget ran out. No revenue for one sec, Opal or Brainrot was found.

## 4. Marketing channels and cost benchmarks (2025–2026)

### Takeaway
Organic short-form video (faceless or persona TikTok/Reels slideshow accounts, AI-influencer accounts, paid UGC creators on per-view deals) is the dominant growth engine in the 2024–2026 winner stories. Apple Search Ads is the dependable intent channel for evergreen utilities, but US taps cost about $1.56–$2.25. US paid acquisition costs roughly $67 per paying subscriber (Adapty), against a median year-1 revenue per payer of about $23, so paid channels rarely pay back for a median app.

### Cited Findings
**Apple Search Ads (Apple Ads)**
- Adapty 2026 (90 countries): US cost per tap (CPT) about $1.58 vs Algeria $0.11 (14x spread); most expensive niche "Study and Exam Preparation" at $3.45 per tap; cheapest niche "Religion" at $0.24 per tap — [Adapty Apple Ads benchmarks 2026](https://adapty.io/blog/apple-ads-benchmarks-2026/); [Adapty niche CPI/CR](https://adapty.io/apple-ads-for-subscription-apps/)
- Adapty headline blended average CPI $1.34, median CPI $0.51 (global, all countries); AppTweak 2026 global median CPI $1.80 — [Adapty Apple Ads 2026](https://adapty.io/blog/apple-search-ads/); [IntentPlus comparison of four datasets](https://intentplus.io/blog/apple-ads-benchmarks-2026)
- Business of Apps: average CPT $1.56 on Apple Search Ads Advanced; US CPT estimates across sources range $1.56–$2.25 — [Business of Apps](https://www.businessofapps.com/marketplace/apple-search-ads/research/apple-search-ads-costs/); [IntentPlus](https://intentplus.io/blog/apple-ads-benchmarks-2026)
- Category CPT ranges (Apsteq): Finance $3.00–$6.06, Medical & Health $1.50–$4.45, Productivity & Utilities $0.80–$2.50; median $0.92 — [Apsteq](https://apsteq.com/blog/app-mobile-advertising/)
- Category CPI ranges (Admiral Media): Health & Fitness $2–$7, Productivity $3–$9, Education $1.60–$6, Finance $4–$12 — [Admiral Media](https://admiral.media/apple-search-ads-benchmarks/)

**Paid acquisition economics (CAC per payer)**
- Adapty: $1,000 of spend buys about 65 paying subscribers in Brazil vs about 15 in the US (implies about $67 per paying subscriber in the US) — [Adapty SOIS 2026](https://adapty.io/state-of-in-app-subscriptions/)
- Lorik Morina reached $6,772 MRR running Meta ads at $20/day (self-reported) — [MRR Story](https://www.mrrstory.com/stories/this-indie-hacker-reached-6772-mrr-with-just-20day-meta-ads)
- HabitKit reportedly spends only about $100/month on Apple Search Ads, relying on ASO and building in public — [Starter Story via Rosetta](https://rosetta.to/u/starterstory/how-i-built-it-15k-month-mobile-app)

**TikTok / UGC / influencers**
- Vix scaled to about $30K/month using 25 TikTok accounts with persona-led content — [Starter Story digest](https://finance.biggo.com/podcast/fbb0f4aa8eac0d9b)
- FaceKit got 100K downloads in 2 months via AI-generated influencer accounts on TikTok — [stork.ai](https://www.stork.ai/blog/this-ai-trick-made-100k-heres-how)
- Scroll The Bible's growth is attributed to TikTok UGC (teardown) — [Handler teardown](https://gethandler.ai/teardowns/scroll-the-bible/)
- RizzGPT growth via influencer marketing — [Stormy case study](https://stormy.ai/blog/riz-gpt-influencer-marketing-case-study)
- App/tech UGC creator rates: $25–$50 base per posted video plus view bonuses; slideshow ("canvas") UGC at about $1–$2 per 1,000 views (range $0.50–$3) — [Pitchlo](https://www.pitchlo.com/blog/faceless-ugc-creator-jobs) (vendor source; directional)
- UGC agency pricing: $150–$400 per finished video, most B2C app clients near $200–$250 — [The Viral App](https://theviralapp.com/blog/how-much-does-a-ugc-agency-charge-per-video-in/); market-average UGC video $190 in 2026 (Collabstr-based, 21,000+ collaborations); usage rights add 30–50%, whitelisting 30–100%/month — [UGCJobs](https://ugcjobs.com/blog/ugc-creator-salary); [Mark Studios](https://www.markstudios.com/blog/social-media-video-production-cost-2026)

**Paywall/monetization as a "channel multiplier"**
- Cal AI: 123 paywall experiments across 46 placements; trial-to-paid +31%; monthly revenue 3x+ in 10 months — [Superwall Cal AI](https://superwall.com/case-studies/cal-ai)

### Inferences
- **Best channel for a solo builder in late 2026:** an owned portfolio of faceless TikTok/Reels slideshow accounts (cost is mostly time). At $1–2 CPM-equivalent creator deals, 1M views costs about $1–2K. If 0.2–0.5% of viewers install, that is $0.40–$1 per install, cheaper than US Apple Search Ads. The conversion assumption is my inference, not sourced.
- **Apple Search Ads** fits evergreen, intent-driven utilities (habit tracking, blockers, scanners) and low-CPT niches (Religion at $0.24 per tap is about 6.5x cheaper than the US average). Study/exam niches are the most expensive.
- **CAC math:** US Health & Fitness CPI of $2–7 with 10.7% hard-paywall conversion gives about $19–65 per payer, which is only viable with annual plans and above-median year-1 revenue per payer (top 10% is $74+). With freemium (2.1% conversion), the cost rises to $95–333 per payer, which is not viable.
- Reddit as a channel had no 2025–2026 quantitative evidence in the sources found.

### Gaps
- No 2026 TikTok Ads or Meta CPI benchmarks for subscription apps were retrieved (search budget exhausted).
- No quantitative Reddit-channel data was found.
- No source measured the view-to-install conversion of faceless slideshow accounts. All figures are anecdotal.

## 5. Saturated or red-ocean categories for indies

### Takeaway
Direct evidence of saturation is structural rather than category-labeled. About 14,700 new subscription apps launch per month, the top 10% capture 94.5% of revenue (97.9% in Lifestyle), and pre-2020 apps hold 69% of revenue. The most red-ocean areas for a solo builder are general AI chat wrappers (ChatGPT-dominated), AI photo/novelty apps (spike-and-decay), habit trackers and to-dos (thousands of clones; median outcome under $1K MRR), Lifestyle (most concentrated), and Photo & Video (weakest conversion and annual renewal).

### Cited Findings
- New subscription app launches grew about 7x, from about 2,000/month (2022) to about 14,700 (Jan 2026), driven by AI coding tools — [dev.to summary of RC 2026](https://dev.to/axrisi/app-economy-2026-why-new-apps-get-3-of-subscription-revenue-3cj8)
- Revenue concentration: top 10% take 94.5% overall; Lifestyle 97.9% — [ppc.land on Adapty](https://ppc.land/95-of-app-subscription-revenue-goes-to-top-10-adaptys-2026-benchmark-report/)
- Photo & Video and Gaming lag significantly on trial-to-paid (RC 2026); Productivity and Photo & Video have the lowest annual first-renewal (23%) — [RC SOSA 2026](https://www.revenuecat.com/state-of-subscription-apps); [RC renewal rates](https://www.revenuecat.com/blog/growth/average-subscription-renewal-rates-by-app-category)
- Entertainment has the worst trial-to-paid (19.1%) in Adapty's data — [ppc.land on Adapty](https://ppc.land/95-of-app-subscription-revenue-goes-to-top-10-adaptys-2026-benchmark-report/)
- AI chatbots: ChatGPT still earns about 2x all rivals combined (Apr 2026) — [Appfigures](https://appfigures.com/resources/insights/chatgpt-ai-chatbot-revenue-rivals)
- AI image trends drive download spikes but little revenue (Nano Banana about $181K in 28 days) — [TechCrunch](https://techcrunch.com/2026/05/04/image-ai-models-now-drive-app-growth-beating-chatbot-upgrades/); AI photo downloads fell from a 23M/month peak (2023) to about 7M — [Appfigures TWIA](https://appfigures.com/resources/this-week-in-apps/20260213)
- AI apps churn about 30% faster than non-AI apps — [ppc.land on RC](https://ppc.land/ai-apps-earn-41-more-per-user-but-churn-30-faster-revenuecat-finds/)
- Habit trackers: a new solo entrant (Habit Pixel) reached only $208 MRR 6 months after launch; the category leader among indies (HabitKit) needed about 4 years — [Indie Hackers: Habit Pixel](https://www.indiehackers.com/post/from-0-to-1k-mrr-in-8-months-bootstrapping-habit-pixel-as-a-solo-dev-684b6c056d); [theswiftk roundup](https://theswiftk.it.com/blog/zero-to-10k-mrr-indie-ios-app)
- Screen-time blockers have many small entrants: Rewired at about $560–$1,905 MRR (verified), a Flippa-listed app at $7.5K MRR — [TrustMRR Rewired](https://trustmrr.com/startup/rewired-screen-time-blocker); [Flippa](https://flippa.com/13936174-profitable-fast-growing-ios-screentime-app-7-5k-mrr-90k-arr-1-500-subscribers)
- Looks/face-rating apps: many copycats with modest verified revenue (Dailyglowup about $15.5K/month); App Store has new entrants such as Peakd at $14.99/month premium — [TrustMRR Dailyglowup](https://trustmrr.com/startup/dailyglowup); [Peakd App Store](https://apps.apple.com/us/app/peakd-looksmax-ai-glow-up/id6768339079)
- Stoic-style AI journals: small clones earn very little (a Flippa listing at about $47/month profit) — [Flippa Stoxia](https://flippa.com/13528715-ai-stoic-journal-stoxia)
- Calorie tracking now has a consolidated incumbent: MyFitnessPal acquired Cal AI (Mar 2026) — [TechCrunch](https://techcrunch.com/2026/03/02/myfitnesspal-has-acquired-cal-ai-the-viral-calorie-app-built-by-teens/)

### Inferences
- **Red ocean for a new solo entrant:** (1) general AI chat/assistant wrappers; (2) AI photo/headshot/filter apps; (3) habit trackers, to-do lists and planners (category leaders such as HabitKit and Structured have years of reviews and ASO rank; Productivity annual renewal is the weakest at 23%); (4) meditation/sleep (Calm/Headspace-era incumbents; no 2026 data found, inference only); (5) AI calorie trackers (Cal AI plus MyFitnessPal consolidation, plus many clones); (6) face-rating/looksmax (many clones, fad decay); (7) screen-time blockers (crowded, mostly small revenue).
- **Why they're saturated:** near-zero build cost because of AI coding (about 7x more launches), so clones appear within weeks of any viral hit; App Store search results are dominated by incumbents with review moats; generic positioning can't win short-form attention; and AI features are commoditized by free on-device and frontier models.
- **Relative openings (inference):** niche, identity-specific versions of proven formats (e.g., faith-based content feeds, where Religion has the lowest Apple Ads CPT at $0.24 and Scroll The Bible shows large demand; specific addictions; specific medical conditions like Rootd's panic attacks), and categories with strong renewal but low indie presence (Travel, Business, Education weekly plans).

### Gaps
- No 2026 source explicitly ranked categories by saturation. The search for indie-saturation commentary (habit trackers, to-dos, meditation, AI wrappers) could not run because the budget was exhausted.
- No 2026 data on meditation/sleep app revenue trends was found.
- No App Store keyword-difficulty or "number of competing apps per keyword" data was retrieved.

## 6. New Apple capabilities (iOS 26 / iOS 27, 2025–2026) and App Store policy changes

### Takeaway
The biggest 2026 change for indie economics, if Apple's WWDC26 guide is read correctly, is that the Foundation Models framework now (a) exposes Apple's on-device model for free, offline use, (b) supports pluggable cloud models (Claude, Gemini and others) through a common LanguageModel protocol, and (c) gives Small Business Program developers with fewer than 2M first-time downloads Private Cloud Compute models at no cloud API cost. That would remove inference cost, the main margin drag on AI apps. Siri plus App Intents and App Schemas, and Spotlight semantic indexing, open new "action surface" distribution. On policy, US apps can currently link to external web checkout without Apple commission, but this is under active litigation (Supreme Court review), so treat the zero-commission window as provisional.

### Cited Findings
**WWDC26 / iOS 27 (June 2026)**
- Apple WWDC26 iOS guide: Foundation Models is a native Swift API to the on-device model behind Apple Intelligence; developers can now work with any language model (Apple Foundation Models, cloud models like Claude and Gemini, or any provider conforming to the LanguageModel protocol); Small Business Program members with fewer than 2 million first-time downloads can reach Private Cloud Compute models at no cloud API cost — [Apple WWDC26 iOS guide](https://developer.apple.com/wwdc26/guides/ios/)
- Apple: Siri now connects to more of what people do in apps through App Intents; entity schemas contribute app content to the Spotlight semantic index — [Apple WWDC26 iOS guide](https://developer.apple.com/wwdc26/guides/ios/); WWDC26 session "Build intelligent Siri experiences with App Schemas" — [Apple WWDC26 session 240](https://developer.apple.com/videos/play/wwdc2026/240/)
- Secondary or unconfirmed claims: Foundation Models gains image input (not confirmed on Apple's page); Core ML renamed "Core AI"; Xcode 27 on-device code completion; SiriKit deprecation on a 2–3 year window; system-wide MCP for Siri (ChatForest says unconfirmed, with Apple's confirmed MCP work limited to Xcode 27) — [ChatForest](https://chatforest.com/builders-log/ios-27-apple-intelligence-framework-decision-guide-wwdc-2026/); [Lushbinary](https://lushbinary.com/blog/wwdc-2026-announcements-ios-27-siri-developer-guide/); [Stork: WWDC 2026 graded](https://www.stork.ai/blog/wwdc-2026-graded-what-apple-shipped-ios-27); [dev.to](https://dev.to/malik_chohra/wwdc-2026-app-intents-foundation-models-and-what-rn-devs-should-ship-3o8a)

**App Store policy: US external payment links (Epic v. Apple)**
- Ninth Circuit (Dec 2025) upheld the anti-steering injunction in part: Apple may require parity in size, form and placement between IAP and external links, and may charge a commission limited to costs reasonably necessary for coordinating linked-out purchases, with the district court to set rate and timing — [Apple FY2026 10-K](https://www.sec.gov/Archives/edgar/data/0000320193/000032019326000026/aapl-20260926.htm); [Neonpay](https://www.neonpay.com/blog/apple-app-store-alternative-payment-fees-what-developers-pay-in-2026)
- Supreme Court agreed (July 2026) to hear Apple's appeal over the 27% external-payment fee in the Epic contempt case — [gHacks](https://www.ghacks.net/2026/07/02/supreme-court-agrees-to-hear-apple-appeal-over-27-external-payment-fee-in-epic-contempt-case/); [Tech Insider](https://tech-insider.org/apple-scotus-27-percent-app-store-fee-2026/). CONFLICT/unclear: Courthouse News reports Apple was "denied Supreme Court bailout from sanctions" (likely an earlier stay denial; not read in full) — [Courthouse News](https://www.courthousenews.com/apple-denied-supreme-court-bailout-from-sanctions-in-epic-app-store-fight/); Cleverbridge says an April 2026 decision let the commission issue move forward — [Cleverbridge](https://grow.cleverbridge.com/blog/apple-vs-epic-a-legal-turning-point)
- Current status per sources: US link-out purchases currently exclude the disputed 27% fee (provisional). Vendor blogs describe a possible future 27% link-out commission (12% for Small Business Program) plus about 3% payment processing — [gHacks](https://www.ghacks.net/2026/07/02/supreme-court-agrees-to-hear-apple-appeal-over-27-external-payment-fee-in-epic-contempt-case/); [TechSOS](https://techsos.blog/apple-app-store-external-payments-guide)
- RevenueCat guidance on testing web checkout after the anti-steering ruling (no measured conversion data surfaced) — [RevenueCat blog](https://www.revenuecat.com/blog/growth/apple-anti-steering-ruling-monetization-strategy)
- Counter-evidence on margin vs conversion: in a weekly-subscription-heavy app, a small conversion dip cost more than the store fee savings (vendor case study) — [Superwall case study](https://superwall.com/case-studies/how-an-indie-developer-switched-from-revenuecat-back-to-superwall)
- Off-store pre-sales can keep 100% of revenue: Floga's lifetime pre-launch did over $120K in 24 hours outside the stores — [Indie Hackers](https://www.indiehackers.com/post/tech/from-physical-product-to-10k-mo-app-JLVZDxJ9RfjdYdvINqgp)

### Inferences
- **Genuinely new product unlocks (ranked):**
  1. Free on-device and Private Cloud Compute LLM inference for small developers. This flips the AI-app P&L: AI apps already earn 41% more per payer, and removing per-request API cost makes "AI inside a vertical tracker" (journaling, food/fitness logging, study coaching, personal finance categorization) viable at $3–5/month price points and even freemium.
  2. Siri/App Intents/App Schemas plus Spotlight semantic indexing as a new distribution and engagement surface: voice-first logging ("log 2 eggs", "start my fast") and system-level discoverability.
  3. Privacy-first positioning (on-device) as a differentiator in sensitive niches such as addiction, mental health and faith, where the winners in Section 3 cluster.
- **External links:** for apps with an existing audience, web checkout (and web-to-app funnels from TikTok) can recover about 12–27 points of margin minus about 3% processing, but must be A/B tested because conversion losses can exceed fee savings. Plan for a cost-based commission possibly being reinstated after the Supreme Court decision.

### Gaps
- **iOS 26 (WWDC25, June 2025) specifics could not be verified this session** because the search budget ran out. From model knowledge, not re-checked, these should be verified against developer.apple.com before use:
  - Foundation Models framework launched in iOS 26: on-device model of roughly 3B parameters, guided generation via @Generable, tool calling, about 4K-token context, requires Apple Intelligence-capable devices.
  - AlarmKit: third-party alarms and timers that break through Silent/Focus, with Live Activity UI.
  - Visual Intelligence integration via App Intents, so apps can surface results for on-screen or camera content.
  - Declared Age Range API, for age-assurance laws such as Texas and Utah app-store age-verification statutes.
  - SpeechAnalyzer: new on-device long-form speech-to-text.
  - BGContinuedProcessingTask for long-running background work.
  - Live Activities appearing in CarPlay and on the Mac.
  - Liquid Glass design.
  - A HealthKit Medications API (uncertain).
- No source was retrieved on 2025–2026 changes to Screen Time/FamilyControls APIs, Wallet/Apple Pay developer APIs, or new HealthKit data types.
- No measured web-checkout vs IAP conversion data was found.
- The exact current US link-out commission status (zero vs cost-based) as of November 2026 is unresolved because sources conflict.

## 7. Failure patterns: why most indie subscription apps never reach $1K MRR

### Takeaway
The base rate is brutal. 57.7% of new subscription apps earn less than $1,000 in total lifetime revenue (Adapty), and only 4.6% reach $10K MRR within 2 years (RevenueCat). Failure is driven by: no distribution engine in a market flooded by about 14,700 new apps a month; freemium or soft paywalls (2.1% conversion vs 10.7%); generic, undifferentiated "tool" positioning in incumbent-dominated categories; early churn (35% of annual cancellations in month 1); and paid acquisition that costs more than year-1 revenue per payer.

### Cited Findings
- 57.7% of new subscription apps generate less than $1,000 total revenue; 22.4% earn $1K–$10K — [ppc.land on Adapty 2026](https://ppc.land/95-of-app-subscription-revenue-goes-to-top-10-adaptys-2026-benchmark-report/)
- Only 4.6% of new apps reach $10K MRR within 2 years; pre-2020 apps hold 69% of revenue — [dev.to summary of RC 2026](https://dev.to/axrisi/app-economy-2026-why-new-apps-get-3-of-subscription-revenue-3cj8)
- Bottom quartile of apps shrank MRR by more than 33% YoY; median growth only 5.3% — [9to5Mac](https://9to5mac.com/2026/03/04/new-report-looks-into-the-sustainability-of-the-subscription-app-market-for-2026/)
- About 7x more launches (14,700/month in Jan 2026) because of AI coding tools — [dev.to summary of RC 2026](https://dev.to/axrisi/app-economy-2026-why-new-apps-get-3-of-subscription-revenue-3cj8)
- Freemium converts 2.1% vs hard paywall 10.7% (D35), with no retention benefit — [RC SOSA 2026](https://www.revenuecat.com/state-of-subscription-apps)
- Short trials (4 days or less) convert at a 25.5% median vs 42.5% for 17–32 day trials — [RC free trial length](https://www.revenuecat.com/blog/growth/free-trial-length)
- Month 1 = 35% of annual cancellations; annual churners rarely return — [9to5Mac, May 2026](https://9to5mac.com/2026/05/27/new-report-shows-annual-app-subscribers-rarely-return-after-they-cancel/)
- US paid acquisition: about 15 payers per $1,000 (about $67/payer) — [Adapty SOIS 2026](https://adapty.io/state-of-in-app-subscriptions/); vs median year-1 revenue per payer of about $23 (secondary) — [arpubrothers](https://arpubrothers.com/blog/revenuecat-subscription-app-report-2026/)
- Anecdotes: a solo developer with 3 apps at $25 total MRR after 6 months — [Medium](https://medium.com/@serhii.hryn.dev/3-apps-25-mrr-and-6-months-of-lost-sleep-my-indie-dev-journey-so-far-2f52b41b61c6); Habit Pixel at $208 MRR at about month 6 — [Indie Hackers](https://www.indiehackers.com/post/from-0-to-1k-mrr-in-8-months-bootstrapping-habit-pixel-as-a-solo-dev-684b6c056d); small stoic-journal clone at about $47/month profit — [Flippa](https://flippa.com/13528715-ai-stoic-journal-stoxia)
- Novelty decay: Umax revenue about halved in 6 months; image-model download spikes don't convert — [Baijing](https://www.baijing.cn/article/50157); [TechCrunch](https://techcrunch.com/2026/05/04/image-ai-models-now-drive-app-growth-beating-chatbot-upgrades/)
- AI apps churn 30% faster and may see higher refunds — [ppc.land](https://ppc.land/ai-apps-earn-41-more-per-user-but-churn-30-faster-revenuecat-finds/); [RC community](https://community.revenuecat.com/general-questions-7/higher-refund-rate-6814)
- Typical indie timelines: $10K MRR estimated at 18–36 months for solo iOS subscription developers (blog estimate, not measured) — [theswiftk](https://theswiftk.it.com/blog/zero-to-10k-mrr-indie-ios-app)

### Inferences
Main failure modes, ranked by evidence weight:
1. **No distribution plan.** The winners in Section 3 built distribution (TikTok accounts, audience, ASO) before or alongside the product. The losers ship and wait.
2. **Wrong paywall model.** Freemium or a soft paywall at 2.1% conversion means even 10K downloads yields about 210 payers, which at about $23 year-1 revenue each is about $4.8K a year, under $500/month.
3. **Generic positioning in crowded, incumbent-held categories** (habit, to-do, meditation, AI chat), with no emotional hook or demo moment.
4. **Weak early retention.** No onboarding-to-habit loop, which shows up in month-1 annual cancellations and weekly-plan churn.
5. **Paid acquisition without payback.** US CAC of about $67/payer vs about $23 median year-1 revenue.
6. **Fad dependence without a portfolio or retention mechanic** (looks, AI photo).
7. **Giving up before compounding.** Even "fast" medians are 58 days to $1K for apps that make it. ASO-led winners like HabitKit took years.

### Gaps
- No rigorous cohort study isolates causes of indie failure. The causes above are inferred from aggregate benchmarks plus anecdotes.
- The "305 mobile startups" dataset (median $143 MRR; 22% reach $1K; 5% reach $10K) appeared in search summaries without a confirmed source URL, so it is excluded from findings.
