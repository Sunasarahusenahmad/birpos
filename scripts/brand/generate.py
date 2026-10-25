"""Generates the BirStock brand kit into public/brand/ and refreshes root icons.

    python scripts/brand/generate.py

Builds SVG masters (all text converted to vector paths), then rasterizes them with
sharp via rasterize.mjs. Re-run after changing og-pages.json or prices.
"""

from __future__ import annotations

import json
import os
import shutil
import subprocess
import sys

from PIL import Image

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from brandkit import (  # noqa: E402
    CREAM, INK, INK_SOFT, MUTED, ORANGE, ORANGE_DARK, WHITE,
    lockup, lucide, mark_group, mark_width, measure, svg_doc, text_path, wordmark, wrap,
)

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
PUBLIC = os.path.join(ROOT, "public")
BRAND = os.path.join(PUBLIC, "brand")
SRC = os.path.join(BRAND, "_svg")  # SVG masters for composed artwork (social / og)

jobs: list[dict] = []


def write(path: str, svg: str) -> str:
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf8") as f:
        f.write(svg)
    return path


def raster(src: str, out: str, width: int, height: int | None = None, flatten: str | None = None):
    job = {"src": src, "out": out, "width": width}
    if height:
        job["height"] = height
    if flatten:
        job["flatten"] = flatten
    jobs.append(job)


# ---------------------------------------------------------------------------
# Logos
# ---------------------------------------------------------------------------
def logo_svg(word_color=INK, mark_color="url(#bsGrad)", accent=None, pad=0.0, bg=None):
    h = 100
    body, w = lockup(0, 0, h, word_color=word_color, mark_color=mark_color, accent=accent)
    W, H = w + pad * 2, h + pad * 2
    bg_rect = f'<rect width="{W:.2f}" height="{H:.2f}" fill="{bg}"/>' if bg else ""
    return svg_doc(W, H, bg_rect + f'<g transform="translate({pad} {pad})">{body}</g>', title="BirStock logo"), W, H


def stacked_svg(word_color=INK, mark_color="url(#bsGrad)", bg=None):
    mh = 180
    word, ww = wordmark(0, 0, 120, color=word_color)
    W = max(ww, mark_width(mh)) + 80
    H = mh + 40 + 120 + 80
    mx = (W - mark_width(mh)) / 2
    body = (f'<rect width="{W:.2f}" height="{H:.2f}" fill="{bg}"/>' if bg else "")
    body += mark_group(mx, 40, mh, color=mark_color, stroke=20)
    body += f'<g transform="translate({(W - ww) / 2:.2f} {40 + mh + 40 + 92})">{word}</g>'
    return svg_doc(W, H, body, title="BirStock logo"), W, H


def mark_svg(color="url(#bsGrad)", size=512, pad=0.16):
    h = size * (1 - pad * 2)
    x = (size - mark_width(h)) / 2
    return svg_doc(size, size, mark_group(x, size * pad, h, color=color, stroke=20), title="BirStock mark")


def icon_svg(bg=INK_SOFT, color="url(#bsGrad)", shape="rounded", size=512, scale=0.58, stroke=22):
    if shape == "rounded":
        bgel = f'<rect width="{size}" height="{size}" rx="{size * 0.225:.1f}" fill="{bg}"/>'
    elif shape == "circle":
        bgel = f'<circle cx="{size / 2}" cy="{size / 2}" r="{size / 2}" fill="{bg}"/>'
    else:
        bgel = f'<rect width="{size}" height="{size}" fill="{bg}"/>'
    h = size * scale
    x = (size - mark_width(h)) / 2
    y = (size - h) / 2
    return svg_doc(size, size, bgel + mark_group(x, y, h, color=color, stroke=stroke), title="BirStock icon")


