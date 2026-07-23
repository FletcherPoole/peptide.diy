# peptide.diy — Single-Peptide Protocol Template

Canonical structure for a single-peptide protocol page, reverse-engineered from
`ghk-cu-50mg.html` (the reference exemplar). Every new protocol page should follow
this section order, front-matter, and formatting so the site stays consistent.

Drafts live in `_drafts/` (Jekyll ignores this folder unless built with `--drafts`,
so drafts never publish by accident). Draft first as bullet points, get sign-off on
the points, then expand into the full HTML using the skeleton below.

---

## Front matter

```yaml
---
layout: default
title: "<Name> <Size>"                       # e.g. "BPC-157 5mg"
seo_title: "<Name> <Size> Protocol"
description: "<Name> <Size>: <recon> BAC recon, <route/dose summary>, <cycle>. Syringe units, supplies, and cited sources."  # ~155 chars, lead with dosage
last_updated: YYYY-MM-DD
last_modified_at: YYYY-MM-DD
date_published: YYYY-MM-DD                    # optional; set once, don't change on edits
breadcrumbs:
  - name: Single Peptides
    url: /single-peptides.html
related_protocols:                            # 2–3 related pages
  - title: <Name> <Size>
    url: /<slug>.html
searchable: true
search_type: protocol
search_tags: "<name> <aliases> <use> <size> <routes>"
calc:                                         # powers "Open this vial in the calculator" CTA
  method: injection                           # injection | cream | nasal
  amount: <mg>
  unit: mg                                    # mg | mcg | IU
  bac: <mL>
---
```

## Section order (matches the sidebar `protocol-nav` anchors)

1. **content-hero** — breadcrumb, eyebrow (category, e.g. "Single · Healing & Recovery"), `<h1>{Name} {Size} Dosage Protocol</h1>`, one-line intro, `{% include last-updated.html %}`
2. **protocol-callout** — `callout warning` "Research purposes only" (compound-specific legal/safety framing)
3. **At a Glance** (`protocol-tldr`) — bulleted quick facts: **Vial**, **Mix** (→ mg/mL), **Dose**, **Cycle**, route notes, **Consider**, link to sibling vial size
4. **Cycle** — intro line (mark anecdotal vs cited) + Standard Cycle table `Duration | Dose per injection | U-100 units | Volume`; note how long a vial lasts
5. **Supplies** — `supply-grid` of 4 `supply-card`s (vials, BAC water, syringes, swabs) sized for a full cycle + `supply-footnote`; then a "General supplies" `<ul>`
6. **Dosing & Reconstitution** — **Reconstitution** (recommended BAC + resulting mg/mL, numbered `<ol>` mixing steps, refrigerated stability, link Storage Guide) → **Injectable dosing** table `Level | Daily dose | Volume | U-100 units | Days per vial` + **Formula** + worked example + `callout` linking the calculator
7. **Alternative Protocols** — `<h3>` per variant (topical, nasal, blends, stacks, related analog); mark anecdotal
8. **What Is {Name}** — plain-language overview: what it is, discovery, mechanism, research focus, data maturity (human vs preclinical)
9. **Supplementary Notes** — combinations (anecdotal), interactions/balance notes, toxicity ceiling if relevant, **Side effects** (route-split)
10. **Research** — `<h3>` per theme, each paragraph tying claims to **cited, linked studies**; end with a `callout` "Research vs anecdote"
11. **Beyond {primary use}** — per application, a **Research:** paragraph (cited) and an **Anecdotal:** paragraph (clearly labelled). This Research/Anecdotal split is a signature of the format.
12. **References** — `<ol class="ref-list">` grouped by `<h3>` category (e.g. mechanism/efficacy, safety, storage, injection technique). Author, title, *Journal.* Year. + PubMed/PMC/DOI link.
13. `{% include protocol-footer.html %}`

## Formatting conventions (non-negotiable)

