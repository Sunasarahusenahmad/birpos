"""LinkedIn featured/feed posts (1080x1350, dark theme matching the brand kit).

Imported by generate.py; each post is described in POSTS below.
"""

from __future__ import annotations

import base64
import os

from brandkit import (
    INK, ORANGE, ORANGE_DARK, WHITE,
    lockup, lucide, measure, svg_doc, text_path, wrap,
)

W, H = 1080, 1350
MARGIN = 72
SOFT = "#d6d3d1"
PANEL = "#232329"
PANEL_LINE = "#34343c"
LIMIT = 1214  # content must end above the footer band (starts at H - 104)

POSTS = [
    {
        "key": "01-intro",
        "eyebrow": "Meet BirStock",
        "title": ["Billing software", "that keeps your", "counter running."],
        "subtitle": "Offline POS, GST billing & inventory for Indian shops.",
        "icon": "scan-barcode",
        "bullets": [
            "Fast barcode billing",
            "GST invoices - CGST/SGST & IGST",
            "Inventory & low-stock alerts",
            "Customer Khata & supplier ledgers",
            "Android & iOS mobile app",
        ],
    },
    {
        "key": "02-offline",
        "eyebrow": "Offline billing",
        "title": ["Internet down?", "Billing doesn't stop."],
        "subtitle": "BirStock runs on your own PC, so your counter keeps working.",
        "icon": "wifi-off",
        "bullets": [
            "Daily billing works offline",
            "Business records stay on your PC",
            "Backup to your own Google Drive",
            "No cloud lag on barcode scans",
        ],
    },
    {
        "key": "03-mobile-app",
        "eyebrow": "BirStock Mobile App",
        "title": ["Your counter,", "in your pocket."],
        "subtitle": "Android & iOS app that pairs with your shop PC over Wi-Fi.",
        "icon": "smartphone",
        "bullets": [
            "QR code pairing in seconds",
            "Bill customers from your phone",
            "Check stock, customers & invoices",
            "Works over your shop Wi-Fi",
        ],
    },
    {
        "key": "04-khata",
        "eyebrow": "Customer Khata",
        "title": ["Still writing Udhar", "in a notebook?"],
        "subtitle": "Go digital with BirStock Khata.",
        "icon": "book-user",
        "bullets": [
            "Credit bills to the customer's account",
            "Payments & returns tracked",
            "Running balance always correct",
            "PDF statements anytime",
        ],
    },
    {
        "key": "05-gst-billing",
        "eyebrow": "GST Billing",
        "title": ["GST invoices,", "done right."],
        "subtitle": "Tax calculated on every line as you bill.",
        "icon": "receipt-text",
        "bullets": [
            "0%, 5%, 12%, 18% & 28% built in",
            "CGST/SGST & IGST handling",
            "Customer GSTIN on invoices",
            "Thermal or A4 printing",
        ],
    },
    {
        "key": "06-inventory",
        "eyebrow": "Inventory",
        "title": ["Know your stock.", "Always."],
        "subtitle": "Stock updates itself as you buy, sell and return.",
        "icon": "boxes",
        "bullets": [
            "Excel product import & export",
            "Stock-in from supplier purchases",
            "Low-stock alerts",
            "Serial / IMEI tracking",
        ],
    },
    {
        "key": "07-customisation",
        "eyebrow": "Customisation",
        "title": ["Your business is unique.", "Your software", "can be too."],
        "subtitle": "We customise BirStock around the way you work.",
        "icon": "puzzle",
        "bullets": [
            "Your invoice & print formats",
            "Reports you actually need",
            "Your workflow & fields",
            "Built by the BirStock team",
        ],
    },
    {
        "key": "08-clients",
        "eyebrow": "Our clients",
        "title": ["Trusted by", "growing businesses."],
        "subtitle": "From ready-to-use plans to fully customised builds.",
        "icon": "handshake",
        "visual": "clients",
    },
    {
        "key": "09-demo",
        "eyebrow": "Free demo",
        "title": ["See BirStock", "in action."],
        "subtitle": "Book a free demo - we'll show you how it fits your shop.",
        "icon": "monitor-play",
        "visual": "contact",
    },
]


def _background() -> str:
    g = 54
    return (
        f'<rect width="{W}" height="{H}" fill="{INK}"/>'
        f'<defs><pattern id="pgrid" width="{g}" height="{g}" patternUnits="userSpaceOnUse">'
        f'<path d="M{g} 0H0V{g}" fill="none" stroke="#26262c" stroke-width="1"/></pattern>'
        f'<radialGradient id="pglow" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="{ORANGE}" stop-opacity="0.32"/>'
        f'<stop offset="1" stop-color="{ORANGE}" stop-opacity="0"/></radialGradient>'
        f'<linearGradient id="pcard" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f7883a"/>'
        f'<stop offset="1" stop-color="{ORANGE_DARK}"/></linearGradient></defs>'
        f'<rect width="{W}" height="{H}" fill="url(#pgrid)"/>'
        f'<circle cx="{W * 0.92}" cy="{H * 0.06}" r="560" fill="url(#pglow)"/>'
        f'<circle cx="{W * 0.0}" cy="{H * 0.98}" r="420" fill="url(#pglow)" opacity="0.6"/>'
    )


