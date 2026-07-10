#!/usr/bin/env python3
"""Regeneriert bundle.js aus allen Quelldateien. Ausführen nach jeder Änderung."""
import re, os, glob, sys

base = os.path.dirname(os.path.abspath(__file__))

def to_js_ascii(s):
    result = []
    for c in s:
        code = ord(c)
        if code <= 127:
            result.append(c)
        elif code <= 0xFFFF:
            result.append(f'\\u{code:04x}')
        else:
            code -= 0x10000
            high = 0xD800 + (code >> 10)
            low  = 0xDC00 + (code & 0x3FF)
            result.append(f'\\u{high:04x}\\u{low:04x}')
    return ''.join(result)

def strip_exports(content):
    content = re.sub(r'^export\s+(const|let|var|function|async function|class)\s+', r'\1 ', content, flags=re.MULTILINE)
    content = re.sub(r'^export\s+\{[^}]+\}\s+from\s+[^\n]+;\n?', '', content, flags=re.MULTILINE)
    content = re.sub(r'^export\s+\{[^}]+\};\n?', '', content, flags=re.MULTILINE)
    content = re.sub(r'^import[^\n]+;\n?', '', content, flags=re.MULTILINE)
    return content

parts = []

# data/subtypes/ (eigener Scope wegen Namenskonflikten mit knowledge/)
subtype_parts = []
for path in sorted(glob.glob(f"{base}/data/subtypes/s*.js")):
    subtype_parts.append(strip_exports(open(path).read()))
subtype_parts.append(strip_exports(open(f"{base}/data/subtypes/index.js").read()))
parts.append("(function(){\n" + "\n\n".join(subtype_parts) + "\nwindow._subtypeDetails = subtypeDetails;\n})();")
parts.append("const subtypeDetails = window._subtypeDetails;")

# data/knowledge/ (eigener Scope)
know_parts = [strip_exports(open(f"{base}/data/knowledge/helpers.js").read())]
for path in sorted(glob.glob(f"{base}/data/knowledge/s*.js")):
    know_parts.append(strip_exports(open(path).read()))
know_parts.append(strip_exports(open(f"{base}/data/knowledge/index.js").read()))
parts.append("(function(){\n" + "\n\n".join(know_parts) + "\nwindow._knowledgeSubtypes = knowledgeSubtypes;\n})();")
parts.append("const knowledgeSubtypes = window._knowledgeSubtypes;")

# Hauptdatendateien
for fname in [
    "data/de.js", "data/impulse.js", "data/tagesimpulse.js",
    "data/typentest.js", "data/motivtest.js", "data/diagnosetest.js",
    "data/beziehungspaarungen.js", "data/differenzierungen.js",
    "data/register.js", "data/tierentsprechungen.js", "data/verhalten.js",
    "data/quiz.js",
    "data/zitate.js",
]:
    parts.append(strip_exports(open(f"{base}/{fname}").read()))

# app.js (Imports entfernen)
app_js = open(f"{base}/app.js").read()
app_js = re.sub(r'^import[^\n]+;\n?', '', app_js, flags=re.MULTILINE)
parts.append(app_js)

bundle = "\n\n".join(parts)
bundle_ascii = to_js_ascii(bundle)

out = f"{base}/bundle.js"
open(out, "w", encoding="ascii").write(bundle_ascii)
print(f"✓ bundle.js: {len(bundle_ascii)//1024} KB")
