#!/usr/bin/env python3
"""Bespoke extractor for angstEssenzPage's data array (not <p>-tag based)."""
import re

def unescape(s):
    return s.replace('\\xe4','ä').replace('\\xf6','ö').replace('\\xfc','ü') \
             .replace('\\xdf','ß').replace('\\xdc','Ü').replace('\\xd6','Ö') \
             .replace('\\xc4','Ä')

with open("/Users/detlefrathmer/Enneagramm-Kompass/en/bundle.js", encoding="utf-8") as f:
    bundle = f.read()

start = bundle.find("function angstEssenzPage")
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
    r'\{\s*nr:(\d+),\s*titel:"((?:[^"\\]|\\.)*)",\s*angst:"((?:[^"\\]|\\.)*)",\s*org:"((?:[^"\\]|\\.)*)",\s*leidenschaft:"((?:[^"\\]|\\.)*)",\s*motivation:"((?:[^"\\]|\\.)*)",\s*reife:"((?:[^"\\]|\\.)*)",\s*essenz:"((?:[^"\\]|\\.)*)"\s*\}',
    code
)

for nr, titel, angst, org, leidenschaft, motivation, reife, essenz in entries:
    print(f"[NR] {nr}")
    print(f"[TITEL] {unescape(titel)}")
    print(f"[ANGST] {unescape(angst)}")
    print(f"[ORG] {unescape(org)}")
    print(f"[LEIDENSCHAFT] {unescape(leidenschaft)}")
    print(f"[MOTIVATION] {unescape(motivation)}")
    print(f"[REIFE] {unescape(reife)}")
    print(f"[ESSENZ] {unescape(essenz)}")
    print()
