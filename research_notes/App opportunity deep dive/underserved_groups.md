# Underserved, concentrated user groups: pain points and unmet iOS app needs (as of Nov 4, 2026)

> **How the evidence was gathered (read first).** In this session the network blocked direct access to `itunes.apple.com`, `apps.apple.com`, `www.reddit.com`/`old.reddit.com`, `justuseapp.com` and `www.bls.gov`. Both curl and WebFetch got DNS or proxy refusals. WebFetch could not reach any host at all. So **I could not pull App Store review RSS feeds or Reddit JSON, and I could not count review themes.** Every finding below comes from **WebSearch result summaries**. Those summaries quote third-party review mirrors (AppFollow, Capterra, Trustpilot, Kimola, marlvel.ai, appshunter), forums, news and vendor pages. The shared WebSearch budget (200 calls per turn) also ran out partway through, so some groups have little or no coverage (see Gaps). Quotes are reproduced as the search tool returned them. I did not check them against the live page. Treat ratings and review counts from mirror sites as approximate, and note their snapshot dates.

---

## Key Question 1: Which groups have the strongest combination of large size, frequent pain, already paying for tools, bad incumbents and reachable communities?

### Takeaway
Four segments have all five traits: **solo tradespeople**, **freelancers and creators**, **gig drivers** and **people with chronic illness who pace their energy**. In each, people already pay $5–$180/month. The complaints are concrete and repeated: price hikes, invoice caps, data held behind a paywall, trips the tracker misses, an extra armband to buy, billing traps. And no network effect protects the incumbents. Truckers, nurses and teachers have very large, painful problems. But the winning features in those groups need network or crowd data (truck parking, shift swaps), employer or district buy-in (nurse scheduling, parent messaging), or they face free, well-funded competitors (ClassDojo, MagicSchool). That makes them weaker targets for a solo builder.

### Cited Findings

