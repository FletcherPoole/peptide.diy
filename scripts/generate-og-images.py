"""Generate 1200x630 OG PNG images for protocol pages."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "images" / "og"

W, H = 1200, 630
BG = (11, 15, 24)
ACCENT = (94, 246, 200)
TEXT = (240, 237, 230)
MUTED = (140, 148, 168)
WARN = (240, 160, 90)

PROTOCOLS = [
    {
        "slug": "ghk-cu-50mg",
        "title": "GHK-Cu 50mg",
        "category": "Single · Skin & Anti-Ageing",
    },
    {
        "slug": "ghk-cu-100mg",
        "title": "GHK-Cu 100mg",
        "category": "Single · Skin & Anti-Ageing",
    },
    {
        "slug": "retatrutide",
        "title": "Retatrutide 20mg",
        "category": "Single · Metabolic",
    },
    {
        "slug": "bpc-tb500",
        "title": "BPC-157 + TB-500",
        "category": "Blend · Recovery",
    },
    {
        "slug": "cjc-ipamorelin",
        "title": "CJC-1295 + Ipamorelin",
        "category": "Blend · GH Secretagogue",
    },
]


def load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = []
    if bold:
        candidates.extend(
            [
                "C:/Windows/Fonts/georgiab.ttf",
                "C:/Windows/Fonts/timesbd.ttf",
                "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf",
                "/System/Library/Fonts/Supplemental/Georgia Bold.ttf",
            ]
        )
    else:
        candidates.extend(
            [
                "C:/Windows/Fonts/georgia.ttf",
                "C:/Windows/Fonts/segoeui.ttf",
                "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
                "/System/Library/Fonts/Supplemental/Georgia.ttf",
            ]
        )

    for path in candidates:
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            continue
    return ImageFont.load_default()


def draw_image(protocol: dict) -> Image.Image:
    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img)

    draw.rectangle((0, 0, W, 6), fill=ACCENT)
    draw.rectangle((72, 120, 78, 420), fill=ACCENT)

    brand_font = load_font(34, bold=True)
    title_font = load_font(78, bold=True)
    category_font = load_font(30)
    label_font = load_font(22)
    foot_font = load_font(20)

    draw.text((72, 56), "peptide.diy", font=brand_font, fill=ACCENT)
    draw.text((72, 150), protocol["title"], font=title_font, fill=TEXT)
    draw.text((72, 250), protocol["category"], font=category_font, fill=MUTED)
    draw.text((72, 320), "Dosage protocol", font=label_font, fill=ACCENT)
    draw.text((72, 360), "Reconstitution · dosing · cited research", font=label_font, fill=MUTED)
    draw.text((72, H - 72), "Research purposes only · Not medical advice", font=foot_font, fill=WARN)

    return img


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for protocol in PROTOCOLS:
        path = OUT_DIR / f"{protocol['slug']}.png"
        draw_image(protocol).save(path, format="PNG", optimize=True)
        print(f"Wrote {path.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
