# Validation cards: four finalist consumer iOS ideas (HOME/PETS, ENTERTAINMENT, SPORTS, FOCUS), November 2026

> **How this was researched, and limits that apply to every card below**
> - I used 35 web searches. WebFetch failed (DNS blocked) on forums.trakt.tv, alternativeto.net, docs.simkl.org and felinediabetes.com. apps.apple.com, itunes.apple.com and reddit.com were already known to be blocked.
> - **Every rating, rating count and price below comes from search-result snippets or third-party trackers** (AppFollow, AppGoblin, mwm.ai, AppsHunter, Gizmodo listings), not the live App Store. These trackers often disagree with each other, and each disagreement is flagged where it occurs.
> - Subreddit member counts come from GummySearch previews, which may be dated.
> - Several sources are vendor or competitor blogs: Moviebase, Saner.ai, Mutra, Kick-mint, Flow Club, Flown, and Simkl's own docs. They are labeled where used.
> - I also reused cited evidence from sibling notes in this folder (`lifestyle_leisure.md`, `family_home_relationships.md`, `productivity_learning.md`, `market_data_indie_success.md`). Those findings are re-cited here with their original URLs.
> - In the scores, **10 = most favorable to building**. For example, a high "competition gap" score means a big open gap.

---

## A. Shared pet feeding & medication log (start with pets on chronic meds)

### Takeaway
The pain is real and the use is very frequent: two or three times a day, and dangerous for insulin or seizure meds. The concept is **not open, though**:
- **DogLog** (about 4.7★ from about 1.4K ratings, on the App Store since about 2017) already does "Pack" shared logging of meals, walks and meds, with caregiver notifications.
- At least 6 new shared "did you feed the pet?" apps launched in 2025–26.
- Merck gives away a free diabetes tracker.

The remaining gap is **execution plus a med-first niche**: a double-dose guard, a sitter link that needs no install, and native iOS surfaces such as widgets, Live Activities and Watch. The demand ceiling is modest, and willingness to pay is unproven. **Verdict: MAYBE: a solid, low-risk small business if it is built med-first, but not a breakout.**

### Cited Findings

**(1) Direct competitors**

