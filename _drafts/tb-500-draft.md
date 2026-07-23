# TB-500 5mg — Protocol Draft (bullet outline for human review)

> Draft bullets only — NOT final prose/HTML. Follows `_PROTOCOL-TEMPLATE.md` section order.
> Focus vial: **5mg** (10mg noted as sibling). Evidence base is **largely preclinical/animal**;
> human data exists mainly for the *parent* protein thymosin β4 (Tβ4), not the TB-500 fragment.
> en-GB spelling throughout.
> **Primary dosing = the house DAILY mcg model** `[HOUSE PROTOCOL]`. The older weekly loading/maintenance
> schedule is retained only as a secondary `[ANECDOTAL]` alternative. Tags: **cited** vs `[ANECDOTAL]` vs `[HOUSE PROTOCOL]`.

---

## Suggested front matter

```yaml
---
layout: default
title: "TB-500 5mg"
seo_title: "TB-500 5mg Protocol"
description: "TB-500 5mg: 2mL BAC recon to 2.5mg/mL. House daily sub-Q dosing 100-400+ mcg/day (4-16u, U-100). Unit conversions, supplies, FAQ, cited sources."
last_updated: 2026-07-23
last_modified_at: 2026-07-23
date_published: 2026-07-23
breadcrumbs:
  - name: Single Peptides
    url: /single-peptides.html
related_protocols:
  - title: TB-500 10mg
    url: /tb-500-10mg.html
  - title: BPC-157 5mg
    url: /bpc-157-5mg.html
  - title: BPC-157 + TB-500 Stack
    url: /stacks.html
searchable: true
search_type: protocol
search_tags: "tb-500 tb500 thymosin beta-4 thymosin beta 4 tb4 healing recovery tissue repair angiogenesis 5mg 10mg subcutaneous injection daily dosing"
calc:
  method: injection
  amount: 5
  unit: mg
  bac: 2
---
```

- Eyebrow / category: **Single · Healing & Recovery**
- Slug for nav anchors: `tb500-` (e.g. `#tb500-tldr`, `#tb500-dosing`, `#tb500-faq` …)

---

## 1. content-hero
- H1: **TB-500 5mg Dosage Protocol**
- One-line intro: synthetic 7-amino-acid fragment (Ac-LKKTETQ) of thymosin β4, run **daily sub-Q** for tissue repair, angiogenesis and recovery.
- `{% include last-updated.html %}`

## 2. protocol-callout (callout warning)
- **Research purposes only.** TB-500 is a research chemical — **not** an FDA/EMA-approved medicine; no approved human product exists.
- **WADA-prohibited** at all times (S2, peptide hormones/growth factors) — banned in tested sport.
- Human safety/efficacy data for the *fragment* is essentially absent; not medical advice.

## 3. At a Glance (protocol-tldr)
- **Vial:** 5mg lyophilised (primary). Sibling: 10mg → /tb-500-10mg.html
- **Mix:** 2.0 mL BAC water → **2.5 mg/mL** (1 U-100 unit = **25 mcg**)
- **Dose (house, DAILY):** `[HOUSE PROTOCOL]`
  - Low **100 mcg/day** = 0.04 mL = **4 units**
  - Average **200–250 mcg/day** = 0.08–0.10 mL = **8–10 units**
  - High **400+ mcg/day** = 0.16 mL = **16 units**
- **Route:** subcutaneous (subQ), typically belly fat — dosed **every day**
- **Consider:** commonly stacked with BPC-157 ("Wolverine stack") → /stacks.html; and GHK-Cu → /ghk-cu.html
- **Vial longevity:** a 5mg vial = 5,000 mcg → **~20 days at 250 mcg/day** (or ~50 days at 100 mcg/day).

## 4. Dosing — house DAILY bands `[HOUSE PROTOCOL]` (primary)
- Intro line: the house model is a **daily mcg dose**, not a weekly load. Pick a band by goal/severity and inject once daily subQ.
- **Daily dose band table** `Band | Daily dose | Volume | U-100 units | Days per 5mg vial`:

