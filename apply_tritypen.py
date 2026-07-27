#!/usr/bin/env python3
"""Applies translated tritypen data back into en/bundle.js's tritypenPage array."""
import re, sys

def parse_response(text):
    entries = {}
    blocks = text.split("[ID]")[1:]
    for b in blocks:
        b = "[ID]" + b
        m_id = re.search(r'\[ID\]\s*(.+)', b)
        m_name = re.search(r'\[NAME\]\s*(.+)', b)
        m_kurz = re.search(r'\[KURZ\]\s*(.+)', b)
        m_kern = re.search(r'\[KERN\]\s*(.+)', b)
        m_schatten = re.search(r'\[SCHATTEN\]\s*(.+)', b)
        m_stress = re.search(r'\[STRESS\]\s*(.+)', b)
        m_coaching = re.search(r'\[COACHING\]\s*(.+)', b)
        if not m_id: continue
        tid = m_id.group(1).strip()
        entries[tid] = {
            "name": m_name.group(1).strip() if m_name else None,
            "kurz": m_kurz.group(1).strip() if m_kurz else None,
            "kern": m_kern.group(1).strip() if m_kern else None,
            "schatten": m_schatten.group(1).strip() if m_schatten else None,
            "stress": m_stress.group(1).strip() if m_stress else None,
            "coaching": m_coaching.group(1).strip() if m_coaching else None,
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

    pattern = re.compile(
        r'(\{\s*id:")([^"]+)(",\s*name:")([^"]+)(",\s*kurz:")((?:[^"\\]|\\.)*)("\s*,\s*kern:")((?:[^"\\]|\\.)*)("\s*,\s*schatten:")((?:[^"\\]|\\.)*)("\s*,\s*stress:")((?:[^"\\]|\\.)*)("\s*,\s*coaching:")((?:[^"\\]|\\.)*)("\s*\})'
    )

    applied = 0
    def repl(m):
        nonlocal applied
        tid = m.group(2)
        t = translations.get(tid)
        if not t:
            return m.group(0)
        applied += 1
        return (
            m.group(1) + tid +
            m.group(3) + escape_js(t["name"] or m.group(4)) +
            m.group(5) + escape_js(t["kurz"] or m.group(6)) +
            m.group(7) + escape_js(t["kern"] or m.group(8)) +
            m.group(9) + escape_js(t["schatten"] or m.group(10)) +
            m.group(11) + escape_js(t["stress"] or m.group(12)) +
            m.group(13) + escape_js(t["coaching"] or m.group(14)) +
            m.group(15)
        )

    new_code = pattern.sub(repl, code)
    bundle = bundle[:start] + new_code + bundle[end:]

    with open(path, "w", encoding="utf-8") as f:
        f.write(bundle)

    print(f"Applied {applied}/{len(translations)} tritype entries.")

if __name__ == "__main__":
    main()
