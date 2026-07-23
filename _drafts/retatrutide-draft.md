# Retatrutide 10mg — Protocol Draft (bullet outline for review)

> Draft bullets only — not finished prose/HTML. en-GB spelling. Expand into HTML skeleton after sign-off.
> Compound is INVESTIGATIONAL / not approved anywhere. Keep the safety-first framing hard throughout.
> **Lead content = the house dosing model (weekly bands + own-comfort frequency).** Trial titration is kept as *research context*, not the primary instruction.
> Labelling convention: **[HOUSE PROTOCOL]** = site owner's own guidance; *cited* = from a referenced trial/paper; **[ANECDOTAL]** = community/unverified. Educational, not medical advice.

---

## Suggested front matter

```yaml
---
layout: default
title: "Retatrutide 10mg"
seo_title: "Retatrutide 10mg Protocol"
description: "Retatrutide 10mg house protocol: weekly dose bands (low 1-4mg, average 5-8mg, high 9-12mg), split across as many days as you tolerate. 10mg/mL recon, U-100 units, cited trial context."
last_updated: 2026-07-23
last_modified_at: 2026-07-23
date_published: 2026-07-23
breadcrumbs:
  - name: Single Peptides
    url: /single-peptides.html
related_protocols:
  - title: Retatrutide 20mg
    url: /retatrutide.html            # existing sibling (currently noindex)
  - title: Tirzepatide 10mg
    url: /tirzepatide-10mg.html       # confirm slug exists
  - title: Semaglutide 5mg
    url: /semaglutide-5mg.html        # confirm slug exists
searchable: true
search_type: protocol
search_tags: "retatrutide ly3437943 triple agonist glp-1 gip glucagon obesity weight loss metabolic 10mg subcutaneous weekly triumph"
calc:
  method: injection
  amount: 10
  unit: mg
  bac: 1
---
```

- **noindex recommendation stands:** keep BOTH the 10mg and 20mg (`retatrutide.html`) pages `noindex` until we're comfortable indexing an unapproved compound. Do not index a house-dosing page for an investigational drug.

---

## 1. content-hero
- Breadcrumb: Single Peptides › Retatrutide 10mg
- Eyebrow: "Single · Metabolic"
- H1: **Retatrutide 10mg Dosage Protocol**
- One-line intro: Investigational triple-agonist (GLP-1 / GIP / glucagon) research peptide, LY3437943; subcutaneous. House weekly dose bands, self-paced injection frequency, reconstitution and syringe units for a 10mg vial.
- `{% include last-updated.html %}`

## 2. protocol-callout (callout warning) — LEAD WITH THIS, make it strong
- **Research purposes only. Educational, not medical advice.**
- Retatrutide is **INVESTIGATIONAL**: not approved by the FDA, MHRA, EMA or any regulator anywhere. Still in clinical trials (Phase 3 TRIUMPH programme ongoing as of 2026).
- **Long-term safety is unknown.** Human data limited to trial populations under medical supervision.
- Systemic hormone-receptor agonist — affects appetite, blood glucose, heart rate. Do not treat like a local/cosmetic peptide.
- The dosing below is the **site's own house model**, not a regulator- or trial-defined regimen. Emphasise: start low, go slow, prioritise GI tolerability and heart-rate monitoring.

## 3. At a Glance (protocol-tldr)
- **Vial:** 10mg lyophilised (focus of this page). Sibling research sizes: 15mg, 20mg (larger vials more economical once past the low bands — see note).
- **Mix:** 1mL bacteriostatic water → **10 mg/mL** (recommended primary). 1 U-100 unit = 0.1 mg = **100 mcg**.
  - Alt: 2mL BAC → **5 mg/mL** for finer low-dose / daily-split resolution (see Alternative concentration).
- **Dose — [HOUSE PROTOCOL] weekly bands:**
  - **Low:** 1–4 mg (1000–4000 mcg) / week
  - **Average:** 5–8 mg (5000–8000 mcg) / week
  - **High:** 9–12 mg (9000–12000 mcg) / week
- **Frequency — [HOUSE PROTOCOL]:** divide the weekly dose across **as many days as you're comfortable with**. Not fixed to once-weekly. (See Frequency philosophy.)
- **Route:** subcutaneous only (abdomen/thigh/upper arm; rotate sites).
- **Vial longevity:** a 10mg vial = 10mg total → covers the whole low band for a week or two, but the average/high bands burn through it fast. Budget 20mg vials for sustained average/high dosing.
- Sibling vial: [Retatrutide 20mg](/retatrutide.html).

## 4. House Dosing Model — [HOUSE PROTOCOL] (make this the primary dosing section)

