#!/usr/bin/env python3
"""
apply_gemini_pages.py
Applies translated PAGE texts to en/bundle.js using exact-match replacement
(source German text -> translated English text), scoped to each function.
This avoids corrupting functions where only a subset of headings/paragraphs
appear in a given batch (partial-function batches).

Usage: python3 apply_gemini_pages.py <source_batch.txt> <translated_response.txt>
"""
import re, sys

def parse(text):
    pages = {}
    blocks = re.split(r'=== PAGE: (.+?) ===\n', text)
    for i in range(1, len(blocks), 2):
        fn_name = re.sub(r'\s*\(.*?\)\s*$', '', blocks[i].strip())
        content = blocks[i+1] if i+1 < len(blocks) else ""
        h_list, p_list, booktips, labels = [], [], [], []
        cur_p = None
        for line in content.split('\n'):
            if line.startswith('[H]'):
                if cur_p is not None: p_list.append(cur_p); cur_p = None
                h_list.append(line[3:].lstrip(' ').rstrip())
            elif line.startswith('[P]'):
                if cur_p is not None: p_list.append(cur_p)
                cur_p = line[3:].lstrip(' ')
            elif line.startswith('[BOOKTIP]'):
                if cur_p is not None: p_list.append(cur_p); cur_p = None
                booktips.append(line[9:].lstrip(' ').rstrip())
            elif line.startswith('[LABEL]'):
                if cur_p is not None: p_list.append(cur_p); cur_p = None
                labels.append(line[7:].lstrip(' ').rstrip())
            else:
                if cur_p is not None:
                    cur_p += '\n' + line
        if cur_p is not None: p_list.append(cur_p)
        # strip trailing blank lines from paragraph blocks
        p_list = [p.rstrip('\n') for p in p_list]
        pages[fn_name] = {'h': h_list, 'p': p_list, 'booktips': booktips, 'labels': labels}
    return pages

# Maps a literal char to every way bundle.js might encode it as a JS escape.
_ESCAPE_VARIANTS = {
    'ä':['\\xe4','\\u00e4'], 'ö':['\\xf6','\\u00f6'], 'ü':['\\xfc','\\u00fc'],
    'ß':['\\xdf','\\u00df'], 'Ü':['\\xdc','\\u00dc'], 'Ö':['\\xd6','\\u00d6'],
    'Ä':['\\xc4','\\u00c4'], 'é':['\\xe9','\\u00e9'], 'è':['\\xe8','\\u00e8'],
    'à':['\\xe0','\\u00e0'],
    '–':['\\u2013'], '—':['\\u2014'], '„':['\\u201e'], '"':['\\u201c'],
    ''':['\\u2018'], ''':['\\u2019'], '←':['\\u2190'], '→':['\\u2192'],
}

def find_in(fn_code, de):
    """Return the exact substring present in fn_code matching de. bundle.js
    encodes non-ASCII characters inconsistently -- sometimes literal UTF-8,
    sometimes \\xNN, sometimes \\uNNNN, and different characters within the
    same string may use different conventions. Build a regex that accepts
    any encoding for each special character and search for it."""
    if de in fn_code:
        return de
    pattern_parts = []
    for ch in de:
        variants = _ESCAPE_VARIANTS.get(ch)
        if variants:
            alts = [re.escape(ch)] + [re.escape(v) for v in variants]
            pattern_parts.append('(?:' + '|'.join(alts) + ')')
        else:
            pattern_parts.append(re.escape(ch))
    pattern = ''.join(pattern_parts)
    m = re.search(pattern, fn_code)
    return m.group(0) if m else None

def fn_bounds(code, fn_name):
    start = code.find(f"function {fn_name}()")
    if start == -1: return None, None
    depth, i = 0, start
    while i < len(code):
        if code[i] == '{': depth += 1
        elif code[i] == '}':
            depth -= 1
            if depth == 0: return start, i+1
        i += 1
    return start, None

def main():
    if len(sys.argv) < 3:
        print("Usage: python3 apply_gemini_pages.py <source_batch.txt> <translated_response.txt>")
        sys.exit(1)

    with open(sys.argv[1], encoding='utf-8') as f:
        source_text = f.read()
    with open(sys.argv[2], encoding='utf-8') as f:
        trans_text = f.read()

    source_pages = parse(source_text)
    trans_pages = parse(trans_text)

    with open("/Users/detlefrathmer/Enneagramm-Kompass/en/bundle.js", encoding='utf-8') as f:
        bundle = f.read()

    for fn_name, trans in trans_pages.items():
        src = source_pages.get(fn_name)
        if src is None:
            print(f"  WARNING: no source block for {fn_name}, skipping")
            continue
        start, end = fn_bounds(bundle, fn_name)
        if start is None:
            print(f"  WARNING: {fn_name} not found in bundle.js")
            continue
        fn_code = bundle[start:end]

        replaced_h = replaced_p = replaced_bt = replaced_l = 0
        for de, en in zip(src['h'], trans['h']):
            match = find_in(fn_code, de)
            if match:
                fn_code = fn_code.replace(match, en, 1)
                replaced_h += 1
            else:
                print(f"  WARNING [{fn_name}] heading not found: {de[:60]!r}")

        for de, en in zip(src['p'], trans['p']):
            match = find_in(fn_code, de)
            if match:
                fn_code = fn_code.replace(match, en, 1)
                replaced_p += 1
            else:
                print(f"  WARNING [{fn_name}] paragraph not found (len {len(de)}): {de.strip()[:60]!r}")

        for de, en in zip(src['booktips'], trans['booktips']):
            match = find_in(fn_code, de)
            if match:
                fn_code = fn_code.replace(match, en, 1)
                replaced_bt += 1
            else:
                print(f"  WARNING [{fn_name}] booktip not found: {de[:60]!r}")

        for de, en in zip(src['labels'], trans['labels']):
            match = find_in(fn_code, f'label:"{de}"')
            if match:
                fn_code = fn_code.replace(match, f'label:"{en}"', 1)
                replaced_l += 1
            else:
                print(f"  WARNING [{fn_name}] label not found: {de[:60]!r}")

        bundle = bundle[:start] + fn_code + bundle[end:]
        print(f"  ✓ {fn_name}: h={replaced_h}/{len(src['h'])} p={replaced_p}/{len(src['p'])} booktip={replaced_bt}/{len(src['booktips'])} label={replaced_l}/{len(src['labels'])}")

    with open("/Users/detlefrathmer/Enneagramm-Kompass/en/bundle.js", 'w', encoding='utf-8') as f:
        f.write(bundle)
    print("\nDone.")

if __name__ == "__main__":
    main()
