"""Vector primitives for the BirStock brand: the "B" document mark, the wordmark,
and text-to-path helpers so every SVG master renders identically without fonts."""

from __future__ import annotations

import html
import os
import re
from functools import lru_cache

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont

HERE = os.path.dirname(os.path.abspath(__file__))
FONT_DIR = os.path.join(HERE, "fonts")

# Brand palette (mirrors src/app/globals.css)
ORANGE = "#ed6211"
ORANGE_LIGHT = "#f7883a"
ORANGE_DARK = "#c94a06"
INK = "#18181b"
INK_SOFT = "#1f1f24"
CREAM = "#fffaf3"
MUTED = "#57534e"
WHITE = "#ffffff"

# ---------------------------------------------------------------------------
# Mark: a document-shaped "B" with a folded corner. Drawn on a 512 grid and
# cropped to MARK_BOX so it can be placed anywhere.
# ---------------------------------------------------------------------------
MARK_BOX = (148, 133, 219, 249)  # x, y, w, h of the visual bounds incl. stroke
MARK_OUTLINE = (
    "M205 258H300"
    "C330 258 352 283 352 312"
    "C352 343 328 367 298 367"
    "H198Q163 367 163 332V183Q163 148 198 148"
    "H285L345 208V222"
    "C345 243 326 258 300 258"
)
MARK_FOLD = "M287 154V197Q287 207 297 207H339"


def mark_group(x: float, y: float, height: float, *, color: str = "url(#bsGrad)",
               stroke: float = 20.0, fold_color: str | None = None) -> str:
    """Return an SVG <g> drawing the mark with its visual box at (x, y), `height` tall."""
    bx, by, _, bh = MARK_BOX
    s = height / bh
    fold = fold_color or color
    return (
        f'<g transform="translate({x:.2f} {y:.2f}) scale({s:.5f}) translate({-bx} {-by})" '
        f'fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="{stroke}">'
        f'<path d="{MARK_OUTLINE}" stroke="{color}"/>'
        f'<path d="{MARK_FOLD}" stroke="{fold}"/>'
        "</g>"
    )


def mark_width(height: float) -> float:
    return MARK_BOX[2] * height / MARK_BOX[3]


def gradient_defs(gid: str = "bsGrad", a: str = ORANGE_LIGHT, b: str = ORANGE_DARK) -> str:
    return (
        f'<linearGradient id="{gid}" x1="0" y1="0" x2="1" y2="1">'
        f'<stop offset="0" stop-color="{a}"/><stop offset="1" stop-color="{b}"/>'
        "</linearGradient>"
    )


# ---------------------------------------------------------------------------
# Text -> path
# ---------------------------------------------------------------------------
FONT_FILES = {
    ("jakarta", 500): "PlusJakartaSans-500.ttf",
    ("jakarta", 700): "PlusJakartaSans-700.ttf",
    ("jakarta", 800): "PlusJakartaSans-800.ttf",
    ("inter", 400): "Inter-400.ttf",
    ("inter", 500): "Inter-500.ttf",
    ("inter", 600): "Inter-600.ttf",
    ("inter", 700): "Inter-700.ttf",
}
# Glyphs missing from the latin subset (e.g. the rupee sign) fall back to this file.
FALLBACK = {
    ("jakarta", 500): "PlusJakartaSans-ext-700.ttf",
    ("jakarta", 700): "PlusJakartaSans-ext-700.ttf",
    ("jakarta", 800): "PlusJakartaSans-ext-800.ttf",
    ("inter", 400): "PlusJakartaSans-ext-700.ttf",
    ("inter", 500): "PlusJakartaSans-ext-700.ttf",
    ("inter", 600): "PlusJakartaSans-ext-700.ttf",
    ("inter", 700): "PlusJakartaSans-ext-800.ttf",
}


@lru_cache(maxsize=None)
def _font(file: str) -> TTFont:
    return TTFont(os.path.join(FONT_DIR, file))


@lru_cache(maxsize=None)
def _kern_table(file: str) -> dict:
    """Pair kerning from GPOS PairPos format 1 & 2 (enough for Latin display text)."""
    font = _font(file)
    pairs: dict = {}
    if "GPOS" not in font:
        return pairs
    gpos = font["GPOS"].table
    for lookup in gpos.LookupList.Lookup:
        subtables = lookup.SubTable
        if lookup.LookupType == 9:
            subtables = [st.ExtSubTable for st in subtables]
        for st in subtables:
            if getattr(st, "LookupType", 2) != 2 and lookup.LookupType not in (2, 9):
                continue
            if not hasattr(st, "Format") or not hasattr(st, "Coverage"):
                continue
            cov = st.Coverage.glyphs
            if st.Format == 1:
                for i, first in enumerate(cov):
                    for pvr in st.PairSet[i].PairValueRecord:
                        v = pvr.Value1
                        if v is not None and getattr(v, "XAdvance", 0):
                            pairs.setdefault((first, pvr.SecondGlyph), v.XAdvance)
            elif st.Format == 2:
                c1 = st.ClassDef1.classDefs
                c2 = st.ClassDef2.classDefs
                for first in cov:
                    k1 = c1.get(first, 0)
                    row = st.Class1Record[k1].Class2Record
                    for second, k2 in c2.items():
                        v = row[k2].Value1
                        if v is not None and getattr(v, "XAdvance", 0):
                            pairs.setdefault((first, second), v.XAdvance)
    return pairs


