#!/usr/bin/env python3
"""Merges German source (/tmp/contentmodules_batch.txt) with the Gemini
translation (/tmp/knowledge_response_combined.txt) into JS override
dictionaries, and writes them into en/bundle.js.

- MODULE_EN: keyed by German module title -> {title, intro, entries:{germanLabel: englishText}}
  Covers se1/so1/sx1 (identical content due to source bug), type2 overview + subtype modules.
- PROFILE_EN: keyed by code (se3/so3/sx3) -> {label, field, subtypeQuestion, page2Core,
  page3Path, problem, turningPoint, integration, page5Title, page5Sentence}
  Used to build a full English type3ContentModulesEN(code) override function.
"""
import re, json

def parse_batch(path):
    with open(path, encoding="utf-8") as f:
        content = f.read()
    blocks = re.split(r'\n(?=={3} )', content)
    modules = []
    profiles = {}
    for b in blocks:
        b = b.strip()
        if not b:
            continue
        head_m = re.match(r'=== (MODULE|PROFILE) \d+ \[([^\]]+)\] ===', b)
        if not head_m:
            continue
        kind, tag = head_m.groups()
        if kind == "MODULE":
            title_m = re.search(r'\[TITLE\]\s*(.+)', b)
            intro_m = re.search(r'\[INTRO\]\s*(.+)', b)
            entries = re.findall(r'\[ENTRY:([^\]]+)\]\s*(.+)', b)
            modules.append({
                "tag": tag,
                "title": title_m.group(1).strip() if title_m else "",
                "intro": intro_m.group(1).strip() if intro_m else "",
                "entries": [(l.strip(), t.strip()) for l, t in entries],
            })
        else:
            fields = dict(re.findall(r'\[(\w+)\]\s*(.+)', b))
            profiles[tag] = {k: v.strip() for k, v in fields.items() if v.strip() != "==="}
    return modules, profiles

de_modules, de_profiles = parse_batch("/tmp/contentmodules_batch.txt")
en_modules, en_profiles = parse_batch("/tmp/knowledge_response_combined.txt")

assert len(de_modules) == len(en_modules), f"module count mismatch: {len(de_modules)} vs {len(en_modules)}"

# Build MODULE_EN keyed by German title (dedup automatically for se1/so1/sx1 identical titles)
MODULE_EN = {}
for de, en in zip(de_modules, en_modules):
    if de["tag"].startswith("SE1") or de["tag"].startswith("SO1") or de["tag"].startswith("SX1") or de["tag"].startswith("TYPE2") or de["tag"] == "TYPE3-OVERVIEW":
        entries_map = {}
        de_entries = dict(de["entries"])
        en_entries = dict(en["entries"])
        for de_label in de_entries:
            en_text = en_entries.get(de_label)
            if en_text:
                entries_map[de_label] = en_text
        MODULE_EN[de["title"]] = {
            "title": en["title"],
            "intro": en["intro"],
            "entries": entries_map,
        }

# Build PROFILE_EN keyed by lowercase code (se3/so3/sx3), from PROFILE blocks (tag SP3/SO3/SX3 -> se3/so3/sx3)
TAG_TO_CODE = {"SP3": "se3", "SO3": "so3", "SX3": "sx3"}
PROFILE_EN = {}
for tag, fields in en_profiles.items():
    code = TAG_TO_CODE.get(tag, tag.lower())
    PROFILE_EN[code] = fields

print(f"MODULE_EN: {len(MODULE_EN)} unique titles")
print(f"PROFILE_EN: {len(PROFILE_EN)} codes -> {list(PROFILE_EN.keys())}")

# --- Write JS ---
def js_str(s):
    return json.dumps(s, ensure_ascii=False)

lines = []
lines.append("const MODULE_EN = {")
for title, data in MODULE_EN.items():
    entries_js = ", ".join(f"{js_str(k)}: {js_str(v)}" for k, v in data["entries"].items())
    lines.append(f"  {js_str(title)}: {{ title: {js_str(data['title'])}, intro: {js_str(data['intro'])}, entries: {{{entries_js}}} }},")
lines.append("};")
lines.append("")
lines.append("const PROFILE_EN = {")
for code, fields in PROFILE_EN.items():
    fields_js = ", ".join(f"{k}: {js_str(v)}" for k, v in fields.items())
    lines.append(f"  {code}: {{{fields_js}}},")
lines.append("};")

js_output = "\n".join(lines)
with open("/tmp/module_profile_en.js", "w", encoding="utf-8") as f:
    f.write(js_output)
print("Written /tmp/module_profile_en.js")
