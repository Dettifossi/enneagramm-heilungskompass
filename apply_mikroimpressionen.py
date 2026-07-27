#!/usr/bin/env python3
"""Applies translated mikroimpresionenPage data back into en/bundle.js."""
import re, sys

def parse_response(text):
    entries = {}
    blocks = text.split("[NR]")[1:]
    for b in blocks:
        b = "[NR]" + b
        m_nr = re.search(r'\[NR\]\s*(\d+)', b)
        m_name = re.search(r'\[NAME\]\s*(.+)', b)
        m_se = re.search(r'\[SE\]\s*(.+)', b)
        m_so = re.search(r'\[SO\]\s*(.+)', b)
        m_sx = re.search(r'\[SX\]\s*(.+)', b)
        if not m_nr: continue
        nr = m_nr.group(1).strip()
        entries[nr] = {
            "name": m_name.group(1).strip() if m_name else None,
            "se": m_se.group(1).strip() if m_se else None,
            "so": m_so.group(1).strip() if m_so else None,
            "sx": m_sx.group(1).strip() if m_sx else None,
        }
    return entries

def escape_js(s):
    return s.replace('"', '\\"')

def main():
    response_file = sys.argv[1]
    with open(response_file, encoding="utf-8") as f:
        translations = parse_response(f.read())

    path = "en/bundle.js"
    with open(path, encoding="utf-8") as f:
        bundle = f.read()

    start = bundle.find("function mikroimpresionenPage")
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
        r'(\{ nr:)(\d+)(, name:")((?:[^"\\]|\\.)*)("\s*,\s*se:")((?:[^"\\]|\\.)*)("\s*,\s*so:")((?:[^"\\]|\\.)*)("\s*,\s*sx:")((?:[^"\\]|\\.)*)("\s*\})'
    )

    applied = 0
    def repl(m):
        nonlocal applied
        nr = m.group(2)
        t = translations.get(nr)
        if not t:
            return m.group(0)
        applied += 1
        return (
            m.group(1) + nr +
            m.group(3) + escape_js(t["name"] or m.group(4)) +
            m.group(5) + escape_js(t["se"] or m.group(6)) +
            m.group(7) + escape_js(t["so"] or m.group(8)) +
            m.group(9) + escape_js(t["sx"] or m.group(10)) +
            m.group(11)
        )

    new_code = pattern.sub(repl, code)
    bundle = bundle[:start] + new_code + bundle[end:]

    with open(path, "w", encoding="utf-8") as f:
        f.write(bundle)

    print(f"Applied {applied}/{len(translations)} entries.")

if __name__ == "__main__":
    main()
