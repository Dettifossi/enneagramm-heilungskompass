#!/usr/bin/env python3
"""
apply_gemini_pages.py
Applies Gemini-translated PAGE texts to en/bundle.js.
Usage: python3 apply_gemini_pages.py <gemini_output_file.txt>
"""
import re, sys

def parse_gemini_output(text):
    pages = {}
    blocks = re.split(r'=== PAGE: (.+?) ===', text)
    for i in range(1, len(blocks), 2):
        fn_name = blocks[i].strip()
        content = blocks[i+1] if i+1 < len(blocks) else ""
        h_list, p_list, booktips, labels = [], [], [], []
        for line in content.split('\n'):
            line = line.rstrip()
            if not line: continue
            if line.startswith('[H] '):
                h_list.append(line[4:])
            elif line.startswith('[P] '):
                p_list.append(line[4:])
            elif line.startswith('[BOOKTIP] '):
                booktips.append(line[10:])
            elif line.startswith('[LABEL] '):
                labels.append(line[8:])
        pages[fn_name] = {'h': h_list, 'p': p_list, 'booktips': booktips, 'labels': labels}
    return pages

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

def apply_translations(fn_code, trans):
    result = fn_code

    # psycho-intro paragraph (first p.psycho-intro) - not in h/p lists, handle separately
    # Headings h2/h3/h4 (in order)
    h_iter = iter(trans['h'])
    def replace_h(m):
        try: return m.group(1) + next(h_iter) + m.group(3)
        except StopIteration: return m.group(0)
    result = re.sub(r'(<h[234][^>]*>)([^<]+)(</h[234]>)', replace_h, result)

    # psycho-intro + vb-intro paragraphs (in order) combined
    p_iter = iter(trans['p'])
    def replace_p(m):
        try:
            return m.group(1) + next(p_iter) + m.group(3)
        except StopIteration:
            return m.group(0)
    result = re.sub(r'(<p class="(?:psycho-intro|vb-intro)">)(.*?)(</p>)', replace_p, result, flags=re.S)

    # BookTip descriptions (2nd argument) - in order
    bt_iter = iter(trans['booktips'])
    def replace_bt(m):
        try:
            return m.group(1) + next(bt_iter) + m.group(3)
        except StopIteration:
            return m.group(0)
    result = re.sub(r'(bookTip\("[^"]+",\s*")([^"]*)("\s*,)', replace_bt, result)

    # Labels (in order)
    label_iter = iter(trans['labels'])
    def replace_label(m):
        try: return 'label:"' + next(label_iter) + '"'
        except StopIteration: return m.group(0)
    result = re.sub(r'label:"([^"]+)"', replace_label, result)

    return result

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 apply_gemini_pages.py <gemini_output.txt>")
        sys.exit(1)

    with open(sys.argv[1], encoding='utf-8') as f:
        gemini_text = f.read()

    pages = parse_gemini_output(gemini_text)
    print(f"Parsed {len(pages)} pages: {list(pages.keys())}")

    with open("/Users/detlefrathmer/Enneagramm-Kompass/en/bundle.js", encoding='utf-8') as f:
        bundle = f.read()

    replaced = 0
    for fn_name, trans in pages.items():
        start, end = fn_bounds(bundle, fn_name)
        if start is None:
            print(f"  WARNING: {fn_name} not found in bundle.js")
            continue
        old_fn = bundle[start:end]
        new_fn = apply_translations(old_fn, trans)
        bundle = bundle[:start] + new_fn + bundle[end:]
        replaced += 1
        print(f"  ✓ {fn_name}")

    with open("/Users/detlefrathmer/Enneagramm-Kompass/en/bundle.js", 'w', encoding='utf-8') as f:
        f.write(bundle)
    print(f"\nDone! Replaced {replaced} page functions.")

if __name__ == "__main__":
    main()
