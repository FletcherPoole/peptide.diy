"""Submit indexable site URLs to IndexNow."""

from __future__ import annotations

import json
import subprocess
import sys
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
KEY_FILE = ROOT / "a7f3c9e2b1d84f60.txt"
HOST = "www.peptide.diy"
ENDPOINT = "https://api.indexnow.org/indexnow"


def main() -> int:
    key = KEY_FILE.read_text(encoding="utf-8").strip()
    result = subprocess.run(
        [sys.executable, str(ROOT / "scripts" / "collect-indexnow-urls.py")],
        capture_output=True,
        text=True,
        check=True,
    )
    urls = json.loads(result.stdout)
    payload = {
        "host": HOST,
        "key": key,
        "keyLocation": f"https://{HOST}/{KEY_FILE.name}",
        "urlList": urls,
    }
    request = urllib.request.Request(
        ENDPOINT,
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            print(f"IndexNow response: {response.status}")
    except urllib.error.HTTPError as error:
        body = error.read().decode("utf-8", errors="replace")
        print(f"IndexNow error {error.code}: {body}", file=sys.stderr)
        return 1

    print(f"Submitted {len(urls)} URLs")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
