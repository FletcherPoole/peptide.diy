# Semaglutide — Protocol Draft (bullet outline for review)

> DRAFT for human review. Bullet points only — not finished prose/HTML. en-GB spelling.
> Follows `_PROTOCOL-TEMPLATE.md` section order.
> **Lead dosing guidance = house protocol** (weekly bands + dose-by-results + near-daily splitting). FDA Wegovy titration is retained as *research/label context*, not the primary instruction.
> Labels: `[HOUSE PROTOCOL]` = site owner's guidance where it diverges from the approved label; `[ANECDOTAL]` = community/unproven; RESEARCH/cited = trial- or label-backed.

---

## Suggested front matter

```yaml
---
layout: default
title: "Semaglutide 5mg"
seo_title: "Semaglutide 5mg Protocol"
description: "Semaglutide 5mg: 2 mL BAC recon = 2.5 mg/mL. House model: weekly starting bands (0.25 / 0.5 / 1 mg), split as close to daily as tolerated, escalate by results. Syringe units, supplies, cited sources."
last_updated: 2026-07-23
last_modified_at: 2026-07-23
breadcrumbs:
  - name: Single Peptides
    url: /single-peptides.html
related_protocols:
  - title: Semaglutide 10mg
    url: /semaglutide-10mg.html
  - title: Retatrutide 20mg
    url: /retatrutide.html
  - title: Cagrilintide + Semaglutide
    url: /cagrilintide-semaglutide.html
searchable: true
search_type: protocol
search_tags: "semaglutide glp-1 ozempic wegovy weight-loss glucagon-like-peptide metabolic 5mg 10mg injectable subcutaneous daily microdose"
calc:
  method: injection
  amount: 5
  unit: mg
  bac: 2
---
```

- Eyebrow / category: **Single · Metabolic**
- Slug for anchors: `sema-` (e.g. `#sema-tldr`, `#sema-house`)

---

## 1. content-hero
- Breadcrumb: Single Peptides › Semaglutide 5mg
- H1: **Semaglutide 5mg Dosage Protocol**
- One-line intro: "GLP-1 receptor agonist for metabolic/appetite research. Subcutaneous injection — the house model splits a weekly dose across as many days as you can tolerate, aiming as close to daily as possible."
- `{% include last-updated.html %}`

## 2. protocol-callout (callout warning — top of page)
- **Research purposes only.** Semaglutide is a **prescription GLP-1 agonist** (branded Ozempic / Wegovy / Rybelsus). It is **not approved for DIY/self-directed use**; research vials are sold as unregulated chemicals of unverified purity/dose.
- Prescription weight-management use is done **under medical supervision** with baseline screening. This page is **educational, not medical advice**.
- **Contraindicated** (per FDA label): personal/family history of **medullary thyroid carcinoma (MTC)** or **MEN2**; prior serious hypersensitivity; **history of pancreatitis** = caution.

## 3. At a Glance (protocol-tldr)
- **Vial:** 5mg lyophilised (primary/beginner pick). Also common: **10mg**; less common 2mg / 20mg.
- **Mix:** 5mg + **2 mL** bacteriostatic water → **2.5 mg/mL**
- **House dose model `[HOUSE PROTOCOL]`:** pick a **weekly starting band** — Low **0.25 mg**, Average **0.5 mg**, High **1 mg** — then **split it across as many days as you're comfortable with, as close to daily as possible**.
- **Escalate by results `[HOUSE PROTOCOL]`:** this is a *starting* dose. **If you don't lose weight that week, add 0.25 mg to next week's total.**
- **Route:** subcutaneous only (abdomen / thigh / upper arm; rotate sites)
- **Cycle:** open-ended (metabolic tool, not a fixed "cycle")
- **Pitfall flag:** splitting a Low (0.25 mg) week across 7 days gives only **~1.4 units** per shot — below what a U-100 syringe reads reliably. **At low weekly totals, use fewer split-days** (e.g. twice weekly).
- Sibling vial: → Semaglutide 10mg

## 4. Dosing — House Model (lead guidance) `[HOUSE PROTOCOL]`

### Core idea
- **Choose a weekly starting band, then split it toward daily.** Frequent small injections keep blood levels steadier and are the house-preferred route.
- **Frequency rule:** "Divide your weekly dose across as many days as you're comfortable with. The goal is to be as close to daily injections as possible. If you're comfortable with daily administration, that's the best route."
- **Escalation rule (dose-by-results):** the band is your **STARTING** dose. **If you do not lose weight that week, increase the weekly total by 0.25 mg (250 mcg) the following week.** Diverges from the fixed 4-week-per-step label titration (see Research).

