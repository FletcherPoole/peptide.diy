# Semaglutide — Protocol Draft (bullet outline for review)

> DRAFT for human review. Bullet points only — not finished prose/HTML. en-GB spelling.
> Follows `_PROTOCOL-TEMPLATE.md` section order. Numbers cross-checked against peptidedosages.com + FDA Wegovy label + STEP 1 (NEJM 2021).

---

## Suggested front matter

```yaml
---
layout: default
title: "Semaglutide 5mg"
seo_title: "Semaglutide 5mg Protocol"
description: "Semaglutide 5mg: 2 mL BAC recon = 2.5 mg/mL, 0.25→2.4 mg weekly titration, once-weekly SubQ. Syringe units, supplies, cited sources."
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
search_tags: "semaglutide glp-1 ozempic wegovy weight-loss glucagon-like-peptide metabolic 5mg 10mg injectable subcutaneous"
calc:
  method: injection
  amount: 5
  unit: mg
  bac: 2
---
```

- Eyebrow / category: **Single · Metabolic**
- Slug for anchors: `sema-` (e.g. `#sema-tldr`, `#sema-cycle`)

---

## 1. content-hero
- Breadcrumb: Single Peptides › Semaglutide 5mg
- H1: **Semaglutide 5mg Dosage Protocol**
- One-line intro: "GLP-1 receptor agonist for metabolic/appetite research. Once-weekly subcutaneous injection with a slow multi-week dose escalation."
- `{% include last-updated.html %}`

## 2. protocol-callout (callout warning — top of page)
- **Research purposes only.** Semaglutide is a **prescription GLP-1 agonist** (branded Ozempic / Wegovy / Rybelsus). It is **not approved for DIY/self-directed use**; research vials are sold as unregulated chemicals of unverified purity/dose.
- Prescription weight-management use is done **under medical supervision** with baseline screening. This page is **educational, not medical advice**.
- **Contraindicated** (per FDA label): personal/family history of **medullary thyroid carcinoma (MTC)** or **MEN2**; prior serious hypersensitivity; **history of pancreatitis** = caution.

## 3. At a Glance (protocol-tldr)
- **Vial:** 5mg lyophilised (primary/beginner pick). Also common: **10mg**; less common 2mg / 20mg.
- **Mix:** 5mg + **2 mL** bacteriostatic water → **2.5 mg/mL**
- **Dose:** once-weekly SubQ; titrate **0.25 → 0.5 → 1.0 → 1.7 → 2.4 mg**, 4 weeks minimum at each step
- **Route:** subcutaneous only (abdomen / thigh / upper arm; rotate sites)
- **Cycle:** open-ended (metabolic tool, not a fixed "cycle"); maintenance 1.7 or 2.4 mg weekly
- **Consider:** GI side effects during titration; slow down if intolerable
- **Pitfall flag:** starting dose 0.25 mg = only **10 units** on a U-100 syringe — tiny mark; measure carefully
- Sibling vial: → Semaglutide 10mg

## 4. Cycle
- Framing note: **RESEARCH-derived** schedule (mirrors FDA Wegovy label titration). Not a bodybuilding-style cycle — it is a titrate-up-then-maintain schedule.
- **Standard titration table** (5mg vial @ 2.5 mg/mL):

| Weeks | Weekly dose | Volume (2.5 mg/mL) | U-100 units |
|---|---|---|---|
| 1–4 | 0.25 mg (250 mcg) | 0.10 mL | 10 |
| 5–8 | 0.5 mg (500 mcg) | 0.20 mL | 20 |
| 9–12 | 1.0 mg (1000 mcg) | 0.40 mL | 40 |
| 13–16 | 1.7 mg (1700 mcg) | 0.68 mL | 68 |
| 17+ (maintenance) | 2.4 mg (2400 mcg) | 0.96 mL | 96 |

- **How long a vial lasts (5mg @ 2.5 mg/mL):** 0.25 mg = 20 doses; 0.5 mg = 10; 1.0 mg = 5; 1.7 mg ≈ 2.9; 2.4 mg ≈ 2.08 doses.
- **Reconstituted-stability caveat:** one vial *mathematically* covers 20 low-dose weeks, but reconstituted semaglutide is only good ~**28 days** refrigerated (some sources to 56) — so at low doses you'll bin unused product before you use it all. Plan vial size to the in-use window, not the total mg.

