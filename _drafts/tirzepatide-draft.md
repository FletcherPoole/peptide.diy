# Tirzepatide — Protocol Draft (BULLET POINTS, for human review)

> Draft only. Bullet points, not finished prose/HTML. en-GB spelling. Every dosing/efficacy claim is either cited (URL in bullet), labelled **[ANECDOTAL]**, or labelled **[HOUSE PROTOCOL]** where it is house/community practice that diverges from the approved label.
> **Primary page focus:** 30 mg vial (clean 10 mg/mL math, covers a full titration cycle). Siblings to cross-link: 10 mg, 15 mg, 60 mg.
> **Operational lead:** the **house near-daily dosing model** (below). The FDA once-weekly titration is retained as trial/label *context* in the Research section, not as the primary how-to.

---

## Suggested front matter

```yaml
layout: default
title: "Tirzepatide 30mg"
seo_title: "Tirzepatide 30mg Protocol"
description: "Tirzepatide 30mg: reconstitute with 3 mL BAC for 10 mg/mL. House near-daily dosing across Low/Average/High weekly bands, converted to per-injection units. Cited sources."
last_updated: 2026-07-23
last_modified_at: 2026-07-23
date_published: 2026-07-23
breadcrumbs:
  - name: Single Peptides
    url: /single-peptides.html
related_protocols:
  - title: Tirzepatide 10mg
    url: /tirzepatide-10mg.html
  - title: Tirzepatide 60mg
    url: /tirzepatide-60mg.html
  - title: Retatrutide 10mg           # sibling GLP-1-class analog, if page exists
    url: /retatrutide-10mg.html
searchable: true
search_type: protocol
search_tags: "tirzepatide mounjaro zepbound LY3298176 GLP-1 GIP dual agonist weight loss glucose 10mg 15mg 30mg 60mg subcutaneous daily near-daily house protocol"
calc:
  method: injection
  amount: 30
  unit: mg
  bac: 3
```
- Category eyebrow: **Single · Metabolic & Weight**
- Sidebar slug: `tirz-` (e.g. `#tirz-tldr`, `#tirz-house`, `#tirz-dosing`, `#tirz-faq`)

---

## protocol-callout (Research purposes only)
- **Research purposes only.** Tirzepatide is a **prescription drug** (Mounjaro/Zepbound, Eli Lilly), a **GLP-1/GIP dual receptor agonist** — NOT approved for DIY/self-directed use.
- Carries an **FDA boxed warning** (thyroid C-cell tumours). Educational information; **not medical advice.** Any use belongs under medical supervision.
- The dosing model on this page is **house/community practice [HOUSE PROTOCOL]**, not the approved label schedule. Where the two differ it is flagged.

---

## At a Glance (protocol-tldr)
- **Vial:** 30 mg lyophilised tirzepatide (research vial). Siblings: 10 mg, 15 mg, 60 mg.
- **Mix:** 3.0 mL bacteriostatic water → **10.0 mg/mL** (30 ÷ 3.0 = 10.0 mg/mL). 1 U-100 unit = 0.1 mg = 100 mcg.
- **House model [HOUSE PROTOCOL]:** pick a **weekly band**, then **split it across as many days as you're comfortable with — as close to daily as possible.** Daily is the preferred route.
- **Weekly bands [HOUSE PROTOCOL]:** **Low 2 mg** (2000 mcg) · **Average 5 mg** (5000 mcg) · **High 10–15 mg** (10000–15000 mcg) per week.
- **Route:** subcutaneous (abdomen/thigh/upper arm, rotate sites), with or without food.
- **Per-injection at 10 mg/mL:** see the split table under *House Dosing Model* — weekly band ÷ number of days, then `mL = mg ÷ 10`, `units = mL × 100`.
- **Consider:** frequent (near-daily) dosing smooths peaks and commonly eases nausea; hydration; contraindicated in personal/family MTC or MEN2.
- **Context:** the approved product is dosed **once weekly** with a slow titration — see Research for the trial/label schedule.

---