#### Candidate 1: Gig and delivery/rideshare drivers (mileage, taxes, earnings across several apps, which offers to accept)
- **(a) Problem:** Drivers need to know what they really earn per mile and per hour across Uber, Lyft, DoorDash and others. They also need an IRS-proof mileage log and money set aside for quarterly taxes. The trackers they pay for silently miss trips.
- **(b) Who and how many:** I found no 2025 national headcount. Pew's most-cited figure (2021) is that 16% of US adults had at least tried gig work, as summarized second-hand by Gridwise — [Gridwise blog](https://gridwise.io/blog/understanding-gig-drivers-investor-insights-from-gridwise-analytics). Gridwise says it serves over 150k US drivers a month and has a network of 500k+ gig workers (self-reported) — [Gridwise LinkedIn](https://linkedin.com/company/gridwise); [Gridwise blog](https://gridwise.io/blog/understanding-gig-drivers-investor-insights-from-gridwise-analytics). Everee's 2025 Gig Driver Report surveyed 400+ drivers; drivers prioritized flexibility and faster pay — [HR Tech Edge](https://hrtechedge.com/gig-drivers-want-faster-pay-not-full-time-jobs-says-2025-everee-report/). A headline from August 2025: "9 in 10 American gig workers are taking on more jobs just to stay afloat" (headline only; body not read) — [Allwork.space](https://allwork.space/2025/08/9-in-10-american-gig-workers-are-taking-on-more-jobs-just-to-stay-afloat/).
- **(c) Frequency:** Every shift, every day. Taxes are due quarterly.
- **(d) Evidence:**
  - Gridwise's 2026 Annual Gig Mobility Report (covering 2025) found platform fees grew faster than driver pay, and delivery tips per trip fell to $4.16 in Q4 2025 — [Gridwise 2026 report](https://gridwise.io/es/analytics/2026-annual-gig-mobility-report).
  - Stride review: "The little map of your miles it produces didn't show a large portion of my deliveries. Waste of my time and destroys my confidence in this as a reliable business mileage tracker." (date not shown) — [JustUseApp, Stride reviews](https://justuseapp.com/en/app/1041591359/stride-mileage-tax-tracker/reviews).
  - Stride (unitQ, May 2024): "You can spend your time logging your trips, turning on and off this app, but in the end, you never receive your report." — [unitQ scorecard](https://www.unitQ.com/unitq-scorecards/stride/).
  - Everlance, Capterra: "It started out great at first for about the first year. After that, the app became intermittent in capturing trips. I had to delete and reinstall the app to make sure it was working." — [Capterra Everlance](https://www.capterra.com/p/174335/Everlance/reviews).
  - Everlance, PissedConsumer: "The app is not working properly and has been acting up for weeks." — [PissedConsumer](https://www.pissedconsumer.com/everlance/RT-F.html).
  - Everlance: "I will turn off automatic tracking to save some trips because I am not working, but then the trips will still be tracked and now my free trip count is down a trip." — [JustUseApp, Everlance](https://justuseapp.com/en/app/985378916/everlance-mileage-expense/reviews).
  - Everlance on Google Play (surfaced via search; exact URL not captured): "I purchased the yearly subscription, yet I have no access in the app."
  - Timeero tested Everlance's automatic tracking and found it unreliable: the app "would capture just a segment or wouldn't capture a trip at all" — [Timeero](https://timeero.com/post/everlance-review).
- **(e) Existing apps:**
  - **Stride:** iOS 4.8 from ~72K ratings (AppFollow snapshot, Nov 2024) — [AppFollow](https://appfollow.io/ios/stride-mileage-tax-tracker/1041591359?country=us). Complaints: reliability and data integrity after updates, weak expense filtering, and requests for widgets, CarPlay and auto-start — [MileageWise (a competitor)](https://www.mileagewise.com/?p=25586). Also battery drain — [Timeero](https://timeero.com/post/stride-review).
  - **Gridwise:** In April 2024 it moved "features that provide automation" behind Gridwise Plus — [Gridwise founders' message](https://gridwise.io/announcements/message-from-founders-on-upcoming-changes-to-gridwise). Plus costs $9.99/month or $71.99/year, with an intro offer of $6.99/$59.99 — [Gridwise plan details](https://gridwise.io/announcements/details-on-new-plus-and-basic-plans/); [App Store listing](https://apps.apple.com/us/app/gridwise-gig-driver-assistant/id1215991382). Complaints: trips missed when the app isn't running in the background — [SpotSaaS](https://www.spotsaas.com/product/gridwise/reviews); sync and odometer mismatches (marlvel.ai, June 2026, small sample) — [marlvel.ai](https://marlvel.ai/apps/com-gridwise-app).
  - **Everlance:** Google Play ~4.7 from ~31K reviews. Complaints: tracking failures, subscription status not syncing, support "non-existent" — [Capterra](https://www.capterra.com/p/174335/Everlance/reviews); [Timeero](https://timeero.com/post/everlance-review).
- **(f) Gap:** Nobody owns the job of "never miss a trip." On top of that, drivers want **true profit per hour and per mile across all apps**, with a running tax set-aside. Tools that score offers in real time are platform-hostile. DoorDash tightened driver logins and cut off Para, patching each workaround "within hours," and Uber sent Para a cease-and-desist — [Jordan News](https://www.jordannews.jo/Section-129/Technology/Meet-the-app-that-helps-gig-workers-know-how-much-they-really-make-23349). **Avoid features that read offers from inside platform apps.**
- **(g) Willingness to pay:** Drivers pay $9.99/month for Gridwise Plus (above) and buy Everlance annual plans (complaints above).
- **(h) Solo feasibility:** Medium. Reliable background trip detection on iOS (Core Motion's automotive activity plus significant-change location) is the hard part, and it is exactly where incumbents fail. Platform earnings import has to be manual, screenshot OCR, or CSV, not scraping.
- **(i) Concept:** **"Shift Ledger."** Auto-detects drives and shows a "trip confidence" check with prompts to repair gaps. You photograph the earnings screen of each gig app at the end of a shift and OCR pulls in the pay. You get real $/hr and $/mile after gas and depreciation, and a weekly "tax jar" amount. Exports a Schedule C mileage log. $5.99/month.

#### Candidate 2: Truckers (parking, hours-of-service, routing)
- **(a) Problem:** Finding legal, safe parking before hours-of-service time runs out.
- **(b) Who and how many:** About 2.2M heavy and tractor-trailer truck driver jobs in 2024 (BLS Occupational Outlook Handbook). The OEWS May 2024 estimate is about 2.07M (third-party summary, unverified) — [BLS OOH](https://www.bls.gov/ooh/transportation-and-material-moving/heavy-and-tractor-trailer-truck-drivers.htm); [BLS-wages mirror](https://bls-wages.pages.dev/occupation/heavy-and-tractor-trailer-truck-drivers/).
- **(c) Frequency:** Daily. Drivers spend about 56 minutes a day looking for parking. ATRI estimates one truck parking space for every 11 drivers. Estimates of lost pay run $4,600–$7,000 a year. An August 2025 study put the cost at $37.7B in extra miles plus more than $82B in lost productivity. The sources disagree on dollar figures, and the 56-minute figure may be recycled from older ATRI parking-diary research — [CCJ](https://www.ccjdigital.com/drivers-parking-journals-show-they-lose-5000-annually-to-time-spent-finding-parking/); [Overdrive](https://www.overdriveonline.com/parking/article/15753481/truck-parking-shortage-costs-trucking-100b-annually-study); [Geotab](https://www.geotab.com/blog/truck-parking-shortage/); [FreightWaves](https://www.freightwaves.com/news/driver-issues-what-is-the-solution-to-truckings-stubborn-parking-problem).
- **(d) Evidence:**
  - Forum: "guys who mark a lot full when there are one or two difficult spots left" (older post) — [TruckingTruth forum](https://www.truckingtruth.com/truckers-forum/Topic-19045/Page-1/trucker-path-app-and-truck-stop-reviews).
  - Forum: Trucker Path "possibly has the parking spaces number wrong. And it does sometimes" — [TruckingTruth](https://www.truckingtruth.com/truckers-forum/Topic-19045/Page-1/trucker-path-app-and-truck-stop-reviews).
- **(e) Existing apps:** Trucker Path is rated 4.8 from 206.1K reviews. marlvel.ai's April 2026 report says recent sentiment has turned negative over "severe routing errors and billing complaints," including "bait and switch" subscription pricing — [marlvel.ai](https://marlvel.ai/apps/trucker-path-truck-gps-fuel). In June 2026 Trucker Path added more than 50,000 reservable paid parking spots — [Carrier Atlas](https://carrieratlas.com/news/trucker-path-now-lets-you-reserve-50-000-paid-parking-spots).
- **(f) Gap:** Accurate, live parking availability. It depends on crowdsourced or sensor data, which an incumbent with 200K+ reviews already has.
- **(g) Willingness to pay:** Trucker Path has paid tiers, and the billing complaints above show people are paying. I could not confirm a price.
- **(h) Solo feasibility:** **Low.** The value depends on a data network, and HOS logging is handled by fleet ELDs (B2B, regulated). One niche angle could work solo: a personal HOS-aware "where can I legally stop" planner that only uses public rest-area data.
- **(i) Concept (weak):** "Last Legal Stop." You enter your remaining drive clock, and it ranks rest areas and truck stops along the route by when the lot usually fills up, using the driver's own history plus public data. Not recommended.

#### Candidate 3: Nurses and other shift workers (swaps, sleep on rotating shifts)
- **(a) Problem:** Covering a shift takes a pile of group texts. Rotating nights wreck sleep.
- **(b) Who and how many:** 3,282,010 RN jobs (BLS OEWS, May 2024), about 3.28M per USAFacts. The OOH figure is 3,391,000 for 2024, with a median wage of $93,600 — [USAFacts](https://usafacts.org/answers/how-many-nurses-are-there-in-the-us/); [BLS OOH](https://www.bls.gov/ooh/healthcare/registered-nurses.htm).
- **(c) Frequency:** Weekly (swaps) and every shift change (sleep).
- **(d) Evidence:**
  - The ShiftHawk App Store listing (2026): "Getting one shift covered usually means a dozen group texts and a spreadsheet." This is vendor copy — [ShiftHawk](https://apps.apple.com/app/id6777242727).
  - "Group text chats that deal with the schedule can be frustrating, to say the least." (vendor) — [EasyShifts](https://easyshifts.com/nurse-scheduling-software).
  - AllNurses: rotating shifts long-term are hard because "your body never fully adjusts to a schedule" — [AllNurses](https://allnurses.com/rotating-shifts-t360926/).
  - NurseGrid Manager review: "no longer has the manager app so I have to login to desktop to make changes" — [Capterra NurseGrid](https://www.capterra.com/p/254829/NurseGrid/reviews/).
- **(e) Existing apps:** NurseGrid runs independently of hospital systems and offers swaps "in a few taps" — [NurseGrid](https://nursegrid.com/?p=25819). Shift-worker sleep apps were already crowded by 2026: Drowze ([App Store](https://apps.apple.com/us/app/drowze/id6760787156)), Night Shift Sleep Planner ([App Store](https://apps.apple.com/lb/app/night-shift-sleep-planner/id6760475957)), Driftwell ([site](https://driftwell.pages.dev/)), CareShifter ([App Store](https://apps.apple.com/pg/app/careshifter/id6756596239)) and Nursie ([App Store](https://apps.apple.com/us/app/-/id6538714730)).
- **(f) Gap:** I found no strong "hated incumbent" evidence on the consumer side. Swaps need every coworker on the unit to use the app (a network effect) and often need manager approval — [Carepatron roundup](https://www.carepatron.com/app/nurse-schedule-app).
- **(g) Willingness to pay:** Not established in my sources.
- **(h) Solo feasibility:** Building it is easy. Distribution is hard, because 2026 is crowded with many new indie sleep apps.
- **(i) Concept:** Only a sharply differentiated version is worth trying. Example: you snap a photo of the unit schedule, OCR builds your calendar, and it generates a plan for light, caffeine and naps.

#### Candidate 4: Solo tradespeople and handymen (quotes, invoices, photos, job notes)
- **(a) Problem:** Writing a quote on site, turning it into an invoice, getting paid, and keeping before/after photos and notes, all without paying team-level software prices.
- **(b) Who and how many:** **Gap.** I could not get BLS counts for handymen, electricians or plumbers before the search budget ran out.
- **(c) Frequency:** Several jobs a week, so quotes and invoices go out several times a week.
- **(d) Evidence:**
  - Joist: the most common complaints are price increases and records locked behind a subscription. One App Store reviewer got a price-increase email about two weeks after subscribing (reported by Workyard, a competitor) — [Workyard](https://www.workyard.com/compare/joist-review).
  - Joist user: the company raises prices "while holding customer information hostage," and support is slow AI-style chat — [Software Advice NZ](https://www.softwareadvice.co.nz/reviews/233734/joist).
  - Jobber (Capterra, Nov 2025): "a good app, but a bit pricey," and the reviewer wanted no card fees. Another wrote: "I wish they used someone in addition to Paypal to receive my receivables (PayPal charges is 4% which for me is expensive)" — [Capterra Jobber](https://capterra.com/p/127994/Jobber/reviews/?page=4) (page attribution approximate).
  - Harsher Jobber quotes ("the most overpriced piece of garbage ever") come from a likely competitor's compilation and should be discounted — [myQuoteIQ](https://myquoteiq.com/?p=16932).
  - A secondary analysis of 127 negative field-service reviews found billing complaints in 32% and support complaints in 30% — [cleaning-business blog](https://jjandradellc.pages.dev/blog/2026-02-18-jobber-alternatives-cleaning-business).
- **(e) Existing apps:**
  - **Jobber:** $39/month for solo up to $599/month for teams, plus add-ons — [OneCrew](https://www.getonecrew.com/post/jobber-reviews). FieldCamp estimates about $179/month all-in for a solo operator on Core once card processing is included — [FieldCamp](https://fieldcamp.ai/reviews/jobber-reviews/).
  - **Joist:** Capterra 4.1 from 89 reviews; roughly $8–$32/month; some features gated by tier — [Capterra compare](https://www.capterra.com/compare/127994-230138/Jobber-vs-Joist); [OneCrew Joist pricing](https://www.getonecrew.com/post/joist-pricing).
- **(f) Gap:** A cheap, phone-first, **solo-only** tool that turns "voice or photo → quote → invoice → paid" with **no lock-in** (free export of all records) and a flat price that doesn't creep up.
- **(g) Willingness to pay:** Strong. People already pay $8–$179/month (above).
- **(h) Solo feasibility:** **High.** No network effect. Payments run through Stripe. PDFs, photos and job notes are standard iOS work.
- **(i) Concept:** **"Talk-to-Quote."** At the job site, the tradesperson describes the work out loud. AI drafts line items using their saved price book, and the client gets a branded quote by text to approve with one tap. The approved quote becomes an invoice with a pay link. Before/after photos are attached automatically. Unlimited invoices, a flat $14.99/month, and "your data is always exportable" is the headline promise.

#### Candidate 5: Freelancers and creators (invoicing, chasing late payments, brand deals)
- **(a) Problem:** Getting paid on time, keeping track of who owes what, and chasing payment without hurting the client relationship.
- **(b) Who and how many:** **Gap.** The searches for MBO Partners and Upwork headcounts were cut off by the search budget.
- **(c) Frequency:** Every invoice. Late payment is the norm, not the exception.
- **(d) Evidence:**
  - Remote's 2025 Contractor Management Report: 85% of freelancers are paid late at least some of the time, and 21% are paid late or not at all more than half the time — [Agiled stats roundup](https://agiled.app/statistics/late-payment-statistics); [Remote](https://remote.com/en-au/blog/reversing-late-payment-culture).
  - Bonsai (100K+ freelancers): 29% of invoices were paid at least one day late — [Agiled](https://agiled.app/statistics/late-payment-statistics).
  - IPSE (UK): freelancers lose about 20 days a year chasing unpaid invoices — [Freelance Corner](https://freelancecorner.co.uk/late-payment-do-you-know-your-rights/).
  - New York survey (older): 62% of freelancers had lost wages to nonpayment — [Authors Guild](https://authorsguild.org/news/survey-finds-62-percent-of-ny-freelance-workers-have-lost-wages-due-to-nonpayment).
  - Creators (Lumanu survey of about 500 influencers): of those paid late, more than 61% waited over a week and 38.5% over a month, and 85% said the payment experience affects whether they would work with a brand again — [Lumanu](https://www.lumanu.com/blog/insights-from-500-influencers-on-their-payment-experience). Brand payment terms are typically 30–90 days and often slip — [Digiday](https://digiday.com/marketing/in-a-booming-influencer-economy-creators-seek-standardization-for-payment-terms). Headline: creators' average annual income is under $45,000 — [TheWrap/CreatorIQ](https://www.thewrap.com/industry-news/industry-trends/creatoriq-creator-compensation-report).
  - Invoice Simple users: the plan now allows only 10 invoices a month unless they upgrade; a "100% increase came out of nowhere"; price rises are "daylight robbery" — [Trustpilot UK](https://uk.trustpilot.com/review/invoicesimple.com?page=5). A BBB complaint from Sept 2025 says a user bought unlimited use through May 2026 and four months in the plan was changed to limited — [BBB](https://www.bbb.org/ca/bc/vancouver/profile/computer-software/invoice-simple-0037-2412159/complaints).
- **(e) Existing apps:** Invoice Simple is rated 3.7 from 44 reviews on Capterra (value for money 3.3, customer service 3.1), starting at $4.99/month — [Capterra](https://www.capterra.com/p/165683/Invoice-Simple/reviews/). App Store reviewers also report a slow, buggy app and recycled invoice numbers — [Kimola](https://kimola.com/reports/invoice-simple-feedback-analysis-insights-unveiled-app-store-us-156837). I did not retrieve evidence on Bonsai, FreshBooks or HoneyBook.
- **(f) Gap:** An invoice that **chases itself**: escalating reminders, auto-added late fees, a client-facing "promise to pay" date. For creators, add a deal tracker covering deliverables, net-terms due dates and usage rights.
- **(g) Willingness to pay:** People pay Invoice Simple subscriptions and complain about increases rather than leaving outright (above).
- **(h) Solo feasibility:** **High.** It can share an engine with Candidate 4.
- **(i) Concept:** **"PaidUp."** Log a gig or brand deal. It generates the invoice, schedules polite reminders at net+1, +7 and +14 days in the user's voice, adds the late fee per contract, and shows a "who owes me" dashboard. A Creator mode tracks deliverables and the date posted. $7.99/month.

#### Candidate 6: Small landlords (1–10 units)
- **(a) Problem:** Collecting rent, logging maintenance and talking to tenants without enterprise property-management software, and without fees that annoy tenants.
- **(b) Who and how many:** About 46% of the 49.5M US rental units are in 1–4 unit properties. Individual investors own 70.2% of units in properties with four or fewer units (RHFS 2021) — [Multifamily Executive](https://www.multifamilyexecutive.com/business-finance/business-trends/hud-census-release-2021-rental-housing-finance-survey-findings_o); [CRS](https://www.everycrsreport.com/reports/R47332.html). In the 2024 RHFS, individuals own about 59% of rental properties and 32% of units — [HousingWire](https://www.housingwire.com/articles/small-investors-housing-supply/). Headline from Feb 2026: "Small investors still dominate SFRs despite institutional buzz" — [GlobeSt](https://www.globest.com/amp/2026/02/25/small-investors-still-dominate-sfrs-despite-institutional-buzz/).
- **(c) Frequency:** Monthly (rent). Maintenance comes up unpredictably.
- **(d) Evidence:** TurboTenant: G2 users cite "unexpected hidden costs" and setup fees — [G2](https://g2.com/products/turbotenant/reviews?page=2). Tenants pay a 3.49% card fee (per Innago, a competitor) — [Innago](https://innago.com/turbotenant-alternatives/). RentRedi users are fine with the monthly fee but "less accepting of the fees charged to tenants" — [B2B Reviews](https://www.b2breviews.com/reviews/rentredi). Avail is rated 2.4 from 31 Trustpilot reviews, mostly over customer service (per TurboTenant, a competitor), yet 4.6 from 276 on Capterra. One landlord said tenants "usually don't like fees associated with credit reports, use of online payments platform" — [TurboTenant comparison](https://www.turbotenant.com/reviews/avail-vs-rentredi/); [Capterra](https://www.capterra.com/compare/147659-181119/Turbo-Tenant-vs-Avail).
- **(e) Existing apps:** TurboTenant, RentRedi (about $1 per ACH payment) — [Tools for Humans](https://www.toolsforhumans.ai/ai-tools/rentredi) — and Avail. I could not retrieve App Store ratings for them.
- **(f) Gap:** A "landlord-paid, tenant-fee-free" tool focused on the **maintenance and communication log** (photos, vendor contacts, a tenant request inbox, a year-end Schedule E export) rather than payments.
- **(g) Willingness to pay:** Landlords pay monthly fees to these tools (above).
- **(h) Solo feasibility:** Medium. **Regulatory flags:** tenant screening is FCRA-regulated, and holding rent money raises money-transmission issues. Stay out of both, or route rent through Stripe or Plaid.
- **(i) Concept:** **"Doorbook."** One timeline per unit for requests, photos, receipts, lease dates and reminders. Tenants submit requests through a web link with no app to install. Tax-time export. $6.99/month for up to 10 units.

#### Candidate 7: Teachers (grading, parent communication, lesson planning)
- **(a) Problem:** Too much grading and too many parent messages, plus spending their own money on supplies.
- **(b) Who and how many:** **Gap.** I did not get the NCES teacher count.
- **(c) Frequency:** Daily.
- **(d) Evidence:**
  - Out-of-pocket spending: an average of $895 in 2024–25, up 49% since 2015 (AdoptAClassroom, 3,700 teachers) — [AdoptAClassroom](https://www.adoptaclassroom.org/2025/06/09/2025-teacher-survey-spending-stats-classroom-needs/). Other surveys give $1,021 with 95% of teachers spending their own money (CouponBirds, 2,500 teachers) — [CouponBirds](https://www.couponbirds.com/research/back-to-school-expenses-2025) — and $655 (DonorsChoose, second-hand) — [Prodigy](https://prodigygame.com/main-en/blog/teacher-wish-list-school-supply-costs).
  - AI use: about 60% of US public K-12 teachers used AI tools in 2024–25, and weekly users saved an average of 5.9 hours a week (Gallup/Walton, 2,232 teachers) — [TechSpot](https://www.techspot.com/news/108449-majority-us-teachers-now-use-ai-tools-saving.html); [The Holler](https://www.theholler.org/ai-gives-teachers-back-six-weeks-a-year/).
  - Parent messages: teachers get "eight to 20 messages a day" through ClassDojo and similar apps (Tes; undated, older) — [Tes](https://www.tes.com/news/parents-stop-misusing-class-messaging-apps). A UK school letter from Sept 2024 says teachers "can have 8 or more messages on Dojo when they turn on their devices" — [Town Green school letter](https://www.towngreen.lancs.sch.uk/attachments/documents.asp?id=877).
- **(e) Existing apps:** ClassDojo and Remind (free, adopted by schools); MagicSchool (free base tier); Brisk (Pro ~$100/year per a listicle, unverified) — [Krater](https://krater.ai/blog/ai-tools-teachers-save-time-2025).
- **(f) Gap:** A personal tool for triaging parent messages and drafting replies. But it would sit on top of district-controlled channels.
- **(g) Willingness to pay:** Teachers clearly spend their own money ($655–$1,021 a year, above), but free AI tools anchor prices near zero.
- **(h) Solo feasibility:** Medium-low. District procurement, student-privacy law (FERPA/COPPA) and well-funded free competitors.
- **(i) Concept:** Not recommended. Possibly "Feedback Bank": photograph student work, get rubric-aligned comment suggestions, keep it on-device, and never store student names.

#### Candidate 8: Seniors 65+ and their adult children (scams, tech confusion)
- **(a) Problem:** Scam calls and texts, AI voice clones, investment and romance fraud. Adult children want to help without taking over.
- **(b) Who and how many:** FBI IC3 2025: people aged 60+ filed 201,266 complaints reporting $7.75B in losses, up 59% from about $4.8B in 2024. Investment fraud accounted for about $3.5B. More than 3,100 complaints referenced AI, with losses above $352M — [HousingWire](https://www.housingwire.com/articles/fbi-seniors-cybercrime-2025/); [JD Supra](https://www.jdsupra.com/legalnews/fbi-releases-its-2025-internet-crime-7569349/); [AARP](https://www.aarp.org/money/scams-fraud/fbi-ftc-report-2025-losses.html). Contradiction: SeniorDaily reports $5.1B — [SeniorDaily](https://seniordaily-news.pages.dev/articles/elder-fraud-losses-fbi-report-2026) (weaker source). There are 63M US family caregivers, up 45% in a decade; 6 in 10 also hold jobs, and 29% are "sandwich generation" — [AARP/NAC, July 24, 2025](https://www.aarp.org/press/releases/2025-07-24-new-report-reveals-crisis-point-for-americas-63-million-family-caregivers.html).
- **(c) Frequency:** Scam contacts arrive daily or weekly. Families talk about scams regularly.
- **(d) Evidence:** In Aura's caregiver data, 38% of caregivers ask their loved one to check suspicious messages with them before responding, and 39% talk regularly about scams — [Aura 2026 data](https://www.aura.com/learn/trusted-family-access-data-2026).
- **(e) Existing apps:** Aura Trusted Family Access (launched Sept 17, 2026) — [press release](https://www.placera.se/pressmeddelanden/aura-launches-trusted-family-access-to-help-families-protect-aging-loved-ones-from-online-crime-without-compromising-independence-20260917); Splashtop Shield (remote help plus anti-scam) — [Splashtop](https://www.splashtop.com/products/shield/home-family); OwlGuardian (iPhone) — [App Store](https://apps.apple.com/app/id6759304502). Search also turned up many unbranded `pages.dev` "scam protection for your aging parent" landing pages, a sign of low-barrier crowding — e.g. [Scammer Guardian](https://scammer-guardian.pages.dev/for-adult-children).
- **(f) Gap:** A frictionless way to "ask my kid first": the parent shares a screenshot, link or voicemail. AI gives an instant verdict, and the adult child is notified for anything risky.
- **(g) Willingness to pay:** Aura and Greenlight family plans show families pay. The payer is the adult child.
- **(h) Solo feasibility:** Medium. iOS will not let a third-party app read SMS or calls generally. The Share Sheet and screenshot routes work. Large security brands are moving in.
- **(i) Concept:** **"Ask Before You Act."** A big-button share target for the parent ("Is this real?"). AI checks it against known scam patterns. The adult child gets an alert plus a weekly "near-miss" digest. $4.99/month, paid by the adult child.

#### Candidate 9: Medication management for seniors and caregivers
- **(a) Problem:** Remembering doses across many medicines, and caregivers knowing whether a dose was missed.
- **(b) Who and how many:** See the 63M caregivers above — [AARP/NAC](https://www.aarp.org/press/releases/2025-07-24-new-report-reveals-crisis-point-for-americas-63-million-family-caregivers.html).
- **(c) Frequency:** Several times a day.
- **(d) Evidence:** Medisafe's free tier was cut to 2 medications in January 2026, with Premium at $4.99/month or $59.88/year (per Pillo, a competitor) — [Pillo](https://pillo.care/blog/medisafe-not-free-what-to-do). A Trustpilot reviewer in Dec 2025 said notifications are now charged once you take more than two medicines — [Trustpilot](https://uk.trustpilot.com/review/medisafe.com). An App Store reviewer complained about the "Premium pop up every time you open the app" — [appshunter](https://appshunter.io/ios/app/573916946/reviews/12).
- **(e) Existing apps:** Medisafe (App Store ~4.7; Trustpilot 2/5 from 13 reviews) — [Trustpilot](https://uk.trustpilot.com/review/medisafe.com); an article titled "Medisafe went paid" — [dev.to](https://dev.to/wellnestapp/medisafe-went-paid-what-to-look-for-in-a-medication-tracker-now-326l).
- **(f) Gap:** Caregiver-linked missed-dose alerts at a fair price, with history export.
- **(g) Willingness to pay:** Medisafe Premium exists, but the backlash suggests price sensitivity.
- **(h) Solo feasibility:** High technically. Keep it to reminders to avoid FDA medical-device claims. Apple's built-in Health Medications feature (background knowledge, not verified here) is a free competitor.
- **(i) Concept:** Fold it into Candidate 8 as a "Family Check-in" bundle.

#### Candidate 10: Hearing loss (live captions)
- **(a) Problem:** Following group conversations (dinner, meetings, doctor visits) when you can't hear clearly.
- **(b) Who and how many:** About 30M people aged 12+ have hearing loss in both ears; 37.5M adults report trouble hearing; 28.8M adults could benefit from hearing aids (NIDCD, via secondary sources) — [NCOA](https://ncoa.org/adviser/hearing-aids/hearing-loss-statistics); [MedlinePlus Magazine](https://magazine.medlineplus.gov/multimedia/by-the-numbers-hearing-loss-affects-millions).
- **(c) Frequency:** Every conversation.
- **(d) Evidence:** Ava reviewers: "you can't decipher who spoke"; "this works well with strong WiFi but not with cellular data" — [AppFollow Ava](https://apps.appfollow.io/ios/ava-transcribe-voice-to-text/1030067058?country=us); [G2 Ava](https://www.g2.com/products/ava-live-captioning/reviews).
- **(e) Existing apps:** Ava is rated 4.4 from about 2.9K–3.8K ratings. Its free plan gives unlimited basic captions in sessions up to 40 minutes; paid is $14.99/month, with 5-hour credit packs at $4.99 — [Subscribed.fyi](https://subscribed.fyi/ava-accessibility); [AppFollow](https://apps.appfollow.io/ios/ava-transcribe-voice-to-text/1030067058?country=us).
- **(f) Gap:** Reliable **speaker-labeled**, on-device captions that work offline or on cellular, with saved transcripts.
- **(g) Willingness to pay:** Ava sells a $14.99/month tier.
- **(h) Solo feasibility:** Medium. Speaker diarization is technically hard, and Apple's built-in Live Captions is a free baseline (background knowledge, not verified here).
- **(i) Concept:** "TableTalk." Place the phone in the middle of the table. It shows color-coded speakers, uses on-device speech recognition, and keeps a transcript you can search later. One-time unlock plus an optional subscription.

#### Candidate 11: Chronic illness and energy pacing ("spoons": ME/CFS, Long COVID and similar)
- **(a) Problem:** Avoiding post-exertional crashes by budgeting energy, and tracking symptoms against triggers.
- **(b) Who and how many:** **Gap.** I found no prevalence statistics before the search budget ran out. Visible claims 100,000+ members (vendor) — [Visible](https://makevisible.com).
- **(c) Frequency:** Continuous, daily.
- **(d) Evidence:**
  - Visible reviewer: "weren't planning on spending £75 on an armband along with a minimum £10.99 - £14.99 a month subscription."
  - Visible reviewer: "unless you subscribe and wear the band the App is virtually useless."
  - Visible reviewer: "this is the very first app that warns me when I have to SLOW DOWN."
  - Sources for the three quotes: [AppFollow Visible (GB)](https://apps.appfollow.io/ios/visible-pacing-for-illness/1624474919?country=gb); [Fit&Well](https://www.fitandwell.com/features/visible-health-review).
  - Connectivity issues with Visible Plus — [Kimola](https://kimola.com/reports/in-depth-analysis-of-visible-app-for-chronic-illness-support-google-play-en-us-141985).
  - A peer-reviewed study of Visible Plus users confirms the armband plus subscription model — [Frontiers in Digital Health, Oct 2025](https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2025.1662255/epub).
  - Bearable: 4.8 from 5.3K reviews, but billing is the main complaint ("cancelled and still got billed for a year"; automated small-sample report) — [marlvel.ai](https://marlvel.ai/intel-report/health-fitness/bearable-symptom-tracker).
  - An r/cfs thread asks for "apps that help pacing besides Visible" and suggests Guava and WatchME (via a libreddit mirror) — [r/cfs mirror](https://libreddit.winscloud.net/r/cfs/comments/1o7dris/apps_that_help_pacing_besides_visible).
- **(e) Existing apps:** Visible (4.7–4.8; Plus needs the armband), Bearable, Guava, WatchME (above).
- **(f) Gap:** **Pacing that uses the Apple Watch people already own** (heart-rate thresholds, resting heart rate and HRV trends via HealthKit), with no proprietary band, honest billing, and a "spoon budget" that is easy to read on a bad brain-fog day.
- **(g) Willingness to pay:** Users already pay £10.99–£14.99/month plus £75 for hardware (above).
- **(h) Solo feasibility:** **High.** HealthKit, watchOS complications, and on-device data. Keep the positioning to wellness and avoid diagnostic claims.
- **(i) Concept:** **"Spoonful."** Shows a daily energy budget on the watch face, buzzes when heart rate crosses your anaerobic-threshold estimate, logs symptoms in two taps, and spots crash patterns weekly. $6.99/month or $49.99/year. Can be cancelled in one tap through Apple's subscription system.

#### Candidate 12: Dyslexia and reading difficulty (text-to-speech)
- **(a) Problem:** Having documents, PDFs and web pages read aloud without getting trapped by billing.
- **(b) Who and how many:** **Gap** (no prevalence data retrieved).
- **(c) Frequency:** Daily.
- **(d) Evidence:** Speechify has an F rating at the BBB with 80+ complaints as of 2025, and 89 by Aug 2026. Users report being charged a full year after starting a free trial, and a May 2025 Reddit thread describes a $229.99 charge after an apparent cancellation confirmation (via aggregators) — [RoboRhythms](https://www.roborhythms.com/speechify-review-2026/); [CostBench](https://www.costbench.com/software/ai-voice-tools/speechify/hidden-costs/). Annual plans can only be refunded within 7 days and under a usage limit — [JoinChargeback](https://www.joinchargeback.com/refunds/how-to-get-a-speechify-refund).
- **(e) Existing apps:** Speechify Premium costs about $139/year — [RoboRhythms](https://www.roborhythms.com/speechify-review-2026/). iOS also has free built-in Spoken Content (background knowledge, not verified here).
- **(f) Gap:** An honestly priced, dyslexia-friendly reader with good on-device voices, synced highlighting and a dyslexia-friendly layout.
- **(g) Willingness to pay:** Users pay $139/year (above).
- **(h) Solo feasibility:** High, but the market is crowded with general text-to-speech tools.
- **(i) Concept:** A one-time-purchase or $3.99/month reader. Marketing angle: "no trial traps."

#### Candidate 13: Immigrants and non-native English speakers (official letters, forms)
- **(a) Problem:** Not understanding letters from USCIS, the IRS, courts, landlords or hospitals, including deadlines and what to do next.
- **(b) Who and how many:** 74,050,833 people aged 5+ speak a language other than English at home (MPI, from the 2024 ACS). MPI's national table showing the limited-English share was ambiguous — [MPI US language data](https://www.migrationpolicy.org/data/state-profiles/state/language/US/US).
- **(c) Frequency:** Weekly to monthly mail. Each letter is high-stakes.
- **(d) Evidence:** Google Translate "is often not 100% accurate," and non-professional translation can change the meaning — [USAHello](https://usahello.org/pt-br/life-in-usa/daily-life/free-translation-help/); [VisaVerge](https://www.visaverge.com/immigration/the-impact-of-language-barriers-on-u-s-immigration/).
- **(e) Existing apps:** Comparable products exist outside the US. OlimAid explains Hebrew official mail, with a free tier of 1 scan a week — [OlimAid](https://www.olimaid.com/en/hebrew-letter-scanner). Search summaries also mention a UK app for Home Office, NHS and HMRC letters and a German letter app (Postera); listing URLs not confirmed. In the US I found only prototypes, e.g. the Harbor hackathon project, which takes forwarded documents by email and flags deadlines — [AI Tinkerers](https://boston.aitinkerers.org/hackathons/h_aKJ6ZOg4HFA/entries/ht_D9JFnXYyHNs); [FH Salzburg "Scan to Understand" 2026 student project](https://portfolio.fh-salzburg.ac.at/projects/2026-s2u-scan-to-understand).
- **(f) Gap:** **No established US consumer "official-mail explainer" in many languages** was found.
- **(g) Willingness to pay:** Unproven in the US. Freemium paywalls in Israel and Germany are suggestive only.
- **(h) Solo feasibility:** High technically (OCR plus an LLM). **Regulatory flag:** explaining immigration notices risks unauthorized practice of law. Keep it to plain-language translation, deadlines and links to accredited help.
- **(i) Concept:** **"LetterLens."** Photograph a letter and get: what it is, who sent it, the deadline (added to your calendar), what it asks you to do, in your language, plus a "talk to free help" directory. Freemium with 3 scans a month, then $4.99/month. Distribution through language-specific WhatsApp and Facebook groups.

#### Candidate 14: Hair stylists and barbers (no-shows, booking fees)
- **(a) Problem:** No-shows cost money. Booking platforms take commissions and add-on fees.
- **(b) Who and how many:** **Gap.**
- **(c) Frequency:** Weekly.
- **(d) Evidence:** A Capterra reviewer objected to Booksy's 30% commission on the "boost" feature — [Capterra Booksy](https://www.capterra.com/p/142741/Booksy/reviews/?page=2). Vagaro's $23.99/month base price understates the real cost once add-ons are counted — [checkthat.ai](https://checkthat.ai/brands/vagaro/reviews). Booksy costs $29.99 per provider per month — [Addagio](https://addagio.io/best/best-barber-booking-software). Booksy says it cut no-shows by 25% (vendor figure) — [BarberEVO](https://www.barberevo.com/reduce-the-pain-of-client-no-shows-and-cancellations).
- **(e) Existing apps:** Booksy, Vagaro, Fresha, GlossGenius (no GlossGenius complaint data found).
- **(f) Gap:** Incumbents already offer deposits and card-on-file. The complaints are about fees and commissions, not missing features.
- **(g) Willingness to pay:** People pay $24–$30/month per provider.
- **(h) Solo feasibility:** Low differentiation; payments-heavy.
- **(i) Concept:** Not recommended.

#### Not covered (search budget exhausted before these searches ran)
Solo therapists and coaches, real estate agents, students and new grads, low vision. The SimplePractice and NAR searches did not run. See Gaps.

### Inferences
- **Scoring (my judgment, 1–5; higher is better; for "regulatory" a higher score means less risk):**

| Group | Size | Frequency | Already pay | Incumbents weak or hated | Reachable | Solo feasible | Regulatory | Total |
|---|---|---|---|---|---|---|---|---|
| Solo trades: quote/invoice (C4) | 4* | 5 | 5 | 4 | 4 | 5 | 5 | **32** |
| Freelancers/creators: get-paid (C5) | 4* | 4 | 4 | 4 | 5 | 5 | 5 | **31** |
| Chronic illness pacing (C11) | 3* | 5 | 4 | 4 | 5 | 5 | 4 | **30** |
| Gig drivers: mileage/profit/tax (C1) | 4 | 5 | 3 | 4 | 5 | 3 | 4 | **28** |
| Seniors + adult children: scams (C8/C9) | 5 | 3 | 3 | 2 | 3 | 3 | 4 | 23 |
| Immigrants: letter explainer (C13) | 5 | 3 | 2 | 4 | 4 | 4 | 2 | 24 |
| Small landlords (C6) | 4 | 3 | 4 | 3 | 4 | 3 | 3 | 24 |
| Hearing captions (C10) | 4 | 5 | 3 | 3 | 3 | 2 | 5 | 25 |
| Dyslexia text-to-speech (C12) | 3* | 4 | 4 | 3 | 3 | 4 | 5 | 26 |
| Nurses (C3) | 4 | 4 | 2 | 2 | 4 | 3 | 4 | 23 |
| Teachers (C7) | 4* | 5 | 3 | 1 | 4 | 3 | 3 | 23 |
| Truckers (C2) | 4 | 5 | 3 | 3 | 3 | 1 | 4 | 23 |
| Stylists/barbers (C14) | 3* | 4 | 4 | 2 | 4 | 2 | 4 | 23 |

  *Size estimated without a retrieved headcount.

- **Top picks:**
  1. **Solo tradesperson "Talk-to-Quote" (C4).** The strongest willingness to pay ($8–$179/month already), complaints about price hikes and data lock-in at both Joist and Jobber, several uses a week, and no network effect. On-site voice-to-quote is a natural fit for 2026 AI and iPhone-first use.
  2. **Freelancer/creator "invoice that chases itself" (C5).** 85% are paid late, and Invoice Simple users are angry about caps and price increases. It shares an engine with #1, so one codebase can serve two audiences under different branding.
  3. **Apple Watch energy pacing for chronic illness (C11).** Users already pay £10.99–£14.99/month plus a £75 band and complain about it. The communities (r/cfs, Long COVID groups) are very close-knit and trade recommendations. A HealthKit/watchOS product is iOS-native and defensible for a solo developer.
  4. **Gig driver "never miss a trip" profit and tax tracker (C1).** A huge, reachable audience, and reliability is the obvious open flank. Drivers are price-sensitive and the category is crowded, so win on trust in the data rather than features. Avoid offer-scraping (the Para precedent).
  5. **Wildcard: US official-letter explainer (C13).** No clear incumbent and proven analogues abroad. Willingness to pay in the US and the legal risk are unknown. Worth a cheap landing-page test.
- **Signs of 2026 crowding:** many new indie sleep apps for shift workers and many `pages.dev` "protect your aging parent from scams" pages. Low barriers to building mean distribution and trust, not features, will decide these niches.
- **The common "hated incumbent" pattern** across segments is **business-model abuse**, not missing features: free tiers cut back (Medisafe, Gridwise), invoice caps (Invoice Simple), price rises after signup (Joist), trial-to-annual traps (Speechify), required hardware (Visible) and fees passed to tenants (landlord apps). A solo app can compete on **transparent pricing, data portability and one-tap cancel** as a marketing message.

### Gaps
- **App Store review mining was not possible.** `itunes.apple.com` and `apps.apple.com` were blocked, so I have no 1–3 star theme counts, no first-party quotes with dates, and no current rating or review counts. Ratings above come from mirrors with older snapshots. To finish this, allow those hosts in the session's network settings and rerun the RSS review pulls for: Stride (id 1041591359), Gridwise (1215991382), Everlance (985378916), Trucker Path, NurseGrid, Jobber, Joist, Invoice Simple, TurboTenant, RentRedi, Medisafe, Ava (1030067058), Visible (1624474919), Bearable, Speechify and Booksy.
- **Reddit was blocked** (`www.reddit.com`, `old.reddit.com`). Only one r/cfs thread was seen, through a mirror. Allow reddit.com to collect "is there an app" and "I wish there was an app" posts.
- **`www.bls.gov` was blocked**, and the search budget ran out before I could get BLS counts for handymen, electricians, plumbers, HVAC, barbers/stylists, therapists or teachers (NCES), or headcounts of freelancers (MBO Partners/Upwork), real estate agents (NAR) and owner-operator truckers.
- **Not researched (budget):** solo therapists/coaches (SimplePractice price changes), real estate agents after the NAR settlement, students and new grads, low-vision apps, dyslexia and chronic-illness prevalence, GlossGenius complaints, Trucker Path Pro pricing, and Greenlight Family Shield details (a May 2025 launch was mentioned in a search summary but its URL wasn't captured).
- **Weak sources:** Several statistics come from competitor-authored pages (MileageWise, Workyard, myQuoteIQ, Innago, TurboTenant, Pillo) or automated aggregators (marlvel.ai, JustUseApp safety scores). I have flagged these inline. A newswire headline claiming "59% of Freelancers Are Owed $50,000 or More" looked implausible and undated, so I excluded it.

---

## Key Question 2: What exact features are requested again and again?

### Takeaway
Across all segments, the repeated requests are: (1) **reliability of the core automatic function** (trip capture, reminders, caption accuracy); (2) **fair, stable pricing with no caps and no surprise increases**; (3) **owning and exporting your own data**; (4) **working with hardware and platforms people already have** (Apple Watch, CarPlay, widgets) instead of proprietary add-ons; (5) **fewer fees passed to the user's own customers or tenants**.

### Cited Findings
- **Mileage and gig apps:**
  - Auto-start, widgets and CarPlay for Stride; better expense search and filters; multiple custom "Other" categories — [MileageWise](https://www.mileagewise.com/?p=25586).
  - Reliable background capture: Gridwise "may miss trips if the app is not running consistently in the background" — [SpotSaaS](https://www.spotsaas.com/product/gridwise/reviews); Everlance reinstall workarounds — [Capterra](https://www.capterra.com/p/174335/Everlance/reviews).
  - Odometer and sync accuracy — [marlvel.ai](https://marlvel.ai/apps/com-gridwise-app).
  - Subscription status that actually syncs, and support you can reach — [Timeero](https://timeero.com/post/everlance-review).
  - Showing total pay and tip before accepting an offer was so wanted that DoorDash drivers went on strike when Para was blocked — [DoorDash (Wikipedia mirror)](https://wiki.krisyotam.com/content/wikipedia_en_all_nopic_2026-03/DoorDash); [Jordan News](https://www.jordannews.jo/Section-129/Technology/Meet-the-app-that-helps-gig-workers-know-how-much-they-really-make-23349).
- **Trades:** Lower or no card fees and alternatives to PayPal's ~4% — [Capterra Jobber](https://capterra.com/p/127994/Jobber/reviews/?page=4). No price increases after signup, and records not "held hostage" — [Workyard](https://www.workyard.com/compare/joist-review); [Software Advice](https://www.softwareadvice.co.nz/reviews/233734/joist). Core features not gated behind higher tiers — [OneCrew](https://www.getonecrew.com/post/jobber-reviews).
- **Invoicing:** Unlimited invoices on the base plan (anger over the 10-a-month cap), stable pricing, Google Pay support, and easy cancellation and refunds — [Trustpilot](https://uk.trustpilot.com/review/invoicesimple.com?page=5); [BBB](https://www.bbb.org/ca/bc/vancouver/profile/computer-software/invoice-simple-0037-2412159/complaints). Creators want payment terms that start at publication, and late fees — [Digiday](https://digiday.com/marketing/in-a-booming-influencer-economy-creators-seek-standardization-for-payment-terms).
- **Landlords:** No tenant-side fees, no hidden setup costs, and responsive support — [B2B Reviews](https://www.b2breviews.com/reviews/rentredi); [G2](https://g2.com/products/turbotenant/reviews?page=2); [TurboTenant comparison](https://www.turbotenant.com/reviews/avail-vs-rentredi/).
- **Nurses:** A manager mobile app, and swaps without group texts — [Capterra NurseGrid](https://www.capterra.com/p/254829/NurseGrid/reviews/); [ShiftHawk](https://apps.apple.com/app/id6777242727).
- **Truckers:** Accurate parking counts and fewer routing errors — [TruckingTruth](https://www.truckingtruth.com/truckers-forum/Topic-19045/Page-1/trucker-path-app-and-truck-stop-reviews); [marlvel.ai](https://marlvel.ai/apps/trucker-path-truck-gps-fuel).
- **Medication:** Enough free medicines for real multi-drug users, no pop-up nagging, and access to your own history — [Pillo](https://pillo.care/blog/medisafe-not-free-what-to-do); [appshunter](https://appshunter.io/ios/app/573916946/reviews/12).
- **Captions:** Speaker identification and good performance on cellular — [AppFollow Ava](https://apps.appfollow.io/ios/ava-transcribe-voice-to-text/1030067058?country=us).
- **Chronic illness:** Pacing without a proprietary armband, stable connectivity, honest billing and cancellation — [Fit&Well](https://www.fitandwell.com/features/visible-health-review); [Kimola](https://kimola.com/reports/in-depth-analysis-of-visible-app-for-chronic-illness-support-google-play-en-us-141985); [marlvel.ai Bearable](https://marlvel.ai/intel-report/health-fitness/bearable-symptom-tracker).
- **Reading/text-to-speech:** Trials that don't silently convert to annual plans, and cancellations that work — [CostBench](https://www.costbench.com/software/ai-voice-tools/speechify/hidden-costs/); [Krater](https://krater.ai/blog/cancel/speechify).
- **Seniors/caregivers:** Consent-based alert sharing, and a "check with me before responding" workflow — [Aura data](https://www.aura.com/learn/trusted-family-access-data-2026).
- **Immigrants:** Deadline and required-action extraction, in your language — [AI Tinkerers Harbor](https://boston.aitinkerers.org/hackathons/h_aKJ6ZOg4HFA/entries/ht_D9JFnXYyHNs).

### Inferences
- A solo app that **promises (a) "we never miss your data," (b) a flat price, (c) one-tap export and (d) no fees passed to your customers or tenants** answers most of the repeated complaints in the gig, trades, freelance and landlord segments. That message is also easy to market in subreddit and Facebook-group comparison threads.
- AI is the 2026 differentiator for the top picks: voice-to-quote (trades), auto-written payment reminders in the user's voice (freelancers), screenshot or receipt OCR for earnings (gig), and letter explanation (immigrants). The incumbents built before 2023 mostly lack these.
- Requests that depend on platform permission (offer-acceptance overlays, reading SMS) are traps on iOS and with gig platforms. Design around share sheets, OCR and manual capture.

### Gaps
- I could not count how often each feature request appears, because I had no access to App Store or Reddit data (see KQ1 Gaps). The list above is qualitative, and its frequency ranking is my judgment from the number of independent sources repeating each theme.
- I found no verified data on what share of each segment would pay $5–$15/month for the proposed concepts. Landing-page and waitlist tests in the named communities are needed.
