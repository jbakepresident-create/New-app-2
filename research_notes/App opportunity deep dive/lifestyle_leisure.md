# Lifestyle & Leisure App Opportunities (Food, Travel, Cars, Entertainment, Social, Sports, Hobbies), as of Nov 4, 2026

> **Read this first: how the evidence was gathered and its limits**
> - The Apple endpoints named in the brief were **blocked by this session's network proxy**: `itunes.apple.com` returned 403 on CONNECT, and so did `apps.apple.com`. `www.reddit.com` was blocked by curl and also by WebFetch. WebFetch also failed for `justuseapp.com`, `unstar.app` and `macrumors.com`. Because of this, **I could not pull raw App Store review feeds or count review themes systematically.**
> - All evidence comes from ~22 web searches before the session's shared web-search budget ran out. Search results come back as model-written summaries with snippets. **Quotes below appeared as quoted text in those snippets.** Their sources are Trustpilot, BBB, review aggregators (AppsHunter, Kimola, marlvel.ai, unitQ, JustUseApp), forums and news. Check each quote word-for-word before you publish it.
> - Aggregators like Kimola, marlvel.ai and Unstar are automated or vendor sites, so their numbers are directional only. Sources that sell a competing app are labelled.
> - **Not researched at all, because the search budget ran out:** Strava, AllTrails, Fishbrain, golf GPS apps, Simply Piano and Yousician, wardrobe apps (Acloset, Indyx, Whering), skincare apps, commuting and transit, Partiful, Meetup, 222, Letterboxd, Serializd (beyond mentions), JustWatch/Reelgood couples watchlists, Instacart, SuperCook, GasBuddy, Waze, car buying, Google Flights alternatives, and USDA food-waste data. See the Gaps sections.

---

## Q0. Which 8–15 candidate problems are strongest, and which top 3–5 should a solo/small-team iOS subscription app pursue?

### Takeaway
Eleven candidate problems had usable evidence. The three strongest picks for a solo iOS subscription app are:
1. **A show-and-movie tracker for TV Time's displaced users** (couples and households in particular). TV Time shut down on July 15, 2026 and deleted user data. The remaining options are fragmented.
2. **A tool that turns saved social-media recipes into this week's dinners, aimed at one segment.** Generic recipe import is crowded, but the incumbents fail on reliability and paywalls, and segments such as high-protein/GLP-1 eaters and picky-kid families have no strong tool.
3. **A sports "where do I watch my team tonight" assistant.** 87% of fans are frustrated. The catch is that building accurate data is hard.

Group-trip coordination with uncapped expense splitting is a reasonable 4th pick, but people use it only occasionally. The highest-pain problems (adult friendship, EV charging, parking tickets, travel-booking refunds) are a **poor fit for a solo builder**: they depend on marketplace liquidity, crowd-sourced data networks, or integration with cities or vendors.

### Cited Findings

#### Candidate cards (a = problem, b = who and how many, c = frequency, d = evidence and quotes, e = incumbents, f = gap, g = willingness to pay, h = solo feasibility, i = concept)