def build_logos():
    d = os.path.join(BRAND, "logo")
    variants = {
        "birstock-logo": dict(),
        "birstock-logo-white": dict(word_color=WHITE),
        "birstock-logo-mono-black": dict(word_color=INK, mark_color=INK),
        "birstock-logo-mono-white": dict(word_color=WHITE, mark_color=WHITE),
        "birstock-logo-orange": dict(word_color=ORANGE, mark_color=ORANGE),
    }
    for name, kw in variants.items():
        svg, W, H = logo_svg(**kw)
        p = write(os.path.join(d, f"{name}.svg"), svg)
        raster(p, os.path.join(d, f"{name}.png"), 1200)
        raster(p, os.path.join(d, f"{name}@2x.png"), 2400)
    # Logos on solid backgrounds (with breathing room) for documents, decks and marketplaces.
    for name, kw in {
        "birstock-logo-on-white": dict(bg=WHITE),
        "birstock-logo-on-cream": dict(bg=CREAM),
        "birstock-logo-on-dark": dict(bg=INK, word_color=WHITE),
        "birstock-logo-on-orange": dict(bg=ORANGE, word_color=WHITE, mark_color=WHITE),
    }.items():
        svg, W, H = logo_svg(pad=60, **kw)
        p = write(os.path.join(d, f"{name}.svg"), svg)
        raster(p, os.path.join(d, f"{name}.png"), 1600)
        raster(p, os.path.join(d, f"{name}.jpg"), 1600)
    for name, kw in {
        "birstock-logo-stacked": dict(),
        "birstock-logo-stacked-white": dict(word_color=WHITE),
    }.items():
        svg, W, H = stacked_svg(**kw)
        p = write(os.path.join(d, f"{name}.svg"), svg)
        raster(p, os.path.join(d, f"{name}.png"), 1200)
    for name, color in {
        "birstock-mark": "url(#bsGrad)",
        "birstock-mark-orange": ORANGE,
        "birstock-mark-black": INK,
        "birstock-mark-white": WHITE,
    }.items():
        p = write(os.path.join(d, f"{name}.svg"), mark_svg(color))
        for s in (256, 512, 1024):
            raster(p, os.path.join(d, f"{name}-{s}.png"), s)
    for name, kw in {
        "birstock-icon": dict(),  # dark rounded square - primary app icon
        "birstock-icon-orange": dict(bg=ORANGE, color=WHITE),
        "birstock-icon-light": dict(bg=WHITE),
        "birstock-icon-circle": dict(shape="circle"),
    }.items():
        p = write(os.path.join(d, f"{name}.svg"), icon_svg(**kw))
        for s in (192, 512, 1024):
            raster(p, os.path.join(d, f"{name}-{s}.png"), s)


# ---------------------------------------------------------------------------
# Favicons & app icons
# ---------------------------------------------------------------------------
def build_favicons():
    d = os.path.join(BRAND, "favicon")
    # Heavier stroke and larger mark so the B stays legible at 16px.
    small = write(os.path.join(SRC, "favicon-small.svg"), icon_svg(scale=0.66, stroke=30))
    regular = write(os.path.join(d, "icon.svg"), icon_svg(scale=0.62, stroke=24))
    for s in (16, 32, 48):
        raster(small, os.path.join(d, f"favicon-{s}x{s}.png"), s)
    raster(regular, os.path.join(d, "apple-touch-icon.png"), 180, flatten=INK_SOFT)
    raster(regular, os.path.join(d, "android-chrome-192x192.png"), 192)
    raster(regular, os.path.join(d, "android-chrome-512x512.png"), 512)
    raster(regular, os.path.join(d, "mstile-150x150.png"), 150)
    # Maskable: full-bleed background with the mark inside the 80% safe zone.
    mask = write(os.path.join(SRC, "maskable.svg"), icon_svg(shape="square", scale=0.46, stroke=24))
    raster(mask, os.path.join(d, "maskable-512x512.png"), 512)
    raster(mask, os.path.join(d, "maskable-192x192.png"), 192)
    # Safari pinned tab: single-colour silhouette.
    write(os.path.join(d, "safari-pinned-tab.svg"), mark_svg(INK, size=512, pad=0.1))


