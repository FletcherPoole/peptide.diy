#!/usr/bin/env python3
"""Add SEO meta descriptions to all Jekyll pages."""
from pathlib import Path

ROOT = Path(__file__).parent

PAGES = {
    "index.html": {
        "seo_title": "DIY Peptide Education | Research-Led Protocols",
        "description": "Peptide protocols with dosages, cycling, reconstitution and risks. Published research plus practical notes at peptide.diy.",
    },
    "beginners-guide.html": {
        "description": "New to peptides? What they are, how they work, mixing basics, storage, routes, and safety. A straight starting point for research.",
    },
    "reconstitution-guide.html": {
        "description": "How to reconstitute peptides: BAC water, concentration math, mixing steps, drawing doses, and fixing common mistakes.",
    },
    "deployment-methods.html": {
        "description": "How to deploy peptides: subcutaneous injection, topical moisturiser, and nasal spray. Units, math, and checklists for each route.",
    },
    "syringe-guide.html": {
        "description": "Redirects to Deployment Methods: injection, topical moisturiser, and nasal spray guides.",
    },
    "faq.html": {
        "description": "FAQ for peptide.diy: what we are, mixing and dosing, storage, protocol pages, legality, and how we build research-backed guides.",
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
        "description": "Peptide research articles, protocol updates and practical guides from peptide.diy.",
    },
    "glossary.html": {
        "description": "Peptide research glossary: plain definitions for BAC water, reconstitution, IU, secretagogues, stacks, blends, and 35+ terms used on peptide.diy.",
    },
    "about.html": {
        "description": "About peptide.diy: our mission to combine peer-reviewed research with practical experience for honest, usable peptide education.",
    },
    "editorial-policy.html": {
        "description": "peptide.diy editorial policy: how we source, write & update content, cite research, review protocols & state limitations.",
    },
    "contact.html": {
        "description": "Contact peptide.diy: request a protocol, ask a question or send feedback. Tell us the peptide name and vial size you need covered.",
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
        "description": "CJC-1295 + Ipamorelin 10mg blend: GH secretagogue reconstitution, 2–3x daily dosing, syringe math and combined GH release.",
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
