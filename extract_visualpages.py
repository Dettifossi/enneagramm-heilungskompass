#!/usr/bin/env python3
"""Extracts visualPages (title/caption/alt) from all 27 data/knowledge/*.js
files for Gemini translation."""
import re, glob

def unescape(s):
    return s.replace('\\"', '"')

def main():
    files = sorted(glob.glob('data/knowledge/*.js'))
    files = [f for f in files if 'helpers' not in f and 'index' not in f]

    out = []
    idx = 0
    for path in files:
        with open(path, encoding="utf-8") as f:
            content = f.read()
        code_m = re.search(r'code:\s*"([^"]+)"', content)
        code = code_m.group(1) if code_m else "??"
        m = re.search(r'visualPages:\s*\[(.*?)\n      \],\n', content, re.S)
        if not m:
            continue
        block = m.group(1)
        pages = re.findall(
            r'\{\s*title:\s*"((?:[^"\\]|\\.)*)",\s*caption:\s*"((?:[^"\\]|\\.)*)",\s*src:\s*"[^"]*",\s*alt:\s*"((?:[^"\\]|\\.)*)",?\s*\}',
            block)
        for title, caption, alt in pages:
            idx += 1
            out.append(f"[{idx}] [{code}]")
            out.append(f"TITLE: {unescape(title)}")
            out.append(f"CAPTION: {unescape(caption)}")
            out.append(f"ALT: {unescape(alt)}")
            out.append("")

    with open("/tmp/visualpages_batch.txt", "w", encoding="utf-8") as f:
        f.write("\n".join(out))
    print(f"{idx} visual pages extracted -> /tmp/visualpages_batch.txt")

if __name__ == "__main__":
    main()