def finish_favicons():
    d = os.path.join(BRAND, "favicon")
    imgs = [Image.open(os.path.join(d, f"favicon-{s}x{s}.png")).convert("RGBA") for s in (16, 32, 48)]
    ico = os.path.join(d, "favicon.ico")
    imgs[2].save(ico, sizes=[(16, 16), (32, 32), (48, 48)], append_images=imgs[:2])
    # Root copies that browsers and crawlers request by convention.
    shutil.copy(ico, os.path.join(ROOT, "src", "app", "favicon.ico"))
    for name in ("apple-touch-icon.png", "android-chrome-192x192.png", "android-chrome-512x512.png",
                 "favicon-16x16.png", "favicon-32x32.png", "favicon-48x48.png"):
        shutil.copy(os.path.join(d, name), os.path.join(PUBLIC, name))
    shutil.copy(os.path.join(BRAND, "logo", "birstock-icon-512.png"), os.path.join(PUBLIC, "birstock-icon.png"))
    shutil.copy(os.path.join(BRAND, "logo", "birstock-logo.png"), os.path.join(PUBLIC, "birstock-logo.png"))
    shutil.copy(os.path.join(BRAND, "logo", "birstock-logo.png"), os.path.join(PUBLIC, "birstock-logo-transparent.png"))
    manifest = {
        "name": "BirStock - Offline POS, GST Billing & Inventory Software",
        "short_name": "BirStock",
        "description": "Offline-first POS, GST billing and inventory software for Indian shops.",
        "start_url": "/",
        "scope": "/",
        "display": "standalone",
        "theme_color": ORANGE,
        "background_color": "#fffefa",
        "icons": [
            {"src": "/brand/favicon/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png"},
            {"src": "/brand/favicon/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png"},
            {"src": "/brand/favicon/maskable-192x192.png", "sizes": "192x192", "type": "image/png", "purpose": "maskable"},
            {"src": "/brand/favicon/maskable-512x512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"},
            {"src": "/brand/favicon/icon.svg", "sizes": "any", "type": "image/svg+xml"},
        ],
    }
    with open(os.path.join(PUBLIC, "site.webmanifest"), "w", encoding="utf8") as f:
        json.dump(manifest, f, indent=2)
    with open(os.path.join(PUBLIC, "browserconfig.xml"), "w", encoding="utf8") as f:
        f.write(
            '<?xml version="1.0" encoding="utf-8"?>\n<browserconfig><msapplication><tile>'
            '<square150x150logo src="/brand/favicon/mstile-150x150.png"/>'
            f"<TileColor>{INK_SOFT}</TileColor></tile></msapplication></browserconfig>\n"
        )


# ---------------------------------------------------------------------------
# Shared artwork pieces
# ---------------------------------------------------------------------------
def background(W, H, dark=False, grid=40):
    base = INK if dark else CREAM
    line = "#2a2a30" if dark else "#f1e7d9"
    return (
        f'<rect width="{W}" height="{H}" fill="{base}"/>'
        f'<defs><pattern id="grid" width="{grid}" height="{grid}" patternUnits="userSpaceOnUse">'
        f'<path d="M{grid} 0H0V{grid}" fill="none" stroke="{line}" stroke-width="1"/></pattern>'
        f'<radialGradient id="fade" cx="0.75" cy="0.2" r="0.9"><stop offset="0" stop-color="#fff" stop-opacity="1"/>'
        f'<stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>'
        f'<mask id="gridMask"><rect width="{W}" height="{H}" fill="url(#fade)"/></mask>'
        f'<radialGradient id="glow" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="{ORANGE}" stop-opacity="{0.35 if dark else 0.18}"/>'
        f'<stop offset="1" stop-color="{ORANGE}" stop-opacity="0"/></radialGradient></defs>'
        f'<rect width="{W}" height="{H}" fill="url(#grid)" mask="url(#gridMask)"/>'
        f'<circle cx="{W * 0.82}" cy="{H * 0.1}" r="{max(W, H) * 0.42}" fill="url(#glow)"/>'
    )