### Starting bands → per-injection split table (5mg vial @ 2.5 mg/mL)
- Formula: **mL = weekly split-dose (mg) ÷ 2.5** · **units = mL × 100**
- Daily = weekly ÷ 7 · Twice-weekly = weekly ÷ 2

| Band | Weekly | Split | Per-injection mg | Volume (mL) | U-100 units |
|---|---|---|---|---|---|
| **Low** | 0.25 mg | Daily (÷7) | 0.036 mg | 0.014 mL | **~1.4 u ⚠ too small** |
| **Low** | 0.25 mg | Twice-weekly (÷2) | 0.125 mg | 0.05 mL | 5 u |
| **Average** | 0.5 mg | Daily (÷7) | 0.071 mg | 0.029 mL | ~2.9 u |
| **Average** | 0.5 mg | Twice-weekly (÷2) | 0.25 mg | 0.10 mL | 10 u |
| **High** | 1 mg | Daily (÷7) | 0.143 mg | 0.057 mL | ~5.7 u |
| **High** | 1 mg | Twice-weekly (÷2) | 0.5 mg | 0.20 mL | 20 u |

- **⚠ Too-small flag:** any per-injection dose **under ~2 units** can't be measured accurately on a U-100 syringe. The **Low band split daily (~1.4 u) fails this** — for Low, use **twice-weekly (5 u)** or another low-split-count schedule instead. Average-daily (~2.9 u) is borderline but readable; High-daily (~5.7 u) is fine.
- **Rule of thumb:** the lower your weekly total, the **fewer days** you should split across (so each shot stays measurable). As you escalate the weekly total, you can add split-days back toward daily.
- **Unit reference (1 U-100 unit = 25 mcg = 0.025 mg at 2.5 mg/mL):** 0.25 mg = 0.10 mL = **10 u** · 0.5 mg = 0.20 mL = **20 u** · 1 mg = 0.40 mL = **40 u** (these are the *weekly-total-in-one-shot* equivalents; split figures above are smaller).

## 5. Supplies (supply-grid, 4 cards)
- **Peptide vials:** Semaglutide 5mg — quantity scales with how high you escalate; start with 1–2, add more as the weekly total climbs
- **Bacteriostatic water:** 30 mL BAC (multi-use), enough to remix fresh vials
- **Syringes:** U-100 insulin syringes (0.5 mL / 29–31G, ~8 mm) — near-daily splitting means **many** small injections, so buy generously; fine gradations matter at low split-doses
- **Alcohol swabs:** box of 100
- supply-footnote: near-daily dosing uses more syringes than once-weekly; remix a fresh vial roughly monthly to stay inside the stability window
- General supplies `<ul>`: sharps bin, cotton gauze, fridge space (2–8 °C), optional 21G draw-up needle

## 6. Reconstitution
- **Recommended:** 5mg vial + **2 mL BAC → 2.5 mg/mL** (keeps low split-doses as readable as possible on a U-100)
- Numbered mixing steps:
  1. Let vial + BAC reach room temp; swab both stoppers
  2. Draw 2 mL BAC into a syringe
  3. Inject **slowly down the vial wall** — do NOT jet onto powder
  4. Swirl gently (do not shake); let dissolve to clear
  5. Refrigerate 2–8 °C; use within ~28 days
- Link → Reconstitution Guide + Storage Guide
- **10mg equivalent:** to keep the *same 2.5 mg/mL* and identical unit marks, add **4 mL** to a 10mg vial.
- **Reconstituted-stability caveat:** reconstituted semaglutide is good ~**28 days** refrigerated (some sources to 56). At very low weekly totals a vial mathematically lasts far longer than that — plan vial size to the in-use window, not total mg.
- **Concentration note (why 2.5 mg/mL):** higher concentrations (5 or 10 mg/mL) shrink an already-small split-dose to 2.5 u or less — near-unmeasurable. Lower concentration = easier low-dose reading. Never eyeball between marks.
- Calculator callout: "Open this vial in the calculator" (calc block prefilled 5mg / 2mL)

## 7. FAQ (house voice)
- **Q: Will this kill my appetite / make me feel a bit sick?** `[HOUSE PROTOCOL]`
  - Yes, partly — that's how it works. Less appetite → less caloric intake → more weight loss (it comes down to thermodynamics). Some reduced appetite and mild nausea are expected and usually settle.
