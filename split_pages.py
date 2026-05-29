#!/usr/bin/env python3
"""Split monolithic index.html into Jekyll pages."""
import re
from pathlib import Path

ROOT = Path(__file__).parent
INDEX = ROOT / "index.html"
lines = INDEX.read_text(encoding="utf-8").splitlines()

PAGES = [
    ("index.html", 102, 313, "Home", "Practical Peptide Research & Dosage Protocols"),
    ("beginners-guide.html", 316, 517, "Beginner's Guide", None),
    ("reconstitution-guide.html", 518, 707, "Reconstitution Guide", None),
    ("deployment-methods.html", 708, 918, "Deployment Methods", None),
    ("faq.html", 919, 1033, "FAQ", None),
    ("calculator.html", 1034, 1131, "Dosage Calculator", None),
    ("single-peptides.html", 1132, 1180, "Single Peptide Protocols", None),
    ("blends.html", 1181, 1205, "Peptide Blend Protocols", None),
    ("stacks.html", 1206, 1230, "Peptide Stack Protocols", None),
    ("storage-guide.html", 1231, 1329, "Storage Guide", None),
    ("blog.html", 1330, 1395, "Blog", None),
    ("glossary.html", 1396, 1465, "Glossary", None),
    ("about.html", 1466, 1507, "About Us", None),
    ("editorial-policy.html", 1508, 1541, "Editorial Policy", None),
    ("contact.html", 1542, 1603, "Contact", None),
    ("privacy.html", 1604, 1624, "Privacy Policy", None),
    ("terms.html", 1625, 1643, "Terms & Conditions", None),
    ("cookie-policy.html", 1644, 1659, "Cookie Policy", None),
    ("disclaimer.html", 1660, 1682, "Disclaimer", None),
    ("bpc-tb500.html", 1683, 1712, "BPC-157 + TB-500 Blend", None),
    ("retatrutide.html", 1713, 1742, "Retatrutide 20mg", None),
    ("cjc-ipamorelin.html", 1743, 1770, "CJC-1295 + Ipamorelin 10mg", None),
]

SLUG_TO_FILE = {
    "home": "index.html",
    "beginners-guide": "beginners-guide.html",
    "reconstitution-guide": "reconstitution-guide.html",
    "deployment-methods": "deployment-methods.html",
    "syringe-guide": "syringe-guide.html",
    "faq": "faq.html",
    "calculator": "calculator.html",
    "single-peptides": "single-peptides.html",
    "blends": "blends.html",
    "stacks": "stacks.html",
    "storage-guide": "storage-guide.html",
    "blog": "blog.html",
    "glossary": "glossary.html",
    "about": "about.html",
    "editorial-policy": "editorial-policy.html",
    "contact": "contact.html",
    "privacy": "privacy.html",
    "terms": "terms.html",
    "cookie-policy": "cookie-policy.html",
    "disclaimer": "disclaimer.html",
    "storage-guide": "storage-guide.html",
    "bpc-tb500": "bpc-tb500.html",
    "bpc-tb500-20mg": "bpc-tb500.html",
    "retatrutide": "retatrutide.html",
    "cjc-ipamorelin": "cjc-ipamorelin.html",
    "cjc-ipamorelin-15mg": "cjc-ipamorelin.html",
    "bpc-tb500": "bpc-tb500.html",
    "stack-recovery": "stacks.html",
    "stack-gh-opt": "stacks.html",
    "stack-metabolic": "stacks.html",
    "stack-longevity": "stacks.html",
    "stack-performance": "stacks.html",
    "stack-cognitive": "stacks.html",
    "sema-bpc": "blends.html",
    "ghk-epithalon": "blends.html",
    "cjc-ghrp6": "blends.html",
}


def slug_to_file(slug: str) -> str:
    return SLUG_TO_FILE.get(slug, "contact.html")


def jekyll_href(filename: str) -> str:
    return "{{ '" + "/" + filename + "' | relative_url }}"