| Band | Daily dose | Volume | U-100 units | Days/vial |
|------|-----------|--------|-------------|-----------|
| Low | 100 mcg/day | 0.04 mL | 4 u | ~50 |
| Average | 200 mcg/day | 0.08 mL | 8 u | ~25 |
| Average (upper) | 250 mcg/day | 0.10 mL | 10 u | ~20 |
| High | 400+ mcg/day | 0.16 mL | 16 u | ~12 |

- **Route note `[HOUSE PROTOCOL]`:** TB-500 is *slightly* more effective injected subQ **closer to the injury**, but this is usually **not worth the slight benefit** — e.g. injecting an ankle injury directly is extremely risky; a **belly-fat subQ** is the better, safer choice.
- **Formula:** `volume (mL) = dose (mcg) ÷ 2500 (mcg/mL)`; `units = volume × 100`. Equivalently `units = dose (mcg) ÷ 25`.
- **Worked examples:** 100 mcg ÷ 2500 = **0.04 mL** → **4 u**; 250 mcg ÷ 2500 = **0.10 mL** → **10 u**; 400 mcg ÷ 2500 = **0.16 mL** → **16 u**.
- `callout`: "Open this vial in the calculator" → calc block (injection / 5 / mg / 2).

## 5. Reconstitution
- **Reconstitution (recommended):** 5mg vial + **2.0 mL** BAC water → **2.5 mg/mL** (1 U-100 unit = **25 mcg**).
  - Numbered mixing `<ol>`: (1) swab both stoppers; (2) draw 2.0 mL BAC; (3) inject slowly down the vial wall — do not jet onto powder; (4) swirl/roll gently, never shake (avoid foaming); (5) leave until fully clear; (6) label with date.
- **Stability:** reconstituted, refrigerate 2–8 °C, protected from light, **use within ~28 days**; do not freeze after mixing. Lyophilised: store −20 °C, dry/dark. (Link Storage Guide.)
- **10mg sibling note:** 10mg vial + 3.0 mL BAC → 3.33 mg/mL (recompute units at that concentration).

## 6. Supplies (supply-grid — sized for a daily cycle)
- **Vials:** TB-500 5mg — budget by band (~1 vial per 20 days at 250 mcg/day; ~1 per 50 days at 100 mcg/day).
- **BAC water:** 1 × 30mL or 3 × 10mL bacteriostatic water (2mL per vial).
- **Syringes:** U-100 insulin syringes (0.5mL/29–31G) — one per daily injection; buy a month's worth plus spares.
- **Swabs:** 1 × 100-count alcohol swabs.
- supply-footnote: round up; buy spare syringes.
- General supplies `<ul>`: sharps bin, refrigerator, non-shedding wipes, labels for recon date.

## 7. Alternative Protocols (h3 each, mark tag)
- **Legacy loading/maintenance schedule `[ANECDOTAL]` (secondary alternative):** community schedule that predates the house daily model. Loading ~1.25mg (1,250 mcg = 0.50 mL = 50 u) **2×/week for weeks 1–4**, then maintenance 1.25mg **1×/week for weeks 5–12**. Recon unchanged at 2.5 mg/mL. Presented only as an alternative — the house standard is the daily band model above. No human trial supports either schedule.
- **BPC-157 + TB-500 stack ("Wolverine") `[ANECDOTAL]`:** run the house daily TB-500 band alongside BPC-157 ~250–500 mcg daily → /bpc-157-5mg.html and /stacks.html. Anecdotal synergy; no human trial of the combo.
- **Localised dosing `[HOUSE PROTOCOL]`:** slightly better healing near the injury site, but usually not worth the risk (see route note) — default to belly-fat subQ.

## 8. What Is TB-500 (cited)
- Synthetic **7-amino-acid fragment**, sequence **Ac-LKKTETQ** = residues 17–23 (central actin-binding domain) of **thymosin β4 (Tβ4)** + one extra residue.
- **Important distinction:** "TB-500" ≠ full thymosin β4. Tβ4 is the natural 43-aa protein used in the human clinical trials; TB-500 is only the active-site fragment sold as a research chemical. Marketing often conflates the two — most cited human data is Tβ4, not TB-500.
- Tβ4 is the major **actin-sequestering** molecule in cells; drives cell migration, angiogenesis, survival.
- Research focus: wound healing, cardiac repair, corneal/ocular, hair follicle, anti-inflammatory/anti-fibrosis.
- **Data maturity:** Tβ4 reached Phase I/II (cardiac, dry-eye, pressure/venous ulcers, epidermolysis bullosa); the TB-500 *fragment itself* has essentially **no controlled human trials**.
- Possible prodrug behaviour — may cleave to shorter active metabolites (research-stage).