- **Citations:** inline links `<a href="<pubmed|pmc|doi>" rel="noopener noreferrer" target="_blank">Author et al., Year</a>`. Every dosing/efficacy claim either cites a study or is explicitly labelled anecdotal/community.
- **Research vs Anecdotal:** always separate what the literature supports from community reports. Never present anecdote as evidence.
- **Tone:** direct, practical, second-person for instructions. British spelling (en-GB): "ageing", "moisturiser", "colour".
- **Dosing tables** always show U-100 units and mL alongside mg. Include the `dose ÷ (mg/mL)` formula and one worked example.
- **Every page:** a "Research purposes only" warning callout up top, and a calculator callout/link in the dosing section.
- **Sidebar anchors** must match the `id`s of each `content-section`, prefixed with a short slug (e.g. `#bpc-tldr`, `#bpc-cycle`).
- **Safety-first framing** for systemic/GLP-1 compounds: emphasise titration, medical supervision, and non-approval status.

## HTML skeleton

```html
  <div class="content-hero">
    <div class="container">
      <div class="breadcrumb"><a href="{{ '/single-peptides.html' | relative_url }}">Single Peptides</a><span>›</span><span>{NAME} {SIZE}</span></div>
      <div class="eyebrow">Single · {CATEGORY}</div>
      <h1>{NAME} {SIZE} Dosage Protocol</h1>
      <p>{ONE-LINE INTRO — what it is + routes.}</p>
      {% include last-updated.html %}
    </div>
  </div>
  <div class="content-body">
    <div class="container-wide">
      <div class="protocol-layout">
        <div class="protocol-callout">
          <div class="callout warning"><strong>Research purposes only</strong> {LEGAL/SAFETY FRAMING}. This is not medical advice.</div>
        </div>
        <aside class="protocol-sidebar">
          <nav class="protocol-nav" aria-label="Protocol sections">
            <div class="protocol-nav-title">On this page</div>
            <div class="protocol-nav-links">
              <a href="#{slug}-tldr">At a Glance</a>
              <a href="#{slug}-cycle">Cycle</a>
              <a href="#{slug}-supplies">Supplies</a>
              <a href="#{slug}-dosing">Dosing &amp; Reconstitution</a>
              <a href="#{slug}-alternatives">Alternative Protocols</a>
              <a href="#{slug}-overview">What Is {NAME}</a>
              <a href="#{slug}-supplementary">Supplementary Notes</a>
              <a href="#{slug}-research">Research</a>
              <a href="#{slug}-beyond">Beyond {USE}</a>
              <a href="#{slug}-references">References</a>
            </div>
          </nav>
        </aside>
        <div class="protocol-main">
          <div class="protocol-tldr content-section" id="{slug}-tldr">
            <div class="protocol-tldr-label">At a Glance</div>
            <ul><!-- Vial / Mix / Dose / Cycle / route / Consider / sibling-vial link --></ul>
          </div>
          <div class="content-section" id="{slug}-cycle"><h2>Cycle</h2><!-- table --></div>
          <div class="content-section" id="{slug}-supplies"><h2>Supplies</h2><!-- supply-grid + list --></div>
          <div class="content-section" id="{slug}-dosing"><h2>Dosing &amp; Reconstitution</h2><!-- recon ol + dosing table + formula + calc callout --></div>
          <div class="content-section" id="{slug}-alternatives"><h2>Alternative Protocols</h2><!-- h3s --></div>
          <div class="content-section" id="{slug}-overview"><h2>What Is {NAME}</h2><!-- overview --></div>
          <div class="content-section" id="{slug}-supplementary"><h2>Supplementary Notes</h2><!-- combos, side effects --></div>
          <div class="content-section" id="{slug}-research"><h2>Research</h2><!-- cited h3 themes --></div>
          <div class="content-section" id="{slug}-beyond"><h2>Beyond {USE}</h2><!-- Research/Anecdotal split per application --></div>
          <div class="content-section" id="{slug}-references"><h2>References</h2><!-- ol.ref-list grouped by h3 --></div>
          {% include protocol-footer.html %}
        </div>
      </div>
    </div>
  </div>
```