## House Dosing Model (primary) [HOUSE PROTOCOL]

- **Core idea [HOUSE PROTOCOL]:** choose a **weekly dose band**, then **divide that weekly dose across as many days as you're comfortable with. The goal is to be as close to daily injections as possible. If you're comfortable with daily administration, that is the best route.**
- This diverges from the approved **once-weekly** schedule — same weekly total, spread out. Rationale is smoother plasma levels and better GI tolerability **[HOUSE PROTOCOL]** (see FAQ). It is not label-supported.
- **Weekly bands [HOUSE PROTOCOL]:**
  - **Low** = 2 mg (2000 mcg) / week
  - **Average** = 5 mg (5000 mcg) / week
  - **High** = 10–15 mg (10000–15000 mcg) / week
- **Formula (all conversions):** `mL = dose (mg) ÷ 10` (at 10 mg/mL) → `units = mL × 100`.

### Per-injection split table (10 mg/mL)

- Two common cadences shown: **Daily (÷7)** — the preferred house target — and **Twice-weekly (÷2)** as a gentler-entry / lower-frequency split.

| Band | Weekly dose | Daily (÷7): mg → mL → units | Twice-weekly (÷2): mg → mL → units |
|---|---|---|---|
| Low | 2 mg | 0.29 mg → 0.029 mL → **~2.9 U** | 1.0 mg → 0.10 mL → **10 U** |
| Average | 5 mg | 0.71 mg → 0.071 mL → **~7.1 U** | 2.5 mg → 0.25 mL → **25 U** |
| High (10 mg) | 10 mg | 1.43 mg → 0.143 mL → **~14.3 U** | 5.0 mg → 0.50 mL → **50 U** |
| High (15 mg) | 15 mg | 2.14 mg → 0.214 mL → **~21.4 U** | 7.5 mg → 0.75 mL → **75 U** |

- **Measurability caution [HOUSE PROTOCOL]:** a per-injection volume **under ~2 units (~0.02 mL / ~0.2 mg)** is hard to draw accurately on a U-100 syringe.
  - At 10 mg/mL the **Low band split daily (~2.9 U)** sits just above that floor — workable but the least forgiving; splitting the Low band across **more than ~7 days**, or using any band below Low, will fall under ~2 U.
  - If your per-injection dose lands below ~2 U: **use a lower concentration** (e.g. 30 mg + 6.0 mL BAC → 5 mg/mL, which doubles the units for the same dose) **or use fewer split days** (e.g. every-other-day instead of daily).
- **Intermediate cadences:** any day-count works — e.g. splitting a weekly band across 4 days = weekly ÷ 4. Use the same `mL = mg ÷ 10`, `units = mL × 100` on the per-injection mg.
- **Site rotation:** with near-daily dosing, rotate injection sites each dose to reduce local irritation/lipohypertrophy **[ANECDOTAL]**.

---

## Cycle
- **Continuous dosing [HOUSE PROTOCOL]:** effect is maintained only while dosing continues; weight regain is common on cessation (see Research). Hold at a comfortable band rather than chasing the top of the High band.
- **Working up a band [HOUSE PROTOCOL]:** if starting from little/no exposure, begin at **Low** and move up bands as tolerated rather than opening at High — GI adverse events are dose- and escalation-driven (see Research).
- **Vial longevity:** 30 mg vial = 3.0 mL total at 10 mg/mL. Reconstituted stability ~**28 days refrigerated (2–8 °C)** — plan the vial around that window. Near-daily dosing draws small volumes, so a vial may outlast the 28-day stability limit; discard on stability, not when empty.

---

