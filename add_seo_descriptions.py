#!/usr/bin/env python3
"""Add SEO meta descriptions to all Jekyll pages."""
from pathlib import Path

ROOT = Path(__file__).parent

PAGES = {
    "index.html": {
        "seo_title": "DIY Peptide Education | Science-Backed Protocols",
        "description": "Genuine science-backed peptide protocols. Dosages, synergy, cycling, reconstitution & risks — research plus real-world insight at peptide.diy.",
    },
    "beginners-guide.html": {
        "description": "New to peptides? Learn what they are, how they work, handling basics, syringes, storage & safety — a clear foundation for peptide research.",
    },
    "reconstitution-guide.html": {
        "description": "Step-by-step peptide reconstitution: BAC water volumes, concentration math, mixing technique, common mistakes & post-reconstitution storage.",
    },
    "deployment-methods.html": {
        "description": "Peptide deployment methods — subcutaneous injection, topical moisturiser creams, and nasal sprays. U-100 syringes, units, math, and checklists.",
    },
    "syringe-guide.html": {
        "description": "Redirects to Deployment Methods — injection, topical moisturiser, and nasal spray guides.",
    },
    "faq.html": {
        "description": "Peptide FAQ: reconstitution, storage, syringe units, blends vs stacks, dosing, safety & how peptide.diy builds its research-backed guides.",
    },
    "calculator.html": {
        "description": "Free peptide reconstitution calculator. Enter vial size, BAC water & dose to get mL per injection, syringe units & total doses per vial.",
    },
    "single-peptides.html": {
        "description": "Single peptide dosage protocols: reconstitution, dosing schedules & syringe volumes for GHK-Cu, retatrutide, melanotan II & more.",
    },
    "blends.html": {
        "description": "Peptide blend protocols for pre-mixed vials: reconstitution math & dosing for CJC/Ipamorelin, BPC/TB-500 & multi-peptide blends.",
    },
    "stacks.html": {
        "description": "Peptide stack protocols with coordinated multi-vial schedules for recovery, GH optimization, metabolic health, longevity & cognition.",
    },
    "storage-guide.html": {
        "description": "Peptide storage guide: lyophilized powder & reconstituted solution temps, shelf life, labeling, shipping tips & critical don'ts.",
    },
    "blog.html": {
        "description": "Peptide research articles, protocol updates & practical guides from peptide.diy — science-backed DIY peptide education.",
    },
    "glossary.html": {
        "description": "Peptide glossary with 35+ terms defined: reconstitution, BAC water, IU, secretagogues, lyophilized powder & more in plain language.",
    },
    "about.html": {
        "description": "About peptide.diy: our mission to combine peer-reviewed research with practical experience for honest, usable peptide education.",
    },
    "editorial-policy.html": {
        "description": "peptide.diy editorial policy: how we source, write & update content, cite research, review protocols & state limitations.",
    },
    "contact.html": {
        "description": "Contact peptide.diy — request a protocol, ask a question or send feedback. Tell us the peptide name and vial size you need covered.",
    },
    "privacy.html": {
        "description": "Privacy policy for peptide.diy: data collection, cookies, analytics, your rights & how we handle information on this educational site.",
    },
    "terms.html": {
        "description": "Terms and conditions for peptide.diy: acceptable use, disclaimers, intellectual property & limitations for this research-education site.",
    },
    "cookie-policy.html": {
        "description": "Cookie policy for peptide.diy: how we use cookies, what types may be set & how to manage preferences on our website.",
    },
    "disclaimer.html": {
        "description": "Medical & research disclaimer: peptide.diy content is for education only, not medical advice. Consult a qualified professional.",
    },
    "bpc-tb500.html": {
        "description": "BPC-157 + TB-500 10mg blend protocol: BAC water reconstitution, dosing schedule, syringe units & tissue recovery research notes.",
    },
    "retatrutide.html": {
        "description": "Retatrutide 20mg protocol: triple GLP-1/GIP/glucagon agonist reconstitution, weekly dose escalation, syringe units & safety notes.",
    },
    "cjc-ipamorelin.html": {
        "description": "CJC-1295 + Ipamorelin 10mg blend: GH secretagogue reconstitution, 2–3x daily dosing, syringe math & synergistic GH release.",
    },
}


def patch_front_matter(path: Path, meta: dict) -> None:
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---"):
        return
    end = text.index("---", 3)
    fm = text[3:end].strip().splitlines()
    body = text[end + 3 :]

    keys = {}
    for line in fm:
        if ":" in line:
            k, _, v = line.partition(":")
            keys[k.strip()] = v.strip().strip('"')

    keys.setdefault("layout", "default")
    for k, v in meta.items():
        keys[k] = v

    order = ["layout", "title", "seo_title", "description", "noindex", "og_type"]
    lines = []
    for k in order:
        if k in keys:
            lines.append(f'{k}: "{keys[k]}"' if k != "layout" else f"layout: {keys[k]}")
    for k, v in keys.items():
        if k not in order:
            lines.append(f'{k}: "{v}"' if k != "layout" else f"layout: {v}")

    new_text = "---\n" + "\n".join(lines) + "\n---\n" + body
    path.write_text(new_text, encoding="utf-8")
    print(f"Updated {path.name}")


for name, meta in PAGES.items():
    p = ROOT / name
    if p.exists():
        patch_front_matter(p, meta)

print("Done.")