def _pill(x, y, text, size=26):
    t = text.upper()
    track = size * 0.08
    w = measure(t, size, "inter", 700, track) + size * 1.7
    h = size * 2.1
    return (
        f'<rect x="{x}" y="{y}" width="{w:.1f}" height="{h:.1f}" rx="{h / 2:.1f}" fill="#2a2a30" stroke="{ORANGE}" stroke-width="2"/>'
        + text_path(t, x + size * 0.85, y + h * 0.66, size, family="inter", weight=700, fill=ORANGE, tracking=track)
    )


def _header_and_title(post) -> tuple[str, float]:
    body = ""
    logo, _ = lockup(MARGIN, 70, 46, word_color=WHITE)
    body += logo
    body += text_path("by Birtik Tech", W - MARGIN, 108, 26, family="inter", weight=600, fill=SOFT, anchor="end")
    body += _pill(MARGIN, 180, post["eyebrow"])

    lines = post["title"]
    max_w = W - MARGIN * 2
    size = min(92.0, min(max_w / measure(ln, 1, "jakarta", 800, -0.02) for ln in lines))
    y = 290 + size
    for i, ln in enumerate(lines):
        color = ORANGE if i == len(lines) - 1 else WHITE
        body += text_path(ln, MARGIN, y, size, family="jakarta", weight=800, fill=color, tracking=-0.02 * size)
        y += size * 1.08
    y += 18
    for ln in wrap(post["subtitle"], 34, max_w, "inter", 500)[:2]:
        body += text_path(ln, MARGIN, y, 34, family="inter", weight=500, fill=SOFT)
        y += 34 * 1.4
    return body, y


def _check(cx, cy, r):
    return (
        f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="url(#pcard)"/>'
        f'<path d="M{cx - r * 0.42:.1f} {cy + r * 0.02:.1f}L{cx - r * 0.1:.1f} {cy + r * 0.34:.1f}L{cx + r * 0.46:.1f} {cy - r * 0.3:.1f}" '
        f'fill="none" stroke="{WHITE}" stroke-width="{r * 0.22:.1f}" stroke-linecap="round" stroke-linejoin="round"/>'
    )


def _bullets(post, top) -> str:
    items = post["bullets"]
    y0 = top + 30
    row = min(92.0, (LIMIT - y0 - 44) / len(items))
    fs = min(34.0, row * 0.4)
    panel_h = row * len(items) + 44
    y0 = LIMIT - panel_h if LIMIT - panel_h > y0 + 40 else y0
    body = f'<rect x="{MARGIN}" y="{y0}" width="{W - MARGIN * 2}" height="{panel_h}" rx="36" fill="{PANEL}" stroke="{PANEL_LINE}" stroke-width="2"/>'
    for i, text in enumerate(items):
        cy = y0 + 22 + row * i + row / 2
        body += _check(MARGIN + 66, cy, min(24.0, row * 0.27))
        body += text_path(text, MARGIN + 116, cy + fs * 0.36, fs, family="inter", weight=600, fill=WHITE)
        if i < len(items) - 1:
            ly = y0 + 22 + row * (i + 1)
            body += f'<line x1="{MARGIN + 36}" x2="{W - MARGIN - 36}" y1="{ly}" y2="{ly}" stroke="{PANEL_LINE}" stroke-width="2"/>'
    return body


# Not used while prices are being finalised - add a post with "visual": "pricing" to bring it back.
def _pricing(top, plans) -> str:
    gap = 22
    cw = (W - MARGIN * 2 - gap * 2) / 3
    ch = min(430.0, LIMIT - 60 - (top + 30))
    y0 = max(top + 30, LIMIT - 60 - ch)
    body = ""
    for i, p in enumerate(plans):
        x = MARGIN + i * (cw + gap)
        hi = p["highlight"]
        fill = "url(#pcard)" if hi else PANEL
        body += f'<rect x="{x:.1f}" y="{y0}" width="{cw:.1f}" height="{ch}" rx="32" fill="{fill}" stroke="{ORANGE if hi else PANEL_LINE}" stroke-width="2"/>'
        cx = x + cw / 2
        if hi:
            tag = "BEST VALUE"
            tw = measure(tag, 20, "inter", 700, 1.6) + 30
            body += f'<rect x="{cx - tw / 2:.1f}" y="{y0 + 28}" width="{tw:.1f}" height="38" rx="19" fill="{WHITE}"/>'
            body += text_path(tag, cx, y0 + 54, 20, family="inter", weight=700, fill=ORANGE_DARK, tracking=1.6, anchor="middle")
        body += text_path(p["name"], cx, y0 + 128, 36, family="jakarta", weight=800, fill=WHITE, anchor="middle")
        price_size = min(64.0, (cw - 30) / measure(p["price"], 1, "jakarta", 800))
        body += text_path(p["price"], cx, y0 + 230, price_size, family="jakarta", weight=800, fill=WHITE, anchor="middle")
        body += text_path(p["period"], cx, y0 + 278, 26, family="inter", weight=600, fill=WHITE if hi else SOFT, anchor="middle")
        ny = y0 + 340
        for ln in wrap(p["note"], 23, cw - 40, "inter", 500)[:3]:
            body += text_path(ln, cx, ny, 23, family="inter", weight=500, fill=WHITE if hi else SOFT, anchor="middle")
            ny += 31
    body += text_path("All prices + GST  ·  birstock.com/pricing", W / 2, y0 + ch + 48, 26,
                      family="inter", weight=500, fill=SOFT, anchor="middle")
    return body