def pill(x, y, text, size=17, fill="#fff1e6", stroke="#fbd5bb", color=ORANGE_DARK, weight=600, upper=True):
    t = text.upper() if upper else text
    track = size * 0.06 if upper else 0
    w = measure(t, size, "inter", weight, track) + size * 1.6
    h = size * 2.0
    return (
        f'<rect x="{x}" y="{y}" width="{w:.1f}" height="{h:.1f}" rx="{h / 2:.1f}" fill="{fill}" stroke="{stroke}" stroke-width="1.5"/>'
        + text_path(t, x + size * 0.8, y + h * 0.66, size, family="inter", weight=weight, fill=color, tracking=track)
    ), w


def icon_tile(x, y, size, icon, radius=None):
    r = radius or size * 0.18
    s = (
        '<defs><linearGradient id="tileGrad" x1="0" y1="0" x2="1" y2="1">'
        f'<stop offset="0" stop-color="#f7883a"/><stop offset="1" stop-color="{ORANGE_DARK}"/></linearGradient></defs>'
        f'<rect x="{x + 10}" y="{y + 18}" width="{size}" height="{size}" rx="{r}" fill="{ORANGE}" opacity="0.18"/>'
        f'<rect x="{x}" y="{y}" width="{size}" height="{size}" rx="{r}" fill="url(#tileGrad)"/>'
    )
    isz = size * 0.5
    s += lucide(icon, x + (size - isz) / 2, y + (size - isz) / 2, isz, WHITE, stroke=1.6)
    # Small dark badge with the brand mark, overlapping the tile corner.
    b = size * 0.3
    bx, by = x + size - b * 0.75, y - b * 0.25
    s += f'<rect x="{bx}" y="{by}" width="{b}" height="{b}" rx="{b * 0.24}" fill="{INK_SOFT}" stroke="{CREAM}" stroke-width="5"/>'
    mh = b * 0.6
    s += mark_group(bx + (b - mark_width(mh)) / 2, by + (b - mh) / 2, mh, stroke=26)
    return s


# ---------------------------------------------------------------------------
# Open Graph images (1200 x 630)
# ---------------------------------------------------------------------------
def og_svg(page: dict) -> str:
    W, H = 1200, 630
    body = background(W, H)
    logo, _ = lockup(72, 58, 40)
    body += logo
    eyebrow, _ = pill(72, 136, page["eyebrow"])
    body += eyebrow

    title_w = 640
    sub_size = 23
    chips = page.get("chips") or []
    limit = 527 if chips else 548  # keep text (and chips) clear of the footer band
    for size in (60, 54, 48, 44):
        lines = wrap(page["title"], size, title_w, "jakarta", 800)
        subs = wrap(page["subtitle"], sub_size, title_w, "inter", 500)[:3]
        end_y = 196 + size + (len(lines) - 1) * size * 1.12 + 14 + len(subs) * sub_size * 1.45
        if end_y <= limit:
            break
    y = 196 + size
    for ln in lines:
        body += text_path(ln, 72, y, size, family="jakarta", weight=800, fill=INK, tracking=-0.02 * size)
        y += size * 1.12
    y += 14
    for ln in subs:
        body += text_path(ln, 72, y, sub_size, family="inter", weight=500, fill=MUTED)
        y += sub_size * 1.45

    cx = 72
    for c in chips:
        chip, cw = pill(cx, y - sub_size * 1.45 + 20, c, size=17, fill=WHITE, stroke="#ead9c6", color=INK, weight=700, upper=False)
        body += chip
        cx += cw + 12

    body += icon_tile(810, 150, 300, page["icon"])

    # Footer band
    body += f'<rect y="{H - 66}" width="{W}" height="66" fill="{INK}"/><rect y="{H - 70}" width="{W}" height="4" fill="{ORANGE}"/>'
    body += text_path("birstock.com", 72, H - 24, 22, family="inter", weight=600, fill=WHITE)
    body += text_path("Offline POS  ·  GST Billing  ·  Inventory  ·  Mobile App", W - 72, H - 25, 19,
                      family="inter", weight=500, fill="#f7a56b", anchor="end")
    return svg_doc(W, H, body, title=page["title"])


