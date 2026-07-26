#!/usr/bin/env python3
"""
extract_de_batch.py
Extracts remaining German content (H/P/BOOKTIP/LABEL) from named page
functions in en/bundle.js into the same batch text format used for the
Gemini translation workflow (see apply_gemini_pages.py).

Usage: python3 extract_de_batch.py fnName1 fnName2 ... > batch.txt
"""
import re, sys

def unescape(s):
    return s.replace('\\xe4','ä').replace('\\xf6','ö').replace('\\xfc','ü') \
             .replace('\\xdf','ß').replace('\\xdc','Ü').replace('\\xd6','Ö') \
             .replace('\\xc4','Ä').replace('\\xe9','é').replace('\\xe8','è') \
             .replace('\\xe0','à').replace('\\u2013','–').replace('\\u2019',"'")

def fn_bounds(code, fn_name):
    start = code.find(f"function {fn_name}()")
    if start == -1: return None, None
    depth, i = 0, start
    while i < len(code):
        if code[i] == '{': depth += 1
        elif code[i] == '}':
            depth -= 1
            if depth == 0: return start, i+1
        i += 1
    return start, None

GERMAN_MARKERS = re.compile(
    r'[äöüßÄÖÜ]|\\x[e-f][0-9a-f]|\b(der|die|das|und|ist|nicht|mit|sich|eine|einen|f\\xfcr|f\\xe4r|auch|wird|oder|im\b|auf\b)\b',
    re.IGNORECASE
)

def is_german(s):
    return bool(GERMAN_MARKERS.search(s))

def extract(fn_code):
    # NOTE: headings/paras/booktips/labels are NOT filtered by is_german here.
    # A missed heading (e.g. no umlaut, no matched stopword) used to silently
    # shift every subsequent zip()-paired replacement in apply_gemini_pages.py
    # by one position, corrupting unrelated headings/paragraphs. Always
    # extracting the full, unfiltered list keeps counts in sync with the
    # live DOM; apply_gemini_pages.py's exact-match already skips anything
    # that doesn't need translating.
    headings = re.findall(r'<h[234][^>]*>([^<]+)</h[234]>', fn_code)
    paras = re.findall(r'<p\b[^>]*>(.*?)</p>', fn_code, re.S)
    booktips = re.findall(r'bookTip\("[^"]+",\s*"((?:[^"\\]|\\.)*)"', fn_code)
    labels = re.findall(r'label:"([^"]+)"', fn_code)
    return headings, paras, booktips, labels

def main():
    with open("/Users/detlefrathmer/Enneagramm-Kompass/en/bundle.js", encoding="utf-8") as f:
        bundle = f.read()

    for fn_name in sys.argv[1:]:
        start, end = fn_bounds(bundle, fn_name)
        if start is None:
            print(f"WARNING: {fn_name} not found", file=sys.stderr)
            continue
        fn_code = bundle[start:end]
        headings, paras, booktips, labels = extract(fn_code)

        print(f"=== PAGE: {fn_name} ===")
        for h in headings:
            print(f"[H] {unescape(h.strip())}")
        for p in paras:
            p = unescape(p.strip())
            if not p: continue
            print(f"[P] {p}")
        for b in booktips:
            print(f"[BOOKTIP] {unescape(b)}")
        for l in labels:
            print(f"[LABEL] {unescape(l)}")

if __name__ == "__main__":
    main()