## 5. Supplies (supply-grid, 4 cards, sized for a full titration to maintenance)
- **Peptide vials:** Semaglutide 5mg ×3 (or 10mg ×2) to reach maintenance across ~16+ weeks
- **Bacteriostatic water:** 30 mL BAC (multi-use), enough to remix fresh vials
- **Syringes:** U-100 insulin syringes (0.5 mL / 29–31G, ~8 mm) — 1 per weekly dose + spares; low doses need fine gradations
- **Alcohol swabs:** box of 100
- supply-footnote: quantities assume weekly dosing and remixing a fresh vial roughly monthly to stay inside stability window
- General supplies `<ul>`: sharps bin, cotton gauze, fridge space (2–8 °C), optional 21G draw-up needle

## 6. Dosing & Reconstitution
### Reconstitution
- **Recommended:** 5mg vial + **2 mL BAC → 2.5 mg/mL** (keeps low doses readable on a U-100)
- Numbered mixing steps:
  1. Let vial + BAC reach room temp; swab both stoppers
  2. Draw 2 mL BAC into a syringe
  3. Inject **slowly down the vial wall** — do NOT jet onto powder
  4. Swirl gently (do not shake); let dissolve to clear
  5. Refrigerate 2–8 °C; use within ~28 days
- Link → Reconstitution Guide + Storage Guide
- **10mg equivalent:** to keep the *same 2.5 mg/mL* and identical unit marks, add **4 mL** to a 10mg vial. (peptidedosages.com instead uses 3 mL on 10mg → 3.33 mg/mL, giving awkward fractional units e.g. 7.5 u start — we prefer the 4 mL clean-math version.)

### Injectable dosing table
- (same as Cycle table above — Level / weekly dose / volume / U-100 units / doses per vial)

### Formula (site-standard)
- **Volume (mL) = weekly dose (mg) ÷ concentration (mg/mL)**
- **U-100 units = Volume (mL) × 100**
- Worked example: 1.0 mg ÷ 2.5 mg/mL = **0.40 mL = 40 units**
- Worked example (start): 0.25 mg ÷ 2.5 mg/mL = **0.10 mL = 10 units**
- **Pitfall callout:** at 2.5 mg/mL the 0.25 mg start is 10 units — fine — but higher concentrations (e.g. 5 or 10 mg/mL) shrink this to 5 or 2.5 units, which is very hard to measure accurately. Lower concentration = easier low-dose reading. Never eyeball between marks.
- Calculator callout: "Open this vial in the calculator" (calc block prefilled 5mg / 2mL)

## 7. Alternative Protocols (h3 per variant; mark anecdotal)
- **10mg vial** (value option, fewer remixes) — ANECDOTAL community preference for longer runs
- **Micro-titration / half-steps** (e.g. 0.125 mg start, or holding 0.5 mg longer) — ANECDOTAL, used to reduce nausea; slower ramp
- **Cagrilintide + Semaglutide ("CagriSema")** blend — link sibling; RESEARCH stage
- **Lower maintenance (1.0–1.7 mg)** if 2.4 mg not tolerated — supported by label (maintenance may be 1.7 mg)
- Note: **oral Rybelsus exists** but research vials are injectable; do not extrapolate oral doses

## 8. What Is Semaglutide
- GLP-1 (glucagon-like peptide-1) receptor **agonist**; long-acting analogue of the gut incretin hormone
- Mechanism: slows gastric emptying, increases satiety/reduces appetite, enhances glucose-dependent insulin secretion, suppresses glucagon
- ~**7-day half-life** → once-weekly dosing
- Developed by Novo Nordisk; approved as **Ozempic** (T2D, 2017), **Rybelsus** (oral T2D), **Wegovy** (obesity, 2021)
- Data maturity: **mature human clinical data** (SUSTAIN, STEP, SELECT programmes) — unusually strong evidence base vs most research peptides