def _glyph_source(ch: str, family: str, weight: int):
    file = FONT_FILES[(family, weight)]
    if ord(ch) in _font(file).getBestCmap():
        return file
    fb = FALLBACK.get((family, weight))
    if fb and ord(ch) in _font(fb).getBestCmap():
        return fb
    return file


def measure(text: str, size: float, family: str = "inter", weight: int = 500, tracking: float = 0) -> float:
    return _layout(text, size, family, weight, tracking)[1]


def _layout(text, size, family, weight, tracking):
    glyphs = []
    x = 0.0
    prev = None
    for ch in text:
        file = _glyph_source(ch, family, weight)
        font = _font(file)
        upm = font["head"].unitsPerEm
        scale = size / upm
        gname = font.getBestCmap().get(ord(ch), ".notdef")
        if prev and prev[0] == file:
            x += _kern_table(file).get((prev[1], gname), 0) * scale
        glyphs.append((file, gname, x, scale))
        x += font["hmtx"][gname][0] * scale + tracking
        prev = (file, gname)
    return glyphs, x - (tracking if text else 0)


def text_path(text: str, x: float, y: float, size: float, *, family: str = "inter", weight: int = 500,
              fill: str = INK, tracking: float = 0, anchor: str = "start") -> str:
    """Render `text` as a single <path>; (x, y) is the baseline origin."""
    glyphs, width = _layout(text, size, family, weight, tracking)
    if anchor == "middle":
        x -= width / 2
    elif anchor == "end":
        x -= width
    d = []
    for file, gname, gx, scale in glyphs:
        font = _font(file)
        pen = SVGPathPen(font.getGlyphSet())
        tpen = TransformPen(pen, (scale, 0, 0, -scale, x + gx, y))
        font.getGlyphSet()[gname].draw(tpen)
        cmd = pen.getCommands()
        if cmd:
            d.append(cmd)
    return f'<path fill="{fill}" d="{_round_path(" ".join(d))}"/>'


def _round_path(d: str) -> str:
    return re.sub(r"-?\d+\.\d+", lambda m: f"{float(m.group()):.2f}".rstrip("0").rstrip("."), d)


def wrap(text: str, size: float, max_width: float, family: str = "inter", weight: int = 500) -> list[str]:
    words, lines, line = text.split(), [], ""
    for w in words:
        trial = f"{line} {w}".strip()
        if measure(trial, size, family, weight) <= max_width or not line:
            line = trial
        else:
            lines.append(line)
            line = w
    if line:
        lines.append(line)
    return lines


# ---------------------------------------------------------------------------
# Wordmark: "bir" medium + "stock" extra-bold, set in Plus Jakarta Sans.
# ---------------------------------------------------------------------------
WORD_LIGHT = ("bir", "jakarta", 500)
WORD_BOLD = ("stock", "jakarta", 800)


def wordmark(x: float, baseline: float, size: float, *, color: str = INK, accent: str | None = None) -> tuple[str, float]:
    """Return (svg, width). `accent` recolours the "stock" half if given."""
    t1, f1, w1 = WORD_LIGHT
    t2, f2, w2 = WORD_BOLD
    track = -0.02 * size
    a = text_path(t1, x, baseline, size, family=f1, weight=w1, fill=color, tracking=track)
    wa = measure(t1, size, f1, w1, track) + track + 0.02 * size
    b = text_path(t2, x + wa, baseline, size, family=f2, weight=w2, fill=accent or color, tracking=track)
    wb = measure(t2, size, f2, w2, track)
    return a + b, wa + wb


def lockup(x: float, y: float, height: float, *, word_color: str = INK, mark_color: str = "url(#bsGrad)",
           accent: str | None = None) -> tuple[str, float]:
    """Horizontal logo: mark + wordmark. (x, y) is the top-left, `height` is the mark height."""
    mw = mark_width(height)
    gap = height * 0.26
    size = height * 1.25  # "b" ascender ~= mark height
    baseline = y + height * 0.985
    word, ww = wordmark(x + mw + gap, baseline, size, color=word_color, accent=accent)
    return mark_group(x, y, height, color=mark_color) + word, mw + gap + ww


def svg_doc(width: float, height: float, body: str, defs: str = "", title: str = "BirStock") -> str:
    title = html.escape(title, quote=True)
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width:.0f}" height="{height:.0f}" '
        f'viewBox="0 0 {width:.2f} {height:.2f}" role="img" aria-label="{title}">'
        f"<title>{title}</title><defs>{gradient_defs()}{defs}</defs>{body}</svg>"
    )


# ---------------------------------------------------------------------------
# Lucide icons (read straight from the installed package) for OG illustrations.
# ---------------------------------------------------------------------------
LUCIDE_DIR = os.path.join(HERE, "..", "..", "node_modules", "lucide-react", "dist", "esm", "icons")


def lucide(name: str, x: float, y: float, size: float, color: str, stroke: float = 2.0) -> str:
    src = open(os.path.join(LUCIDE_DIR, f"{name}.mjs"), encoding="utf8").read()
    nodes = re.findall(r'\[\s*"(\w+)",\s*\{([^}]*)\}\s*\]', src)
    parts = []
    for tag, attrs in nodes:
        kv = dict(re.findall(r'(\w+):\s*"([^"]*)"', attrs))
        kv.pop("key", None)
        parts.append(f"<{tag} " + " ".join(f'{k}="{v}"' for k, v in kv.items()) + "/>")
    s = size / 24
    return (
        f'<g transform="translate({x:.2f} {y:.2f}) scale({s:.4f})" fill="none" stroke="{color}" '
        f'stroke-width="{stroke}" stroke-linecap="round" stroke-linejoin="round">{"".join(parts)}</g>'
    )