### 4a. Weekly dose bands
- **Low:** 1–4 mg (1000–4000 mcg) / week
- **Average:** 5–8 mg (5000–8000 mcg) / week
- **High:** 9–12 mg (9000–12000 mcg) / week
- Start in the **low band** and only move up when the current dose is well tolerated. These are weekly *totals* — how you split them across the week is the next decision.

### 4b. Frequency philosophy — [HOUSE PROTOCOL]
- Divide your weekly dose across **as many days as you're comfortable with**.
- The goal is to find an injection frequency that **minimises side effects**.
- **If you get intolerable side effects:** keep the weekly dose unchanged and **increase the frequency** (spread the same total over more, smaller injections).
- **If you're already injecting daily and side effects are still intolerable:** then **lower the weekly dose**.
- So the decision order is: pick a band → spread over more days before cutting dose → only cut dose once daily still isn't tolerable.

### 4c. Conversions — weekly band → per-injection at 10 mg/mL
- **Concentration:** 10 mg/mL, so **1 U-100 unit = 0.1 mg = 100 mcg**.
- **Formula:** `per-injection dose (mg) = weekly dose (mg) ÷ number of injections`; `volume (mL) = per-injection dose (mg) ÷ 10`; `U-100 units = volume (mL) × 100` (equivalently `units = per-injection mg × 10`).

- **Daily split (÷7)** at 10 mg/mL:

| Band | Weekly | Per-injection dose | Volume | U-100 units |
|------|--------|--------------------|--------|-------------|
| Low | 1–4 mg | 0.14–0.57 mg | 0.014–0.057 mL | ~1.4–5.7 u |
| Average | 5–8 mg | 0.71–1.14 mg | 0.071–0.114 mL | ~7.1–11.4 u |
| High | 9–12 mg | 1.29–1.71 mg | 0.129–0.171 mL | ~12.9–17.1 u |

- **Twice-weekly split (÷2)** at 10 mg/mL:

| Band | Weekly | Per-injection dose | Volume | U-100 units |
|------|--------|--------------------|--------|-------------|
| Low | 1–4 mg | 0.5–2 mg | 0.05–0.20 mL | 5–20 u |
| Average | 5–8 mg | 2.5–4 mg | 0.25–0.40 mL | 25–40 u |
| High | 9–12 mg | 4.5–6 mg | 0.45–0.60 mL | 45–60 u |

- **⚠ Too-small-to-measure flag:** on a **daily split at 10 mg/mL**, the bottom of the low band is impractical — **1 mg/week ÷ 7 ≈ 1.4 units (0.014 mL)** and 2 mg/week ÷ 7 ≈ 2.9 units. Anything under ~2 units is very hard to draw accurately on a U-100 syringe. For low-band **daily** dosing either:
  - switch to the **5 mg/mL** recon (doubles the unit count for the same dose — see Alternative concentration), or
  - use **fewer split days** (e.g. twice-weekly, which puts the low band at a comfortable 5–20 units).
- All other band/split combinations above sit in a comfortably measurable range on a U-100 syringe.
- **1mL syringe ceiling:** the very top of the high band as a *single* weekly shot would be 12 mg = 1.20 mL = 120 u, which exceeds one 1mL/100u syringe — another reason the high band should be split, not given as one injection.

## 5. Reconstitution & concentration
- **Recommended recon:**
  - 10mg vial + **1.0 mL** BAC water = **10 mg/mL** (10,000 mcg/mL). 1 U-100 unit = 0.1 mg.
  - Numbered steps: (1) draw 1mL BAC; (2) inject slowly down inner vial wall, not onto powder; (3) swirl gently — do NOT shake; (4) let dissolve to clear; (5) refrigerate.
  - Stability: reconstituted 2–8°C, use within ~28 days; do not freeze reconstituted solution. Lyophilised: −20°C long-term.
  - Link Storage Guide.
- **Alternative concentration — 5 mg/mL (for finer low-dose / daily splitting):**
  - 10mg vial + **2.0 mL** BAC water = **5 mg/mL** (5,000 mcg/mL). Now **1 U-100 unit = 0.05 mg = 50 mcg**, so every dose reads as **double the units** vs 10 mg/mL.
  - `volume (mL) = per-injection dose (mg) ÷ 5`; `units = per-injection mg × 20`.
  - Worked benefit: low-band **daily** 1 mg/week ÷ 7 = 0.143 mg → at 5 mg/mL that's **~2.9 u** (vs 1.4 u at 10 mg/mL) — measurable, if still small. Prefer this recon (or fewer split days) whenever the 10 mg/mL units fall below ~2.
  - Trade-off: high-band doses need larger volumes at 5 mg/mL (e.g. high-band twice-weekly 6 mg = 1.20 mL = 120 u → exceeds a 1mL syringe). Pick concentration to suit the band you're actually running.