## Supplies (supply-grid)
- **Tirzepatide vials** — 30 mg × qty for planned weeks (or mix 10/15/30/60 mg to match target band).
- **Bacteriostatic water** — 3 mL per 30 mg vial for 10 mg/mL (or 6 mL for a lower 5 mg/mL if per-injection units run small) + spare.
- **Insulin syringes** — U-100, **0.3 mL or 0.5 mL** preferred for small near-daily draws, 29–31 G × 8 mm; one per injection.
- **Alcohol swabs** — 2 per injection (vial septum + skin).
- **supply-footnote:** small per-injection volumes are easier to read on a 0.3 mL (30 U) syringe than a 1 mL. If units fall under ~2 U, drop to 5 mg/mL or fewer split days.
- **General supplies `<ul>`:** sharps bin, gauze, sterile storage rack, fridge thermometer, label/date sticker for reconstitution date.

---

## Dosing & Reconstitution

### Reconstitution
- **Recommended:** 30 mg vial + **3.0 mL** bacteriostatic water → **10.0 mg/mL** (compounding-standard concentration).
- **Lower concentration option:** 30 mg + **6.0 mL** BAC → **5 mg/mL** — halves the mg per unit, so units **double** for the same dose (helpful when near-daily splits push per-injection volume below ~2 U).
- Numbered mixing steps:
  1. Swab both stoppers; let dry.
  2. Draw the BAC water (3.0 mL for 10 mg/mL).
  3. Inject slowly down the **inside wall** of the vial — do not blast onto the powder.
  4. Swirl gently; **do not shake** (peptide is shear-sensitive). Leave until fully clear (a few minutes).
  5. Label with date; refrigerate.
- **Stability:** store reconstituted **2–8 °C, use within ~28 days**; do not freeze after reconstitution. Lyophilised vial: freezer (−20 °C), protect from light/moisture.
- Link → Storage Guide.

### Conversion reference (10 mg/mL)
- **Formula:** `Volume (mL) = dose (mg) ÷ concentration (mg/mL)` → `U-100 units = Volume (mL) × 100`. At 10 mg/mL: **1 unit = 0.1 mg = 100 mcg.**
- **Worked example (house Average band, daily split):** 5 mg ÷ 7 = 0.71 mg per injection → 0.71 ÷ 10 = 0.071 mL → 0.071 × 100 = **~7.1 units**.
- **Whole-weekly-dose reference** (if someone doses a full band in one shot — e.g. transitioning off once-weekly):

| Weekly band | Weekly dose | Volume | U-100 units |
|---|---|---|---|
| Low | 2 mg | 0.20 mL | 20 U |
| Average | 5 mg | 0.50 mL | 50 U |
| High (low end) | 10 mg | 1.0 mL | 100 U |
| High (top end) | 15 mg | 1.5 mL | 150 U (>1 mL syringe) |

- **calc callout:** "Open this 30 mg vial in the calculator" → prefilled method injection / 30 mg / 3 mL BAC.

---

## FAQ (house voice)
- **"I feel like I'm losing my appetite and a bit nauseous — is this normal?" [HOUSE PROTOCOL]**
  - Yes — that's partly how it works. Less appetite → less caloric intake → more weight loss, all else equal (basic thermodynamics).
  - If the nausea is **intolerable**, make dosing **more frequent**: instead of, say, 1 mg once a week, try **0.5 mg Monday & Thursday**, or **0.25 mg four times a week**. Smaller, more frequent doses smooth the peaks.
  - If it still doesn't suit you, consider switching to **Retatrutide** or **Semaglutide** — one may work better for you than tirzepatide.
- **"How often should I inject?" [HOUSE PROTOCOL]**
  - Divide your weekly band across as many days as you're comfortable with. Aim as close to **daily** as possible; daily is the best route. See the split table above for the per-injection units.
- **"Which weekly band do I pick?" [HOUSE PROTOCOL]**
  - Low 2 mg, Average 5 mg, High 10–15 mg per week. Start low if you're new to the compound and move up as tolerated.

> **Safety note (not house voice):** the FAQ above is community practice. It is **not** a substitute for medical advice, and does not override the boxed warning or contraindications below.

---