def convert_links(text: str) -> str:
    def repl_nav(m):
        slug = m.group(1)
        return f'href="{jekyll_href(slug_to_file(slug))}"'

    text = re.sub(
        r'<div class="proto-card"([^>]*) onclick="navigate\(\'([^\']+)\'\)">'
        r'(<span class="proto-tag[^"]*">[^<]*</span><div class="arrow">→</div><h3>.*?</h3><p>.*?</p>)'
        r"</div>",
        lambda m: f'<a class="proto-card"{m.group(1)} href="{jekyll_href(slug_to_file(m.group(2)))}">{m.group(3)}</a>',
        text,
        flags=re.DOTALL,
    )
    text = re.sub(
        r'<div class="card"([^>]*) onclick="navigate\(\'([^\']+)\'\)">(.*?)</div>',
        lambda m: f'<a class="card"{m.group(1)} href="{jekyll_href(slug_to_file(m.group(2)))}">{m.group(3)}</a>',
        text,
        flags=re.DOTALL,
    )
    text = re.sub(
        r'<div class="card"([^>]*) style="cursor:pointer" onclick="navigate\(\'([^\']+)\'\)">(.*?)</div>',
        lambda m: f'<a class="card"{m.group(1)} href="{jekyll_href(slug_to_file(m.group(2)))}">{m.group(3)}</a>',
        text,
        flags=re.DOTALL,
    )
    text = re.sub(
        r'''onclick="navigate\('([^']+)'\);closeMobileMenu\(\)"''',
        lambda m: f'href="{jekyll_href(slug_to_file(m.group(1)))}" onclick="closeMobileMenu()"',
        text,
    )
    text = re.sub(r"""onclick="navigate\('([^']+)'\)"""", repl_nav, text)

    def button_to_link(m):
        attrs, inner = m.group(1), m.group(2)
        return f"<a{attrs}>{inner}</a>"

    text = re.sub(
        r"<button([^>]*href=[^>]*)>(.*?)</button>",
        button_to_link,
        text,
        flags=re.DOTALL,
    )
    text = re.sub(
        r'<div class="nav-logo" onclick="navigate\(\'home\'\)">',
        f'<a class="nav-logo" href="{jekyll_href("index.html")}">',
        text,
    )
    text = text.replace(
        "peptide<span>.diy</span>\n    </div>\n    <div class=\"nav-links\">",
        "peptide<span>.diy</span>\n    </a>\n    <div class=\"nav-links\">",
    )
    return text


def strip_page_wrapper(chunk: list[str]) -> list[str]:
    if not chunk:
        return chunk
    first = chunk[0].strip()
    if first.startswith("<div class=\"page"):
        chunk = chunk[1:]
    if chunk and chunk[-1].strip() == "</div>":
        chunk = chunk[:-1]
    return chunk


def extract(start: int, end: int) -> str:
    chunk = lines[start - 1 : end]
    chunk = strip_page_wrapper(chunk)
    return convert_links("\n".join(chunk))


# Nav & footer (1-based lines 15-70 nav, 72-99 mobile, 1772-1831 footer)
nav_raw = "\n".join(lines[14:70])
footer_raw = "\n".join(lines[1771:1830])
nav_html = convert_links(nav_raw)
footer_html = convert_links(footer_raw)

(ROOT / "_includes").mkdir(exist_ok=True)
(ROOT / "_layouts").mkdir(exist_ok=True)

(ROOT / "_includes" / "nav.html").write_text(nav_html, encoding="utf-8")
(ROOT / "_includes" / "footer.html").write_text(footer_html, encoding="utf-8")

(ROOT / "_includes" / "head.html").write_text(
    """<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Lato:ital,wght@0,300;0,400;0,700;1,300&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ '/css/styles.css' | relative_url }}">
""",
    encoding="utf-8",
)

mobile_raw = "\n".join(lines[71:99])
(ROOT / "_includes" / "mobile-nav.html").write_text(
    convert_links(mobile_raw), encoding="utf-8"
)

(ROOT / "_layouts" / "default.html").write_text(
    """<!DOCTYPE html>
<html lang="en">
<head>
{% include head.html %}
<title>{% if page.title == 'Home' %}peptide.diy | Practical Peptide Research & Dosage Protocols{% else %}{{ page.title }} | peptide.diy{% endif %}</title>
{% if page.description %}<meta name="description" content="{{ page.description }}">{% endif %}
</head>
<body>
{% include nav.html %}
{% include mobile-nav.html %}
<main>
{{ content }}
</main>
{% include footer.html %}
<script src="{{ '/js/app.js' | relative_url }}"></script>
</body>
</html>
""",
    encoding="utf-8",
)

(ROOT / "_config.yml").write_text(
    """title: peptide.diy
description: Peptide dosage protocols, reconstitution guides, and research dosing schedules.
baseurl: ""
url: ""

# If your site is username.github.io/REPO-NAME/, set baseurl to "/REPO-NAME"

exclude:
  - split_pages.py
  - README.md
""",
    encoding="utf-8",
)

desc = "peptide.diy is your complete resource for peptide dosage protocols, reconstitution guides, and research dosing schedules for 100+ research peptides."

for filename, start, end, title, custom_desc in PAGES:
    body = extract(start, end)
    fm_desc = custom_desc or ""
    desc_line = f'\ndescription: "{desc}"' if filename == "index.html" else ""
    if custom_desc and filename != "index.html":
        desc_line = f'\ndescription: "{custom_desc}"'
    content = f"""---
layout: default
title: "{title}"{desc_line}
---

{body}
"""
    (ROOT / filename).write_text(content, encoding="utf-8")
    print(f"Wrote {filename}")

print("Done.")