- callout → "Open this 10mg vial in the calculator" (calc block: injection / 10 / mg / 1mL bac).

## 6. Supplies
- supply-grid (4 cards):
  - **Vials:** Retatrutide 10mg × quantity (more for sustained average/high bands — see longevity note)
  - **BAC water:** bacteriostatic water (0.9% benzyl alcohol) — 1mL per 10mg vial (or 2mL for the 5 mg/mL recon)
  - **Syringes:** U-100 insulin syringes (0.5mL/50u or 1mL/100u; 29–31G). Note high-band single shots >100u won't fit one 1mL syringe — split.
  - **Swabs:** alcohol prep pads
- supply-footnote: quantities scale with band and split frequency; the average/high bands burn vials fast.
- General supplies `<ul>`: sharps bin, storage (fridge 2–8°C), optional glass mixing vial for aliquoting.

## 7. What Is Retatrutide
- LY3437943, Eli Lilly. Single-molecule **triple agonist**: GLP-1 + GIP + **glucagon** receptors ("triple G").
- Glucagon-receptor arm adds energy expenditure/hepatic-fat effects on top of the appetite/glycaemic effects — distinguishes it from tirzepatide (GLP-1/GIP dual) and semaglutide (GLP-1 mono).
- Research focus: obesity, type 2 diabetes, MASLD/steatotic liver disease, osteoarthritis/knee (Phase 3).
- **Data maturity:** Phase 2 complete (obesity NEJM 2023; T2D Lancet 2023); Phase 3 TRIUMPH programme ongoing/reporting 2026. Positive topline Phase 3 obesity data but **no regulatory approval anywhere yet**.

## 8. Research (cited, linked) — includes trial titration as *context*
- **Trial titration (context, not the house instruction):** the pivotal Phase 2 obesity trial (Jastreboff, NEJM 2023) dosed **once-weekly** and escalated over ~12 weeks — started at **2mg or 4mg/week**, stepped up every 4 weeks toward **8–12mg** maintenance. The lower **2mg start reduced GI events** vs a 4mg start. This is where the "start low, go slow" logic comes from; the house model above generalises it into weekly bands and lets you split the weekly total across more days for tolerability rather than being locked to a single weekly shot. *cited.*
  - For reference, that trial's weekly-equivalent maintenance (8–12mg) maps onto the house **average/high** bands.
- **Obesity efficacy (headline):** Jastreboff et al., *NEJM* 2023 — Phase 2, 338 adults, 48 weeks. Mean weight loss dose-dependent: 1mg −8.7%, 4mg −17.1%, 8mg −22.8%, **12mg −24.2%** at 48 weeks (placebo −2.1%). ≥5% loss reached by 92/100/100% at 4/8/12mg. https://pubmed.ncbi.nlm.nih.gov/37366315/
- **Type 2 diabetes:** Rosenstock et al., *Lancet* 2023 — Phase 2, HbA1c reductions ~1.3–2.0% plus weight loss. https://pubmed.ncbi.nlm.nih.gov/37385280/
- **MASLD / liver:** Phase 2a randomised trial — hepatic steatosis reduction. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11271400/
- **Mechanism/discovery (preclinical):** Coskun et al., *Cell Metabolism* 2022. https://pubmed.ncbi.nlm.nih.gov/35985340/
- **Phase 3 (2026):** TRIUMPH-1 topline — up to ~28–30% average weight loss at 80 weeks; endpoints met; still pre-approval. https://www.prnewswire.com/news-releases/lillys-triple-agonist-retatrutide-delivered-powerful-weight-loss-in-pivotal-phase-3-obesity-trial-302778859.html
- **Registry:** ClinicalTrials.gov NCT04881760. https://clinicaltrials.gov/study/NCT04881760
- End with callout: "Research vs anecdote vs house model" — efficacy/titration numbers are from Lilly-sponsored trials in supervised populations; the weekly bands and split-frequency approach are the site's **[HOUSE PROTOCOL]**; self-directed research use is unstudied.