- **Q: The nausea is intolerable — what do I do?** `[HOUSE PROTOCOL]`
  - **Dose more frequently** so each hit is smaller. E.g. split 0.5 mg as **0.25 mg Mon & Thu**, or **0.25 mg 4×/week**. Smaller, more frequent doses are gentler than one large weekly shot.
  - If it's still intolerable, **consider switching to Retatrutide or Tirzepatide** (see sibling protocols).
- **Q: How do I know if my dose is right?** `[HOUSE PROTOCOL]`
  - By results: your starting band is a floor. **If you didn't lose weight that week, add 0.25 mg to next week's total** and split as before.
- **Q: Weekly or daily?** `[HOUSE PROTOCOL]`
  - As close to **daily as you're comfortable with** is the house-preferred route — but keep each injection measurable (~2+ units). Drop split-days at low weekly totals.

## 8. Alternative Protocols (h3 per variant; mark anecdotal)
- **Label-style fixed titration (RESEARCH/label context):** once-weekly, 0.25 → 0.5 → 1.0 → 1.7 → 2.4 mg, ≥4 weeks per step — see Research. The house model diverges (results-driven escalation, near-daily splitting) `[HOUSE PROTOCOL]`.
- **10mg vial** (value option, fewer remixes) — `[ANECDOTAL]` community preference for longer runs
- **Micro-titration / half-steps** (e.g. holding a band longer) — `[ANECDOTAL]`, used to reduce nausea
- **Cagrilintide + Semaglutide ("CagriSema")** blend — link sibling; RESEARCH stage
- **Switch to Retatrutide / Tirzepatide** if GI intolerance persists `[HOUSE PROTOCOL]` — link siblings
- Note: **oral Rybelsus exists** but research vials are injectable; do not extrapolate oral doses

## 9. What Is Semaglutide
- GLP-1 (glucagon-like peptide-1) receptor **agonist**; long-acting analogue of the gut incretin hormone
- Mechanism: slows gastric emptying, increases satiety/reduces appetite, enhances glucose-dependent insulin secretion, suppresses glucagon
- ~**7-day half-life** → supports once-weekly dosing on the label; the house near-daily split trades convenience for steadier levels/tolerability
- Developed by Novo Nordisk; approved as **Ozempic** (T2D, 2017), **Rybelsus** (oral T2D), **Wegovy** (obesity, 2021)
- Data maturity: **mature human clinical data** (SUSTAIN, STEP, SELECT programmes) — unusually strong evidence base vs most research peptides

## 10. Supplementary Notes
- **Combinations (ANECDOTAL):** community stacks with cagrilintide, or with tirzepatide/retatrutide — no safety data for DIY combos; additive GI + hypoglycaemia risk
- **Hypoglycaemia:** low on its own, but **real risk when combined with insulin or sulfonylureas** — dose reductions of those needed (medical supervision)
- **Interactions:** delayed gastric emptying can alter absorption of oral meds
- **Side effects (route: SubQ / systemic):**
  - Common: nausea, vomiting, diarrhoea, constipation, decreased appetite, early satiety (worst during escalation, usually transient — house model splits doses to soften this)
  - Less common: gallbladder issues, fatigue, injection-site reactions
  - Serious/rare: pancreatitis, gallstones; theoretical thyroid C-cell tumour signal (rodent models)
  - Discontinuation for GI in trials: ~0.8–4.5%

## 11. Research (cited h3 themes)
- **What the approved product / trials used (label context, RESEARCH):** FDA **Wegovy** and the STEP programme used a **fixed once-weekly titration** — 0.25 mg (wk 1–4) → 0.5 mg (5–8) → 1.0 mg (9–12) → 1.7 mg (13–16) → **2.4 mg maintenance** (17+), ≥4 weeks per step, escalating on a calendar rather than on results. This is the benchmark the house model departs from (results-driven escalation + near-daily splitting).

  | Weeks | Weekly dose | Volume (2.5 mg/mL) | U-100 units (weekly total in one shot) |
  |---|---|---|---|
  | 1–4 | 0.25 mg | 0.10 mL | 10 |
  | 5–8 | 0.5 mg | 0.20 mL | 20 |
  | 9–12 | 1.0 mg | 0.40 mL | 40 |
  | 13–16 | 1.7 mg | 0.68 mL | 68 |
  | 17+ | 2.4 mg | 0.96 mL | 96 |

