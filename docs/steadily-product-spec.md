# Steadily: Product Spec (v1.0 MVP)

*Working name. Status: draft, pending the landing-page demand test. Last updated: 4 Nov 2026.*

## 1. Summary

**Steadily is an iPhone app for people taking GLP-1 medications.** It logs shots or pills, hits protein, fiber and water targets, tracks weight and side effects, and keeps tracking after the user steps down or stops. It's built on one promise: **your data is never held hostage.** That means a free core that stays free, export anytime, honest billing, and no feature ever taken away.

**One-liner:** *The GLP-1 tracker that never holds your data hostage.*

## 2. Why now (evidence)

Full evidence: `reports/App opportunity deep dive.md` and `reports/App Store review update.md`.

- **Big, growing market.** About 12% of US adults currently take a GLP-1 (KFF, Nov 2025). Lilly's oral pill launched in April 2026 at $149/month, which widens the funnel.
- **Users already pay for trackers.** Shotsy has 34K ratings and a reported $1M run rate at 8 months (Feb 2025, company-reported). MeAgain has 40K ratings. Health & Fitness has the best trial-to-paid conversion of any category (about 35%, Adapty 2026).
- **The leader just broke trust.** In late October 2026 Shotsy removed its free version. Its App Store reviews filled with users losing 7 months to 2+ years of data; in October, 19 of its 23 one- and two-star reviews were about data loss or the forced paywall.
- **What users love is known.** MeAgain's 89% positive recent reviews praise fast protein/fiber/water tracking, photo food logging, a friendly companion and a generous free tier.
- **Life after the drug is underserved.** About 65% of non-diabetic users stop within a year and regain about 60% of the lost weight within a year of stopping. Noom and Shotsy have started touching this, but nobody owns it.

## 3. Target users

| Persona | Situation | What they need | Priority |
|---|---|---|---|
| **The burned switcher** | On a GLP-1 for 6+ months; their tracker just paywalled or lost their history | Import history, fast logging, trust | **P0: launch wedge** |
| **The new starter** | First 0–3 months, often on the new daily pill | Simple dose schedule, side-effect help, protein habit | P0 |
| **The step-down/stopper** | Tapering under a prescriber or stopped | Keep weight steady, see drift early, stay motivated | P1: Plus differentiator |

US first, English, iPhone only.

## 4. Positioning and promises

**Promises** (shown in the app, on the paywall and in marketing):
1. **Free core forever:** dose log, reminders, protein/fiber/water, weight, Apple Health sync.
2. **Export anytime:** CSV and a basic PDF log on every plan, including free.
3. **Trial warning:** a notification 2 days before any trial converts.
4. **One-tap cancel:** a "Manage subscription" button that opens Apple's sheet directly.
5. **Nothing taken away:** a free feature is never moved behind the paywall.

These promises are the product's moat, so they are requirements, not marketing copy.

## 5. Goals and success metrics

| Stage | Metric | Target |
|---|---|---|
| Demand test (2 wks) | Visitor → waitlist | ≥ 5% |
| | Survey picks a paid plan | ≥ 30% |
| Beta (TestFlight, 4 wks) | Day-7 retention | ≥ 40% |
| | Logs something on ≥ 3 days per week | ≥ 50% of active users |
| Launch (first 90 days) | Trial → paid | ≥ 25% (H&F benchmark about 35%) |
| | Paid conversion of installs | ≥ 4% |
| | Rating | ≥ 4.7★ |
| | Refund rate | ≤ 3% |

## 6. Scope

### v1.0 MVP (must ship)

**6.1 Onboarding (under 60 seconds, ends with a first log)**
- Screens: welcome and promises → medication setup → protein/water goals → Apple Health permission (optional) → log today's dose or weight → home.
- No account required; local-first.
- Paywall shown **after** the first successful log, as a soft offer that can be dismissed. Never before value.
- Acceptance: a new user can log a dose within 60 seconds of first launch.

**6.2 Medication and schedule**
- Pick the medication from a list (generic names, with brand names shown for recognition only) or enter it as free text.
- Form: weekly injection, daily pill, or other.
- Schedule: weekly day and time, or daily time.
- **Dose as prescribed:** a number plus a unit the user picks (mg). Titration steps are entered manually by the user ("from Dec 1: 5 mg").
- **Never:** calculate a dose, convert between mg/mL/"units", do compounded-vial mixing math, or suggest a titration. (App Store Guideline 1.4.2; Apple forced Pep AI to remove exactly this in Oct 2026.)

**6.3 Dose logging and reminders**
- One-tap log from home, from the notification ("Logged ✓" action) and from a widget.
- Optional injection site picker on a body map showing the last site used. It never recommends a site.
- Missed or late doses are shown neutrally ("Not logged yet"), with no dosing advice.
- Local notifications for dose day/time, with optional snooze.

