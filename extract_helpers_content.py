#!/usr/bin/env python3
"""Extracts remaining German prose from data/knowledge/helpers.js:
- type2OverviewModule + type2ContentModules subtypeModules (SE2/SO2/SX2)
- type3OverviewModule
- type3ContentModules profiles (SE3/SO3/SX3) - different field structure
Appends to the existing /tmp/contentmodules_batch.txt batch.
"""
import re

with open("data/knowledge/helpers.js", encoding="utf-8") as f:
    content = f.read()

def unescape(s):
    return s.replace('\\"', '"')

out = []
idx_start = 1000  # offset so IDs don't collide with contentmodules_batch.txt

def extract_modules(text, label_prefix):
    global idx_start
    for mod_m in re.finditer(
        r'title:\s*(?:`([^`]*)`|"((?:[^"\\]|\\.)*)")\s*,\s*intro:\s*\n?\s*(?:`([^`]*)`|"((?:[^"\\]|\\.)*)")\s*,\s*entries:\s*\[(.*?)\n\s*\],',
        text, re.S):
        title = mod_m.group(1) or mod_m.group(2)
        intro = mod_m.group(3) or mod_m.group(4)
        entries_block = mod_m.group(5)
        entries = re.findall(r'label:\s*"((?:[^"\\]|\\.)*)",\s*text:\s*\n?\s*"((?:[^"\\]|\\.)*)",?', entries_block)
        if not entries:
            continue
        idx_start += 1
        out.append(f"=== MODULE {idx_start} [{label_prefix}] ===")
        out.append(f"[TITLE] {unescape(title)}")
        out.append(f"[INTRO] {unescape(intro)}")
        for l, t in entries:
            out.append(f"[ENTRY:{unescape(l)}] {unescape(t)}")
        out.append("")

# 1) type2OverviewModule
m = re.search(r'export const type2OverviewModule = \{.*?\n\};', content, re.S)
if m:
    extract_modules(m.group(0), "TYPE2-OVERVIEW")

# 2) type2ContentModules subtypeModules
m = re.search(r'export function type2ContentModules.*?\n\}', content, re.S)
if m:
    extract_modules(m.group(0), "TYPE2-SUBTYPE")

# 3) type3OverviewModule
m = re.search(r'export const type3OverviewModule = \{.*?\n\};', content, re.S)
if m:
    extract_modules(m.group(0), "TYPE3-OVERVIEW")

# 4) type3ContentModules profiles (different structure)
m = re.search(r'export function type3ContentModules\(subtypeCode\) \{\s*const profiles = \{(.*?)\n  \};', content, re.S)
if m:
    block = m.group(1)
    for prof_m in re.finditer(r'(SE3|SO3|SX3):\s*\{(.*?)\n\s{4}\},', block, re.S):
        code, fields_block = prof_m.groups()
        idx_start += 1
        out.append(f"=== PROFILE {idx_start} [{code}] ===")
        for field_m in re.finditer(r'(\w+):\s*\n?\s*"((?:[^"\\]|\\.)*)"', fields_block):
            fname, fval = field_m.groups()
            if fname in ("animal",):
                continue
            out.append(f"[{fname}] {unescape(fval)}")
        out.append("")

with open("/tmp/contentmodules_batch.txt", "a", encoding="utf-8") as f:
    f.write("\n".join(out))

print(f"Appended {idx_start - 1000} more entries to /tmp/contentmodules_batch.txt")