def _data_uri(path: str) -> str:
    ext = os.path.splitext(path)[1].lower()
    mime = {".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg"}[ext]
    with open(path, "rb") as f:
        return f"data:{mime};base64,{base64.b64encode(f.read()).decode()}"


def _clients(top, clients) -> str:
    gap = 22
    n = len(clients)
    y0 = top + 30
    ch = min(190.0, (LIMIT - y0 - gap * (n - 1)) / n)
    total = n * ch + (n - 1) * gap
    y0 = max(y0, LIMIT - total)
    body = ""
    for i, c in enumerate(clients):
        y = y0 + i * (ch + gap)
        body += f'<rect x="{MARGIN}" y="{y}" width="{W - MARGIN * 2}" height="{ch}" rx="32" fill="{WHITE}"/>'
        lw, lh = 340, ch * 0.66
        body += (f'<image href="{_data_uri(c["logo"])}" x="{MARGIN + 50}" y="{y + (ch - lh) / 2}" width="{lw}" '
                 f'height="{lh}" preserveAspectRatio="xMinYMid meet"/>')
        tx = MARGIN + 470
        body += text_path(c["name"], tx, y + ch * 0.45, 34, family="jakarta", weight=800, fill=INK)
        body += text_path(c["tag"], tx, y + ch * 0.45 + 44, 26, family="inter", weight=600, fill=ORANGE_DARK)
    return body


def _contact(top, phone, email) -> str:
    rows = [("phone", f"Call / WhatsApp  {phone}"), ("mail", email), ("globe", "birstock.com"),
            ("calendar-check", "Mon–Sat, 10 AM – 7 PM")]
    btn_h, btn_gap = 92, 26
    y0 = top + 30
    row = min(104.0, (LIMIT - y0 - 40 - btn_gap - btn_h) / len(rows))
    panel_h = row * len(rows) + 40
    body = f'<rect x="{MARGIN}" y="{y0}" width="{W - MARGIN * 2}" height="{panel_h}" rx="36" fill="{PANEL}" stroke="{PANEL_LINE}" stroke-width="2"/>'
    for i, (icon, text) in enumerate(rows):
        cy = y0 + 20 + row * i + row / 2
        body += f'<circle cx="{MARGIN + 70}" cy="{cy}" r="32" fill="url(#pcard)"/>'
        body += lucide(icon, MARGIN + 70 - 18, cy - 18, 36, WHITE, stroke=2.2)
        body += text_path(text, MARGIN + 126, cy + 12, 34, family="inter", weight=600, fill=WHITE)
    by = LIMIT - btn_h
    bw = W - MARGIN * 2
    label = "Book your free demo"
    lw = measure(label, 38, "jakarta", 800)
    body += f'<rect x="{MARGIN}" y="{by}" width="{bw}" height="{btn_h}" rx="{btn_h / 2}" fill="url(#pcard)"/>'
    lx = W / 2 - (lw + 50) / 2
    body += text_path(label, lx, by + btn_h / 2 + 14, 38, family="jakarta", weight=800, fill=WHITE)
    body += lucide("arrow-right", lx + lw + 14, by + btn_h / 2 - 18, 36, WHITE, stroke=2.6)
    return body


def _footer(phone) -> str:
    y = H - 104
    return (
        f'<rect y="{y}" width="{W}" height="104" fill="#111114"/><rect y="{y}" width="{W}" height="4" fill="{ORANGE}"/>'
        + text_path("birstock.com", MARGIN, y + 66, 32, family="inter", weight=700, fill=WHITE)
        + text_path(phone, W - MARGIN, y + 66, 30, family="inter", weight=600, fill=ORANGE, anchor="end")
    )


def post_svg(post, *, plans, clients, phone, email) -> str:
    body = _background()
    # Large faint icon in the corner as a theme watermark.
    body += f'<g opacity="0.07">{lucide(post["icon"], W - 470, 120, 430, ORANGE, stroke=1.4)}</g>'
    head, y = _header_and_title(post)
    body += head
    visual = post.get("visual")
    if visual == "pricing":
        body += _pricing(y, plans)
    elif visual == "clients":
        body += _clients(y, clients)
    elif visual == "contact":
        body += _contact(y, phone, email)
    else:
        body += _bullets(post, y)
    body += _footer(phone)
    return svg_doc(W, H, body, title=f"BirStock - {post['eyebrow']}")