## 9. FAQ (house voice)
- **"Can I safely combine this with other peptides?" `[HOUSE PROTOCOL]`**
  - TB-500 is **safe to combine with any peptide**.
  - For **better healing**, consider combining with **BPC-157** (→ /bpc-157-5mg.html), **GHK-Cu** (→ /ghk-cu.html) — the **GLOW** blend — and **KPV** — the **KLOW** blend.
  - For **maximal healing**, also add **HGH** or **CJC-1295 DAC + Ipamorelin** (→ /cjc-1295.html, → /ipamorelin.html).
- **"I heard this causes cancer — is that true?" `[HOUSE PROTOCOL]` (house view)**
  - **No** — but it *may accelerate existing cancer/tumours*.
  - Anything associated with growth is also associated with cancer; TB-500's angiogenesis could contribute to "feeding" cancer cells that **already exist**.
  - The cancer cells must already be present — **if you do not have cancer, there is no risk** from this mechanism.
  - Framed as the house position, not medical advice; anyone with a cancer history should treat this as a hard stop.

## 10. Supplementary Notes
- **Combinations (anecdotal / house):** BPC-157 stack most common; GLOW (BPC-157 + GHK-Cu) and KLOW (+ KPV) blends for healing; growth-hormone secretagogues (CJC-1295 DAC + Ipamorelin) or HGH for maximal recovery — see FAQ. Community logs only, no trial data.
- **Side effects (route-split):**
  - Injection-site: mild redness/tenderness (reported).
  - Systemic (anecdotal): transient **head-rush / lightheadedness** shortly after a dose; **fatigue / lethargy** in the hours after injection; occasional flushing.
  - Long-term human safety **unknown** — no large-scale trials for TB-500.
- Toxicity ceiling: Tβ4 Phase I IV doses up to very high mg/kg without dose-limiting toxicity (parent protein, not fragment) — do not extrapolate to fragment self-dosing.

## 11. Research (cited, linked — RESEARCH not anecdote)
- **Wound healing / re-epithelialisation:** Tβ4 topical or IP in rat full-thickness wounds increased re-epithelialisation 42% (day 4) / 61% (day 7) vs saline, more collagen + new vessels; keratinocyte migration up 2–3× at picogram doses. Malinda et al., *J Invest Dermatol* 1999. https://pubmed.ncbi.nlm.nih.gov/10469335/
- **Active-site mapping (angiogenesis/migration):** LKKTETQ (aa 17–23, the TB-500 sequence) drives angiogenesis + migration; Ac-SDKP (N-terminal) blocks inflammation/fibrosis. *FASEB J* 2010. https://pubmed.ncbi.nlm.nih.gov/20179146/
- **Review — mechanisms & indications:** roles across angiogenesis (VEGF), anti-apoptosis (Bcl-2), anti-inflammation (NF-κB), cardiac, hair; Phase I/II trial status. *Front Endocrinol* 2021, PMC8724243. https://pmc.ncbi.nlm.nih.gov/articles/PMC8724243/
- **Doping-control / metabolism:** TB-500 detection and in-vitro/ex-vivo metabolism (relevant to prodrug/metabolite question). *J Chromatogr A* 2012 https://pubmed.ncbi.nlm.nih.gov/23084823/ ; *J Chromatogr B* 2024 https://pubmed.ncbi.nlm.nih.gov/38382158/
- End with `callout` "Research vs anecdote": efficacy claims above are Tβ4 / fragment **preclinical or early-phase**; the daily dosing bands are **house guidance `[HOUSE PROTOCOL]`**, not from human trials.

## 12. Beyond healing (Research / Anecdotal split per application)
- **Cardiac**
  - *Research:* Tβ4 injected at time of MI in mice activated ILK/Akt survival pathway, promoted cardiomyocyte migration/survival, reduced scar volume, preserved function. Bock-Marquette et al., *Nature* 2004. https://pubmed.ncbi.nlm.nih.gov/15565145/ (also nature.com/articles/nature03000). Reached Phase II for post-MI repair (parent Tβ4).
  - *Anecdotal:* users cite "cardioprotection" — no human TB-500 fragment data supports this.