## What Is Tirzepatide
- Synthetic **39-amino-acid peptide**; **dual agonist of GIP and GLP-1 receptors** (developed as LY3298176, Eli Lilly).
- Mechanism: enhances **glucose-dependent insulin secretion**, suppresses glucagon, **slows gastric emptying**, and **reduces appetite/food intake**.
- **Half-life ~5 days** → the approved product is dosed weekly (the long half-life is also why splitting the same weekly total across more days keeps levels steady). Marketed as **Mounjaro** (type 2 diabetes) and **Zepbound** (chronic weight management).
- Data maturity: **strong human RCT evidence** (SURPASS diabetes programme; SURMOUNT obesity programme) — unusually mature vs most research peptides.

---

## Supplementary Notes
- **Combinations [ANECDOTAL]:** stacked with training/calorie deficit for body-comp; some pair with metformin. Combining with insulin/sulfonylureas raises **hypoglycaemia risk** — dose reductions of the other agent may be needed (label caution).
- **Interactions:** delayed gastric emptying can alter absorption of oral drugs; **oral contraceptive** effectiveness may drop around initiation/dose increases (label advises backup method).
- **Muscle loss:** rapid weight loss includes lean mass — resistance training + adequate protein commonly advised **[ANECDOTAL]**.
- **Side effects (SC, dose/escalation-driven):**
  - Very common GI: **nausea, diarrhoea, vomiting, constipation, dyspepsia, decreased appetite** — mostly mild–moderate, worst when moving up bands.
  - Injection-site reactions; fatigue.
  - Serious/rare: **pancreatitis, gallbladder disease, acute kidney injury** (via dehydration from vomiting), **severe hypoglycaemia** (with insulin/secretagogues), hypersensitivity, possible diabetic retinopathy change.
- **Contraindications:** personal/family history of **medullary thyroid carcinoma (MTC)** or **MEN2**; prior serious hypersensitivity. Caution: history of **pancreatitis**, severe GI disease, pregnancy/breastfeeding.

---

## Research (cited, linked)
- **Approved schedule (context, not the house model):** the FDA Mounjaro/Zepbound label uses **once-weekly SC** dosing with slow titration — **2.5 mg start**, increase by **2.5 mg every ≥4 weeks** as tolerated, to a **max of 15 mg/week**. This is what the approved product and the pivotal trials used; the house near-daily model above redistributes a comparable weekly total across more days. https://pi.lilly.com/us/mounjaro-uspi.pdf
- **Phase 2 diabetes (dose-finding):** Frias et al., *Lancet* 2018 — 26-wk, 1/5/10/15 mg **weekly** vs dulaglutide/placebo; HbA1c −1.06% to −1.94%; weight −0.9 to −11.3 kg; GI AEs dose-related (nausea/diarrhoea/vomiting up to ~66% at 15 mg); no severe hypoglycaemia. https://pubmed.ncbi.nlm.nih.gov/30293770/
- **SURPASS-2 (vs semaglutide, T2D):** 40-wk, 5/10/15 mg **weekly** vs semaglutide 1 mg; HbA1c −2.01/−2.24/−2.30%; weight −7.6/−9.3/−11.2 kg; superior to semaglutide. https://investor.lilly.com/news-releases/news-release-details/lillys-surpass-2-results-published-new-england-journal-medicine
- **SURMOUNT-1 (obesity, non-diabetic):** Jastreboff et al., *NEJM* 2022 — 72-wk, **weekly** dosing; weight loss **16.0% (5 mg), 21.4% (10 mg), 22.5% (15 mg)** vs 2.4% placebo; ≥5% loss in 89–96%; nausea 24.6–33.3%, vomiting 8.3–12.2%, diarrhoea 18.7–23.0%; AE discontinuation 4.3–7.1% (2.6% placebo). https://www.nejm.org/doi/full/10.1056/NEJMoa2206038
- **Mechanism/review:** Gallwitz, *Frontiers in Endocrinology* 2022. https://doi.org/10.3389/fendo.2022.1004044
- **Reference monograph:** Farzam & Patel, *Tirzepatide*, StatPearls. https://www.ncbi.nlm.nih.gov/books/NBK585056/
- **Regulatory dosing/safety of record:** FDA Mounjaro Prescribing Information (boxed warning, titration, contraindications). https://pi.lilly.com/us/mounjaro-uspi.pdf
- **callout — Research vs house vs anecdote:** the trial/label doses (2.5–15 mg **once weekly**) and titration are label/RCT-backed; the **near-daily split model and weekly bands are [HOUSE PROTOCOL]**; "faster is better", stacking, and switching-to-clear-side-effects claims are community anecdote.