**6.4 Protein, fiber and water**
- Daily goals are set by the user. A neutral info card notes that targets are commonly discussed in g/kg and to ask their clinician; we don't prescribe a goal.
- Quick add: recent foods, favourites, and +10 g / +20 g buttons.
- Barcode scan (VisionKit DataScanner) backed by Open Food Facts, with a USDA FoodData Central fallback.
- Water: +1 cup, +1 bottle, custom.
- Rings on the home screen for protein, fiber and water.

**6.5 Weight**
- Manual entry; read from Apple Health (`bodyMass`). Writing back to Health is optional.
- Trend chart with a 7-day moving average, so a single day's swing doesn't alarm anyone.

**6.6 Side-effect check-in**
- A 10-second check-in: chips for nausea, constipation, fatigue, reflux, headache, low appetite, other, each rated mild/moderate/severe, plus a note.
- Each entry is tagged automatically with "days since last dose".

**6.7 Import and export (the trust features)**
- **Import:** Apple Health (weight, steps, active energy); CSV import with a column-mapping screen (date, weight, dose, notes). Add presets for popular trackers' export formats once their formats are confirmed (open question #1).
- **Export (free):** all data as CSV in a zip, plus a plain PDF log. Available from Settings and the Share sheet.

**6.8 Honest billing**
- StoreKit 2, optionally via RevenueCat for paywall experiments and analytics.
- Local notification 2 days before a trial converts, scheduled from the transaction's renewal info. Rescheduled at every launch.
- "Manage subscription" uses `showManageSubscriptions` and is at most two taps from home.
- No pre-checked upsells, no countdown timers, no "are you sure?" chains.

**6.9 Widgets and Siri**
- Home and lock-screen widgets: "Next dose in 2 days" and "Protein 64/100 g".
- App Intents: "Log my shot", "Add 20 grams of protein", "Log my weight".

### v1.1 (Plus features, 4–6 weeks after launch)

- **Snap-a-plate protein estimate (Plus).**
  - The photo goes to a server-side vision model through a thin proxy and returns the items with protein and fiber estimates, which the user confirms or edits.
  - Images are processed in memory and never stored.
  - Results are clearly labelled as estimates (Guideline 1.4.1).
  - Target cost: under $0.01 per photo.
- **Side-effect patterns (Plus):** a chart of symptoms by day since the dose, plus a weekly summary.
- **Doctor summary PDF (Plus):** doses and titration timeline, weight trend, average protein, side-effect summary, and the user's notes, on one or two clean pages.
- **Life after the shot: maintenance mode (Plus).**
  - The user marks their stage (stepping down or stopped).
  - The user enters a weight range agreed with their doctor; the app never suggests one.
  - The home screen switches to "staying steady": 7-day average vs range, protein, activity.
  - When the 7-day average sits above the range for 7+ days, a gentle note says "Your average is above your range. Might be a good time to check in with your care team." No advice beyond that.
- **Encrypted backup:** an optional end-to-end-encrypted backup to our server, with the key held in the user's iCloud Keychain, for moving phones. (Health data must not be stored in iCloud itself; see §9.)

### Later (only with evidence)
- A companion character (MeAgain shows it works; test it with users first)
- Apple Watch quick-log
- Android, which needs a cross-platform rebuild
- Partner sharing ("support person" view)

### Non-goals
- Dose calculation or conversion of any kind; compounded-medication tools
- Telehealth, prescribing, pharmacy or selling medication
- Calorie-restriction coaching or diet plans
- Social feed or community (moderation burden)
- Ads, ever

## 7. Free vs Plus

| | Free | Plus ($7.99/mo or $49.99/yr) |
|---|---|---|
| Dose log, schedule, reminders | ✓ | ✓ |
| Protein/fiber/water, barcode scan | ✓ | ✓ |
| Weight + Apple Health | ✓ | ✓ |
| Side-effect check-ins | ✓ | ✓ |
| CSV + basic PDF export | ✓ | ✓ |
| Widgets, Siri | ✓ | ✓ |
| Snap-a-plate estimates | 3 free to try | Unlimited |
| Side-effect patterns | — | ✓ |
| Doctor summary PDF | — | ✓ |
| Maintenance mode | — | ✓ |
| Encrypted backup | — | ✓ |

- **Founding offer:** 50% off the first year for waitlist members, via a StoreKit introductory offer or offer code.
- **Trial:** 7 days on the annual plan only, with the 2-day warning.
- Revisit pricing after the beta. RevenueCat 2026 data shows higher-priced apps earn about 7× the median lifetime value.

