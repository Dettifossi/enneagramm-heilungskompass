#!/usr/bin/env python3
"""Applies translated bundeslaenderPage data back into en/bundle.js."""
import re, sys

def parse_response(text):
    entries = {}
    blocks = re.split(r'\[ID\]\s*(\d+)', text)[1:]
    # blocks alternates: id, body, id, body, ...
    for i in range(0, len(blocks), 2):
        idx = blocks[i].strip()
        b = blocks[i+1]
        m_name = re.search(r'\[NAME\]\s*(.+)', b)
        m_label = re.search(r'\[LABEL\]\s*(.+)', b)
        m_besch = re.search(r'\[BESCHREIBUNG\]\s*(.+)', b)
        entries[idx] = {
            "name": m_name.group(1).strip() if m_name else None,
            "label": m_label.group(1).strip() if m_label else None,
            "beschreibung": m_besch.group(1).strip() if m_besch else None,
        }
    m_tipp = re.search(r'\[TIPP\]\s*\n(.+?)\s*$', text, re.S)
    tipp = m_tipp.group(1).strip() if m_tipp else None
    return entries, tipp

def escape_js(s):
    return s.replace('"', '\\"')

def main():
    response_file = sys.argv[1]
    with open(response_file, encoding="utf-8") as f:
        translations, tipp = parse_response(f.read())

    path = "en/bundle.js"
    with open(path, encoding="utf-8") as f:
        bundle = f.read()

    start = bundle.find("function bundeslaenderPage")
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

    pattern = re.compile(
        r'(\{ name: ")([^"]*)(", typ: )(\d+)(, label: ")([^"]*)(", beschreibung: ")((?:[^"\\]|\\.)*)("\s*\})'
    )

    counter = {"n": 0}
    def repl(m):
        counter["n"] += 1
        idx = str(counter["n"])
        t = translations.get(idx)
        if not t:
            return m.group(0)
        return (
            m.group(1) + escape_js(t["name"] or m.group(2)) +
            m.group(3) + m.group(4) +
            m.group(5) + escape_js(t["label"] or m.group(6)) +
            m.group(7) + escape_js(t["beschreibung"] or m.group(8)) +
            m.group(9)
        )

    new_code = pattern.sub(repl, code)
    applied = counter["n"]

    if tipp:
        tipp_pattern = re.compile(r'(<strong>Kleiner Tipp:</strong> )(.*?)(\n\s*</div>)', re.S)
        new_code = tipp_pattern.sub(lambda m: m.group(1) + escape_js(tipp).replace('"','"') + m.group(3), new_code, count=1)
        new_code = new_code.replace('<strong>Kleiner Tipp:</strong>', '<strong>Little Tip:</strong>')

    bundle = bundle[:start] + new_code + bundle[end:]

    with open(path, "w", encoding="utf-8") as f:
        f.write(bundle)

    print(f"Applied {applied}/{len(translations)} entries. Tipp applied: {bool(tipp)}")

if __name__ == "__main__":
    main()