def build_og():
    pages = json.load(open(os.path.join(HERE, "og-pages.json"), encoding="utf8"))
    for page in pages:
        p = write(os.path.join(SRC, "og", f"{page['key']}.svg"), og_svg(page))
        raster(p, os.path.join(BRAND, "og", f"{page['key']}.png"), 1200, 630)
    home = os.path.join(SRC, "og", "home.svg")
    # Legacy paths referenced by old shares/caches.
    raster(home, os.path.join(PUBLIC, "og-image.jpg"), 1200, 630)
    raster(home, os.path.join(PUBLIC, "og-image.png"), 1200, 630)
    raster(home, os.path.join(PUBLIC, "twitter-image.jpg"), 1200, 630)
    return pages


# ---------------------------------------------------------------------------
# Social media kit
# ---------------------------------------------------------------------------
TAGLINE = "Offline POS, GST Billing & Inventory for Indian Shops"
CHIPS = ["Works offline", "GST invoices", "Customer Khata", "Mobile App"]


def banner(W, H, *, logo_h, tag_size, chip_size, safe=None, dark=True, align="center", show_chips=True, url=True):
    """Generic cover/banner. `safe` = (x, y, w, h) area that is guaranteed visible."""
    sx, sy, sw, sh = safe or (0, 0, W, H)
    body = background(W, H, dark=dark, grid=max(32, int(H / 12)))
    word = WHITE if dark else INK
    sub = "#d6d3d1" if dark else MUTED
    _, lw = lockup(0, 0, logo_h)
    block_h = logo_h + tag_size * 1.9 + (chip_size * 3.4 if show_chips else 0)
    top = sy + (sh - block_h) / 2
    lx = sx + (sw - lw) / 2 if align == "center" else sx
    lg, _ = lockup(lx, top, logo_h, word_color=word)
    body += lg
    ty = top + logo_h + tag_size * 1.7
    anchor = "middle" if align == "center" else "start"
    tx = sx + sw / 2 if align == "center" else sx
    body += text_path(TAGLINE, tx, ty, tag_size, family="inter", weight=600, fill=sub, anchor=anchor)
    if show_chips:
        widths = [measure(c, chip_size, "inter", 700) + chip_size * 1.6 for c in CHIPS]
        gap = chip_size * 0.6
        total = sum(widths) + gap * (len(CHIPS) - 1)
        cx = sx + (sw - total) / 2 if align == "center" else sx
        cy = ty + chip_size * 1.4
        for c, w in zip(CHIPS, widths):
            chip, _ = pill(cx, cy, c, size=chip_size, fill="#2a2a30" if dark else WHITE,
                           stroke=ORANGE if dark else "#ead9c6", color=WHITE if dark else INK, weight=700, upper=False)
            body += chip
            cx += w + gap
    if url:
        body += text_path("birstock.com", sx + sw - 4 if align != "center" else W - tag_size * 1.5,
                          H - tag_size * 1.2, tag_size * 0.8, family="inter", weight=600, fill=ORANGE, anchor="end")
    return svg_doc(W, H, body, title="BirStock")


def avatar(size, bg, color, stroke=22):
    return icon_svg(bg=bg, color=color, shape="square", size=size, scale=0.5, stroke=stroke)


