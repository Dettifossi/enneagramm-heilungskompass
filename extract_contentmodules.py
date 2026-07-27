#!/usr/bin/env python3
"""Extracts contentModules (title/intro/entries[].text) from se1/so1/sx1.js
for Gemini translation. Entry labels are NOT included (already covered by
the en_labels.json dictionary) - only module title, intro, and entry text."""
import re, sys

def unescape(s):
    return s.replace('\\"', '"')

def extract_file(path, code):
    with open(path, encoding="utf-8") as f:
        content = f.read()
    m = re.search(r'contentModules:\s*\[(.*?)\n      \],\n', content, re.S)
    if not m:
        return []
    block = m.group(1)
    modules = []
    for mod_m in re.finditer(r'\{\s*title:\s*"((?:[^"\\]|\\.)*)",\s*intro:\s*\n?\s*"((?:[^"\\]|\\.)*)",\s*entries:\s*\[(.*?)\n\s{10}\],\s*\n\s{8}\}', block, re.S):
        title, intro, entries_block = mod_m.groups()
        entries = re.findall(r'label:\s*"((?:[^"\\]|\\.)*)",\s*text:\s*\n?\s*"((?:[^"\\]|\\.)*)",?', entries_block)
        modules.append((code, unescape(title), unescape(intro), [(unescape(l), unescape(t)) for l, t in entries]))
    return modules

def main():
    files = [
        ("data/knowledge/se1.js", "SE1"),
        ("data/knowledge/so1.js", "SO1"),
        ("data/knowledge/sx1.js", "SX1"),
    ]
    out = []
    idx = 0
    for path, code in files:
        modules = extract_file(path, code)
        for code_, title, intro, entries in modules:
            idx += 1
            out.append(f"=== MODULE {idx} [{code_}] ===")
            out.append(f"[TITLE] {title}")
            out.append(f"[INTRO] {intro}")
            for label, text in entries:
                out.append(f"[ENTRY:{label}] {text}")
            out.append("")
    with open("/tmp/contentmodules_batch.txt", "w", encoding="utf-8") as f:
        f.write("\n".join(out))
    print(f"{idx} modules extracted -> /tmp/contentmodules_batch.txt")

if __name__ == "__main__":
    main()
