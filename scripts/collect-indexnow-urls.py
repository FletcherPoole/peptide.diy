"""Output indexable absolute URLs for IndexNow submission."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITE_URL = "https://www.peptide.diy"
FRONT_MATTER = re.compile(r"^---\s*\n(.*?)\n---", re.DOTALL)


def is_indexable(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    if path.name == "404.html":
        return False
    match = FRONT_MATTER.match(text)
    if not match:
        return True
    front = match.group(1)
    if "noindex: true" in front or "noindex:true" in front:
        return False
    if "redirect_to:" in front:
        return False
    if "layout: null" in front and path.suffix == ".json":
        return False
    return True


def page_url(path: Path) -> str:
    if path.name == "index.html":
        return f"{SITE_URL}/"
    return f"{SITE_URL}/{path.name}"


def main() -> None:
    urls: list[str] = []
    for path in sorted(ROOT.glob("*.html")):
        if path.parent != ROOT:
            continue
        if not is_indexable(path):
            continue
        urls.append(page_url(path))

    json.dump(urls, sys.stdout, indent=2)
    sys.stdout.write("\n")


if __name__ == "__main__":
    main()