## 9. Supplementary Notes
- **Combinations (ANECDOTAL):** community stacks with cagrilintide, or with tirzepatide/retatrutide — no safety data for DIY combos; additive GI + hypoglycaemia risk
- **Hypoglycaemia:** low on its own, but **real risk when combined with insulin or sulfonylureas** — dose reductions of those needed (medical supervision)
- **Interactions:** delayed gastric emptying can alter absorption of oral meds
- **Side effects (route: SubQ / systemic):**
  - Common: nausea, vomiting, diarrhoea, constipation, decreased appetite, early satiety (worst during escalation, usually transient)
  - Less common: gallbladder issues, fatigue, injection-site reactions
  - Serious/rare: pancreatitis, gallstones; theoretical thyroid C-cell tumour signal (rodent models)
  - Discontinuation for GI in trials: ~0.8–4.5%

## 10. Research (cited h3 themes)
- **Weight management — STEP 1 (RESEARCH):** Wilding et al., NEJM 2021. n=1,961; 2.4 mg weekly × 68 wk → **−14.9%** body weight vs −2.4% placebo (−12.4 pp). ≥5% loss in **86.4%**, ≥10% in 69.1%, ≥15% in 50.5%. https://www.nejm.org/doi/full/10.1056/NEJMoa2032183
- **Weight-management clinical review (RESEARCH):** Once-weekly semaglutide for weight management — PMC review. https://pmc.ncbi.nlm.nih.gov/articles/PMC9272494/
- **Glycaemic control — SUSTAIN programme (RESEARCH):** 1.0 mg weekly for T2D (context for the diabetes dose band). StatPearls overview: https://www.ncbi.nlm.nih.gov/books/NBK603723/
- **Cardiovascular outcomes (RESEARCH):** semaglutide CV outcomes trial. https://pubmed.ncbi.nlm.nih.gov/30122305/
- **Pharmacology / mechanism (RESEARCH):** StatPearls + Mayo Clinic drug monograph. https://www.mayoclinic.org/drugs-supplements/semaglutide-subcutaneous-route/description/drg-20406730
- End callout: **Research vs anecdote** — human trial data is strong for *pharmaceutical* semaglutide; it does NOT validate purity/dose of grey-market research vials.

## 11. Beyond Weight Loss (Research/Anecdotal split per application)
- **Type 2 diabetes:** RESEARCH — SUSTAIN trials, 0.5–1.0 mg weekly improves HbA1c. ANECDOTAL — n/a (approved indication).
- **Cardiovascular risk:** RESEARCH — SELECT/CV outcome trials show reduced MACE in high-risk patients. ANECDOTAL — community reports of improved lipids/BP alongside weight loss.
- **Addiction / cravings (alcohol, nicotine):** RESEARCH — early/ongoing trials only (NCT protocols), not established. ANECDOTAL — widespread community reports of reduced alcohol/food "noise"; unproven.
- **NAFLD / metabolic:** RESEARCH — emerging trial signal. ANECDOTAL — secondary to weight loss.

## 12. References (ol.ref-list, grouped by h3)
- **Efficacy / weight loss:** NEJM STEP 1 (NEJMoa2032183); PMC9272494
- **Glycaemic / pharmacology:** StatPearls NBK603723; Mayo Clinic monograph
- **Cardiovascular / safety:** PubMed 30122305
- **Dosing / label:** FDA Wegovy label (215256s007lbl.pdf)
- **Stability / reconstitution:** PMC5665799 (peptide stability); Reconstitution Guide (internal)
- **Injection technique:** Johns Hopkins SubQ guide; CDC SubQ administration; NBK138495

## 13. `{% include protocol-footer.html %}`

---

## Reviewer notes / open decisions
- **Primary vial recommendation:** 5mg chosen as beginner default (cleanest low-dose reading + lower upfront cost). 10mg flagged as value option with 4 mL BAC to preserve identical 2.5 mg/mL math. Confirm which we lead with.
- **We diverge from peptidedosages.com on 10mg recon** (they use 3 mL / 3.33 mg/mL → fractional units). Flag for editor.
- peptidedosages.com "doses/weeks per vial" figures are internally rough — I recomputed from concentration; verify before publishing.
- Confirm reconstituted stability wording (28 vs 56 days) against our Storage Guide house position.
- Verify PubMed 30122305 identity (CV trial) before final citation; consider adding SELECT (NEJM 2023) explicitly.

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