---

## Beyond weight loss
- **Type 2 diabetes / glycaemic control**
  - **Research:** SURPASS programme — large, dose-dependent HbA1c reductions, superiority vs semaglutide 1 mg (SURPASS-2). https://investor.lilly.com/news-releases/news-release-details/lillys-surpass-2-results-published-new-england-journal-medicine
  - **[ANECDOTAL]:** users report fasting-glucose improvements within weeks.
- **Cardiometabolic / blood pressure & lipids**
  - **Research:** SURPASS analyses report systolic BP reductions alongside weight loss. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10039543/
  - **[ANECDOTAL]:** improved energy/appetite control reported; not a substitute for cardiology care.
- **Weight-loss durability / regain**
  - **Research:** long-term SURMOUNT follow-up shows benefit sustained **while dosing continues**; stopping is associated with partial regain. https://www.nejm.org/doi/full/10.1056/NEJMoa2206038
  - **[ANECDOTAL]:** community consensus that maintenance dosing (or careful taper) is needed to hold results.

---

## References (grouped, for HTML ref-list)
- **Efficacy / dose-finding:** Frias JP et al. *Lancet.* 2018. https://pubmed.ncbi.nlm.nih.gov/30293770/ · Jastreboff AM et al. *NEJM.* 2022. https://www.nejm.org/doi/full/10.1056/NEJMoa2206038 · SURPASS-2 (Frías JP et al. *NEJM.* 2021). https://investor.lilly.com/news-releases/news-release-details/lillys-surpass-2-results-published-new-england-journal-medicine
- **Mechanism / review:** Gallwitz B. *Front Endocrinol.* 2022. https://doi.org/10.3389/fendo.2022.1004044 · Farzam K, Patel P. StatPearls. https://www.ncbi.nlm.nih.gov/books/NBK585056/
- **Safety / regulatory:** FDA Mounjaro Prescribing Information. https://pi.lilly.com/us/mounjaro-uspi.pdf · FDA label (2025 rev). https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/215866s039lbl.pdf
- **Cardiometabolic:** SURPASS SBP analysis, *PMC.* https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10039543/
- **Storage / injection technique:** MedlinePlus SC injection. https://medlineplus.gov/ency/patientinstructions/000430.htm · CDC injection safety. https://www.cdc.gov/injection-safety/hcp/clinical-safety/index.html

---

## Sources (every URL used)
- https://peptidedosages.com/single-peptide-dosages/tirzepatide-30-mg-vial-dosage-protocol/
- https://peptidedosages.com/single-peptide-dosages/tirzepatide-10-mg-vial-dosage-protocol/
- https://pubmed.ncbi.nlm.nih.gov/30293770/  (Frias 2018, Phase 2, Lancet)
- https://www.nejm.org/doi/full/10.1056/NEJMoa2206038  (Jastreboff 2022, SURMOUNT-1, NEJM)
- https://investor.lilly.com/news-releases/news-release-details/lillys-surpass-2-results-published-new-england-journal-medicine  (SURPASS-2)
- https://doi.org/10.3389/fendo.2022.1004044  (Gallwitz review)
- https://www.ncbi.nlm.nih.gov/books/NBK585056/  (StatPearls)
- https://pi.lilly.com/us/mounjaro-uspi.pdf  (FDA Mounjaro PI)
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/215866s039lbl.pdf  (FDA label, 2025 rev)
- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10039543/  (SURPASS SBP analysis)
- https://medlineplus.gov/ency/patientinstructions/000430.htm  (SC injection technique)
- https://www.cdc.gov/injection-safety/hcp/clinical-safety/index.html  (CDC injection safety)