- **Weight management — STEP 1 (RESEARCH):** Wilding et al., NEJM 2021. n=1,961; 2.4 mg weekly × 68 wk → **−14.9%** body weight vs −2.4% placebo (−12.4 pp). ≥5% loss in **86.4%**, ≥10% in 69.1%, ≥15% in 50.5%. https://www.nejm.org/doi/full/10.1056/NEJMoa2032183
- **Weight-management clinical review (RESEARCH):** Once-weekly semaglutide for weight management — PMC review. https://pmc.ncbi.nlm.nih.gov/articles/PMC9272494/
- **Glycaemic control — SUSTAIN programme (RESEARCH):** 1.0 mg weekly for T2D (context for the diabetes dose band). StatPearls overview: https://www.ncbi.nlm.nih.gov/books/NBK603723/
- **Cardiovascular outcomes (RESEARCH):** semaglutide CV outcomes trial. https://pubmed.ncbi.nlm.nih.gov/30122305/
- **Pharmacology / mechanism (RESEARCH):** StatPearls + Mayo Clinic drug monograph. https://www.mayoclinic.org/drugs-supplements/semaglutide-subcutaneous-route/description/drg-20406730
- End callout: **Research vs anecdote** — human trial data is strong for *pharmaceutical* semaglutide dosed on the label schedule; it does NOT validate purity/dose of grey-market research vials, and the trials did **not** test the house near-daily split or results-driven escalation.

## 12. Beyond Weight Loss (Research/Anecdotal split per application)
- **Type 2 diabetes:** RESEARCH — SUSTAIN trials, 0.5–1.0 mg weekly improves HbA1c. ANECDOTAL — n/a (approved indication).
- **Cardiovascular risk:** RESEARCH — SELECT/CV outcome trials show reduced MACE in high-risk patients. ANECDOTAL — community reports of improved lipids/BP alongside weight loss.
- **Addiction / cravings (alcohol, nicotine):** RESEARCH — early/ongoing trials only (NCT protocols), not established. ANECDOTAL — widespread community reports of reduced alcohol/food "noise"; unproven.
- **NAFLD / metabolic:** RESEARCH — emerging trial signal. ANECDOTAL — secondary to weight loss.

## 13. References (ol.ref-list, grouped by h3)
- **Efficacy / weight loss:** NEJM STEP 1 (NEJMoa2032183); PMC9272494
- **Glycaemic / pharmacology:** StatPearls NBK603723; Mayo Clinic monograph
- **Cardiovascular / safety:** PubMed 30122305
- **Dosing / label:** FDA Wegovy label (215256s007lbl.pdf)
- **Stability / reconstitution:** PMC5665799 (peptide stability); Reconstitution Guide (internal)
- **Injection technique:** Johns Hopkins SubQ guide; CDC SubQ administration; NBK138495

## 14. `{% include protocol-footer.html %}`

---

## Reviewer notes / open decisions
- **House model now leads dosing;** FDA label titration reframed as Research/label context. Confirm editorial sign-off on foregrounding results-driven escalation over the calendar titration.
- **Safety note:** results-driven escalation `[HOUSE PROTOCOL]` can move faster than the label's ≥4-week steps — confirm we're comfortable publishing that, and that the GI/pancreatitis/contraindication warnings sit prominently against it.
- **Too-small-dose flag:** Low band daily-split = ~1.4 u (below U-100 readability). Copy steers users to fewer split-days at low totals — verify wording is clear enough.
- **Primary vial recommendation:** 5mg as beginner default (cleanest low-dose reading). 10mg = value option with 4 mL BAC to preserve 2.5 mg/mL math.
- Confirm reconstituted stability wording (28 vs 56 days) against our Storage Guide house position.
- Verify PubMed 30122305 identity (CV trial); consider adding SELECT (NEJM 2023) explicitly.

## Sources
- https://peptidedosages.com/single-peptide-dosages/semaglutide-5-mg-vial-dosage-protocol/
- https://peptidedosages.com/single-peptide-dosages/semaglutide-10-mg-vial-dosage-protocol/
- https://peptidedosages.com/single-peptide-dosages/semaglutide-20-mg-vial-dosage-protocol/
- https://www.nejm.org/doi/full/10.1056/NEJMoa2032183
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9272494/
- https://www.ncbi.nlm.nih.gov/books/NBK603723/
- https://pubmed.ncbi.nlm.nih.gov/30122305/
- https://www.mayoclinic.org/drugs-supplements/semaglutide-subcutaneous-route/description/drg-20406730
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/215256s007lbl.pdf
- https://pmc.ncbi.nlm.nih.gov/articles/PMC5665799/
- https://www.hopkinsarthritis.org/patient-corner/how-to-give-a-subcutaneous-injection/
- https://www.cdc.gov/vaccines/hcp/administration/during.html
- https://www.ncbi.nlm.nih.gov/books/NBK138495/