**C1. "I save recipes from TikTok/Instagram/YouTube and never cook them" (save-to-cook gap)**
- (a) Recipe discovery has moved to short video. Saved videos sit in Instagram or TikTok folders that have no ingredient list, grocery list or plan, so they rarely get cooked.
- (b) In a Talker Research survey for Maruchan (June 2026, n=2,000 social media users), 7 in 10 said cooking videos on social media made them want to try new foods. — [News-Argus syndication, "How has social media transformed cooking" (attribution to this URL inferred from the search summary)](https://www.newsargus.com/news/national/how-has-social-media-transformed-cooking/article_b4c05664-6e70-589d-8752-b8038c1d38d1.html). Only **13%** of US adults follow recipes consistently, 62% usually cook "quick and easy" meals, and 43% repeat the same meals several times a week (QuestionPro, June 26–30 2025, n=1,000, ±3.1). — [QuestionPro](https://www.questionpro.com/research/americas-real-eating-habits/)
- (c) Saving happens daily or weekly while scrolling. Deciding on dinner happens daily.
- (d) A qualitative FishDog study describes a "save-to-cook gap": participants "save far more recipes than they actually cook." — [FishDog research](https://fishdog-web.pages.dev/research-studies/cooking-content-weeknight-applicability-drives-conversion). A George Mason University study found that what people pin differs from what they cook (attribution inferred from the search summary; no percentage given). — [thedoctorwillseeyounow.com](https://thedoctorwillseeyounow.com/content/nutrition/art6411.html). ReciMe user reviews (undated snippets) include: *"the ad that got me to download said you could import recipe videos straight from your favorite places like Facebook, Instagram, and TikTok"*; *"ReciMe does not do this 75% of the time"* (on converting saved Instagram recipes); *"won't even download from Instagram anymore"*; and *"You only get 8 recipe uploads before you have to pay for more."* — [AppsHunter ReciMe reviews](https://appshunter.io/ios/app/1593779280/reviews); [marlvel.ai ReciMe reviews](https://marlvel.ai/apps/recime-recipes-meal-planner/reviews)
- (e) Incumbents:
  - **ReciMe** (iOS id 1593779280) is about 4.7–4.8★ across roughly 290K reviews according to aggregators, which conflict on these figures. It costs $6.99/mo or $59.99/yr in one market, and its free tier caps uploads. A May 2026 update (v5.2.5) reportedly fixed free-tier limits being wrongly applied to paying $40/yr subscribers. — [marlvel.ai](https://marlvel.ai/apps/recime-recipes-meal-planner/reviews); [MWM market intel](https://mwm.ai/es/articles/recime-v5-2-5-fixes-premium-recipe-upload-limits-in-may-2026-boosting-ratings)
  - **Paprika 3** is 4.89★ from 65.4K ratings and is a one-time purchase per platform. — [AppGoblin](https://appgoblin.info/apps/1303222868). Complaints: recipes lost when switching phones, favorites not syncing between iPhone and iPad, and "sync requiring an additional purchase per platform". Paprika's own listing says Cloud Sync is free, so this conflicts. — [Unstar 2026 roundup (vendor blog; pulled 1–3★ reviews from early 2026 across six apps)](https://unstar.app/blog/allrecipes-yummly-nyt-cooking-paprika-mealime-recipe-apps-ranked-2026). A 2023 Plan to Eat review (written by a competitor) says Paprika's calendar "is just a calendar for recipes" that isn't connected to the shopping list. — [Plan to Eat](https://plantoeat.com/?p=38013)
  - **Samsung Food (ex-Whisk)**: reports of all recipes lost after a sync (April 2023), an update that wiped a whole library with no support response, and imports from Instagram and TikTok that fail or work inconsistently. — [JustUseApp problems page](https://justuseapp.com/en/app/1133637674/whisk-recipes-grocery-list/problems). One reviewer said its Chrome extension shows "just getting a spinning wheel forever" after the rebrand, and the extension deliberately leaves out instructions. — [Chrome Web Store reviews](https://chromewebstore.google.com/detail/samsung-food/gfoijmnbedaipllfimaogeepohalbgka/reviews)
  - **A flood of new AI importers**: Flavorish, Deglaze, RecipeSnap, KusKus, Cook Paddy and Reecta. Product Hunt pages for MyRecipe, ReciBook and Sous show 2–3 followers, and Pantree had 0 upvotes at launch. — [Product Hunt MyRecipe](https://www.producthunt.com/products/myrecipe); [hunted.space Pantree](https://hunted.space/product/pantree); [TechPP, Jun 2026](https://techpp.com/2026/06/18/turn-instagram-food-videos-to-actual-recipes/); [Flavorish blog (vendor)](https://www.flavorish.ai/blog/save-recipes-from-instagram-tiktok-youtube-facebook)
  - Free do-it-yourself routes include Cooklang plain-text files and a plain Google Doc. — [Cooklang](https://cooklang.org/blog/20-save-recipes-from-social-media/)
- (f) The gap is not the import step, which is now commoditized. Three things are missing:
  - **Reliable import** from Instagram and TikTok, the most-cited failure.
  - **No punitive save caps.** Free tiers of 8 or 50 recipes cause resentment. — [Google Play listing via AppFollow (Paprika free = 50 recipes)](https://apps.appfollow.io/android/paprika-recipe-manager/com.hindsightlabs.paprika?country=us)
  - **Closing the loop from save to cook**: saved video → "cook this week?" → plan → merged grocery list → cook mode, tuned to the household's constraints.
- (g) Willingness to pay is proven. ReciMe sells $59.99/yr with a very large review base, and Paprika sells one-time licences per platform with 65K ratings. The negatives: people resent paywalls that hit before the first value moment, and they fear losing data on sync.
- (h) Solo feasibility is high. It needs an iOS share extension, caption/description scraping, on-device or server transcription of video audio, LLM structuring, and a grocery list. The risks are Instagram and TikTok anti-scraping changes and very little room to differentiate on import alone.
- (i) Concept sketch, **"Saved → Supper"**:
  - Share any reel to the app and it becomes a structured recipe with the creator credited.
  - Every Sunday it proposes 4 dinners drawn from *your own saves*, filtered by protein target, kid acceptance, time and budget.
  - It produces one merged grocery list and sends "you saved this 3 weeks ago, cook it tonight?" nudges.
  - Monetization: unlimited saves on free; subscription for planning, lists and household sharing.

**C2. Dinner decision fatigue in under-served segments (GLP-1/high-protein eaters; picky-kid families)**
- (a) The "what's for dinner" decision recurs every day. Generic planners ignore hard constraints such as small portions and high protein on GLP-1 drugs, or a child with five safe foods.
- (b) In a Factor/Wakefield survey (fieldwork December 2024, released January 2025; n=1,000 married or cohabiting US adults), nearly half would give up social media forever to never plan dinner again, and 44% would trade a dream vacation for someone else planning and cooking dinner every night. The sample is couples only and the sponsor sells meal kits. — [BusinessWire/Factor](https://www.businesswire.com/news/home/20250127681988/en). Respondents spend about 16 minutes a day deciding what to eat for dinner (Talker Research for Alaska Seafood; year unconfirmed). — [Daily Voice](https://dailyvoice.com/tags/meal-planning/)
  - GLP-1s (KFF, late 2025): 18% of US adults have ever taken one and 12% currently take one, roughly double the May 2024 figures (12% and 6%). Among ages 50–64, 30% have ever taken one and 22% currently do. — [eMarketer](https://www.emarketer.com/content/twice-many-us-consumers-now-using-glp-1s); [Quartz](https://qz.com/1-in-5-us-adults-take-ozempic-glp-1-survey). A Gallup estimate in the same coverage was 12.4%, up from 5.8% in February 2024. Most insured users still pay at least part of the drug cost. — [AJMC](https://www.ajmc.com/view/most-insured-adults-still-have-to-pay-at-least-part-of-the-cost-of-glp-1-drugs)
  - Picky eaters: in the C.S. Mott Children's Hospital National Poll (April 2024), parents named getting a healthy diet into a picky eater as their biggest mealtime challenge, and many cook special meals for picky children. — [Drugs.com/HealthDay](https://drugs.com/news/many-parents-cook-special-meals-little-picky-eaters-poll-118824.html)
- (c) Daily.
- (d) No App Store or Reddit quotes were retrieved specifically for these segments (see Gaps).
- (e) Incumbents for picky-kid families are tiny or new:
  - **EatPal**: "food-chaining science + AI meal plans… go from 5 safe foods to 50," with a family tier that has meal voting. — [App Store EatPal](https://apps.apple.com/app/id6762243166)
  - **Snack'd**: pitched at parents who would otherwise "cook three different dinners," with only 3 ratings. — [AppGoblin Snack'd](https://appgoblin.info/apps/6756082783)
  - **Picky Eaters**: launched February 2025. — [Product Hunt](https://www.producthunt.com/products/picky-eaters/launches)
  - NYU Langone ran a research-stage app study for families with picky eaters. — [NYU Langone](https://nyulangone.org/news/parents-new-app-research-study-will-help-families-picky-eaters)
  - A 2026 editorial roundup recommends Eat This Much for picky households. — [Nishiv roundup](https://www.nishiv.com/best-meal-planning-apps-for-families-in-2026/)
- (f) No search surfaced a dominant, well-reviewed planner for GLP-1 users or for picky-kid families. That is not proof one doesn't exist (see Gaps).
- (g) GLP-1 users already spend heavily out of pocket on the drug (AJMC, above). No app-specific willingness-to-pay data was found for these segments.
- (h) Solo feasibility is high: the same stack as C1 plus constraint-aware planning. Avoid medical claims, because "GLP-1 nutrition" can drift into health-claim and regulatory territory.
- (i) See C1. The best play is to merge C1 and C2: "Saved → Supper" with a segment preset ("High-protein small portions" or "Picky-kid family: one base meal, two variations").

**C3. Show/movie tracking after TV Time's shutdown (plus couples' shared watchlist and where-to-watch)**
- (a) People track episodes across a dozen streaming services. The largest dedicated tracker closed and deleted user histories. Its users moved to a scattered set of replacements.
- (b) TV Time shut down on **July 15, 2026**. Parent Whip Media pivoted to enterprise AI and said it was "no longer sustainable to continue operating the service as a free app," with "not enough demand for a paid app." All personal data was to be deleted after July 15. — [TechCrunch, Jul 2 2026](https://techcrunch.com/2026/07/02/popular-tv-tracking-app-tv-time-is-shutting-down-as-company-focuses-on-ai/); [MacRumors](https://www.macrumors.com/2026/07/02/show-tracking-app-tv-time-shutting-down/); [Whip Media support notice](https://whipmedia.freshdesk.com/support/solutions/articles/68000029988-tv-time-is-shutting-down); [Cord Cutters News](https://cordcuttersnews.com/a-popular-cord-cutting-service-is-shutting-down/)
  - A competitor's press release claims TV Time had **26 million users** whose watch history was deleted. Treat that as a vendor claim. — [press release via myknoxcountynews](https://www.myknoxcountynews.com/online_features/press_releases/article_16c379d7-0e06-5564-a6e7-176c5a46b823.html)
  - Blue Torch Capital acquired Whip Media in early 2025. — [Cord Cutters News](https://cordcuttersnews.com/a-popular-cord-cutting-service-is-shutting-down/)
- (c) Several times a week (episode check-offs). No usage statistic was found.
- (d) More than 28,000 users signed a petition asking for crowdfunding or a subscription to save the app, and for a "TV Time 2.0" successor. — [Change.org petition](https://www.change.org/p/save-tv-time-from-closure-and-launch-a-successor-soon); [Cord Cutters News](https://cordcuttersnews.com/a-popular-cord-cutting-service-is-shutting-down/). Users said they valued the per-episode forum where they could socialize around the latest episode (same source). An undated review analysis lists earlier complaints: missing episodes, incorrect data, customization and moderation problems. — [Kimola TV Time report](https://kimola.com/reports/unlock-insights-tv-time-app-user-feedback-analysis-app-store-fr-144807)
- (e) Displacement targets:
  - **Trakt**, **Serializd**, **Simkl** (servers reportedly struggled under the sign-up wave), **Showly**, and **Bingers** (imports TV Time archives). — [Cord Cutters News](https://cordcuttersnews.com/a-popular-cord-cutting-service-is-shutting-down/); [iThinkDiff, "10 best replacements"](https://www.ithinkdiff.com/best-tv-time-alternatives-app-store/)
  - **JustWatch** launched a TV Time migration tool. — [9to5Mac, Jul 9 2026](https://9to5mac.com/2026/07/09/as-tv-time-prepares-to-shut-down-justwatch-launches-migration-tool/)
  - **Moviebase** published a migration guide. — [Moviebase](https://moviebase.app/resources/tv-time-shutting-down)
- (f) No one app combines all of:
  - TV Time-grade episode tracking and calendar
  - accurate "where to watch on *my* services"
  - a **shared household/couples queue** ("what are we watching tonight that neither of us has seen?")
  - per-episode spoiler-safe reactions
  - guaranteed data export, so users never lose history again (the trust lesson from the shutdown)
- (g) Mixed signals.
  - Negative: TV Time itself concluded there was "not enough demand for a paid app".
  - Positive: 28K+ petitioners asked to pay; Trakt and other trackers run paid VIP tiers (pricing not verified this session).
  - Inference: a lean indie can be profitable at a scale a VC-backed company could not.
- (h) Solo feasibility is medium-high. It needs a metadata API, availability data (JustWatch-type data may need licensing), iCloud/CloudKit sync, and TV Time CSV/GDPR-export import. The social forum layer is hard to build solo and needs moderation.
- (i) Concept sketch, **"Couch"**:
  - Import your TV Time, Trakt or Letterboxd export.
  - Up-next for each person, plus a **shared "Us" queue** that intersects two people's unwatched lists and services.
  - "Leaving [service] in 7 days" alerts.
  - One-tap export at any time.
  - Pricing: about $2.99/mo or $19.99/yr for couples sync, smart alerts and stats.

**C4. Sports fans: "Where can I watch my team's game tonight?"**
- (a) Sports rights are split across broadcast, regional networks and many streaming services, so fans can't easily tell which service carries a given game.
- (b) Hub Entertainment Research, Wave 4 (2025, n=3,802 US fans): 65% say using several services to follow a season is a hassle. — [NewscastStudio, Oct 16 2025](https://www.newscaststudio.com/2025/10/16/majority-of-fans-frustrated-by-splintered-sports-rights-new-data-shows); [Advanced Television](https://www.advanced-television.com/2025/10/16/survey-sports-content-rules-but-fragmentation-causing-frustration)
  - **Hub Wave 5 (Dec 2025–Jan 2026, n=3,733): 87% are at least somewhat frustrated figuring out where to watch, and about 25% are "very frustrated."** 60% are more likely to subscribe to a service that carries all of a sport or league's rights. — [TheDesk, Mar 2026](https://thedesk.net/2026/03/hub-sports-fans-still-frustrated-by-broadcast-streaming-tv-deals/); [TV Technology](https://tvtechnology.com/insights/analysis/study-overloaded-sports-fans-fed-up-with-fragmented-sports-rights)
  - Nexxen (2026): 83% of fans say networks and streaming platforms should offer clear guides to where games are available. — [TheDesk, Oct 2026](https://thedesk.net/2026/10/nexxen-sports-fans-still-struggling-to-find-games-on-tv/)
  - Bango (June 2026): 32% of subscribers routinely sign up for a single season and then cancel. — [Señal News, Jul 2026](https://senalnews.com/en/data/usa-sports-streaming-reaches-tipping-point-as-fragmentation-drives-demand-for-bundles/amp)
  - eMarketer also covers the fragmentation problem. — [eMarketer](https://www.emarketer.com/content/sports-streaming-has-fragmentation-problem--fans-losing-patience)
- (c) Weekly, or several times a week, in season, per team.
- (d) No App Store or Reddit quotes were retrieved (see Gaps).
- (e) Not researched: league apps, ESPN, theScore, FotMob and similar (see Gaps).
- (f) What fans want, per Nexxen's 83%, is a personal, team-centric answer: "your game, tonight, this channel or app; you have it / you don't; cheapest way to get it; blackout warning."
- (g) Fans already pay for many services, and 32% churn by season (Bango). That suggests an assistant that tells you which service to subscribe to this month, and when to cancel, could pay for itself. That benefit is inferred, not measured. Affiliate revenue from streaming sign-ups is a second revenue line.
- (h) Solo feasibility is medium-low. **Data is the hard part**: per-game, per-market rights, local broadcasts and blackouts change constantly. A narrow MVP covering one or two leagues, with curated rights tables plus schedule APIs, is plausible. Accuracy errors will destroy trust.
- (i) Concept sketch, **"Tonight's Game"**:
  - Pick your teams and your services.
  - A push notification two hours before the game: "Bills–Dolphins: Prime Video (you have it)."
  - A monthly "subscribe/cancel" optimizer.
  - Pricing: about $2.99/mo per season, or a "season pass" in-app purchase.

**C5. Book tracking: Goodreads stagnation**
- (a) The dominant reading tracker (Amazon's Goodreads) is buggy and rarely updated. Its alternatives each carry their own controversies.
- (b) StoryGraph had about 3M users in November 2024, up from 2M in December 2023. — [HuffPost UK](https://huffingtonpost.co.uk/entry/storygraph-amazon-goodreads-jeff-bezos_l_673e2013e4b0f17b35e0a123)
- (c) Weekly or per book.
- (d) Goodreads reviews:
  - February 2025: *"However, it seems there has been a recent update and the app is no longer compatible with my phone."* Another: the app *"is so buggy and makes the experience so bad."* — [JustUseApp Goodreads reviews](https://justuseapp.com/en/app/355833469/goodreads-book-reviews/reviews)
  - Reviews take about 10 seconds to load. — [Kimola Goodreads report](https://kimola.com/reports/unlock-goodreads-app-user-insights-feedback-analysis-app-store-ie-155492)
  - Fable apologized publicly in 2025 after complaints about its AI-generated reader summaries, and some users said they would leave. — [Book Riot](https://bookriot.com/reading-apps-are-getting-controversial)
  - Some users report StoryGraph can't import large catalogs (2024 comment). — [Reedsy](https://Reedsy.com/discovery/blog/goodreads-vs-storygraph)
  - MakeUseOf listed "6 reasons to stop using Goodreads." — [MakeUseOf](https://www.makeuseof.com/6-reasons-why-you-should-stop-using-goodreads/)
- (e) Goodreads, StoryGraph, Fable, Hardcover and Bookly. — [Unstar 2026 ranking (vendor)](https://unstar.app/blog/goodreads-storygraph-fable-hardcover-bookly-reading-tracker-apps-ranked-2026)
- (f) Already crowded with credible indie alternatives. No clear unserved job was evidenced.
- (g) StoryGraph runs a paid "Plus" tier (price not verified this session).
- (h) Solo feasibility is medium, but StoryGraph and Hardcover already occupy the "indie Goodreads" position.
- (i) Not recommended, except possibly as a module inside C3 (a "media tracker" for TV, film and books).

**C6. Group trips and plans die in the group chat**
- (a) Friends agree to "let's do a trip or plan." Then dates, budget and commitments never get pinned down, and one organizer does all the work.
- (b) **76% of group trips never happen**: only 24% make it "out of the group chat." Planning averages 83 messages and about 19 hours over 11 days. Source: Talker Research for Discover Puerto Rico, n=2,000 women; the sponsor is a tourism board and the fieldwork date is unclear. — [Survey syndication, "women carry the mental load of group travel"](https://www.ftimes.com/news/national/survey-finds-women-carry-the-mental-load-of-group-travel/article_d7bfdef4-ae12-5997-bbcd-c3fd75e3ff0d.html); [OrlandoMom](https://orlandomom.com/the-group-chat-curse-is-real-heres-how-to-finally-take-the-girls-trip/)
  - 1 in 3 travelers have fought during a group vacation. — [Time Out](https://www.timeout.com/usa/news/spring-break-travel-trends-group-travel-is-up-and-so-is-vacation-fighting-030926)
  - 38% of travelers travel with friends (Global Rescue, early 2025). — [Global Rescue](https://www.globalrescue.com/common/blog/detail/risk-averse-tech-savvy-travelers-trend/)
  - 61% of group travelers overspend because of social pressure (CIT Bank survey, as cited by a vendor). — [TripProf](https://tripprof.com/uk/blog/group-trip-planning-questionnaire/)
- (c) A few times a year per person. Smaller plans (dinners, weekends) happen monthly.
- (d) Wanderlog Trustpilot review, October 2025: *"Things get duplicated and it asks you to correct."* — [Trustpilot Wanderlog](https://www.trustpilot.com/review/wanderlog.com?page=2)
- (e) Incumbents:
  - **Wanderlog**: Pro about $39.99/yr; 4.9★ on Apple versus 1.8 on Trustpilot (small sample); about 30.9K total reviews per an aggregator. Complaints: dark mode locked behind Pro, white-screen bugs after payment, slows down on big itineraries, and users who expected TripIt-style email auto-import were disappointed. — [Endless Travel Plans review](https://www.endlesstravelplans.com/guides/planning-tools/wanderlog-review); [marlvel.ai Wanderlog](https://marlvel.ai/apps/wanderlog-travel-planner/reviews)
  - **TripIt Pro**: about $49/yr (same source).
- (f) Existing tools are itinerary builders. No tool clearly handles the **pre-booking decision stage**: dates poll, budget ceiling, destination vote, a "commit by Friday" deadline, and deposits.
- (g) Low per-user willingness to pay, and use is episodic. The organizer may pay; a per-trip pass is a better fit than a subscription.
- (h) Solo feasibility is medium. Invite links via iMessage or web create light network effects, and guests should not need the app.
- (i) Concept sketch, **"Actually Going"**:
  - The organizer creates a trip and shares a link.
  - Friends vote on dates, budget and destination without installing anything.
  - Auto-deadlines, "who's in" commitment, and a kitty.
  - Expenses are split during the trip with no daily cap (see C7).

**C7. Splitting shared costs after Splitwise capped its free tier**
- (a) Splitwise limited free users to a few expenses per day and added ads and timers. Occasional users are forced to pay or switch.
- (b) No user-count statistic was found.
- (c) Daily on trips, monthly for roommates.
- (d) Trustpilot review, November 2025: the app *"added ads, time delays, constant upselling modals, and a limit of 4 expenses per day. The free version is essentially unusable and an annual fee is not good value for the occasional user."* — [Trustpilot Splitwise (AU)](https://au.trustpilot.com/review/splitwise.com). The cap was first reported in late 2023, "implemented with no warning" (same source). A 2026 guide says free users hit the wall after about 3–5 expenses in a day. — [Finny (competitor blog)](https://getfinny.app/blog/best-splitwise-alternatives-2026); [Kimola Splitwise](https://kimola.com/reports/splitwise-feedback-analysis-unlock-user-sentiments-google-play-154450)
- (e) Splitwise, Tricount (the most common switch), Kittysplit ("unlimited expenses. Forever."), Splid and Spliit. — [Kittysplit (competitor)](https://www.kittysplit.com/en/splitwise-alternative)
- (f) Free alternatives already exist, so the gap is narrow. Splitting works best as a feature inside C6.
- (g) Low. Users explicitly reject an annual fee for occasional use.
- (h) Solo feasibility is high, but there's little room to differentiate.
- (i) Fold into C6.

**C8. Adult loneliness: friend apps produce small talk, not friendships** *(not a good solo fit)*
- (a) Lonely adults try friend-finding apps. Chats fizzle, nobody proposes meeting, and paid events have no-shows.
- (b) 20% of US adults felt loneliness "a lot of the day yesterday" (Gallup, Aug 27–Sep 4 2024, n=6,289), about 52 million adults. The pandemic peak was 25% (March 2021). — [Gallup](https://news.gallup.com/poll/651881/daily-loneliness-afflicts-one-five.aspx). For 25-year context, see [Fortune, Dec 18 2025](https://fortune.com/2025/12/18/loneliness-epidemic-bowling-alone-25-years-later/)
- (c) Chronic and daily for the affected 20%.
- (d) Bumble BFF:
  - An Android Authority tester (one month) said message exchanges "never progressed beyond superficial small talk," nobody suggested meeting, and the free version hides the most compatible matches behind premium. — [Android Authority](https://cellphoneplans.androidauthority.com/CellPhones/Apps/bumble-bff-fails-at-making-friends)
  - Kimola gives BFF's App Store reviews an NPS of −47. — [Kimola BFF](https://kimola.com/reports/unlock-insights-bumble-for-friends-user-feedback-analysis-app-store-us-157227)
  - An aggregator reports 4.03/5 from 7,632 reviews, with stability and bugs as the top concern. — [marlvel.ai BFF](https://marlvel.ai/api/llm/apps/social-networking/bff-make-friends-by-bumble)
  
  Timeleft (Trustpilot, about 714 reviews):
  - Backlash over the shift to subscription-only and the end of single tickets; food is not included.
  - Multiple charges and hard cancellation.
  - Support unresponsive ("sent 2 emails asking for help, but received no reply").
  - "first dinner was canceled, and the second dinner had everyone else no-show"; venues too loud.
  - Many reviewers do enjoy the dinners.
  
  Sources: [Trustpilot Timeleft](https://www.trustpilot.com/review/timeleft.com?page=3); [DatingAdvice, Oct 2026](https://www.datingadvice.com/editors-spotlight/timeleft-app-explained); [Wherever I Look review](https://wherever-i-look.com/articles/experiences/timeleft-the-strangers-meeting-for-dinner-app-review)
- (e) Bumble BFF, Timeleft, Meetup and 222 (the last two not researched).
- (f) What people seem to want is low-effort, recurring in-person contact with the *same* people, plus accountability against no-shows. Matching apps optimize for swiping instead.
- (g) Timeleft's subscription draws complaints but evidently sells. Willingness to pay exists but is fragile.
- (h) **Solo feasibility is low for anything that matches strangers.** It needs local liquidity in every city, safety and moderation, and event operations. A solo-feasible variant would help people **maintain the friends they already have**: a "keep in touch" cadence, low-pressure plan proposals, and recurring hangout templates. This variant has **no direct demand evidence from this session** (see Gaps).
- (i) Not in the top picks.

**C9. EV public charging failures** *(not a good solo fit)*
- (a) EV drivers arrive at chargers that are broken or not shown accurately in apps.
- (b) J.D. Power 2025 EVX Public Charging Study (n=7,428, fielded January–June 2025, released August 13 2025):
  - **14% of visits failed**, down from about 19–20% the year before.
  - About 60% of failures were due to out-of-service or malfunctioning equipment.
  - Failure rates by network: Tesla 4%, Electrify America 6%, Red E 10%, EVgo 12%.
  - The Pacific region was worst at 21%.
  - Satisfaction slipped even though reliability improved.
  
  Sources: [J.D. Power press release](https://www.jdpower.com/business/press-releases/2025-us-electric-vehicle-experience-evx-public-charging-study); [Automotive World](https://www.automotiveworld.com/news-releases/fewer-failed-charging-attempts-signal-progress-in-ev-infrastructure-j-d-power-finds/); [DealershipGuy](https://news.dealershipguy.com/p/ev-charging-reliability-is-up-but-satisfaction-is-slipping-j-d-power-finds-2025-08-13)
- (c) Per public charging session; frequent on road trips.
- (d) PlugShare complaints:
  - Stale status (a Reddit thread snippet: people were "semi regularly stopping by to see if it was fixed and then reporting it as still broken").
  - Chargers missing from the map.
  - In-app surveys that "can't be exited" (October 2025).
  - Some fields editable on iOS but not on Android.
  
  Sources: [unitQ PlugShare scorecard](https://www.unitq.com/unitq-scorecards/plugshare/); [InsideEVs forum](https://www.insideevsforum.com/community/threads/latent-defect-with-plugshare-app-both-ios-and-android.9623); [CleanTechnica (2023) on PlugShare score](https://cleantechnica.com/2023/01/19/what-a-plugshare-score-really-means-how-it-could-be-better/)
- (e) PlugShare is 4.7★ from 46,102 Google Play reviews per an aggregator. — [grand-screen](https://grand-screen.com/apps/plugshare-ev-tesla-map/reviews/)
- (f) Real-time, trustworthy charger status.
- (g) Low. Incumbent apps are free.
- (h) Low feasibility. It depends on network APIs and crowd data density, and the problem is improving on its own (failures fell from about 20% to 14%).
- (i) Not recommended.

**C10. "I paid for parking in the app and still got a ticket"** *(not a good solo fit as a payment app)*
- (a) Parking-app sessions fail through user or UX error (wrong plate or zone) or don't register with enforcement, so drivers get tickets they must fight themselves.
- (b) No prevalence statistic. A vendor analysis found 115 Google Play reviews of ParkMobile that ended in a ticket, tow or boot, in six distinct ways. — [Unstar (vendor)](https://unstar.app/blog/parkmobile-paid-still-got-ticket-app-not-working-reviews-2026)
- (c) Per parking session for urban drivers.
- (d) Quotes:
  - SpotHero, BBB, March 2025: *"On March 20th, 2025 at 9:30am I paid $12.75 on the Spothero app for parking until 6pm in the garage. When I returned to my car I found a ticket written at 12:30pm for $75 for failure to prepay. Spothero took a week to respond… told me that the ticket was valid and they couldn't help because the ticket was for a license plate number not registered in their app."* A mid-2025 BBB thread includes the line *"the app did not clearly prompt me to select the correct license plate at the time of reservation"* (who wrote this line is ambiguous in the snippet). — [BBB SpotHero complaints](https://prod.bbb.org/us/il/chicago/profile/parking-facilities/spothero-0654-88576696/complaints)
  - ParkMobile, Trustpilot, January 2025: *"We have two cars listed in the Parkmobile app. When we recently used parkmobile, the app defaulted to our other vehicle and we got a parking ticket."* — [Trustpilot ParkMobile](https://www.trustpilot.com/review/parkmobile.io?page=8)
  - ParkMobile says it cannot cancel or overturn violations; users must dispute them with their receipt. — [ParkMobile support](https://support.parkmobile.io/hc/en-us/articles/44199141314075/comments/45893807569179)
  - Similar reports: [ParkNYC on Medium](https://medium.com/transit-new-york/parknyc-users-we-pay-through-the-app-and-still-get-ticketed-e24f1593310); [ABC Action News, St. Pete](https://www.abcactionnews.com/news/region-pinellas/st-pete-man-says-he-still-received-parking-ticket-after-using-app-to-pay-for-spot)
- (e) ParkMobile charges a $0.35 convenience fee per transaction (per Unstar, above). SpotHero ratings were not retrieved.
- (f) Nobody protects the driver across apps. Missing pieces: a pre-flight check (right plate? right zone?), automatic receipt capture, and a ticket-dispute kit.
- (g) Loss aversion is strong ($75 tickets), but the event is infrequent.
- (h) A payment app is infeasible solo because it needs city contracts. A "parking guardian" companion (plate/zone confirmation, sign-photo reading, expiry timer, dispute letter generator) is feasible, but its demand is unvalidated.
- (i) Better as a feature of a car-ownership app (C11).

**C11. Car maintenance tracking that's accurate without shop data** *(weak willingness to pay)*
- (a) Drivers forget or delay maintenance. Free trackers rely on shops reporting service history, which produces false reminders.
- (b) About one-third of drivers skip or delay recommended service (AAA, as reported; date unclear). — [KBUL](https://kbulnewstalk.com/one-third-of-americans-ignore-vehicle-maintenance-needs/)
  - FinanceBuzz (updated July 25, 2025, n=1,000): 58% could not afford a $1,000 emergency repair, and 64% know their vehicle needs maintenance but haven't acted. — [FinanceBuzz](https://financebuzz.com/car-maintenance-survey)
  - Delayed maintenance is worth about $24.9B (2020 Auto Care Factbook; older data). — [Aftermarket News](https://www.aftermarketnews.com/auto-care-factbook-americans-are-delaying-car-maintenance-to-the-tune-of-nearly-25-billion/)
- (c) Every 3–6 months for maintenance. Registration, inspection and insurance renewals are yearly.
- (d) CARFAX Car Care reviews (May 2024; older):
  - *"CARFAXCarCare keeps warning me that I require an oil change when it's not required for my car for five more months."*
  - *"Problem is that my car's history accuracy is at the mercy of service centers that control my history."*
  
  Source: [unitQ CARFAX scorecard](https://www.unitQ.com/unitq-scorecards/carfax/). A Drivvo review (GetApp, March 2023) says: *"The interface is a bit oldy and should be updated with new design."* — [GetApp Drivvo](https://www.getapp.com/all-software/a/drivvo-1/)
- (e) CARFAX Car Care: 4.8★ from about 120K ratings, free. — [App Store listing](https://apps.apple.com/us/app/-/id552472249); [JustUseApp CARFAX](https://justuseapp.com/en/app/552472249/carfax-car-care/reviews). Drivvo and Fuelly were not researched in depth.
- (f) A tracker that builds an accurate schedule from the VIN and your own receipt photos, plus a "glovebox" of registration, insurance and parking evidence.
- (g) Weak, because a free, highly rated incumbent (CARFAX) sets the price expectation at zero.
- (h) Solo feasibility is high.
- (i) "Glovebox": a feature set rather than a standalone subscription. It may overlap with the "Deadline Autopilot" idea already in `/home/user/New-app-2/research/app-ideas.md`.

**C12. Travel-booking refunds and support (Hopper and other online travel agencies)** *(out of scope for solo)*
- Hopper USA is not BBB-accredited. It has 1,066 complaints in 3 years, with themes of hidden fees, cancellation and refund difficulty, and customer service. — [BBB Hopper complaints](https://prod.bbb.org/us/ma/boston/profile/travel-services/hopper-usa-inc-0021-164791/complaints)
- A Trustpilot user closed the chat "after 2 hours on the app 'waiting' for someone to assist me." — [Trustpilot Hopper](https://ca.trustpilot.com/review/hopper.com?page=3)
- Hopper responses say it is "entirely bound by the hotel's policy" (BBB, 2025).
- The pain is real, but fixing it means being a booking agency, which is not a solo subscription app.

### Inferences
- **Scoring** (1–5, my judgment from the evidence above; 5 is best for a solo subscription app):

| # | Problem | Pain | Frequency | Evidence strength | Willingness to pay | Solo feasibility | Competitive opening | Total |
|---|---|---|---|---|---|---|---|---|
| C3 | TV tracker post-TV Time (+ couples) | 3 | 4 | 4 | 3 | 4 | 4 (fresh displacement) | **22** |
| C1+C2 | Saved reels → weekly dinners, segment-tuned | 4 | 5 | 3 | 4 | 4 | 2 (crowded generic) | **22** |
| C4 | Sports "where to watch" | 4 | 4 | 5 | 3 | 2 (data) | 4 | **22** |
| C6+C7 | Group trip "chat → booked" + uncapped split | 4 | 2 | 3 | 2 | 3 | 3 | 17 |
| C11 | Car glovebox/maintenance | 2 | 2 | 2 | 1 | 5 | 2 | 14 |
| C5 | Book tracker | 2 | 3 | 3 | 2 | 4 | 1 | 15 |
| C8 | Adult friendship | 5 | 4 | 4 | 3 | 1 | 2 | 19, but solo-infeasible |
| C10 | Parking ticket guardian | 3 | 3 | 3 | 2 | 3 | 2 | 16 |
| C9 | EV charging | 3 | 3 | 5 | 1 | 1 | 1 | 14 |

- **Top picks:**
  1. **C3 "Couch" (TV/movie tracker for displaced TV Time users, couples-first).**
     - Why: the biggest single-app displacement in this whole domain happened 4 months ago (claimed 26M users, 28K+ petitioners).
     - The replacement market is still fragmented, and Simkl buckled under load.
     - A solo developer's cost base makes "paid but small" viable where a VC-funded free app was not.
     - The couples' shared queue and "never lose your data" export guarantee are clear differentiators.
     - Main risk: the "not enough demand for a paid app" warning. Validate with a $19.99/yr pre-order.
  2. **C1+C2 "Saved → Supper" (social recipe saves into a segment-tuned weekly plan).**
     - Why: the pain is daily, and willingness to pay is proven (ReciMe at $59.99/yr with a huge review base; Paprika licences).
     - Incumbents fail on Instagram import reliability, early paywalls and sync fears.
     - Challenge to the prior "too crowded" finding: crowded at the *importer* level (dozens of near-zero-traction clones), but the evidence shows no dominant tool for **GLP-1/high-protein** users (12% of adults currently on GLP-1s, roughly 31M using Gallup's implied adult base) or **picky-kid families** (only apps with 3 ratings or new launches).
     - Win on the segment plus the save-to-cook conversion, not on import.
  3. **C4 "Tonight's Game" (personal where-to-watch for your teams).**
     - Why: this is the strongest measured frustration in the domain (87% frustrated, 25% very; 83% want guides).
     - It recurs weekly in season, and there's an affiliate revenue line.
     - Risk: data accuracy for broadcast rights. Start with one league whose national rights are mostly fixed, then add regional ones.
  4. **(Optional 4th) C6 "Actually Going"**: group trip decisions plus uncapped splitting. It's viral through invite links but used only occasionally, so price it per trip or yearly with an "organizer pays" model.
- **Not recommended solo**: C8 friendship matching (needs marketplace liquidity and safety work), C9 EV (data network, improving on its own), C10 as a payments app (needs city contracts), and C12 OTA refunds.
- **Cross-cutting pattern** (matches the prior file `/home/user/New-app-2/research/app-ideas.md`): the complaints repeatedly cluster around four things:
  - **Data loss and lock-in**: TV Time deleted histories; Paprika and Samsung Food sync losses.
  - **Paywalls before the first value moment**: ReciMe's 8 uploads, Splitwise's 4/day cap, Wanderlog's dark mode.
  - **Unreliable automation**: Instagram import failing "75% of the time"; PlugShare status.
  - **Support black holes**: Timeleft, Hopper, SpotHero.
  
  A solo app can differentiate on *export-anytime, generous free core, reliability, and fast human support* even where features are similar.

### Gaps
- **No systematic 1–3★ App Store theme counts**, because the iTunes RSS and apps.apple.com endpoints were blocked (proxy 403) and Reddit was unreachable. Counts and percentages per app have to be redone once `itunes.apple.com` is allowed, using `https://itunes.apple.com/us/rss/customerreviews/page=N/id=<id>/sortBy=mostRecent/json`.
- Usage frequency for TV tracking, recipe saving and sports-finding behaviour: no survey found.
- The TV Time "26 million users" figure is from a competitor's press release, and no audited number was found. The Wikipedia page exists but wasn't read: https://en.wikipedia.org/wiki/TV_Time
- No evidence was gathered on willingness to pay for a couples or shared watchlist specifically.
- The scores in the table are judgment calls, not measurements.

---

## Q1. What do 1–3★ reviews of the named apps complain about most?

### Takeaway
Across the apps where evidence was retrieved, the dominant 1–3★ themes are:
- **paywalls and subscription changes**: ReciMe, Splitwise, Timeleft, Bumble BFF, Wanderlog
- **data loss, sync and import failures**: Paprika, Samsung Food, ReciMe, Goodreads
- **unresponsive support and billing problems**: Timeleft, Hopper, SpotHero
- **stale or inaccurate data**: PlugShare, CARFAX Car Care, TV Time

About half of the apps named in the brief could not be researched at all.

### Cited Findings
- **Paprika 3**: 4.89★, 65.4K ratings ([AppGoblin](https://appgoblin.info/apps/1303222868)). Complaints: sync and lost recipes when switching devices; paid per platform ([Unstar, vendor](https://unstar.app/blog/allrecipes-yummly-nyt-cooking-paprika-mealime-recipe-apps-ranked-2026)); meal calendar not linked to the shopping list (2023, competitor review) ([Plan to Eat](https://plantoeat.com/?p=38013)).
- **Mealime**: no Mealime-specific complaint evidence was found. A 2026 roundup mentions "paywall hid a recipe the user came for" as a general recipe-app theme without tying it to Mealime ([Unstar](https://unstar.app/blog/allrecipes-yummly-nyt-cooking-paprika-mealime-recipe-apps-ranked-2026)).
- **Samsung Food (Whisk)**: lost recipes after sync; library wiped by an update; Instagram/TikTok imports inconsistent; "Something went wrong" errors when opening saved recipes ([JustUseApp](https://justuseapp.com/en/app/1133637674/whisk-recipes-grocery-list/problems)). Chrome extension "spinning wheel forever" and no instructions captured ([Chrome Web Store](https://chromewebstore.google.com/detail/samsung-food/gfoijmnbedaipllfimaogeepohalbgka/reviews)). Much of this evidence dates from 2022–2023.
- **ReciMe** (not in the brief, but the main social-import incumbent): misleading "free" advertising, an 8-upload cap, and Instagram import failures ([AppsHunter](https://appshunter.io/ios/app/1593779280/reviews); [marlvel.ai](https://marlvel.ai/apps/recime-recipes-meal-planner/reviews); [JustUseApp](https://justuseapp.com/en/app/1593779280/recime-importer-recettes/reviews)).
- **Wanderlog**: Pro about $39.99/yr; dark mode behind the paywall; white screen after payment; duplicate entries (Trustpilot, October 2025); slow on large itineraries; no email auto-import like TripIt's ([Endless Travel Plans](https://www.endlesstravelplans.com/guides/planning-tools/wanderlog-review); [Trustpilot](https://www.trustpilot.com/review/wanderlog.com?page=2); [Kimola US App Store report](https://kimola.com/reports/unlock-travel-planning-insights-with-our-wanderlog-app-report-app-store-us-151649)).
- **TripIt**: Pro about $49/yr ([Endless Travel Plans](https://www.endlesstravelplans.com/guides/planning-tools/wanderlog-review)). No TripIt-specific complaints were retrieved.
- **Hopper**: 1,066 BBB complaints in 3 years; refunds, hidden fees, support only in-app; not accredited ([BBB](https://prod.bbb.org/us/ma/boston/profile/travel-services/hopper-usa-inc-0021-164791/complaints); [Trustpilot](https://ca.trustpilot.com/review/hopper.com?page=3)).
- **SpotHero / ParkMobile**: tickets despite paying, caused by plate or zone defaults; slow support; neither company can void citations ([BBB SpotHero](https://prod.bbb.org/us/il/chicago/profile/parking-facilities/spothero-0654-88576696/complaints); [Trustpilot ParkMobile](https://www.trustpilot.com/review/parkmobile.io?page=8)).
- **PlugShare**: stale or missing charger status; survey pop-ups that can't be dismissed (October 2025); Android editing gaps ([unitQ](https://www.unitq.com/unitq-scorecards/plugshare/); [InsideEVs forum](https://www.insideevsforum.com/community/threads/latent-defect-with-plugshare-app-both-ios-and-android.9623)).
- **Goodreads**: bugs, slow review loading (~10 s), incompatibility after an update (February 2025), stagnation ([JustUseApp](https://justuseapp.com/en/app/355833469/goodreads-book-reviews/reviews); [Kimola](https://kimola.com/reports/unlock-goodreads-app-user-insights-feedback-analysis-app-store-ie-155492)).
- **StoryGraph**: large-library import problems (2024 comment) ([Reedsy](https://Reedsy.com/discovery/blog/goodreads-vs-storygraph)).
- **TV Time**: before the shutdown, users complained of missing episodes, incorrect data, and customization and moderation problems ([Kimola](https://kimola.com/reports/unlock-insights-tv-time-app-user-feedback-analysis-app-store-fr-144807)). The app is now shut down (see Q5).
- **Bumble BFF**: NPS −47 (Kimola); 4.03/5 from 7,632 reviews (aggregator); conversations don't lead to meetups; compatible matches paywalled ([Kimola](https://kimola.com/reports/unlock-insights-bumble-for-friends-user-feedback-analysis-app-store-us-157227); [marlvel.ai](https://marlvel.ai/api/llm/apps/social-networking/bff-make-friends-by-bumble); [Android Authority](https://cellphoneplans.androidauthority.com/CellPhones/Apps/bumble-bff-fails-at-making-friends)).
- **Timeleft**: switched to subscription-only; billing and cancellation problems; no support replies; cancelled dinners and no-shows ([Trustpilot](https://www.trustpilot.com/review/timeleft.com?page=3); [DatingAdvice](https://www.datingadvice.com/editors-spotlight/timeleft-app-explained)).
- **Splitwise** (not in the brief, but a group-plans incumbent): a 3–5 expense/day free cap, ads and timers (Trustpilot, November 2025) ([Trustpilot](https://au.trustpilot.com/review/splitwise.com)).
- **CARFAX Car Care**: 4.8★ from about 120K ratings; false oil-change alerts; history depends on shops reporting ([App Store](https://apps.apple.com/us/app/-/id552472249); [unitQ](https://www.unitQ.com/unitq-scorecards/carfax/)).

### Inferences
- "Changing the deal" is a reliable source of 1★ reviews: a subscription switch (Timeleft), a new cap (Splitwise), a rebrand that breaks things (Samsung Food), a shutdown (TV Time). Each event creates a pool of displaced users that a new app can target with "switch from X" positioning and import tools.
- The highly rated incumbents (Paprika 4.89, CARFAX 4.8, Wanderlog 4.9) have average ratings that hide specific, recurring failures. Average star ratings are a poor signal of whether a gap exists.

### Gaps
- **Not researched**, because the search budget ran out:
  - Plan to Eat, AnyList, Instacart, SuperCook
  - Google Flights alternatives, Waze, GasBuddy
  - Letterboxd, Serializd (beyond mentions), Partiful, Meetup
  - Strava, AllTrails, Fishbrain, golf GPS apps (18Birdies and others)
  - Simply Piano, Yousician
  - Acloset, Indyx, Whering, skincare apps
- **Prior-knowledge hypotheses, NOT verified this session (do not cite without checking):**
  - Strava and AllTrails have each drawn backlash over subscription price or feature-gating changes.
  - Simply Piano and Yousician reviews commonly complain about auto-renewal and mic-detection accuracy.
  - Wardrobe-app reviews commonly complain about the tedium of photographing and cataloguing every item.
  - Partiful is widely liked, and complaints center on reliance on text-message invites.
- Rating and review counts for most apps could not be pulled because the iTunes Search API was blocked.

---

## Q2. Is "what's for dinner" meal planning saturated, or do specific segments lack a good tool?

### Takeaway
Generic meal planning and recipe import **are** saturated: dozens of AI importers have near-zero traction. The prior "too crowded" conclusion holds for undifferentiated apps. It does **not** clearly hold for (1) GLP-1/high-protein eaters, now 12% of adults currently using the drugs, and (2) families with picky children, where only tiny or new apps exist. No dominant segment tool surfaced in search. Demand and willingness to pay for paid segment tools remain unvalidated.

### Cited Findings
- Dinner stress is high:
  - Nearly half of couples would give up social media forever to never plan dinner, and 44% would trade a dream vacation (Factor/Wakefield, released January 2025; meal-kit sponsor) — [BusinessWire](https://www.businesswire.com/news/home/20250127681988/en)
  - About 16 min/day spent deciding (Talker Research; year unclear) — [Daily Voice](https://dailyvoice.com/tags/meal-planning/)
- Actual behaviour is repetitive and quick: 62% cook "quick and easy," 43% repeat meals several times a week, 13% follow recipes consistently (QuestionPro, June 2025) — [QuestionPro](https://www.questionpro.com/research/americas-real-eating-habits/)
- GLP-1 use: 18% ever, 12% currently, 22% currently among 50–64-year-olds (KFF, late 2025) — [eMarketer](https://www.emarketer.com/content/twice-many-us-consumers-now-using-glp-1s); [Quartz](https://qz.com/1-in-5-us-adults-take-ozempic-glp-1-survey)
- Picky eaters are parents' top mealtime challenge (Mott Poll, April 2024) — [Drugs.com/HealthDay](https://drugs.com/news/many-parents-cook-special-meals-little-picky-eaters-poll-118824.html)
- The picky-kid app supply is thin: Snack'd has 3 ratings ([AppGoblin](https://appgoblin.info/apps/6756082783)), EatPal is a new listing ([App Store](https://apps.apple.com/app/id6762243166)), and Picky Eaters launched February 2025 ([Product Hunt](https://www.producthunt.com/products/picky-eaters/launches))
- Crowding evidence for generic importers: MyRecipe, ReciBook, Sous with 2–3 followers; Pantree with 0 upvotes — [Product Hunt](https://www.producthunt.com/products/myrecipe); [hunted.space](https://hunted.space/product/pantree)

### Inferences
- The segment opportunity is real because segment constraints make the planning problem *harder*, which is exactly what generic tools handle poorly:
  - protein per small portion, nausea-friendly foods
  - "one base meal, kid variant"
  - repeating the same 10 meals (43% already do)
- A segment app also has a clear acquisition channel: GLP-1 communities, parenting TikTok.
- Using Gallup's implied base (20% ≈ 52M adults, so about 260M adults), 12% currently on GLP-1s is about 31M adults. This is a derived estimate.
- Single people and budget cooks were not evidenced either way in this session.

### Gaps
- No search covered existing GLP-1-specific meal apps (some likely exist; not verified), high-protein planners, or single-person or budget planners.
- No 1–3★ review data for Mealime, Plan to Eat, AnyList or Eat This Much.
- No willingness-to-pay data for segment-specific planners.

---

## Q3. Saving recipes from TikTok/Instagram/YouTube and actually cooking them — what's the gap?

### Takeaway
Importing a recipe from video is now a commodity, and it is still unreliable for Instagram at the market leader. The real gap is **conversion**: turning a pile of saved videos into a plan and a grocery list the user actually cooks from, without a punitive save cap and without risk of losing the library.

### Cited Findings
- 7 in 10 say social cooking videos make them want to try new foods (Talker/Maruchan, June 2026; URL attribution inferred) — [News-Argus](https://www.newsargus.com/news/national/how-has-social-media-transformed-cooking/article_b4c05664-6e70-589d-8752-b8038c1d38d1.html)
- A qualitative "save-to-cook gap": people save far more than they cook — [FishDog](https://fishdog-web.pages.dev/research-studies/cooking-content-weeknight-applicability-drives-conversion)
- ReciMe's Instagram import fails "75% of the time" per one review, with an 8-upload free cap and $59.99/yr pricing — [AppsHunter](https://appshunter.io/ios/app/1593779280/reviews); [marlvel.ai](https://marlvel.ai/apps/recime-recipes-meal-planner/reviews)
- An "Import failures and inconsistent data capture" regression was flagged by an aggregator, and a May 2026 fix addressed paying users being wrongly limited — [MWM](https://mwm.ai/es/articles/recime-v5-2-5-fixes-premium-recipe-upload-limits-in-may-2026-boosting-ratings)
- Samsung Food's Instagram/TikTok imports are inconsistent and some libraries were lost — [JustUseApp](https://justuseapp.com/en/app/1133637674/whisk-recipes-grocery-list/problems)
- Many AI importers launched in 2025–2026 (Flavorish, Deglaze, RecipeSnap, KusKus, Cook Paddy, Reecta) — [TechPP](https://techpp.com/2026/06/18/turn-instagram-food-videos-to-actual-recipes/); [Deglaze](https://www.deglaze.app/how-to/save-recipes-from-instagram); [KusKus App Store](https://apps.apple.com/app/id6759342397)
- No independent test of extraction accuracy (ingredients and quantities) was found in search — [search summary of vendor results; see Flavorish blog](https://www.flavorish.ai/blog/save-recipes-from-instagram-tiktok-youtube-facebook)

### Inferences
- The defensible product is **"saves → dinners"**, not "saves → recipe card." The main metric is "saved recipes cooked per month."
- Features that address the complaints directly:
  - a weekly "cook from your saves" plan
  - a merged grocery list
  - a "you saved this, cook it Tuesday?" nudge
  - a household share
  - a visible export button (trust after the Samsung Food and TV Time losses)
  - unlimited free saves, with the paywall on planning

### Gaps
- No hard statistic on what share of saved social recipes get cooked.
- No verbatim Reddit evidence (Reddit was blocked).
- Instagram/TikTok terms of service and technical anti-scraping risk were not researched.

---

## Q4. Loneliness and adult friendship: what apps exist, why do they fail, and what do people want?

### Takeaway
Loneliness is large and steady (20% of adults feel it daily; about 52M people). Stranger-matching apps fail because conversations don't turn into meetings (Bumble BFF), and paid event formats suffer billing, support and no-show problems (Timeleft). Fixing this needs local density and safety operations. **That makes it a poor fit for a solo builder**, unless the product helps people maintain *existing* friendships, which this session did not validate.

### Cited Findings
- 20% of US adults felt loneliness "a lot of the day yesterday" (Gallup, Aug–Sep 2024, n=6,289), about 52M adults; the peak was 25% in March 2021 — [Gallup](https://news.gallup.com/poll/651881/daily-loneliness-afflicts-one-five.aspx)
- 25-year retrospective on the loneliness epidemic (December 2025) — [Fortune](https://fortune.com/2025/12/18/loneliness-epidemic-bowling-alone-25-years-later/)
- Bumble BFF: chats never went beyond "superficial small talk" and nobody proposed meeting; compatible matches are behind premium — [Android Authority](https://cellphoneplans.androidauthority.com/CellPhones/Apps/bumble-bff-fails-at-making-friends). NPS −47 — [Kimola](https://kimola.com/reports/unlock-insights-bumble-for-friends-user-feedback-analysis-app-store-us-157227)
- Timeleft:
  - moved to subscription-only (no single tickets), and food is not included
  - multiple charges
  - unanswered support
  - cancelled dinners and all-other-guests no-shows
  - loud venues
  - many positive dinner experiences
  
  Sources: [Trustpilot](https://www.trustpilot.com/review/timeleft.com?page=3); [DatingAdvice, Oct 2026](https://www.datingadvice.com/editors-spotlight/timeleft-app-explained); [Onclarity](https://www.onclarity.com/leaderboard/insight/timeleft)

### Inferences
- The failure pattern has two parts: (1) apps optimize for matching or swiping, while friendship needs *repeated* contact with the same people; (2) no-shows destroy trust.
- Solo-feasible angles that avoid the marketplace problem:
  - a "friendship maintenance" app: a keep-in-touch cadence, birthday and life-event prompts, one-tap "coffee next week?" proposals with availability
  - a host toolkit for recurring small gatherings: rotating dinner club, RSVP with a deposit to curb no-shows
  
  Both rely on users' existing networks, not on matching density.

### Gaps
- Pew 2024 figures (about 16% lonely all or most of the time; about a quarter of under-30s) surfaced only in a search summary; the primary source was not retrieved.
- No data was found on demand for friendship-maintenance or "keep in touch" apps.
- Meetup, 222, Partiful, Howbout and IRL were not researched.
- The Surgeon General's 2023 advisory itself was not retrieved; only secondary mentions.

---

## Q5. Entertainment tracking: Goodreads frustration, TV Time's decline, "where can I watch this," shared watchlists for couples

### Takeaway
The biggest event is **TV Time's shutdown on July 15, 2026**, which deleted user data. The company claimed about 26M users (a competitor-reported figure), and 28K+ people petitioned. It left a fragmented replacement market: Trakt, Serializd, Simkl, Showly, Bingers, and JustWatch's migration tool. Goodreads frustration is chronic, but StoryGraph, Hardcover and Fable already serve it. Couples' shared watchlists remain an unproven but plausible differentiator.

### Cited Findings
- TV Time shut down July 15, 2026. Whip Media pivoted to enterprise AI: "no longer sustainable… as a free app"; "not enough demand for a paid app"; data deleted after July 15 — [TechCrunch](https://techcrunch.com/2026/07/02/popular-tv-tracking-app-tv-time-is-shutting-down-as-company-focuses-on-ai/); [Whip Media support](https://whipmedia.freshdesk.com/support/solutions/articles/68000029988-tv-time-is-shutting-down); [Moviebase guide](https://moviebase.app/resources/tv-time-shutting-down)
- Petition: 28K+ signers asked for crowdfunding or a subscription, and a "TV Time 2.0" — [Change.org](https://www.change.org/p/save-tv-time-from-closure-and-launch-a-successor-soon); [Cord Cutters News](https://cordcuttersnews.com/a-popular-cord-cutting-service-is-shutting-down/)
- Alternatives: Trakt, Serializd, Simkl (servers strained), Showly, Bingers (imports archives) — [Cord Cutters News](https://cordcuttersnews.com/a-popular-cord-cutting-service-is-shutting-down/); [iThinkDiff](https://www.ithinkdiff.com/best-tv-time-alternatives-app-store/). JustWatch migration tool — [9to5Mac](https://9to5mac.com/2026/07/09/as-tv-time-prepares-to-shut-down-justwatch-launches-migration-tool/)
- A competitor press release claims 26M users' watch history was deleted — [press release](https://www.myknoxcountynews.com/online_features/press_releases/article_16c379d7-0e06-5564-a6e7-176c5a46b823.html)
- Goodreads: bugs and stagnation; StoryGraph at about 3M users (November 2024); Fable's AI controversy (2025) — [HuffPost UK](https://huffingtonpost.co.uk/entry/storygraph-amazon-goodreads-jeff-bezos_l_673e2013e4b0f17b35e0a123); [Book Riot](https://bookriot.com/reading-apps-are-getting-controversial); [MakeUseOf](https://www.makeuseof.com/6-reasons-why-you-should-stop-using-goodreads/)

### Inferences
- The TV Time vacuum is the most time-sensitive opportunity in this whole brief. By November 2026 the migration wave is partly over, but users who "settled" on a fragmented alternative are still open to switching.
- Positioning: "Built to never disappear on you." This means:
  - local-first storage
  - one-tap export
  - import from TV Time, Trakt and Letterboxd
  - an indie business model where the price is the product
- A couples or household "Us" queue answers "what do we watch tonight," a nightly two-person decision, much like "what's for dinner."
- TV Time's "not enough demand for paid" was said at the scale of a free, ad-funded, VC-backed company. For a solo app, 10–20K paying users at about $20/yr is a viable business. That's an inference; validate it with a pre-order page.

### Gaps
- Not researched:
  - Serializd and Trakt ratings, pricing and complaints
  - Letterboxd complaints
  - JustWatch/Reelgood couples-watchlist features
  - podcast-tracking pain points
- Where-to-watch data licensing (JustWatch API terms, TMDB commercial terms) was not verified, and it is a key feasibility input.
- No direct survey on couples' "what to watch" friction was found.

---

## Q6. Group plans: coordinating friends' availability, splitting trips, group-chat chaos

### Takeaway
Group travel plans mostly fail before booking: 76% "never happen" in a tourism-board survey, after about 83 messages and 19 hours. The splitting incumbent (Splitwise) alienated free users with a daily cap. Existing planners (Wanderlog, TripIt) start after the decision is made. A "chat → committed" decision tool with built-in uncapped splitting is a coherent solo app. Its weaknesses are infrequent use and low per-user willingness to pay.

### Cited Findings
- 76% of group trips never happen; 83 messages and about 19 hours over 11 days (Talker Research for Discover Puerto Rico; women only; fieldwork date unclear) — [syndicated survey article](https://www.ftimes.com/news/national/survey-finds-women-carry-the-mental-load-of-group-travel/article_d7bfdef4-ae12-5997-bbcd-c3fd75e3ff0d.html); [OrlandoMom](https://orlandomom.com/the-group-chat-curse-is-real-heres-how-to-finally-take-the-girls-trip/)
- 1 in 3 travelers have fought on a group vacation — [Time Out](https://www.timeout.com/usa/news/spring-break-travel-trends-group-travel-is-up-and-so-is-vacation-fighting-030926)
- 38% travel with friends (Global Rescue, 2025) — [Global Rescue](https://www.globalrescue.com/common/blog/detail/risk-averse-tech-savvy-travelers-trend/)
- 61% of group travelers overspend because of social pressure (CIT Bank, via a vendor) — [TripProf](https://tripprof.com/uk/blog/group-trip-planning-questionnaire/)
- Splitwise free cap and backlash (Trustpilot, November 2025 quote) — [Trustpilot](https://au.trustpilot.com/review/splitwise.com); alternatives Tricount, Kittysplit, Splid, Spliit — [Finny (competitor)](https://getfinny.app/blog/best-splitwise-alternatives-2026)
- Wanderlog: a $39.99/yr Pro plan, and users who wanted TripIt-style auto-import were disappointed — [Endless Travel Plans](https://www.endlesstravelplans.com/guides/planning-tools/wanderlog-review)

### Inferences
- The product's job is to turn "we should!" into dates, a budget, names and deposits. Guests must not need to install the app (use a web link via iMessage, as Partiful does for invites; Partiful's model was not researched this session).
- Monetize through the organizer: a per-trip unlock (about $4.99–$9.99) or a yearly "planner" plan. A pure monthly subscription will churn because trips are infrequent.
- Splitting is a retention feature here, not a business on its own: free alternatives already exist.

### Gaps
- No data on availability-coordination tools (When2meet, Howbout, Doodle) or their complaints.
- The 76% statistic comes from a single sponsored survey with unclear fieldwork dates.
- Partiful and Meetup were not researched.

---

## Q7. Car ownership: maintenance, parking tickets, EV charging reliability, car-buying

### Takeaway
All three car pains are real:
- **EV charging**: 14% of public charging visits fail (J.D. Power 2025), improving from about 20%.
- **Parking**: "paid but ticketed" from plate and zone errors, and the app companies won't void tickets.
- **Maintenance**: about a third of drivers delay it, and 64% know they need maintenance but haven't acted.

But EV and parking fixes need data networks or city integrations. Maintenance tracking faces a free, 4.8★ incumbent (CARFAX Car Care, about 120K ratings). **Nothing here is a strong solo subscription play.** A "glovebox" feature set (VIN-based schedule, receipt capture, plate/zone check before paying, dispute-letter kit) is the best feasible angle, but weak on willingness to pay.

### Cited Findings
- J.D. Power 2025 EVX Public Charging:
  - 14% failed visits (from about 19–20%)
  - 60% of failures from broken equipment
  - by network: Tesla 4%, Electrify America 6%, Red E 10%, EVgo 12%
  - Pacific region 21%
  - satisfaction down
  
  Sources: [J.D. Power](https://www.jdpower.com/business/press-releases/2025-us-electric-vehicle-experience-evx-public-charging-study); [DealershipGuy](https://news.dealershipguy.com/p/ev-charging-reliability-is-up-but-satisfaction-is-slipping-j-d-power-finds-2025-08-13)
- PlugShare: stale or missing status, survey pop-ups that can't be dismissed (October 2025) — [unitQ](https://www.unitq.com/unitq-scorecards/plugshare/); [InsideEVs forum](https://www.insideevsforum.com/community/threads/latent-defect-with-plugshare-app-both-ios-and-android.9623)
- Parking:
  - SpotHero $75 ticket after paying $12.75 (BBB, March 2025) — [BBB](https://prod.bbb.org/us/il/chicago/profile/parking-facilities/spothero-0654-88576696/complaints)
  - ParkMobile defaulted to the wrong car, leading to a ticket (Trustpilot, January 2025) — [Trustpilot](https://www.trustpilot.com/review/parkmobile.io?page=8)
  - ParkMobile cannot void tickets — [ParkMobile support](https://support.parkmobile.io/hc/en-us/articles/44199141314075/comments/45893807569179)
  - Vendor tally of 115 ticket, tow or boot complaints — [Unstar](https://unstar.app/blog/parkmobile-paid-still-got-ticket-app-not-working-reviews-2026)
- Maintenance:
  - About one-third of drivers skip or delay service (AAA, as reported) — [KBUL](https://kbulnewstalk.com/one-third-of-americans-ignore-vehicle-maintenance-needs/)
  - 64% know it's needed but haven't acted; 58% can't afford a $1,000 repair (FinanceBuzz, July 2025) — [FinanceBuzz](https://financebuzz.com/car-maintenance-survey)
  - CARFAX Car Care: 4.8★ from about 120K ratings; false reminders; depends on shops reporting — [App Store](https://apps.apple.com/us/app/-/id552472249); [unitQ](https://www.unitQ.com/unitq-scorecards/carfax/)

### Inferences
- EV-charging pain is shrinking and needs a network to solve, so avoid it.
- Parking errors are mostly *selection* mistakes (wrong plate or zone). An app layer can prevent these, but it can't integrate with payment without city contracts. Treat this as a feature, not a product.
- A car app could fold into the existing "Deadline Autopilot" idea (`/home/user/New-app-2/research/app-ideas.md`): registration, inspection and insurance renewals, recall alerts, maintenance due dates.

### Gaps
- Car-buying pain (dealer markups, financing) was not researched.
- GasBuddy and Waze complaints were not researched.
- Commuting and transit apps were not researched.
- No recent (2025–2026) primary AAA maintenance survey was retrieved.
- Recall-alert apps and NHTSA data feasibility were not verified this session.

---

## Q8. Sports fans and hobbies (in-scope areas not covered by the other questions)

### Takeaway
Sports fans have the best-measured frustration in this whole brief:
- 87% are frustrated figuring out where to watch (Hub, early 2026).
- 83% want clear guides (Nexxen 2026).
- 32% sign up for streaming services season by season and then cancel (Bango 2026).

That frustration supports a personal "where to watch my team" assistant, with data accuracy as the main risk. Hobby apps (running, hiking, fishing, golf, music practice, photography, crafts), fashion/wardrobe and beauty/skincare **could not be researched** before the search budget ran out.

### Cited Findings
- Hub Wave 4 (2025, n=3,802): 65% find using several services a hassle — [NewscastStudio](https://www.newscaststudio.com/2025/10/16/majority-of-fans-frustrated-by-splintered-sports-rights-new-data-shows)
- Hub Wave 5 (Dec 2025–Jan 2026, n=3,733): 87% at least somewhat frustrated, about 25% very frustrated; 60% prefer a service with all of a league's rights — [TheDesk](https://thedesk.net/2026/03/hub-sports-fans-still-frustrated-by-broadcast-streaming-tv-deals/); [TV Technology](https://tvtechnology.com/insights/analysis/study-overloaded-sports-fans-fed-up-with-fragmented-sports-rights)
- Nexxen 2026: 83% say networks and platforms should offer clear availability guides — [TheDesk, Oct 2026](https://thedesk.net/2026/10/nexxen-sports-fans-still-struggling-to-find-games-on-tv/)
- Bango, June 2026: 32% routinely subscribe for one season and cancel — [Señal News](https://senalnews.com/en/data/usa-sports-streaming-reaches-tipping-point-as-fragmentation-drives-demand-for-bundles/amp)

### Inferences
- Fans blame networks ("it's on them to provide guides," 83%), which suggests they expect the answer to be free. Willingness to pay may hinge on the money-saving angle: "you can cancel Peacock until playoffs; saves $X."
- An affiliate-plus-subscription model fits.
- Hobby apps (Strava, AllTrails, Fishbrain, golf GPS, Simply Piano, Yousician) are dominated by well-funded incumbents with network or content moats. A solo builder would likely need a niche wedge, such as a practice log for a specific instrument or a fly-fishing hatch journal. No evidence was gathered to support or reject this.

### Gaps
- **Not researched (search budget exhausted):**
  - Strava, AllTrails, Fishbrain, golf GPS apps, Simply Piano, Yousician, photography and craft apps
  - wardrobe apps (Acloset, Indyx, Whering) and the "nothing to wear" problem
  - skincare routine and ingredient apps
  - sports-score apps (theScore, FotMob, Sofascore, ESPN)
- No App Store or Reddit quotes for sports where-to-watch frustration were retrieved.
- Sports broadcast-rights data sources and costs, the key feasibility question for C4, were not researched.
- To finish this area, a follow-up session needs `itunes.apple.com`, `apps.apple.com` and `www.reddit.com` allowed in its network settings, plus a fresh web-search budget.
