#!/usr/bin/env python3
"""Applies translated angstEssenzPage data back into en/bundle.js."""
import re, sys

def parse_response(text):
    entries = {}
    blocks = text.split("[NR]")[1:]
    for b in blocks:
        b = "[NR]" + b
        m_nr = re.search(r'\[NR\]\s*(\d+)', b)
        m_titel = re.search(r'\[TITEL\]\s*(.+)', b)
        m_angst = re.search(r'\[ANGST\]\s*(.+)', b)
        m_org = re.search(r'\[ORG\]\s*(.+)', b)
        m_leid = re.search(r'\[LEIDENSCHAFT\]\s*(.+)', b)
        m_mot = re.search(r'\[MOTIVATION\]\s*(.+)', b)
        m_reife = re.search(r'\[REIFE\]\s*(.+)', b)
        m_essenz = re.search(r'\[ESSENZ\]\s*(.+)', b)
        if not m_nr: continue
        nr = m_nr.group(1).strip()
        entries[nr] = {
            "titel": m_titel.group(1).strip() if m_titel else None,
            "angst": m_angst.group(1).strip() if m_angst else None,
            "org": m_org.group(1).strip() if m_org else None,
            "leidenschaft": m_leid.group(1).strip() if m_leid else None,
            "motivation": m_mot.group(1).strip() if m_mot else None,
            "reife": m_reife.group(1).strip() if m_reife else None,
            "essenz": m_essenz.group(1).strip() if m_essenz else None,
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

    pattern = re.compile(
        r'(\{\s*nr:)(\d+)(,\s*titel:")((?:[^"\\]|\\.)*)("\s*,\s*angst:")((?:[^"\\]|\\.)*)("\s*,\s*org:")((?:[^"\\]|\\.)*)("\s*,\s*leidenschaft:")((?:[^"\\]|\\.)*)("\s*,\s*motivation:")((?:[^"\\]|\\.)*)("\s*,\s*reife:")((?:[^"\\]|\\.)*)("\s*,\s*essenz:")((?:[^"\\]|\\.)*)("\s*\})'
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
            m.group(3) + escape_js(t["titel"] or m.group(4)) +
            m.group(5) + escape_js(t["angst"] or m.group(6)) +
            m.group(7) + escape_js(t["org"] or m.group(8)) +
            m.group(9) + escape_js(t["leidenschaft"] or m.group(10)) +
            m.group(11) + escape_js(t["motivation"] or m.group(12)) +
            m.group(13) + escape_js(t["reife"] or m.group(14)) +
            m.group(15) + escape_js(t["essenz"] or m.group(16)) +
            m.group(17)
        )

    new_code = pattern.sub(repl, code)
    bundle = bundle[:start] + new_code + bundle[end:]

    with open(path, "w", encoding="utf-8") as f:
        f.write(bundle)

    print(f"Applied {applied}/{len(translations)} entries.")

if __name__ == "__main__":
    main()