## 9. Safety & Supplementary Notes
- **Side effects (systemic):** GI-dominant — nausea, vomiting, diarrhoea, constipation, decreased appetite; dose-dependent, worst during escalation, ease at steady dosing. *cited (NEJM Phase 2).* House mitigation: spread the weekly total over more injection days before cutting the dose (see Frequency philosophy).
- **Heart rate:** dose-dependent increase (mean ~+3–4 bpm at 12mg in trials), peaked ~24 weeks then declined — monitor; glucagon-agonism related. *cited.*
- **Glycaemia:** can lower blood glucose; hypoglycaemia risk higher if combined with insulin/sulfonylureas. Educational, not medical advice.
- **Theoretical class risk:** rodent thyroid C-cell tumours seen with GLP-1 agonists; human relevance unknown. Contraindicated framing for personal/family history of medullary thyroid carcinoma or MEN2. *class caution.*
- **Interactions:** delays gastric emptying — can affect absorption of other orals.
- **Stacking:** combining with other GLP-1/GIP agonists (tirzepatide, semaglutide) adds GI + heart-rate load with no data. **[ANECDOTAL]** / discouraged.

## 10. FAQ (house voice)

- **"Does it kill appetite / make me nauseous?"** — [HOUSE PROTOCOL] Yes, partly — that's part of how it works. Less appetite → less caloric intake → more weight loss (basic thermodynamics). If nausea is intolerable, **dose more frequently** (same weekly total, more days) rather than pushing through it. If it's still too much, consider switching to **Cagrilintide, Mazdutide, Semaglutide, Survodutide, or Tirzepatide**.

- **"I'm still hungry. What should I do?"** — [HOUSE PROTOCOL] The reta is still working — you're still getting the metabolism / mitochondrial benefits even when your appetite isn't fully suppressed. But if you **out-eat** those benefits you won't lose the fat you're after. Options: **increase your retatrutide dose** (move up a band, when tolerated), **add Cagrilintide**, or **switch to Cagrilintide** entirely.

- **"How is this different from other GLP-1s?"** — [HOUSE PROTOCOL] It appears **far stronger at reducing fat while maintaining muscle** than the others. On average its **appetite suppression seems weaker mg-for-mg**. It also **raises basal metabolic rate and mitochondrial efficiency**, which contributes to more successful fat loss. (Efficacy magnitudes referenced in the Research section are *cited*; the mg-for-mg comparison framing here is house opinion.)

- **"How do I split my weekly dose?"** — [HOUSE PROTOCOL] Divide the weekly band total across as many days as you're comfortable with. More days = smaller, gentler injections. See the conversion tables for the exact units per injection at 10 mg/mL (or 5 mg/mL for the low band on a daily split).

## 11. References (grouped, for HTML ol.ref-list)
- **Efficacy / trials:** Jastreboff 2023 NEJM (37366315); Rosenstock 2023 Lancet (37385280); MASLD Phase 2a (PMC11271400); TRIUMPH-1 topline (PRNewswire 2026); NCT04881760.
- **Mechanism:** Coskun 2022 Cell Metabolism (35985340).
- **Safety / titration:** covered within trial refs; heart-rate + GI from NEJM Phase 2.
- **House model:** weekly bands + split-frequency approach are the site owner's own [HOUSE PROTOCOL], not from a cited source.
- **Storage / injection technique:** standard SC-technique + peptide-storage refs (align with site's shared reference block).
- `{% include protocol-footer.html %}`

---

## Sources
- https://peptidedosages.com/single-peptide-dosages/retatrutide-10-mg-vial-dosage-protocol/
- https://peptidedosages.com/single-peptide-dosages/retatrutide-20-mg-vial-dosage-protocol/
- https://peptidedosages.com/single-peptide-dosages/retatrutide-30-mg-vial-dosage-protocol/
- https://pubmed.ncbi.nlm.nih.gov/37366315/  (Jastreboff et al., NEJM 2023 — Phase 2 obesity)
- https://www.nejm.org/doi/full/10.1056/NEJMoa2301972  (NEJM full text — 403 to bots; abstract via PubMed above)
- https://pubmed.ncbi.nlm.nih.gov/37385280/  (Rosenstock et al., Lancet 2023 — Phase 2 T2D)
- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11271400/  (MASLD Phase 2a)
- https://pubmed.ncbi.nlm.nih.gov/35985340/  (Coskun et al., Cell Metabolism 2022 — mechanism)
- https://clinicaltrials.gov/study/NCT04881760  (registry)
- https://www.prnewswire.com/news-releases/lillys-triple-agonist-retatrutide-delivered-powerful-weight-loss-in-pivotal-phase-3-obesity-trial-302778859.html  (TRIUMPH-1 Phase 3 topline, 2026)
- https://www.ajmc.com/view/retatrutide-achieves-up-to-30-3-average-weight-loss-in-phase-3-triumph-1-trial  (Phase 3 coverage)