def post_square(W=1080, H=1080):
    body = background(W, H)
    lg, lw = lockup((W - lockup(0, 0, 64)[1]) / 2, 120, 64)
    body += lg
    y = 330
    for ln in wrap("Billing software that keeps your counter running.", 76, 880, "jakarta", 800):
        body += text_path(ln, W / 2, y, 76, family="jakarta", weight=800, fill=INK, anchor="middle", tracking=-1.5)
        y += 86
    y += 20
    for ln in wrap("Offline POS · GST invoices · Khata · Inventory · Google Drive backup · Mobile App", 30, 860, "inter", 500):
        body += text_path(ln, W / 2, y, 30, family="inter", weight=500, fill=MUTED, anchor="middle")
        y += 44
    chips = ["Works offline", "GST invoices", "Mobile app"]
    widths = [measure(c, 28, "inter", 700) + 28 * 1.6 for c in chips]
    cx = (W - sum(widths) - 16 * 2) / 2
    for c, w in zip(chips, widths):
        chip, _ = pill(cx, y + 30, c, size=28, fill=WHITE, stroke="#ead9c6", color=INK, weight=700, upper=False)
        body += chip
        cx += w + 16
    body += f'<rect y="{H - 110}" width="{W}" height="110" fill="{INK}"/><rect y="{H - 114}" width="{W}" height="4" fill="{ORANGE}"/>'
    body += text_path("birstock.com", W / 2, H - 42, 36, family="inter", weight=700, fill=WHITE, anchor="middle")
    return svg_doc(W, H, body, title="BirStock")


def story(W=1080, H=1920):
    body = background(W, H, dark=True, grid=60)
    mh = 260
    body += mark_group((W - mark_width(mh)) / 2, 380, mh, stroke=20)
    word, ww = wordmark(0, 0, 150, color=WHITE)
    body += f'<g transform="translate({(W - ww) / 2:.1f} 820)">{word}</g>'
    y = 1000
    for ln in wrap("Offline POS, GST Billing & Inventory for Indian Shops", 52, 860, "jakarta", 800):
        body += text_path(ln, W / 2, y, 52, family="jakarta", weight=800, fill=WHITE, anchor="middle")
        y += 66
    y += 40
    for c in ["Works offline", "GST invoices", "Customer Khata", "BirStock Mobile App"]:
        w = measure(c, 34, "inter", 700) + 34 * 1.6
        chip, _ = pill((W - w) / 2, y, c, size=34, fill="#2a2a30", stroke=ORANGE, color=WHITE, weight=700, upper=False)
        body += chip
        y += 100
    body += text_path("birstock.com", W / 2, H - 200, 44, family="inter", weight=700, fill=ORANGE, anchor="middle")
    return svg_doc(W, H, body, title="BirStock")


def email_signature(W=600, H=160):
    body = f'<rect width="{W}" height="{H}" fill="{WHITE}"/>'
    lg, _ = lockup(24, 40, 48)
    body += lg
    body += text_path(TAGLINE, 24, 128, 17, family="inter", weight=500, fill=MUTED)
    return svg_doc(W, H, body, title="BirStock")


