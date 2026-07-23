# CLAUDE.md — peptide.diy

Guidance for Claude Code working in this repo. Read before making changes.

## What this is
`peptide.diy` — a **Jekyll static site** (research-led peptide protocols, guides, glossary, and a reconstitution calculator), hosted on **GitHub Pages** (`FletcherPoole/peptide.diy`) at the apex custom domain **peptide.diy**. DNS is on Namecheap (`registrar-servers.com` nameservers). British/en-GB audience and spelling.

## Deploy / build
- **Push to `main` → GitHub Pages auto-builds and deploys.** There is no separate CI.
- Check build status: `gh api repos/FletcherPoole/peptide.diy/pages/builds/latest -q '"\(.status) | \(.error.message // "none")"'`. A **failed build does not take the site down** — Pages keeps serving the last good build.
- Local Jekyll build is usually NOT available on the dev machine (no Ruby/Jekyll). Validate what you can at source level (JSON/JS via `node --check`, hand-review Liquid) and rely on the Pages build to confirm.
- **Outage gotcha:** if the site 404s with GitHub's "Site not found", the Pages custom-domain binding likely dropped to `cname: null` even though the repo `CNAME` file is intact. Fix: `gh api -X PUT repos/FletcherPoole/peptide.diy/pages -f cname=peptide.diy`, then re-enable `https_enforced=true` after the cert re-issues.

## Architecture
- **Jekyll**, config in `_config.yml` (plugins: `jekyll-sitemap`). Site URL `https://www.peptide.diy`.
- `_layouts/default.html` — the only layout: gtag + Consent Mode, `<head>` includes, skip-link, nav, mobile-nav, `<main>`, footer, search modal, cookie-consent, deferred JS.
- `_includes/` — `head.html`, `seo.html`, `structured-data.html` (JSON-LD: Organization/WebSite/Breadcrumb/Article/WebApplication/FAQPage/HowTo), `nav.html`, `mobile-nav.html`, `footer.html`, `search-modal.html`, `cookie-consent.html`, `calc-cta.html`, protocol/guide funnels.
- `css/styles.css` — single stylesheet, dark theme via CSS custom properties (`:root`). Cache-busted by `?v={{ site.time }}`.
- `js/` — `app.js` (nav dropdowns, mobile menu, FAQ accordions, the calculator, cookie consent), `search.js`, `beehiiv-form.js` (newsletter iframe), `contact-form.js` (Formspree).
- `_data/` — `faq.yml`, `glossary_terms.yml`.
- Content pages are top-level `.html` with YAML front matter (protocols, guides, policies).
- `_drafts/` — working drafts; **Jekyll ignores these in the build** (never published). Contains `_PROTOCOL-TEMPLATE.md` (the canonical protocol spec) and in-progress `*-draft.md` outlines.

## The calculator (js/app.js)
Reconstitution calculator on `calculator.html` (full) and `index.html` (home, injection-only). Features: injection/cream/nasal modes, live-updating results, `aria-live` region, **URL-param deep-linking + persistence** (state is written to the URL so results are shareable/bookmarkable), **copy-link** and **save-as-PNG** (canvas, no external libs), a barebones **vial-duration** estimate, and an **SVG syringe fill** visual. Protocol pages deep-link into it via the `calc:` front-matter block → `calc-cta.html`. GA events: `calculator_used`, `calculator_share_link`, `calculator_save_image`, `contact_submit`.

## Conventions
- **en-GB spelling** everywhere ("ageing", "moisturiser", "colour").
- **Accessibility matters** and has been actively fixed: keep the skip-link, `:focus-visible` rings, `aria-expanded` on nav/mobile/FAQ toggles, real `<button>`s for interactive controls, and WCAG-AA contrast (don't reintroduce `--text3` below ~4.5:1).
- **Privacy/consent:** Google Analytics runs under **Consent Mode v2, default-denied**; the cookie banner grants `analytics_storage`. Don't fire analytics before consent.
- **Assets:** keep images right-sized (favicons are small PNGs; `og-image.jpg` is 1200×630 ~65KB). Don't reintroduce multi-hundred-KB icons/OG images.
- **Self-contained:** no external JS/CSS beyond Google Fonts (loaded non-render-blocking) and the analytics/newsletter/form third parties already present.

## Protocol pages — the important workflow
Single-peptide protocol pages follow a **fixed template**: see `_drafts/_PROTOCOL-TEMPLATE.md` (front-matter, 13-section order, HTML skeleton, formatting rules). Read it before creating or editing any protocol page.

Key rules:
- **One page per vial size** (e.g. `ghk-cu-50mg.html`, `tirzepatide-30mg.html`) — not one page per compound.
- **House dosing model** (the site owner's own protocol style, distinct from FDA/label): simple **Low / Average / High** dose bands; for metabolic peptides (tirzepatide/semaglutide/retatrutide) the weekly band is **split across as many days as tolerated, aiming near-daily**; titrate by results/side-effect tolerance. FDA/trial titration is kept only as cited **context** in the Research section, never as the primary how-to.
- **Signature format:** an **FAQ Q&A block** (appetite/nausea, cancer, combining, route notes) and the **Research: / Anecdotal:** paragraph split. Label owner/community guidance `[HOUSE PROTOCOL]`/`[ANECDOTAL]`, distinct from cited data.
- **Every dosing/efficacy claim** is either a linked citation (`rel="noopener noreferrer" target="_blank"`, PubMed/PMC/DOI) or explicitly labelled anecdotal.
- **Dosing tables** always show mg + mL + U-100 units + the `dose ÷ mg/mL` formula. Front matter includes a `calc:` block powering the calculator deep-link.
- **Safety-first** framing for prescription/GLP-1/investigational compounds; keep the "Research purposes only / not medical advice" callout. Investigational compounds (e.g. retatrutide) stay **noindex**.

**Content workflow the owner wants:** research (peptidedosages.com articles + the studies they link, deep-dived, + FDA labels/PubMed) → **bullet-point draft in `_drafts/` first** for point-level review → expand to full per-size HTML **only after sign-off**. Reconcile cross-link slugs to real filenames at build time.

## Working style
- The owner wants throughput; parallel subagents have worked well for multi-peptide research/drafting.
- Commit/push only what's asked; drafts can be committed freely (they don't publish). End commit messages with the Co-Authored-By trailer.
- Files are LF; git warns about CRLF conversion on Windows — harmless.