## 8. Technical architecture

| Area | Choice | Notes |
|---|---|---|
| App | SwiftUI, Swift 6, minimum iOS 18 | Use iOS 26+ APIs where available |
| Storage | SwiftData, local on device | Local-first; works offline |
| Health | HealthKit: read `bodyMass`, `stepCount`, `activeEnergyBurned`; optional write of `bodyMass` and `dietaryProtein` | Request only what's used |
| Food data | Open Food Facts (barcodes), USDA FoodData Central (search) | Both free; cache locally |
| Photo estimates | Serverless proxy (e.g. Cloudflare Worker) → vision LLM | No images stored; per-user rate limit |
| Payments | StoreKit 2, optionally with RevenueCat | RevenueCat is free under $2.5K/month revenue |
| Analytics | TelemetryDeck or another privacy-preserving tool | No ad SDKs, no health data in analytics events |
| Widgets/Siri | WidgetKit, App Intents | |
| Backup (v1.1) | Client-side encrypted blob → small backend (e.g. Supabase storage) | Key in iCloud Keychain |

**Data model (core entities):** `Medication` (name, form, schedule), `DoseStep` (startDate, amount, unit), `DoseLog` (timestamp, amount, unit, site?, note), `FoodEntry` (timestamp, name, protein_g, fiber_g, source), `WaterEntry`, `WeightEntry` (timestamp, kg, source), `SymptomCheckin` (timestamp, items[{symptom, severity}], daysSinceDose, note), `Goal` (type, target), `MaintenancePlan` (stage, rangeLowKg, rangeHighKg, startDate), `Settings`.

## 9. Compliance and App Store review

Confirm each against the current App Store Review Guidelines before submission.

| Risk | Rule | Our approach |
|---|---|---|
| Dose calculators | Guideline **1.4.2**: dosage calculators must come from approved entities (manufacturer, hospital, FDA-approved, etc.) | Log as prescribed only. No math, no unit conversion. |
| Inaccurate health data | Guideline **1.4.1** | Photo estimates labelled as estimates; user confirms or edits |
| Health data in iCloud | Guideline **5.1.3(ii)**: apps may not store personal health information in iCloud | No CloudKit for health data. Local storage plus an optional E2E-encrypted backup to our own server. |
| Health data for marketing | Guideline **5.1.3(i)** | Never used for ads or data mining; no ad SDKs |
| FDA status | General Wellness guidance (reissued Jan 2026) | Self-tracking only; no diagnosis, no treatment claims, no "prevents regain" claims |
| Breach rules | FTC Health Breach Notification Rule; state health-privacy laws (e.g. Washington's My Health My Data Act) | Minimal data collection, privacy policy, consent for backup, breach-response plan |
| Trademarks | Drug brand names belong to their makers | Generic names first; brand names only to identify; never in the app name or icon |

## 10. Analytics events (no health values)

`onboarding_started`, `onboarding_completed`, `first_log` (type), `dose_logged`, `food_logged` (method: quick/barcode/photo), `weight_logged`, `checkin_logged`, `import_started`/`import_completed` (source), `export_completed` (format), `paywall_viewed` (trigger), `trial_started`, `subscription_started` (plan), `trial_warning_sent`, `manage_subscription_opened`, `maintenance_enabled`.

## 11. Delivery plan (solo or small team)

| Weeks | Milestone |
|---|---|
| 0–2 | Landing-page demand test (`landing/`). Go/no-go on the thresholds in `landing/README.md`. |
| 2–3 | Design: onboarding, home, log flows, paywall (Figma or SwiftUI prototypes) |
| 3–7 | Build v1.0: §6.1–6.9 |
| 6 | TestFlight beta to the first 100 waitlist members |
| 8–9 | Fixes, App Store submission, launch to the waitlist with the founding offer |
| 10–15 | v1.1: snap-a-plate, patterns, doctor PDF, maintenance mode, backup |

**Speed matters:** the opening from Shotsy's paywall change is measured in weeks. If the test passes, cut scope before cutting the date.

## 12. Open questions

1. **Import formats:** what export formats do Shotsy and MeAgain offer, if any? This decides whether the "bring your history" promise is one tap or a manual CSV mapping.
2. **Name:** check "Steadily" against the USPTO and the App Store, and pick a domain.
3. **Guideline check:** re-read the current 5.1.3 (iCloud) and 1.4.2 wording before building storage and dose features.
4. **Photo estimates:** test accuracy on 50 real GLP-1-sized meals before promising "seconds".
5. **Pricing:** use the survey answers from the landing test to set Plus pricing; consider a lifetime option for trust.
6. **Companion character:** worth testing in the beta, given MeAgain's capybara and Finch's success?