| App | Launch | Rating (count) | Price | Who / traction | Source |
|---|---|---|---|---|---|
| **DogLog – Track your dog's life** | iOS ID 1229529595 suggests about 2017 (inference from ID range) | **4.77★ (about 1.4K ratings)** on one aggregator; 4.7★ US App Store per AppFollow | Free with subscription IAP | Invite family, walkers and sitters to a "Pack"; log food, walks and medication; "Get notified when activities are logged"; shared photo feed. On Product Hunt. | [AppFollow US](https://apps.appfollow.io/ios/doglog-track-your-dogs-life/1229529595?country=us); [AppGoblin](https://appgoblin.info/apps/1229529595); [Slashdot listing](https://slashdot.org/software/p/DogLog/); [Product Hunt](https://www.producthunt.com/products/doglog) |
| **11pets: Pet Care** | iOS ID 1232470530 (about 2017, inferred) | US iOS **3.3★** (AppFollow); **3.20★ from 147** (AppGoblin); Google Play **2.1★ from 295** (AppWisp, Sep 2025) vs an older **3.7★ from 5,446** (AppFollow) | Free; IAPs listed at **$1.99 and $17.99**, with terms unclear | An aggregator says users report "significant friction regarding recent transitions to a subscription-based model" (low-reliability AI aggregator) | [AppFollow US](https://apps.appfollow.io/ios/11pets-pet-care/1232470530?country=us); [AppGoblin](https://appgoblin.info/apps/1232470530/trends); [AppWisp](https://appwisp.com/app/android/com.m11pets.elevenpets); [Marlvel](https://marlvel.ai/api/llm/apps/health-fitness/11pets-pet-care); [App Store](https://apps.apple.com/us/app/11pets-pet-care/id1232470530) |
| **Fed? – Pet Feeding Tracker** | 2026 (ID 6760776848) | none found | Pro **Lifetime $39.99** one-time | Uses Apple Family Sharing and a shared private CloudKit container; notifies when a family member feeds the pet; Pro covers unlimited pets, family sharing and full history | [App Store](https://apps.apple.com/us/app/id6760776848); [AppsHunter](https://appshunter.io/ios/app/fed/id6760776848); [dev site](https://smartkiitos-website.pages.dev/fed/) |
| **I Fed the Pet: Feed Tracker** | 2026 (ID 6762333960) | none found | Pro tier | "Everyone in your household instantly sees it's done"; Pro adds reminders, unlimited pets and members, and 30-day history | [App Store](https://apps.apple.com/app/id6762333960); [AppGoblin](https://appgoblin.info/apps/6762333960) |
| **Pawlo** | 2026 Product Hunt launch | — | — | Shared checklist for feeding, walks and meds; household joins with a code | [Product Hunt](https://www.producthunt.com/products/pawlo-2) |
| **PetPilot**, **PawClock**, **Did I Feed The Dog?** (Siri/Shortcuts), **FamilyPet+** (Android) | 2025–26 | — | — | Shared feeding, walks and health logs | [PetPilot](https://apps.apple.com/us/app/petpilot/id6749286937); [PawClock](https://apps.apple.com/us/app/pawclock/id6761330503); [FamilyPet+](https://www.producthunt.com/p/familypet/familypet) |
| **PetPillBox, AllTails Care, My Pet Child, Muzzly, DosePaw, TailCare, PetMed** | 2025–26 | none found | PetPillBox is a one-time purchase; AllTails is freemium | From the sibling note: all small. My Pet Child pitches a "household code… no dose double-counted or missed" | [iPhoneAddict](https://iphoneaddict.fr/apps/forme-sante/petpillbox-pet-med-tracker-328.html); [PeerPush](https://peerpush.com/p/alltails-care); [mypetchild.com](https://mypetchild.com); [DosePaw PH](https://www.producthunt.com/p/dosepaw) |
| **Vetsulin Pet Diabetes Tracker** (Merck Animal Health) | older; date not found | — | **Free** | Logs food and water intake alongside blood-glucose curves, with reminders and alerts; also offers a web glucose-curve generator | [Vetsulin](https://www.vetsulin.com/cats/pet-diabetes-tracker/); [Merck](https://www.merck-animal-health-usa.com/pet-owners/vetsulin/cats/pet-diabetes-tracker/); [Caninsulin](https://caninsulin.com/dogs/resources-dogs/pet-diabetes-tracker-mobile-app/) |
| **CarePaws: Cat Diabetes Tracker**, **Lumi: Diabetic Pet Tracker**, **SugarPaw**, **GlycoPaws** ($1.99, iPad, Taiwan), **PetHealthLog** (free offline web app) | 2025–26 | Lumi has "no ratings yet" | Free with IAP, except GlycoPaws | Glucose, insulin and weight logs, glucose-curve overlays, vet reports | [CarePaws](https://apps.apple.com/app/id6765475907); [Lumi](https://appshunter.io/ios/app/lumi-diabetic-pet-tracker/id6767090924); [SugarPaw](https://mwm.ai/apps/sugarpaw/6754842402); [GlycoPaws](https://apps.apple.com/app/id6746027858); [PetHealthLog](https://pethealthlog.pages.dev/diabetic-cat-blood-sugar-log-app) |
| **RVC Pet Epilepsy Tracker** (Royal Veterinary College) | 2015 | — | Free | Seizure type, time, duration and severity; meds; optional research sharing | [App Store UK](https://apps.apple.com/gb/app/id992917809); [RVC newsletter 2015](https://rvc-web-app01.live01.azure.rvc.ac.uk/static/newsletter/clinical-connections/2015-aut-flipped/files/basic-html/index.html) |
| **EpiPaws**, **MediPaws**, **Ares – Dog Epilepsy Tracker**, **PawAura** | 2025–26 | none found | Free with IAP | Seizure logs, dose adherence, lock-screen widgets (EpiPaws), vet reports; PawAura's Pro tier sells a "Seizure Fingerprint" | [MediPaws](https://apps.apple.com/pg/app/medipaws/id6751778103); [Ares terms](https://huskeelife.notion.site/Ares-App-Terms-of-Service-33824eaaf99680b6b8eafd6c1e4764d9); [PetHealthLog seizure log](https://pethealthlog.pages.dev/dog-seizure-log-tracker-app) |
| **PetDesk** | older; controlled by clinics | Capterra 4.7 (180, mostly clinics) | Free to owners | Appointment and reminder app run by vet clinics | [Capterra](https://capterra.com/p/166086/PetDesk/reviews/) (from sibling note) |

**(2) What competitors' users complain about**
- PetDesk: *"accounts at different clinics using PetDesk can't be linked"*; appointments vanished; reminders arrived for visits that were never booked. An aggregator estimates 24.8% of reviews are negative. Date not stated. — [JustUseApp](https://justuseapp.com/en/app/631377773/petdesk/reviews)
- 11pets: ratings slid to about 2.1★ on Google Play (Sep 2025 snapshot) after the move to subscription, per aggregators. — [AppWisp](https://appwisp.com/app/android/com.m11pets.elevenpets); [Marlvel](https://marlvel.ai/api/llm/apps/health-fitness/11pets-pet-care)
- RVC Epilepsy Tracker: one App Store reviewer said the research-sharing feature did not work for them. This comes from a search summary; no date was given. — [App Store UK](https://apps.apple.com/gb/app/id992917809)
- DogLog praise (shows the job users hire it for): *"helps my partner and I and our adult children who live at home to care for our pup together"* (Canadian App Store review, undated). — [Apptail](https://apptail.io/app/doglog-track-your-dogs-life-JYI/canada)
- Owners' pain in their own words:
  - *"three dogs one bad week and nothing written down anywhere"* — [Indie Hackers](https://www.indiehackers.com/post/three-dogs-one-bad-week-and-nothing-written-down-anywhere-fb70770cc5)
  - *"After a near-tragedy with a cat, I decided that pet parents needed a better solution"* — [FDMB](https://felinediabetes.com/FDMB/goto/post?id=3284942)
  - An FDMB thread asks *"How do you track your cat's BG, insulin doses, and symptoms? Spreadsheet? App? Paper?"*. The thread exists, which suggests no default tool. Its content could not be read (host blocked). — [FDMB thread](https://felinediabetes.com/FDMB/threads/how-do-you-track-your-cats-bg-insulin-doses-and-symptoms-spreadsheet-app-paper.305978)

**(3) Demand evidence**
- About 95M US pet households (APPA 2026): dogs in 53% (about 71M homes), cats in 39% (53M); US pet spend was $158B in 2025. — [AccessNewswire (APPA)](https://www.accessnewswire.com/newsroom/en/business-and-professional-services/u.s.-pet-industry-reaches-158-billion-in-2025-poised-for-continu-1165595)
- Seizures (Banfield data from 2012, so old): **1.11% of dogs** (24,330 of 2.19M) and **0.25% of cats** had seizure diagnoses. — [Today's Veterinary Practice](https://todaysveterinarypractice.com/endocrinology/pet-health-by-the-numbers-focus-on-diabetes-mellitus-and-seizures/)
- Diabetes (Banfield 2016, old): canine diabetes **up 79.9% since 2006**, feline diabetes **up 18.1%**. Canine diabetes prevalence was **0.05–0.40% by size group** (2013 data). The disease is more prevalent in cats. — [PR Newswire (Banfield 2016)](https://prnewswire.com/news-releases/banfield-pet-hospital-releases-state-of-pet-health-2016-report-highlights-10-year-trends-for-common-diseases-300255151.html); [Today's Veterinary Practice](https://todaysveterinarypractice.com/endocrinology/pet-health-by-the-numbers-focus-on-diabetes-mellitus-and-seizures/)
- Communities:
  - **r/FelineDiabetes is about 4K members** (GummySearch preview, possibly dated). — [GummySearch](https://gummysearch.com/r/FelineDiabetes)
  - **Feline Diabetes Message Board (FDMB): established 1996, "30,000+ Members"** (self-reported). — [FDMB guide](https://felinediabetes.com/guide-fdmb/)
  - r/canineepilepsy and r/DiabeticDogs sizes were **not found** (see Gaps).

**(4) Willingness to pay**
- Price points in the category are low:
  - Fed? Pro Lifetime is **$39.99** — [AppsHunter](https://appshunter.io/ios/app/fed/id6760776848)
  - 11pets IAPs are **$1.99 and $17.99** — [AppFollow](https://apps.appfollow.io/ios/11pets-pet-care/1232470530?country=us)
  - GlycoPaws is **$1.99** — [App Store](https://apps.apple.com/app/id6746027858)
  - DogLog is freemium with subscription — [AppFollow](https://apps.appfollow.io/ios/doglog-track-your-dogs-life/1229529595?country=us)
- The diabetes segment's price anchor is **$0**: Merck gives Vetsulin's tracker away. — [Vetsulin](https://www.vetsulin.com/cats/pet-diabetes-tracker/)
- Negative signal: 11pets' ratings fell after its subscription switch (aggregator claim, above).
- No survey of pet-app willingness to pay was found.

**(5) Short-video marketability**
- No TikTok hashtag data was retrieved for #diabeticcat, #seniordog or similar (see Gaps).

**(6) Platform / App Store risk**
- Apple provides the core plumbing; Fed? already uses Family Sharing and a shared CloudKit container. — [App Store listing](https://apps.apple.com/us/app/id6760776848)
- No external data licensing is needed.

### Inferences
- **The concept gap is smaller than the sibling notes assumed.** DogLog has offered shared family/sitter logging with notifications for years and is well rated. Several 2026 indie clones exist (Fed?, I Fed the Pet, Pawlo, PetPilot). **None shows breakout traction**: no rating counts above about 1.4K were found. That suggests the generic "did you feed the dog?" use case has a **low monetization ceiling**, because feeding is low-stakes.
- **Where the pain is sharpest is medication**: insulin twice a day, anti-seizure meds every 8–12 hours. Here the risks are a double dose or a missed dose. Existing diabetes and epilepsy apps are mostly **single-user logs** (CarePaws, Lumi, RVC, EpiPaws). Shared household logs (DogLog) are **generic**, not med-safety tools. The overlap, a **multi-caregiver medication-safety log**, is the most defensible wedge found.
- Rough size of the beachhead (inference using old prevalence data):
  - Dogs: about 71M dog households × about 1.1% with seizures ≈ **about 0.8M households**.
  - Diabetic dogs: about 0.2% × 71M ≈ **about 0.14M households**.
  - Diabetic cats: likely several hundred thousand households, but no cat diabetes prevalence was sourced this session.
  - Add senior, thyroid and arthritis meds, and the total is plausibly **1–3M US households** on a daily chronic-med routine.
  - At 1% conversion and $30/yr, that is about $300K–900K/yr. This is a real solo business, not a venture outcome.
- **5-second "magic moment"** (inference):
  - Partner A goes to give insulin. Their phone buzzes: *"Already given by Sam, 7:42am. Next dose 7:30pm."* Cut to the cat's relieved face.
  - A second version: the dog "pretending he hasn't been fed" meets a lock-screen Live Activity reading "Fed ✓ 7:02 by Mom".
  - The pet-guilt trope suits TikTok; the medication angle is less shareable.

**(7) Scores (1–10, where 10 favors building)**

| Dimension | Score | Justification |
|---|---|---|
| Pain intensity | **7** | Life-or-death for insulin and seizure meds (8–9); trivial for general feeding (4); weighted to the med-first niche |
| Frequency of use | **9** | Two or three times daily, every day, by several people |
| Market size | **6** | 95M pet households overall, but the paying chronic-med niche is about 1–3M households (inferred, old data) |
| Competition gap | **4** | DogLog (about 4.7★/1.4K) plus 6+ 2026 clones plus free Merck tracker. The gap is execution: double-dose guard, sitter link, iOS-native surfaces, a vet PDF combining glucose curves and seizure logs |
| Willingness to pay | **5** | Category prices are $2–$40 one-time; there is a free vendor tracker; 11pets' subscription backlash. Chronic-pet owners already spend heavily on care (insulin, strips, vet visits), but app WTP is unproven |
| Marketability | **6** | Relatable "already fed" or "already dosed" gag; pet TikTok is large (not quantified here); med content is less viral |
| Solo feasibility | **9** | CloudKit sharing, local notifications, widgets, Live Activities, PDF export; no data licensing; low server cost |
| **Total** | **46/70** | |

**(8) Verdict: MAYBE (the best low-risk option; a modest ceiling)**
- Sharpest positioning: **"The shared med chart for pets on daily meds. Everyone in the house, and the sitter, sees 'Insulin given ✓ by Sam 7:42' — and the app blocks a second dose."**
- Launch on diabetic cats (FDMB 30K members, r/FelineDiabetes) and epileptic dogs, not "all pet owners."
- Free tier: one pet, feeding log, two people.
- Paid tier, about $3.99/mo or $29.99/yr plus an honest lifetime option:
  - multiple caregivers
  - med schedules with a missed-dose escalation ("no one has logged the 8am dose")
  - a double-dose guard
  - a sitter web link with no install
  - a vet-ready PDF with glucose curve, seizure calendar and adherence
- Avoid dose *calculation*; log only (see Gaps on Apple's guideline).

### Gaps
- r/canineepilepsy, r/DiabeticDogs and Facebook group sizes (for example "Canine Epilepsy Support") were not found. Reddit is blocked and search snippets carried no counts.
- No current (2020s) prevalence figures for feline diabetes, or for the share of pets on any daily chronic medication. Banfield's newer State of Pet Health reports were not retrieved.
- Not researched: Tractive and Fi (GPS/health collars), Chewy/Vet apps, Pawprint, Petnote, Pawtrack, Pet Diary. All were named in the brief but were left out to stay within the search budget.
- No TikTok hashtag view counts for pet-medication or pet-feeding content.
- No download or revenue estimates for DogLog or any shared-pet-log app.
- Apple App Store Review Guideline 1.4.2 (drug dosage calculators must come from approved entities) is recalled from prior knowledge and **was not re-verified this session**. Check it before adding any dose math.

---

## B. TV/movie tracker for people displaced by TV Time's shutdown

### Takeaway
The displacement event was huge: **26.4M lifetime installs** and a petition with 28K+ signers. But the window has largely closed:
- **TV Time's own co-founder launched Bingers on Aug 4, 2026**. It is free, imports TV Time archives, and targets the same community.
- Trakt, Simkl, Serializd, JustWatch's migration tool and several "import from TV Time" apps took the rest.

The willingness-to-pay evidence is **the worst of the four ideas**:
- TV Time's premium tier covered only about 10% of its costs.
- Bingers chose donations over a subscription.
- Trakt's move to $60/yr triggered backlash and churn.

The "couples' shared queue" angle already has at least 7 swipe-to-match apps. **Verdict: SKIP.**

### Cited Findings

**(1) Direct competitors, and who absorbed TV Time's users**
- **TV Time background:**
  - Shut down July 15, 2026; personal data deleted. Whip Media said "not enough demand for a paid app." — [TechCrunch, Jul 2 2026](https://techcrunch.com/2026/07/02/popular-tv-tracking-app-tv-time-is-shutting-down-as-company-focuses-on-ai/); [MacRumors](https://macrumors.com/2026/07/02/show-tracking-app-tv-time-shutting-down)
  - More than **26.4M lifetime installs** (Appfigures, cited by TechCrunch). — [TechCrunch, Aug 4 2026](https://techcrunch.com/2026/08/04/tv-time-co-founder-launches-bingers-to-revive-the-beloved-tv-tracking-app/)
  - The "26 million users" figure is a competitor press-release claim. — [press release](https://www.myknoxcountynews.com/online_features/press_releases/article_16c379d7-0e06-5564-a6e7-176c5a46b823.html)
- **Bingers** (new, the most direct successor):
  - Launched **Aug 4, 2026** by TV Time co-founder **Antonio Pinto**; free on iPhone and Android.
  - TV Time archive import is live on its website.
  - It loads users' libraries onto their phones to cut server costs.
  - It will initially monetize through **user contributions toward server costs**. A Premium tier is "not ruled out."
  - No download or rating numbers were found.
  - Sources: [TechCrunch](https://techcrunch.com/2026/08/04/tv-time-co-founder-launches-bingers-to-revive-the-beloved-tv-tracking-app/); [iThinkDiff](https://www.ithinkdiff.com/bingers-tv-time-replacement-ios-android/); [TuttoAndroid, Aug 6 2026](https://www.tuttoandroid.net/news/2026/08/06/bingers-app-tracciare-film-serie-tv-time-1166311/); [Neowin](https://www.neowin.net/news/tv-time-is-on-its-last-legs-its-founder-is-already-building-its-replacement/)
- **Trakt:**
  - Described as the most commonly cited destination for displaced TV Time users. Note this source also promotes alternatives. — [SquaredTech](https://www.squaredtech.co/tv-time-app-shutting-down-july-15-top-alternatives-for-fans)
  - Feb 2025: stricter free-tier limits, and the VIP price doubled from **$30 to $60/yr**. May 2025: all renewals moved to the standard rate, ending grandfathered pricing. — [AlternativeTo Feb 2025](https://alternativeto.net/news/2025/2/trakt-tv-has-set-stricter-limits-for-free-users-and-raised-vip-subscription-prices-by-100-/); [AlternativeTo May 2025](https://alternativeto.net/news/2025/5/trakt-announces-all-vip-renewals-will-switch-to-a-new-standard-rate-doubling-prices/); [Neowin ("up to 300% price hike")](https://www.neowin.net/amp/trakt-vip-receives-up-to-300-price-hike-going-back-on-promise-to-honor-legacy-subs/)
  - Nov 2025: a full redesign, whose early reaction was mostly negative. — [AlternativeTo Nov 2025](https://alternativeto.net/news/2025/11/trakt-unveils-a-full-redesign-of-its-movie-and-tv-tracking-platform-for-web-and-mobile/)
  - 2026 limits update: free watchlist and lists reportedly rose **from 100 to 250**. Simkl, a competitor, claims free users are capped at 100. The two conflict, and Trakt's own post was not readable. — [Trakt forum (snippet)](https://forums.trakt.tv/t/updating-trakt-limits-for-2026/101592); [Simkl vs Trakt (competitor)](https://docs.simkl.org/how-to-use-simkl/faq/frequently-asked-questions/simkl-alternatives/simkl-vs-trakt)
  - AlternativeTo lists Trakt at **4.19★ App Store average**, with no count given. — [AlternativeTo](https://alternativeto.net/software/trakt/about)
- **Simkl:**
  - Freemium, with one-click import from TV Time and Trakt.
  - Its servers reportedly "buckled" under the sign-up wave (secondhand reports).
  - Sources: [Cord Cutters News](https://cordcuttersnews.com/a-popular-cord-cutting-service-is-shutting-down/); [Moviebase (vendor)](https://moviebase.app/resources/tv-time-vs-simkl); [Simkl iOS](https://apps.apple.com/us/app/id1229691035)
- **Serializd:**
  - "Letterboxd for TV"; free.
  - **4.5★ from 1,041** on a Gizmodo listing, date unclear and probably dated.
  - A French report says it was overwhelmed after the shutdown announcement, with crashes, and **TV Time import not yet available**.
  - Sources: [Gizmodo listing](https://gizmodo.com/download/serializd); [Product Hunt reviews](https://www.producthunt.com/products/serializd/reviews); [Mac4Ever](https://www.mac4ever.com/tv/196991-tv-time-ferme-le-15-juillet-voici-les-applis-qui-peuvent-sauver-vos-annees-de-series)
- **Other apps:**
  - JustWatch launched a TV Time migration tool (Jul 9, 2026). — [9to5Mac](https://9to5mac.com/2026/07/09/as-tv-time-prepares-to-shut-down-justwatch-launches-migration-tool/)
  - **Showly**: free, open-source, built on the Trakt API; one fork is discontinued. — [AlternativeTo](https://www.alternativeto.net/software/showly/)
  - **Sequel**: freemium, iPhone and iPad only; no ratings found. — [AlternativeTo](https://www.alternativeto.net/software/sequel--media-tracker/)
  - **Sofa Time** imports TV Time history. — [App Store](https://apps.apple.com/my/app/id1491037404)
  - **NextEp** is ad-free with one-tap TV Time import. — [AlternativeTo](https://alternativeto.net/software/tvshow-time/)
  - **Moviebase** is a vendor that syncs with Trakt and published migration guides. — [Moviebase](https://moviebase.app/resources/tv-time-alternatives)
- **Couples' "what do we watch" apps (the proposed differentiator is already taken):**
  - **Swatched!**: swipe "want to watch / not interested / seen it"; notifies you when your partner matches. — [App Store](https://apps.apple.com/us/app/swatched/id1579291584)
  - **FlickPicker**. — [App Store](https://apps.apple.com/us/app/flickpicker/id6759133156)
  - **UPick** (graded "Super Match"). — [mwm.ai](https://mwm.ai/ja/apps/upick-watch-together/6766354856)
  - **Shared Watchlist: Couple match** (a subscription is required to invite a partner). — [App Store](https://apps.apple.com/us/app/id6755390014)
  - **WatchPick**. — [App Store](https://apps.apple.com/app/id6759346000)
  - **Dunno**. — [AlternativeTo](https://alternativeto.net/software/dunno--swipe-and-watch/about/)
  - **Matched** (2022; featured as a local-TV "App of the Day"). — [App Store](https://apps.apple.com/us/app/-/id1623287922); [KOB](https://www.kob.com/news/technology/matched-what-the-tech-app-of-the-day/)

**(2) Complaints**
- Trakt: *"increasing prices by 100%, locking core features behind paywall, and not listening to the community feedback"* (AlternativeTo user review, 2025). — [AlternativeTo](https://alternativeto.net/news/2025/2/trakt-tv-has-set-stricter-limits-for-free-users-and-raised-vip-subscription-prices-by-100-/)
- Trakt: *"many users are saying they are dropping the service"* (Firecore/Infuse community, May 2025). — [Firecore community](https://community.firecore.com/t/trakt-alternative-scrobbling/55585.md)
- Trakt's Nov 2025 "Lite" redesign was called *"incomplete and less functional than Trakt Classic"*. — [AlternativeTo](https://alternativeto.net/news/2025/11/trakt-unveils-a-full-redesign-of-its-movie-and-tv-tracking-platform-for-web-and-mobile/)
- Trakt's May 2026 product update concedes the goal of being useful "without feeling like you're constantly running into a paywall". — [Trakt forum](https://forums.trakt.tv/t/trakt-product-update-may-2026/111812)
- Serializd: users cite no rewatch counts, being unable to review without logging, gaps in the social feed, and trouble getting the home page to show current series. — [Product Hunt reviews](https://www.producthunt.com/products/serializd/reviews)
- Matched (couples app): a review says it *"doesn't always match if one person has an iPhone and other has an Android"*. — [App Store](https://apps.apple.com/us/app/-/id1623287922)
- TV Time itself, pre-shutdown (undated analysis): missing episodes, incorrect data, moderation problems. — [Kimola](https://kimola.com/reports/unlock-insights-tv-time-app-user-feedback-analysis-app-store-fr-144807)

**(3) Demand evidence**
- 26.4M lifetime TV Time installs; 28K+ petition signers asking for a paid "TV Time 2.0". — [TechCrunch](https://techcrunch.com/2026/08/04/tv-time-co-founder-launches-bingers-to-revive-the-beloved-tv-tracking-app/); [Change.org](https://www.change.org/p/save-tv-time-from-closure-and-launch-a-successor-soon)
- No official sign-up numbers for Trakt, Simkl, Serializd or Bingers after the shutdown were found.

**(4) Willingness to pay (strongly negative)**
- Pinto said TV Time's premium plan **covered only about 10% of its expenses**. — [Neowin](https://www.neowin.net/news/tv-time-is-on-its-last-legs-its-founder-is-already-building-its-replacement/); [TechCrunch](https://techcrunch.com/2026/08/04/tv-time-co-founder-launches-bingers-to-revive-the-beloved-tv-tracking-app/)
- Whip Media: "not enough demand for a paid app". — [TechCrunch](https://techcrunch.com/2026/07/02/popular-tv-tracking-app-tv-time-is-shutting-down-as-company-focuses-on-ai/)
- The founder's successor, Bingers, chose **donations, not a subscription**. — [TuttoAndroid](https://www.tuttoandroid.net/news/2026/08/06/bingers-app-tracciare-film-serie-tv-time-1166311/)
- Serializd is free. — [SourceForge listing](https://sourceforge.net/app/serializd/iphone/)
- Partial counter-signal: Trakt sustains a **$60/yr VIP** tier, but it drew backlash and churn. — [AlternativeTo](https://alternativeto.net/news/2025/5/trakt-announces-all-vip-renewals-will-switch-to-a-new-standard-rate-doubling-prices/)

**(6) Platform / data risk**
- TMDB, the default metadata source: "commercial use must be covered by a written agreement… [which] may involve payment of fees". A paid app counts as commercial. — [TMDB API Terms](https://themoviedb.org:443/api-terms-of-use); [TMDB developer FAQ](https://developer.themoviedb.org/docs/faq)
- Streaming-availability data (JustWatch-type) is also a licensing question (see Gaps).

### Inferences
- **The window closed in about 3 weeks.** The most beloved feature, the per-episode community, is exactly what the co-founder rebuilt in Bingers, with the founder's credibility, archive import, and a free price. A solo newcomer in November 2026 competes against Bingers, Trakt, Simkl, Serializd and JustWatch, all free or freemium, for users who have already migrated once.
- **The economics are structurally bad for subscriptions.** The heaviest users (the archive-keepers) are the costliest to serve, and the category has trained users to expect free. TV Time's premium tier covered about 10% of costs at 26M installs. Trakt's attempt to charge more caused backlash. A lean indie could survive at tiny scale, but there is **no evidence of a pool of payers** beyond the 28K petition (signing a petition is not paying).
- **The couples' "what do we watch" angle is a commodity**: 7+ swipe-match apps, some charging to invite a partner. It is a feature, not a moat.
- **5-second magic moment** (inference): two phones, both swipe right on the same show, "It's a match 🍿". That works on TikTok, but it is already the pitch of Swatched, FlickPicker and others.

**(7) Scores**

| Dimension | Score | Justification |
|---|---|---|
| Pain intensity | **5** | Anger at the data loss was intense in July 2026; most users have since migrated; tracking is a nice-to-have |
| Frequency | **8** | Several times a week for active watchers |
| Market size | **7** | 26.4M lifetime TV Time installs; a very large streaming audience |
| Competition gap | **2** | Bingers (founder, free, imports archives), Trakt, Simkl, Serializd, JustWatch, Sofa Time, NextEp, plus 7+ couples swipe apps |
| Willingness to pay | **2** | TV Time premium covered about 10% of costs; Bingers runs on donations; Trakt price backlash |
| Marketability | **6** | Swipe-match and "Wrapped"-style stats are shareable but already used by others |
| Solo feasibility | **6** | Needs a TMDB commercial license, availability-data licensing, TV Time/Trakt import parsers, and growing server and metadata costs |
| **Total** | **36/70** | |

**(8) Verdict: SKIP**
- If the founder still wants a foothold, the only sharp angle left is **"the tracker that can't die: local-first, works offline, your whole history in a file you own, one-time price."** It targets the users burned twice (TV Time, then Trakt's price hike).
- That is a small niche, priced one-time rather than as a subscription.

### Gaps
- Bingers' downloads, ratings and any premium tier were not found; the Neowin "$28/year ad-free" mention is ambiguous (it may refer to TV Time).
- Not found: Letterboxd 2025–26 member numbers; Serializd user counts; Simkl and Showly current ratings and prices; Sequel details; JustWatch's own TV Time migration take-up.
- TMDB commercial license price: a "$149/month for companies under $1M revenue" figure appears on third-party sites only; **unverified**.
- JustWatch and Reelgood availability-API licensing terms were not checked.
- The Trakt, AlternativeTo and Simkl pages could not be fetched (DNS blocked), so their forum and announcement wording comes from snippets.

---

## C. "Where do I watch my team's game tonight?" sports fan app

### Takeaway
The pain is the best-measured of the four: 87% of fans are frustrated, and 83% want clear guides. But **the job is already done for free by rights-holders and platforms**:
- ESPN's "Where to Watch" covers 250+ sources, with favorites.
- Apple Sports shows broadcast lines.
- Google Search shows "Live on" options.
- JustWatch Sports, LiveSportsOnTV (about 4.8★, about 120K+ downloads) and the new Find My Sports also cover it.

Accurate per-market rights data needs **paid enterprise feeds** (Gracenote, PredictHQ, TV Media). No evidence was found that fans pay for a guide. **Verdict: SKIP for a subscription business.**

### Cited Findings

**(1) Direct competitors**
- **ESPN "Where to Watch"** (ESPN app and espn.com/wheretowatch):
  - Launched Aug 2024; covers **250+ linear and streaming sources**, including rivals.
  - Users set favorite teams and leagues, tied to their ESPN profile, which then show at the top.
  - Filters by league or by watch option (ESPN+, Peacock, FOX…).
  - Early gaps (NBC/Peacock and Prime Video excluded) were later reported as filled. These sources conflict.
  - ESPN says the guide is not a complete list.
  - Front Office Sports covered it again in Jun and Sep 2026.
  - Sources: [TheDesk, Aug 2024](https://thedesk.net/2024/08/espn-where-to-watch-sports/); [Engadget](https://www.engadget.com/entertainment/espns-where-to-watch-offers-a-tv-and-streaming-guide-to-sports-viewing-221350244.html); [TheWrap](https://www.thewrap.com/espn-where-to-watch-feature-explained); [The Streamable](https://thestreamable.com/espn-is-trying-to-make-it-easier-to-find-out-where-games-are-streaming); [Disney](https://thewaltdisneycompany.com/?p=28072); [Front Office Sports, Sep 2026](https://frontofficesports.com/article/espn-where-to-watch-guide/)
- **Apple Sports:**
  - The Jan 2025 update added a broadcast line (e.g., "Live on NHL Network") for US nationally broadcast games. — [MacRumors, Jan 27 2025](https://www.macrumors.com/2025/01/27/apple-sports-app-update)
  - **v4.0 (May 19, 2026)**: World Cup features, Live Activities for followed teams, 170+ countries. — [MacRumors, May 2026](https://www.macrumors.com/2026/05/19/apple-sports-app-2026-world-cup/); [Apple Newsroom](https://apple.com/ca/newsroom/2026/05/apple-sports-expands-to-more-than-90-new-countries-and-regions)
  - A MacRumors forum user complained it "doesn't actually show what networks or apps to go to" (date unclear, possibly before the update). — [MacRumors forums](https://forums.macrumors.com/threads/apple-sports-app-updated-with-live-scores-on-iphones-lock-screen-and-more-new-features.2436477/page-3)
- **Google Search:** since 2020 it has shown where to watch MLB and NBA games, with a "Live on" button next to scores; "blackout restrictions may apply." No 2025–26 update was found. — [Google blog](https://blog.google/products-and-platforms/products/search/finding-live-tv-shows-and-sports-just-got-easier-search/); [TechXplore 2020](https://techxplore.com/news/2020-08-google-easier-nba-mlb-games.amp)
- **JustWatch Sports:**
  - Beta in July 2022 in Europe, with US pages for football, basketball and others. — [TodoTVNews](https://todotvnews.com/en/justwatch-launches-sports-guide-in-spain-and-select-european-markets/); [JustWatch US football](https://www.justwatch.com/us/football)
  - PCWorld listed it as a "dishonorable mention" among sports guides. — [PCWorld](https://www.pcworld.com/article/2448020/these-sports-streaming-guides-will-show-you-where-to-watch-the-game.html)
- **Livesportsontv.com: TV Guide** (Ronin Venture AB):
  - iOS **about 4.8★ from about 560–600 ratings**, **121K+ downloads** (tracker estimate).
  - Google Play about 151K installs, 515 ratings, 4.6★.
  - Guide only, does not stream.
  - Sources: [mwm.ai](https://mwm.ai/apps/livesportsontv-com-tv-guide/1520210485); [AppGoblin](https://appgoblin.info/apps/com.livesportontv)
- **Find My Sports** (2026, ID 6763344286): filters tonight's games to *your* TV and streaming providers. That is exactly the proposed concept. — [App Store](https://apps.apple.com/app/id6763344286)
- **Game Day Notifier**. — [App Store](https://apps.apple.com/ci/app/game-day-notifier/id6476784132)
- Yahoo Sports and Flashscore offer per-team notifications. — [Yahoo help](https://help.yahoo.com/kb/SLN7118.html); [Flashscore](https://www.flashscore.com/news/personalised-notifications-set-up-unique-in-app-notifications-for-each-team-and-match/OSM00lBF/)
- Reelgood sports: nothing found.

**(2) Complaints**
- ESPN's guide at launch "merely offered information about where games are being televised," with few one-tap links into the right app. — [Engadget](https://www.engadget.com/entertainment/espns-where-to-watch-offers-a-tv-and-streaming-guide-to-sports-viewing-221350244.html)
- ESPN admits the guide is incomplete. — [Disney](https://thewaltdisneycompany.com/?p=28072)
- No App Store complaint quotes for sports-guide apps were retrieved.

**(3) Demand**
- **Hub Wave 5 (Dec 2025–Jan 2026, n=3,733):** 87% at least somewhat frustrated figuring out where to watch; about 25% "very frustrated." — [TheDesk, Mar 2026](https://thedesk.net/2026/03/hub-sports-fans-still-frustrated-by-broadcast-streaming-tv-deals/)
- **Nexxen 2026:** 83% want clear guides. — [TheDesk, Oct 2026](https://thedesk.net/2026/10/nexxen-sports-fans-still-struggling-to-find-games-on-tv/)
- **Bango (Jun 2026):** 32% subscribe for one season, then cancel. — [Señal News](https://senalnews.com/en/data/usa-sports-streaming-reaches-tipping-point-as-fragmentation-drives-demand-for-bundles/amp)

**(4) Willingness to pay**
- Every competitor found is free (ESPN, Apple Sports, Google, JustWatch, LiveSportsOnTV).
- No paid sports-guide app with traction was found.

**(6) Data feasibility and platform risk**
- **Gracenote On Sports** (Nielsen): one API across 150+ leagues, tied to Gracenote's TV listings. This is enterprise-licensed. — [TheDesk, Dec 2024](https://thedesk.net/2024/12/nielsen-gracenote-on-sports/); [Gracenote Schedules docs](https://documentation.gracenote.com/on-api/html/Content/dev-guide/Schedules%20Endpoint.htm)
- **PredictHQ Broadcasts API:** top US leagues are enriched with TV listings down to **county** level; other sports are only "predicted." — [PredictHQ docs](https://docs.predicthq.com/getting-started/guides/live-tv-event-guides/find-broadcasts-for-specific-sport-types)
- **TV Media Listings API:** sports listings searchable by team or league for 14 days ahead. The free tier is about 500 queries/key/month, per a Node wrapper's docs. — [TV Media](https://developer.tvmedia.ca); [npm tv-listings](https://npmjs.com/package/tv-listings)
- **NFL regional CBS/Fox coverage:** mapped weekly by the hobbyist site 506 Sports, which SI republishes. Flex scheduling and affiliate preemptions change coverage close to kickoff. — [SI Week 5 map](https://www.si.com/nfl/nfl-week-5-coverage-map-fox-cbs-2025)

### Inferences
- **Free incumbents are copying the product itself, not just competing on features.** ESPN (a rights-holder with schedule data), Apple (first-party, on every iPhone) and Google (zero-install) all answer "where is the game?" for free. Find My Sports already does "filtered to my providers."
- A solo developer's only edge would be **per-market accuracy** (regional sports networks, blackouts, local CBS/Fox splits), which is exactly the expensive, error-prone data. One wrong answer on game night destroys trust.
- **The monetization path is affiliate, not subscription**: "You don't have Peacock; the Bills game is on it; start a trial →". That still competes with ESPN and JustWatch, which already do affiliate or offer links.
- Frustration is high, but it is **episodic** (weekly, in season) and **solved in about 10 seconds by Google** for national games.
- **5-second magic moment** (inference): a push notification at 6pm reads "Bills–Dolphins tonight: Prime Video — you have it ✓", then one tap opens the stream. That is useful, but not visually viral, and it is the same output ESPN shows.

**(7) Scores**

| Dimension | Score | Justification |
|---|---|---|
| Pain intensity | **5** | 87% frustrated but only about 25% "very"; often resolved quickly via Google or ESPN |
| Frequency | **5** | Weekly, in season, per team; idle off-season |
| Market size | **8** | Tens of millions of US fans |
| Competition gap | **2** | ESPN, Apple Sports, Google, JustWatch, LiveSportsOnTV, Find My Sports, all free |
| Willingness to pay | **2** | No paid guide with traction found; information is commoditized |
| Marketability | **5** | Sports TikTok is huge, but "your game is on Peacock" isn't a visual moment; blackout-rage skits are possible |
| Solo feasibility | **3** | Accurate per-market rights data needs paid enterprise feeds; blackouts and RSNs change; high support burden |
| **Total** | **30/70** | |

**(8) Verdict: SKIP**
- If pursued at all, build it as a **free, affiliate-monetized, single-league, single-market widget** (for example, "every Lakers game: channel, stream, blackout status") as a marketing asset. It is not a subscription product.

### Gaps
- Pricing for Gracenote, PredictHQ and TV Media data, and whether any supports DMA-level blackout logic, was not verified.
- No reviews or quotes for Find My Sports or Game Day Notifier; no ESPN Where to Watch accuracy complaints from 2025–26.
- Not researched: Reelgood sports, theScore, FotMob, Fubo or YouTube TV guide features.

---

## D. ADHD "Start Now" companion (async, no-camera body doubling plus tiny first steps, no streak guilt)

### Takeaway
This idea has the **largest audience, the strongest willingness-to-pay evidence and the best marketability** of the four:
- 15.5M diagnosed US adults; r/ADHD at about 2M members; #adhd at 10B+ TikTok views.
- Tiimo had 50K+ paying subscribers in 2024 and was App of the Year 2025; Inflow charges $200/yr.
- Focus Friend hit #1 in the App Store with a passive "bean" companion.

But the space is **crowded at the component level**:
- task breakdown is free (Goblin.tools, Tiimo AI)
- passive companionship is free (Focus Friend)
- async body doubling already exists (Dubbii, about $35/yr)
- 8+ "Just Start / ADHD focus timer" apps launched in 2025–26

The combination is not yet owned by a breakout paid app. Distribution, not the code, decides who wins. **Verdict: BUILD, gated by distribution.** That means a 2–3 week validation with short-video content before deep investment.

### Cited Findings

**(1) Direct competitors**

| App | Launch | Rating / traction | Price | Who | Relevance and source |
|---|---|---|---|---|---|
| **Focus Friend** | Jul 2025 | **#1 US Top Free on Aug 19, 2025** (ahead of ChatGPT); **1M+ Android installs**; named **Google Play's app of the year**; "downloads were steady but modest" until Hank and John Green posted to their audiences | Free (monetization not verified) | Hank Green with game dev Bria Sullivan | A passive companion bean knits while you focus; described as an "ADHD-friendly" cozy app. [Net Influencer](https://www.netinfluencer.com/?p=37549); [AOL/Independent](https://www.aol.com/youtuber-hank-green-adorable-app-190736202.html); [TechCrunch](https://techcrunch.com/?p=3068755); [Hanselminutes](https://www.hanselminutes.com/1011/focus-friend-by-hank-green-is-1-in-the-app-store-with-bria-sullivan); [Foundry case study](https://www.builtbyfoundry.io/blog/hank-green-focus-friend-app); [Ground News](https://ground.news/article/hank-greens-focus-friend-app-is-climbing-the-app-store-charts-and-its-extremely-cute) |
| **Tiimo** | 2016–2019 (sources conflict) | **iPhone App of the Year 2025**; 3M+ downloads; **50K+ paying subscribers and 500K+ free users (Aug 2024, company figures)**; raised about €1.4M/$1.6M in Aug 2024 (total €4.3M/$4.8M, sources conflict) | $42/yr web, or $10/mo | Copenhagen startup | An AI visual planner; adjacent, not initiation-focused. [Daring Fireball](https://daringfireball.net/2025/12/2025_app_store_award_winners); [BeBeez](https://bebeez.eu/?p=44355); [Wikipedia](https://en.wikipedia.org/wiki/Tiimo); [Screenwise](https://screenwiseapp.com/media/tiimo-app) |
| **Goblin.tools (Magic ToDo)** | about 2022 (web) | No user counts found; widely listed by university library guides | Free web, no signup; iOS app free with IAP | Solo developer (not verified) | The task-breakdown benchmark, with a "spiciness" slider. [Warwick Library](https://warwick.ac.uk/services/library/using/productivity-tools/magic-todo-gobin-tools); [Saner.ai review (competitor)](https://blog.saner.ai/goblin-tools-review/); [App Store listing](https://apps.apple.com/lc/app/goblin-tools-ai-adhd-planner/id6739871366) (it is unclear whether this listing is official) |
| **Dubbii** | Nov 2023 | Reviews or ratings not retrieved | **About $35/yr** (2026 blog); free with IAP | — | **The closest direct competitor:** "async body doubling via pre-recorded videos… for chores and admin". A tracker also mentions daily live sessions, which conflicts. [App Store UK](https://apps.apple.com/gb/app/id6450302677); [AppGoblin](https://appgoblin.info/apps/6450302677); [ADHD-productivity blog](https://adhd-productivity.pages.dev/blog/best-body-doubling-apps-adhd-2026) |
| **Focusmate** | about 2016 | Funding **$940K** (CB Insights) vs **$350K** (Crowdability), which conflict; the media kit claims a 143% productivity gain (self-reported) | Free 3 sessions/week; paid unlimited | — | Live video with a camera, scheduled. [CB Insights](https://www.cbinsights.com/company/focusmate); [Crowdability](https://www.crowdability.com/deals/focusmate); [AISOTools](https://aisotools.com/blog/best-adhd-apps-for-adults-2026) |
| **Flow Club** | about 2021 | Company profile: **1,700+ weekly sessions; $5M revenue (June 2024)**, low reliability | Reviewer: "$40/mo a bit steep" | — | Live group video sessions. [geo.sig.ai profile](https://geo.sig.ai/brands/flow-club.md); [flat.social review](https://flat.social/guides/flow-club-review) |
| **FLOWN** | — | Has Trustpilot reviews | **$0 free tier or $19–25/mo** (third party, Jul 2026) | UK | Live and on-demand sessions; claims to be "less than half the price of Focusmate". [NeuroLaunch](https://neurolaunch.com/adhd-body-doubling-app-focusmate-vs-flown/); [Flown blog (vendor)](https://flown.com/blog/deep-work/virtual-coworking-focusmate-review) |
| **Inflow** | 2020 | Choosing Therapy 4.5/5 | **$199.99/yr or $47.99/mo** (USD, from a non-US App Store listing) | — | CBT coaching program. [App Store AZ](https://apps.apple.com/az/app/id1528183849?l=en-gb); [Choosing Therapy](https://www.choosingtherapy.com/inflow-adhd-app-review/) |
| **Finch** | 2021 | Third-party revenue estimates: Sensor Tower about **$2M/month**, a claim of about $4M/month (unverified) | Free plus Finch Plus | Small bootstrapped team | Proves "pet instead of streak" self-care at scale. [Sensor Tower](https://app.sensortower.com/overview/1528595748?country=US); [X post](https://x.com/ArfurRock/status/1924499333929373958) (from sibling note) |
| **Structured** | — | — | $29.99/yr or $99.99 lifetime | — | Visual planner; paywalls basics. [HabitBox](https://habitbox.app/blog/structured-app-review) (from sibling note) |
| **2025–26 indie entrants** | 2025–26 | none with traction found | mostly free with IAP | indie | **EarlyBird – Body Doubling** (released Jan 25, 2026; virtual focus rooms) [mwm.ai](https://mwm.ai/apps/earlybird-body-doubling/6747004367); **Just Start: ADHD Focus Timer** [App Store](https://apps.apple.com/app/id6760567262); **JustStart: ADHD Planner** [App Store](https://apps.apple.com/us/app/id6761158418); **Presently** [App Store](https://apps.apple.com/app/id6761377602); **Doppel – AI Focus Companion** [App Store](https://apps.apple.com/app/id6755030867); **Solo Focus: ADHD Task Timer** [mwm.ai](https://mwm.ai/apps/solo-focus-adhd-task-timer/6781573465); **Orbit Zone** [App Store](https://apps.apple.com/no/app/orbit-zone/id6757920940); **Toki** (avatar rooms) [Toki](https://toki-landing.pages.dev/alternatives/body-doubling-apps/) |
| Llama Life | — | — | not found | — | [AppPricingLab](https://apppricinglab.com/app/apple/6454469750) (no details) |

**(2) Complaints and critiques**
- Goblin.tools, from competitors (biased):
  - *"task breakdown fails when the barrier isn't complexity but executive dysfunction"* and *"you use Goblin Tools alone. There's no community, no peer support."* — [Mutra (competitor)](https://mutra.pages.dev/compare/alternatives/goblin-tools)
  - A breakdown is lost when you close the tab unless you pay for Pro. — [Saner.ai (competitor)](https://blog.saner.ai/goblin-tools-review/)
- Focusmate:
  - Needs the camera on and runs synchronously only. — [AISOTools](https://aisotools.com/blog/best-adhd-apps-for-adults-2026)
  - A small **2025 Drake University EEG study found no significant effect** on performance, focus or calm. Reported by a competitor's review; primary source not checked. — [Saner.ai 2026](https://blog.saner.ai/focusmate-review/)
- Inflow:
  - An App Store reviewer said there was *"nothing to justify the price at all"*; another was charged after cancelling a trial. — [AppsHunter reviews](https://appshunter.io/ios/app/1528183849/reviews/4)
  - A review claims r/ADHD users find the content repetitive after 3–6 months (secondhand). — [Kick-mint (competitor)](https://kick-mint.pages.dev/blog/inflow-alternative)
- Tiimo: lifetime plan removed; pricing "isn't apparent before signing up". — [Tiimo feedback board](https://tiimo.nolt.io/2439); [Healthify NZ](https://healthify.nz/apps/t/tiimo-app)
- Structured: recurring tasks and notifications are paywalled. — [AppSupports](https://appsupports.co/1499198946/structured-day-planner/negative-reviews)
- Finch: "guilt over notifications" after stepping away. — [Substack](https://dishabhatia.substack.com/p/the-self-care-bird-app-finch)
- Pattern from the sibling note: habit and ADHD apps are abandoned after 1–3 weeks (vendor blog). — [DEV](https://dev.to/wellnestapp/why-most-medication-apps-fail-adhd-brains-3hea)

**(3) Demand evidence**
- **15.5M** US adults (6.0%) have a current ADHD diagnosis; 55.9% were diagnosed as adults (CDC, 2023 data). — [CDC MMWR via PMC](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11466376/)
- **r/ADHD:**
  - **About 2.0M members**, up about 189K in the past year (GummySearch, approximate) — [GummySearch](https://gummysearch.com/r/ADHD)
  - About 1.9M per Der Standard — [Der Standard](https://www.derstandard.at/story/3000000290511/adhs-selbstdiagnose-im-netz-birgt-risiken)
  - 1.2M in April 2021, which is old
- **#adhd on TikTok:**
  - **11.4B views** per CHADD — [CHADD](https://chadd.org/adhd-news/adhd-news-adults/attention-adhd-on-tiktok/)
  - 10.6B per ADDitude — [ADDitude](https://www.additudemag.com/tiktok-adhd-videos-self-diagnosis-support/)
  - Both are undated snapshots. A 23B claim on Medium is unverified.
  - The top 100 #ADHD videos alone drew about 0.5B views (PLOS ONE 2025). — [PubMed](https://pubmed.ncbi.nlm.nih.gov/40106389/)

**(4) Willingness to pay**
- Proven paying base: Tiimo **50K+ paying subscribers** (Aug 2024) at about $42–$120/yr — [BeBeez](https://bebeez.eu/?p=44355)
- Inflow at **$199.99/yr** — [App Store](https://apps.apple.com/az/app/id1528183849?l=en-gb)
- FLOWN at **$19–25/mo** — [NeuroLaunch](https://neurolaunch.com/adhd-body-doubling-app-focusmate-vs-flown/)
- Dubbii at **about $35/yr** — [blog](https://adhd-productivity.pages.dev/blog/best-body-doubling-apps-adhd-2026)
- Finch at about $2M/month (estimate) — [Sensor Tower](https://app.sensortower.com/overview/1528595748?country=US)
- Counter-signals: price and paywall anger at Tiimo, Structured and Inflow (see complaints).

**(5) Marketability**
- Focus Friend went from "modest" to #1 by riding the creator posts of Hank and John Green. — [Foundry](https://www.builtbyfoundry.io/blog/hank-green-focus-friend-app); [YPulse](https://www.ypulse.com/newsfeed/2025/08/26/young-people-are-loving-hank-greens-focus-friend-app-that-encourages-less-screen-time/)
- ADHD content is among TikTok's largest health topics (10B+ views, above).

**(6) Platform risk**
- No App Store blocker was found for a non-medical productivity app.
- Apple's editorial team favors this category: Tiimo won App of the Year 2025. — [Daring Fireball](https://daringfireball.net/2025/12/2025_app_store_award_winners)

### Inferences
- **The initiation gap is real but narrow, and the components are commoditized.** Breakdown (Goblin, Tiimo AI, ChatGPT) and passive companionship (Focus Friend) are free. Async video body doubling exists (Dubbii). What no one visibly owns is the **single "I'm stuck → I've started" loop**:
  1. Name the thing you're avoiding (by voice).
  2. Get ONE absurdly small first step, not a list.
  3. A quiet companion "works alongside" you via a Live Activity, with no camera and no schedule.
  4. A gentle check-in at 2 and 10 minutes.
  5. No streaks; "welcome back," never "you broke it."
- **Distribution is the moat, not the code.** Focus Friend needed millions of followers to break out. A solo developer must plan for daily short-video content (for example "stuck → started" before/after clips) or a creator partnership from day one.
- **The 5-second magic moment is the strongest of the four** (inference):
  - Text overlay: "me staring at the dishes for 45 minutes."
  - Tap, and the app says: *"Just pick up one fork."*
  - A cozy companion starts washing too, a 2-minute timer runs, and the clip cuts to an empty sink.
  - It is visual, relatable and repeatable across tasks: laundry, email, tax forms.
- **Retention risk is the main business risk.** ADHD users churn in 1–3 weeks. Design for re-entry, and price with an annual-first and honest-lifetime option to capture value before churn.
- **Scientific-claim risk:** avoid "treats ADHD" claims. Even Focusmate's efficacy is contested (Drake study, secondhand).

**(7) Scores**

| Dimension | Score | Justification |
|---|---|---|
| Pain intensity | **8** | Initiation paralysis is a core, daily ADHD impairment; owners describe it as the actual failure point (sibling note) |
| Frequency | **8** | Several times a day in principle; real usage is bursty with churn |
| Market size | **9** | 15.5M diagnosed US adults plus self-identified users; r/ADHD about 2M; #adhd 10B+ views |
| Competition gap | **4** | Components are free or commoditized (Goblin, Focus Friend, Tiimo AI); Dubbii is a direct async rival; 8+ 2025–26 clones. The integrated "start" loop has no breakout owner |
| Willingness to pay | **7** | Tiimo 50K+ paying subscribers, Inflow $200/yr, FLOWN $19–25/mo, Finch at millions per month; tempered by "ADHD tax" price sensitivity and churn |
| Marketability | **9** | The strongest 5-second visual hook of the four; Focus Friend proves cozy-companion virality |
| Solo feasibility | **8** | LLM API for one-step breakdown, Live Activities, local timers, simple async "presence" (no live video infrastructure); costs are LLM tokens plus content creation |
| **Total** | **53/70** | |

**(8) Verdict: BUILD (conditional)**
- Sharpest positioning: **"Not a planner. A start button. Tell it what you're avoiding; it gives you one tiny first step and sits with you for 2 minutes. No camera, no schedule, no streaks."**
- Name the enemy as the *planning* apps ("you don't need another list").
- Free tier: 3 starts a day.
- Paid tier, about $4.99/mo or $34.99/yr plus an honest lifetime: unlimited starts, voice capture, companion customization, "re-entry" mode.
- **Gate:** within 2–3 weeks, post 15–20 "stuck → started" short videos and run a waitlist page. Proceed only if a video or two breaks out and the waitlist converts.

### Gaps
- Not found: Dubbii's ratings and traction, Focus Friend's iOS download totals and monetization, Goblin.tools user counts, and Llama Life's price.
- The Drake University EEG study was not read directly; it is cited via a competitor blog.
- Reddit was blocked, so verbatim r/ADHD requests for "async body double" or "help me start" could not be quoted or counted.
- No subreddit size for r/adhdwomen, and no #bodydoubling TikTok view counts.
- Possible Apple first-party overlap (e.g., Apple Intelligence task features) was not researched.

---

## Cross-finalist comparison: which (if any) is worth building?

### Takeaway
**Rank: D (ADHD Start Now) 53, A (Pet med log) 46, B (TV tracker) 36, C (Sports guide) 30.**
- **D** has the most upside and the best willingness-to-pay and virality evidence, but it is crowded and depends on distribution.
- **A** is the safest solo business, with a modest ceiling. Build it med-first, not as a generic feeding app.
- **B and C should be skipped.** B's window was closed by the TV Time co-founder's free successor, and the category has proven poor willingness to pay. C is given away free by ESPN, Apple and Google, and accurate data is expensive.

### Cited Findings
- D: Tiimo 50K+ paying subscribers ([BeBeez](https://bebeez.eu/?p=44355)); Focus Friend #1 ([Net Influencer](https://www.netinfluencer.com/?p=37549)); #adhd 11.4B views ([CHADD](https://chadd.org/adhd-news/adhd-news-adults/attention-adhd-on-tiktok/)); Dubbii async rival ([App Store](https://apps.apple.com/gb/app/id6450302677))
- A: DogLog about 4.7★/1.4K shared "Pack" ([AppGoblin](https://appgoblin.info/apps/1229529595)); free Merck tracker ([Vetsulin](https://www.vetsulin.com/cats/pet-diabetes-tracker/)); FDMB 30K+ members ([FDMB](https://felinediabetes.com/guide-fdmb/))
- B: Bingers launched Aug 4, 2026 by TV Time co-founder ([TechCrunch](https://techcrunch.com/2026/08/04/tv-time-co-founder-launches-bingers-to-revive-the-beloved-tv-tracking-app/)); premium covered about 10% of costs ([Neowin](https://www.neowin.net/news/tv-time-is-on-its-last-legs-its-founder-is-already-building-its-replacement/))
- C: ESPN Where to Watch covers 250+ sources with favorites ([Engadget](https://www.engadget.com/entertainment/espns-where-to-watch-offers-a-tv-and-streaming-guide-to-sports-viewing-221350244.html); [FOS](https://frontofficesports.com/article/espn-where-to-watch-guide/)); Gracenote and PredictHQ are enterprise feeds ([PredictHQ](https://docs.predicthq.com/getting-started/guides/live-tv-event-guides/find-broadcasts-for-specific-sport-types))

### Inferences

| | Pain | Freq | Market | Gap | WTP | Market-ability | Solo | **Total** | Verdict |
|---|---|---|---|---|---|---|---|---|---|
| D. ADHD Start Now | 8 | 8 | 9 | 4 | 7 | 9 | 8 | **53** | **Build (gated by a 2–3 week content test)** |
| A. Pet med log | 7 | 9 | 6 | 4 | 5 | 6 | 9 | **46** | **Maybe (build med-first; a steady niche)** |
| B. TV tracker | 5 | 8 | 7 | 2 | 2 | 6 | 6 | **36** | **Skip** |
| C. Sports guide | 5 | 5 | 8 | 2 | 2 | 5 | 3 | **30** | **Skip** |

- No idea scores above 5 on "competition gap." **All four markets are already contested**, and the November 2026 opportunities are **execution and positioning wedges, not empty categories**.
- A practical sequence for a solo developer:
  1. Run D's content test first. It costs about 2 weeks of short videos and a landing page, and it has the biggest upside.
  2. If the videos don't land, A is the fallback. It can be built in about 4–6 weeks on CloudKit, with clear SEO and community channels (FDMB, vet referrals) that don't depend on virality.
- B and C fail on the same criterion: **the core answer is given away free by a better-resourced player** (TV Time's founder; ESPN, Apple and Google).

### Gaps
- No app-specific revenue estimates (Sensor Tower or Appfigures) were available for DogLog, Dubbii, Bingers or LiveSportsOnTV, so the market-size and willingness-to-pay scores rest on proxies.
- All App Store ratings are from third-party trackers. Re-verify them on the live App Store before any final decision.