def build_social():
    d = os.path.join(BRAND, "social")
    # Profile pictures (platforms crop to a circle - the mark sits inside the safe zone).
    for name, bg, color in [("avatar-orange", ORANGE, WHITE), ("avatar-dark", INK_SOFT, "url(#bsGrad)"),
                            ("avatar-white", WHITE, "url(#bsGrad)")]:
        p = write(os.path.join(SRC, "social", f"{name}.svg"), avatar(1080, bg, color))
        raster(p, os.path.join(d, "profile", f"birstock-{name}-1080.png"), 1080)
        raster(p, os.path.join(d, "profile", f"birstock-{name}-400.png"), 400)
    p = os.path.join(SRC, "social", "avatar-orange.svg")
    raster(p, os.path.join(d, "instagram", "instagram-profile-320.png"), 320)
    raster(p, os.path.join(d, "facebook", "facebook-profile-720.png"), 720)
    raster(p, os.path.join(d, "linkedin", "linkedin-logo-400.png"), 400)
    raster(p, os.path.join(d, "whatsapp", "whatsapp-profile-640.png"), 640)
    raster(p, os.path.join(d, "youtube", "youtube-profile-800.png"), 800)

    specs = [
        # name, folder, W, H, safe area, kwargs
        ("facebook-cover-1640x624", "facebook", 1640, 624, (330, 70, 980, 484), dict(logo_h=96, tag_size=36, chip_size=24)),
        ("linkedin-cover-1128x191", "linkedin", 1128, 191, (300, 14, 800, 163), dict(logo_h=46, tag_size=17, chip_size=0, show_chips=False, align="start", url=False)),
        ("linkedin-cover-2256x382", "linkedin", 2256, 382, (600, 28, 1600, 326), dict(logo_h=92, tag_size=34, chip_size=0, show_chips=False, align="start", url=False)),
        ("x-header-1500x500", "x-twitter", 1500, 500, (240, 60, 1020, 330), dict(logo_h=84, tag_size=32, chip_size=22)),
        ("youtube-banner-2560x1440", "youtube", 2560, 1440, (507, 509, 1546, 423), dict(logo_h=120, tag_size=44, chip_size=30)),
    ]
    for name, folder, W, H, safe, kw in specs:
        p = write(os.path.join(SRC, "social", f"{name}.svg"), banner(W, H, safe=safe, **kw))
        raster(p, os.path.join(d, folder, f"{name}.png"), W, H)

    p = write(os.path.join(SRC, "social", "instagram-post.svg"), post_square())
    raster(p, os.path.join(d, "instagram", "instagram-post-intro-1080.png"), 1080)
    raster(p, os.path.join(d, "facebook", "facebook-post-intro-1080.png"), 1080)
    raster(p, os.path.join(d, "linkedin", "linkedin-post-intro-1080.png"), 1080)
    p = write(os.path.join(SRC, "social", "story.svg"), story())
    raster(p, os.path.join(d, "instagram", "instagram-story-1080x1920.png"), 1080, 1920)
    raster(p, os.path.join(d, "facebook", "facebook-story-1080x1920.png"), 1080, 1920)
    p = write(os.path.join(SRC, "social", "email-signature.svg"), email_signature())
    raster(p, os.path.join(d, "email", "email-signature-600x160.png"), 600, 160)
    raster(p, os.path.join(d, "email", "email-signature-1200x320.png"), 1200, 320)


# Instagram story highlight covers. Instagram crops the cover to a circle from the
# centre, so the icon sits well inside the middle of the canvas.
HIGHLIGHTS = [
    ("features", "layout-grid"),
    ("pricing", "badge-indian-rupee"),
    ("mobile-app", "smartphone"),
    ("gst-billing", "receipt-text"),
    ("khata", "book-user"),
    ("inventory", "boxes"),
    ("offline", "wifi-off"),
    ("customisation", "puzzle"),
    ("clients", "handshake"),
    ("demo", "monitor-play"),
    ("reviews", "star"),
    ("contact", "phone"),
]


def highlight_svg(icon: str, style: str, W: int, H: int) -> str:
    cx, cy = W / 2, H / 2
    r = min(W, H) * 0.36  # inner disc - stays inside the circular crop
    if style == "orange":
        bg = (f'<linearGradient id="hlBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f7883a"/>'
              f'<stop offset="1" stop-color="{ORANGE_DARK}"/></linearGradient>')
        body = f'<defs>{bg}</defs><rect width="{W}" height="{H}" fill="url(#hlBg)"/>'
        body += f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="#ffffff" fill-opacity="0.16"/>'
        body += f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="none" stroke="#ffffff" stroke-opacity="0.45" stroke-width="{r * 0.02:.1f}"/>'
        color = WHITE
    elif style == "dark":
        body = f'<rect width="{W}" height="{H}" fill="{INK_SOFT}"/>'
        body += f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="none" stroke="url(#bsGrad)" stroke-width="{r * 0.03:.1f}"/>'
        color = ORANGE
    else:  # cream
        body = f'<rect width="{W}" height="{H}" fill="{CREAM}"/>'
        body += f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="#fff1e6" stroke="#fbd5bb" stroke-width="{r * 0.02:.1f}"/>'
        color = ORANGE
    isz = r * 1.0
    body += lucide(icon, cx - isz / 2, cy - isz / 2, isz, color, stroke=2.1)
    return svg_doc(W, H, body, title=f"BirStock highlight - {icon}")


