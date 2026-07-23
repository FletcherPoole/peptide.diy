# Retatrutide 10mg — Protocol Draft (bullet outline for review)

> Draft bullets only — not finished prose/HTML. en-GB spelling. Expand into HTML skeleton after sign-off.
> Compound is INVESTIGATIONAL / not approved anywhere. Keep the safety-first framing hard throughout.

---

## Suggested front matter

```yaml
---
layout: default
title: "Retatrutide 10mg"
seo_title: "Retatrutide 10mg Protocol"
description: "Retatrutide 10mg: 1mL BAC recon (10mg/mL), once-weekly SC, trial-based 2mg start titrated toward 8-12mg. Syringe units, supplies, cited sources."
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

- Note for reviewer: existing `retatrutide.html` is the 20mg page (noindex). Decide whether this 10mg page becomes the canonical/indexed one and the 20mg becomes the sibling, or keep both noindex given investigational status. Recommend: keep BOTH noindex until we're comfortable indexing an unapproved compound.

---

## 1. content-hero
- Breadcrumb: Single Peptides › Retatrutide 10mg
- Eyebrow: "Single · Metabolic"
- H1: **Retatrutide 10mg Dosage Protocol**
- One-line intro: Investigational once-weekly triple-agonist (GLP-1 / GIP / glucagon) research peptide, LY3437943; subcutaneous. Reconstitution, syringe units and trial-based titration for a 10mg vial.
- `{% include last-updated.html %}`

## 2. protocol-callout (callout warning) — LEAD WITH THIS, make it strong
- **Research purposes only.** Not medical advice.
- Retatrutide is **INVESTIGATIONAL**: not approved by the FDA, MHRA, EMA or any regulator anywhere. Still in clinical trials (Phase 3 TRIUMPH programme ongoing as of 2026).
- **Long-term safety is unknown.** Human data limited to trial populations under medical supervision.
- Systemic hormone-receptor agonist — affects appetite, blood glucose, heart rate. Do not treat like a local/cosmetic peptide.
- Emphasise: slow titration, GI tolerability, heart-rate monitoring, medical supervision.

## 3. At a Glance (protocol-tldr)
- **Vial:** 10mg lyophilised (focus of this page). Sibling research sizes: 15mg, 20mg (larger vials more economical once past titration — see note).
- **Mix:** 1mL bacteriostatic water → **10 mg/mL** (recommended primary).
  - Alt: 2mL BAC → 5 mg/mL for finer low-dose resolution / less crowded units at 2–4mg. Trade-off: high doses need larger volumes.
- **Dose:** once-weekly SC. Trial-based: **start 2mg/week**, titrate up every 4 weeks toward **8–12mg** maintenance over ~3 months.
- **Cycle:** continuous while researching; no fixed "off" — titration-led. (Trials ran 48–80 weeks.)
- **Route:** subcutaneous only (abdomen/thigh/upper arm; rotate sites).
- **Consider:** starting even lower (1mg) if GI-sensitive; a 10mg vial does NOT cover long maintenance — budget for 20mg vials at 8–12mg/week.
- Sibling vial: [Retatrutide 20mg](/retatrutide.html).

## 4. Cycle
- Intro: mark as **trial-derived titration** (Jastreboff Phase 2, NEJM 2023) — this is the cited backbone, not anecdote.
- Standard titration table (assumes 1mL recon = 10 mg/mL):

| Phase | Weekly dose | Volume | U-100 units |
|-------|-------------|--------|-------------|
| Weeks 1–4 | 2 mg | 0.20 mL | 20 units |
| Weeks 5–8 | 4 mg | 0.40 mL | 40 units |
| Weeks 9–12 | 6 mg | 0.60 mL | 60 units |
| Weeks 13+ (maintenance) | 8 mg | 0.80 mL | 80 units |
| Advanced (optional) | 12 mg | 1.20 mL | 120 units — exceeds a 10mg vial; needs 20mg vial + possible split injection |

- **Vial longevity note (critical, be honest):** A 10mg vial = 10mg total. At 2mg/week it lasts ~5 weeks; at 8mg/week only ~1.25 weeks. So the 10mg vial suits the **early titration phase**; maintenance at 8–12mg/week is far more practical from 20mg vials.
- Escalate only if the prior step is well tolerated. Hold or step back a level if GI effects are significant.

## 5. Supplies
- supply-grid (4 cards), sized for early titration cycle:
  - **Vials:** Retatrutide 10mg × quantity (more for maintenance — see longevity note)
  - **BAC water:** bacteriostatic water (0.9% benzyl alcohol) — 1mL per 10mg vial
  - **Syringes:** U-100 insulin syringes (0.5mL/50u or 1mL/100u; 29–31G). Note 12mg dose > 100u won't fit one 1mL syringe.
  - **Swabs:** alcohol prep pads
- supply-footnote: quantities scale with dose/duration; titration burns vials fast at higher doses.
- General supplies `<ul>`: sharps bin, storage (fridge 2–8°C), optional glass mixing vial for aliquoting.

## 6. Dosing & Reconstitution
- **Reconstitution (recommended):**
  - 10mg vial + **1.0 mL** BAC water = **10 mg/mL** (10,000 mcg/mL).
  - Numbered steps: (1) draw 1mL BAC; (2) inject slowly down inner vial wall, not onto powder; (3) swirl gently — do NOT shake; (4) let dissolve to clear; (5) refrigerate.
  - Stability: reconstituted 2–8°C, use within ~28 days; do not freeze reconstituted solution. Lyophilised: −20°C long-term.
  - Link Storage Guide.
- **Injectable dosing table** `Level | Weekly dose | Volume | U-100 units | Approx doses per 10mg vial`:

| Level | Weekly dose | Volume (10mg/mL) | U-100 units | Doses per 10mg vial |
|-------|-------------|------------------|-------------|---------------------|
| Start | 2 mg | 0.20 mL | 20 u | ~5 |
| Step 2 | 4 mg | 0.40 mL | 40 u | ~2.5 |
| Step 3 | 6 mg | 0.60 mL | 60 u | ~1.6 |
| Maintenance | 8 mg | 0.80 mL | 80 u | ~1.25 |
| Advanced | 12 mg | 1.20 mL | 120 u | <1 (needs larger vial) |

- **Formula:** `volume (mL) = weekly dose (mg) ÷ concentration (mg/mL)`; `U-100 units = volume (mL) × 100`.
- **Worked example:** 4mg dose ÷ 10 mg/mL = 0.40 mL → ×100 = **40 units** on a U-100 syringe.
- callout → "Open this 10mg vial in the calculator" (calc block: injection / 10 / mg / 1mL bac).

## 7. Alternative Protocols
- **Lower/slower start (anecdotal):** 1mg/week for 2–4 weeks before the 2mg step for GI-sensitive users.
- **2mL recon variant:** 5 mg/mL → 2mg = 0.40mL/40u (finer resolution, easier micro-dosing). Mark as practical option.
- **Larger vials for maintenance:** 20mg vial at 2mL → 10 mg/mL keeps the same unit maths but lasts longer. Mark clearly.
- **Not recommended:** stacking with other GLP-1/GIP agonists (tirzepatide, semaglutide) — additive GI + heart-rate load, no data. Flag as anecdotal/discouraged.

## 8. What Is Retatrutide
- LY3437943, Eli Lilly. Single-molecule **triple agonist**: GLP-1 + GIP + **glucagon** receptors ("triple G").
- Glucagon-receptor arm adds energy expenditure/hepatic-fat effects on top of the appetite/glycaemic effects — distinguishes it from tirzepatide (GLP-1/GIP dual) and semaglutide (GLP-1 mono).
- Research focus: obesity, type 2 diabetes, MASLD/steatotic liver disease, osteoarthritis/knee (Phase 3).
- **Data maturity:** Phase 2 complete (obesity NEJM 2023; T2D Lancet 2023); Phase 3 TRIUMPH programme ongoing/reporting 2026. Positive topline Phase 3 obesity data but **no regulatory approval anywhere yet**.

## 9. Supplementary Notes
- **Side effects (systemic):** GI-dominant — nausea, vomiting, diarrhoea, constipation, decreased appetite; dose-dependent, worst during escalation, ease at maintenance. Slow titration is the main mitigation.
- **Heart rate:** dose-dependent increase (mean ~+3–4 bpm at 12mg in trials), peaked ~24 weeks then declined — monitor; glucagon-agonism related.
- **Glycaemia:** can lower blood glucose; hypoglycaemia risk higher if combined with insulin/sulfonylureas (context: not medical advice).
- **Theoretical class risk:** rodent thyroid C-cell tumours seen with GLP-1 agonists; human relevance unknown. Contraindicated framing for personal/family history of medullary thyroid carcinoma or MEN2.
- **Interactions:** delays gastric emptying — can affect absorption of other orals.
- Combinations: none evidenced; treat any stack as anecdotal and higher-risk.

## 10. Research (cited, linked)
- **Obesity efficacy (headline):** Jastreboff et al., *NEJM* 2023 — Phase 2, 338 adults, 48 weeks. Mean weight loss dose-dependent: 1mg −8.7%, 4mg −17.1%, 8mg −22.8%, **12mg −24.2%** at 48 weeks (placebo −2.1%). ≥5% loss reached by 92/100/100% at 4/8/12mg. https://pubmed.ncbi.nlm.nih.gov/37366315/
- **Titration/tolerability:** trial started 2mg or 4mg and escalated every 4 weeks up to 12 weeks; lower 2mg start reduced GI events vs 4mg start — basis for the 2mg-start schedule here.
- **Type 2 diabetes:** Rosenstock et al., *Lancet* 2023 — Phase 2, HbA1c reductions ~1.3–2.0% plus weight loss. https://pubmed.ncbi.nlm.nih.gov/37385280/
- **MASLD / liver:** Phase 2a randomised trial — hepatic steatosis reduction. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11271400/
- **Mechanism/discovery (preclinical):** Coskun et al., *Cell Metabolism* 2022. https://pubmed.ncbi.nlm.nih.gov/35985340/
- **Phase 3 (2026):** TRIUMPH-1 topline — up to ~28–30% average weight loss at 80 weeks; endpoints met; still pre-approval. https://www.prnewswire.com/news-releases/lillys-triple-agonist-retatrutide-delivered-powerful-weight-loss-in-pivotal-phase-3-obesity-trial-302778859.html
- **Registry:** ClinicalTrials.gov NCT04881760. https://clinicaltrials.gov/study/NCT04881760
- End with callout: "Research vs anecdote" — efficacy/titration numbers are from Lilly-sponsored trials in supervised populations; self-directed research use is unstudied.

## 11. Beyond Weight Loss
- **Type 2 diabetes / glycaemic control**
  - *Research:* Rosenstock 2023 Lancet — meaningful HbA1c drops (cited above).
  - *Anecdotal:* community reports of appetite/glucose changes — unverified, label as anecdote.
- **Liver / metabolic (MASLD)**
  - *Research:* Phase 2a steatosis reduction (cited above).
  - *Anecdotal:* n/a robust — do not overstate.
- **Osteoarthritis / knee pain**
  - *Research:* Phase 3 signalled OA-pain relief alongside weight loss (2026 topline) — early, cited to press release pending peer-reviewed publication.
  - *Anecdotal:* none reliable.

## 12. References (grouped, for HTML ol.ref-list)
- **Efficacy / trials:** Jastreboff 2023 NEJM (37366315); Rosenstock 2023 Lancet (37385280); MASLD Phase 2a (PMC11271400); TRIUMPH-1 topline (PRNewswire 2026); NCT04881760.
- **Mechanism:** Coskun 2022 Cell Metabolism (35985340).
- **Safety / titration:** covered within trial refs; heart-rate + GI from NEJM Phase 2.
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