- **Angiogenesis / vascular**
  - *Research:* Tβ4 upregulates VEGF, supports endothelial progenitor cells → new vessel growth (review PMC8724243; FASEB 20179146... [confirm]).
  - *Anecdotal:* faster "pump"/recovery claims — unverified.
- **Hair growth**
  - *Research:* topical Tβ4 (aa 17–23 region) enhanced hair-follicle stem-cell proliferation in rodents (~5 mg/kg reported). Review PMC8724243.
  - *Anecdotal:* scalp/hair regrowth reports — no human trial.

## 13. References (ol.ref-list, grouped by h3)
- **Mechanism & efficacy:** Malinda 1999 (10469335); FASEB active-site 2010 (20179146); Front Endocrinol review 2021 (PMC8724243); Bock-Marquette *Nature* 2004 (15565145).
- **Doping / detection & metabolism:** *J Chromatogr A* 2012 (23084823); *J Chromatogr B* 2024 (38382158); WADA metabolism investigation; RMTC Tβ4 bulletin.
- **Regulatory / safety:** WADA Prohibited List; note non-approval.
- **Storage & injection technique:** lyophilised storage guide; bacteriostatic water guidance; sub-Q injection best practice (NBK138495).

## 14. `{% include protocol-footer.html %}`

---

## Reviewer flags / open questions
- **Primary model is now the house DAILY band model `[HOUSE PROTOCOL]`** (100 / 200–250 / 400+ mcg/day). The old per-injection weekly loading/maintenance schedule is demoted to a secondary `[ANECDOTAL]` alternative in §7. Confirm this is the intended house standard.
- Confirm the NYAS cardiovascular review citation (stack page listed PMID 17986590 but that PMID resolves to an unrelated article — replaced with Bock-Marquette *Nature* 2004, which is the stronger primary source). **Do not use 17986590 without verifying.**
- Angiogenesis bullet cites FASEB — verify it also covers VEGF/EPC specifically or lean on the review only.
- Cross-link targets assumed: /bpc-157-5mg.html, /ghk-cu.html, /cjc-1295.html, /ipamorelin.html, /stacks.html — confirm final slugs (esp. GLOW/KLOW blend and HGH pages if they exist).
- FAQ cancer answer is the **owner's stated position**, framed as house view — confirm wording is acceptable given liability.

## Sources
- https://peptidedosages.com/single-peptide-dosages/tb-500-10-mg-vial-dosage-protocol/
- https://peptidedosages.com/peptide-stack-dosages/tb-500-5-mg-vial-bpc-157-5-mg-vial-dosage-protocol/
- https://pubmed.ncbi.nlm.nih.gov/10469335/ (Malinda et al., Tβ4 wound healing, J Invest Dermatol 1999)
- https://pubmed.ncbi.nlm.nih.gov/20179146/ (FASEB J 2010, active peptide sequences / LKKTETQ)
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8724243/ (Front Endocrinol 2021, Tβ4 function & application review)
- https://pubmed.ncbi.nlm.nih.gov/15565145/ / https://www.nature.com/articles/nature03000 (Bock-Marquette, Nature 2004, cardiac repair)
- https://pubmed.ncbi.nlm.nih.gov/23084823/ (J Chromatogr A 2012, TB-500 doping analysis)
- https://pubmed.ncbi.nlm.nih.gov/38382158/ (J Chromatogr B 2024, TB-500 metabolite quantification)
- https://www.wada-ama.org/en/prohibited-list (WADA Prohibited List — S2)
- https://www.wada-ama.org/en/resources/scientific-research/investigation-vitroex-vivo-tb-500-metabolism-synthesis-relevant (WADA TB-500 metabolism)
- https://rmtcnet.com/wp-content/uploads/2013-07-TB-500-Bulletin-v-2.0-Final.pdf (RMTC Tβ4 bulletin)
- https://www.ncbi.nlm.nih.gov/books/NBK138495/ (sub-Q injection best practice)