def build_highlights():
    d = os.path.join(BRAND, "social", "instagram", "highlights")
    for style in ("orange", "dark", "cream"):
        for name, icon in HIGHLIGHTS:
            sq = write(os.path.join(SRC, "highlights", f"{style}-{name}.svg"), highlight_svg(icon, style, 1080, 1080))
            raster(sq, os.path.join(d, style, f"highlight-{name}-1080.png"), 1080)
            tall = write(os.path.join(SRC, "highlights", f"{style}-{name}-story.svg"), highlight_svg(icon, style, 1080, 1920))
            raster(tall, os.path.join(d, style, "story-size", f"highlight-{name}-1080x1920.png"), 1080, 1920)


def build_posts():
    """LinkedIn featured posts, using live prices/phone from the site source."""
    import re
    from posts import POSTS, post_svg

    pricing_src = open(os.path.join(ROOT, "src", "data", "pricing.ts"), encoding="utf8").read()
    prices = {pid: int(v) for pid, v in re.findall(r'id: "(\w+)",\s*name: "\w+",\s*price: (\d+)', pricing_src)}
    cfg = open(os.path.join(ROOT, "src", "lib", "site-config.ts"), encoding="utf8").read()
    phone = re.search(r'phoneDisplay: "([^"]+)"', cfg).group(1)
    email = re.search(r'email: "([^"]+)"', cfg).group(1)

    def inr(n):
        s = str(n)
        if len(s) <= 3:
            return "₹" + s
        head, tail = s[:-3], s[-3:]
        parts = []
        while len(head) > 2:
            parts.insert(0, head[-2:])
            head = head[:-2]
        if head:
            parts.insert(0, head)
        return "₹" + ",".join(parts) + "," + tail

    plans = [
        {"name": "Monthly", "price": inr(prices["monthly"]), "period": "per month", "note": "Full desktop app", "highlight": False},
        {"name": "Yearly", "price": inr(prices["yearly"]), "period": "per year", "note": "Desktop + Android & iOS app", "highlight": True},
        {"name": "Lifetime", "price": inr(prices["lifetime"]), "period": "one-time", "note": "Permanent licence", "highlight": False},
    ]
    cdir = os.path.join(PUBLIC, "clients")
    clients = [
        {"name": "iQiP", "logo": os.path.join(cdir, "iqip-logo.svg"), "tag": "Custom build · IP advisory"},
        {"name": "Ansi Techno", "logo": os.path.join(cdir, "ansi-techno-logo.png"), "tag": "IT, CCTV & laptops"},
        {"name": "Birtik Tech", "logo": os.path.join(cdir, "birtiktech-logo.png"), "tag": "Software & web development"},
    ]
    d = os.path.join(BRAND, "social", "linkedin", "posts")
    for post in POSTS:
        svg = post_svg(post, plans=plans, clients=clients, phone=phone, email=email)
        p = write(os.path.join(SRC, "posts", f"{post['key']}.svg"), svg)
        raster(p, os.path.join(d, f"post-{post['key']}-1080x1350.png"), 1080, 1350)


def main():
    if os.path.isdir(SRC):
        shutil.rmtree(SRC)
    build_logos()
    build_favicons()
    build_og()
    build_social()
    build_highlights()
    build_posts()
    jobs_file = os.path.join(SRC, "jobs.json")
    write(jobs_file, json.dumps(jobs))
    subprocess.run(["node", os.path.join(HERE, "rasterize.mjs"), jobs_file], check=True, cwd=ROOT)
    finish_favicons()
    # SVG masters for composed artwork are build inputs, not assets to ship.
    shutil.rmtree(SRC)
    print(f"brand kit written to {BRAND}")


if __name__ == "__main__":
    main()
