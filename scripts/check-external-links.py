"""Check external hrefs in root HTML files for HTTP failures."""

from __future__ import annotations

import re
import ssl
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CTX = ssl.create_default_context()


def main() -> int:
    urls: set[str] = set()
    for path in ROOT.glob("*.html"):
        text = path.read_text(encoding="utf-8")
        urls.update(re.findall(r'href="(https://[^"]+)"', text))

    failed: list[tuple[str, str]] = []
    for url in sorted(urls):
        try:
            req = urllib.request.Request(
                url, method="HEAD", headers={"User-Agent": "Mozilla/5.0"}
            )
            with urllib.request.urlopen(req, timeout=15, context=CTX) as response:
                code = response.status
        except urllib.error.HTTPError as error:
            code = error.code
        except Exception as error:  # noqa: BLE001
            failed.append((url, str(error)[:80]))
            continue
        if code >= 400:
            failed.append((url, str(code)))

    for url, reason in failed:
        print(f"FAIL {reason} {url}")
    print(f"Checked {len(urls)} URLs, {len(failed)} failures")
    return 1 if failed else 0


if __name__ == "__main__":
    raise SystemExit(main())
