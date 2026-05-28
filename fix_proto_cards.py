#!/usr/bin/env python3
import re
from pathlib import Path

ROOT = Path(__file__).parent

SLUG_TO_FILE = {
    "bpc-tb500": "bpc-tb500.html",
    "bpc-tb500-20mg": "bpc-tb500.html",
    "retatrutide": "retatrutide.html",
    "cjc-ipamorelin": "cjc-ipamorelin.html",
    "cjc-ipamorelin-15mg": "cjc-ipamorelin.html",
}

def slug_to_file(slug: str) -> str:
    return SLUG_TO_FILE.get(slug, "contact.html")

def jekyll_href(filename: str) -> str:
    return "{{ '/" + filename + "' | relative_url }}"

PROTO_RE = re.compile(
    r'<div class="proto-card"([^>]*) onclick="navigate\(\'([^\']+)\'\)">'
    r'(<span class="proto-tag[^"]*">[^<]*</span><div class="arrow">→</div><h3>.*?</h3><p>.*?</p>)'
    r"</div>",
    re.DOTALL,
)

BROKEN_RE = re.compile(
    r'<a class="proto-card"([^>]*) href="([^"]+)">'
    r'(<span class="proto-tag[^"]*">[^<]*</span><div class="arrow">→</a><h3>.*?</h3><p>.*?</p>)</div>',
    re.DOTALL,
)

def fix_broken(m):
    attrs, href, inner = m.group(1), m.group(2), m.group(3)
    inner = inner.replace('<div class="arrow">→</a>', '<div class="arrow">→</div>')
    return f'<a class="proto-card"{attrs} href="{href}">{inner}</a>'

for name in ("single-peptides.html", "blends.html", "stacks.html"):
    path = ROOT / name
    text = path.read_text(encoding="utf-8")
    if '<div class="arrow">' in text and "</a><h3>" in text:
        text = BROKEN_RE.sub(fix_broken, text)
    # Also fix any remaining div proto-cards if re-running from source
    text = PROTO_RE.sub(
        lambda m: f'<a class="proto-card"{m.group(1)} href="{jekyll_href(slug_to_file(m.group(2)))}">{m.group(3)}</a>',
        text,
    )
    path.write_text(text, encoding="utf-8")
    print(f"Fixed {name}")
