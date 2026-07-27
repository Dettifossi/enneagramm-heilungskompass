#!/usr/bin/env python3
"""Bespoke extractor for tritypenPage's data array (not <p>-tag based)."""
import re

def unescape(s):
    return s.replace('\\xe4','ä').replace('\\xf6','ö').replace('\\xfc','ü') \
             .replace('\\xdf','ß').replace('\\xdc','Ü').replace('\\xd6','Ö') \
             .replace('\\xc4','Ä')

with open("/Users/detlefrathmer/Enneagramm-Kompass/en/bundle.js", encoding="utf-8") as f:
    bundle = f.read()

start = bundle.find("function tritypenPage")
depth, i = 0, start
while i < len(bundle):
    if bundle[i] == '{': depth += 1
    elif bundle[i] == '}':
        depth -= 1
        if depth == 0:
            end = i+1
            break
    i += 1
code = bundle[start:end]

entries = re.findall(
    r'\{\s*id:"([^"]+)",\s*name:"([^"]+)",\s*kurz:"((?:[^"\\]|\\.)*)",\s*kern:"((?:[^"\\]|\\.)*)",\s*schatten:"((?:[^"\\]|\\.)*)",\s*stress:"((?:[^"\\]|\\.)*)",\s*coaching:"((?:[^"\\]|\\.)*)"\s*\}',
    code
)

print("=== TRITYPEN DATA ===")
for id_, name, kurz, kern, schatten, stress, coaching in entries:
    print(f"[ID] {id_}")
    print(f"[NAME] {unescape(name)}")
    print(f"[KURZ] {unescape(kurz)}")
    print(f"[KERN] {unescape(kern)}")
    print(f"[SCHATTEN] {unescape(schatten)}")
    print(f"[STRESS] {unescape(stress)}")
    print(f"[COACHING] {unescape(coaching)}")

lis = re.findall(r'<li><strong>([^<]+)</strong>\s*(.*?)</li>', code)
print("=== INTRO LIST ===")
for title, desc in lis:
    print(f"[LITITLE] {unescape(title)}")
    print(f"[LIDESC] {unescape(desc)}")
