#!/usr/bin/env python3
"""
apply_gemini_translation.py
Applies Gemini-translated portrait texts to en/bundle.js.
Usage: python3 apply_gemini_translation.py <gemini_output_file.txt>
"""
import re, sys

FUNCTION_MAP = {
    "Adele Neuhauser": "adeleNeuhauserPortraitPage",
    "Angela Merkel": "angelaMerkelPortraitPage",
    "Boris Becker": "borisBeckerPortraitPage",
    "Caroline Peters": "carolinePetersPortraitPage",
    "Carsten Stahl": "carstenStahlPortraitPage",
    "Dakota Johnson": "dakotaJohnsonPortraitPage",
    "David L. Rathmer": "davidLRathmerPortraitPage",
    "Dieter Nuhr": "dieterNuhrPortraitPage",
    "Donata Hopfen": "donataHopfenPortraitPage",
    "Frédéric Chopin": "fredericChopinPortraitPage",
    "Gloria von Thurn und Taxis": "gloriaVonThurnUndTaxisPortraitPage",
    "Golda Meir": "goldaMeirPortraitPage",
    "Günther Jauch": "guentherJauchPortraitPage",
    "Iga Świątek": "igaSwiatekPortraitPage",
    "Jacqueline Mars": "jacquelineMarsPortraitPage",
    "Jamaica Kincaid": "jamaicaKincaidPortraitPage",
    "James Levine": "jamesLevinePortraitPage",
    "Jamie Lee Curtis": "jamieleecurtisPortraitPage",
    "Jürgen Klopp": "juergenKloppPortraitPage",
    "Karl Lagerfeld": "karlLagerfeldPortraitPage",
    "Karoline Herfurth": "karolineHerfurthPortraitPage",
    "Kevin Costner": "kevinCostnerPortraitPage",
    "Klaus Kinski": "klausKinskiPortraitPage",
    "Lena Meyer-Landrut": "lenaMeyerLandrutPortraitPage",
    "Linda Leinweber": "lindaLeinweberPortraitPage",
    "Mariah Carey": "mariahCareyPortraitPage",
    "Marie-Agnes Strack-Zimmermann": "marieAgnesStrackZimmermannPortraitPage",
    "Marie Kondo": "marieKondoPortraitPage",
    "Meg Ryan": "megRyanPortraitPage",
    "Melanie Kreis": "melanieKreisPortraitPage",
    "Michael Schumacher": "michaelSchumacherPortraitPage",
    "Monika Gruber": "monikaGruberPortraitPage",
    "Neil Armstrong": "neilArmstrongPortraitPage",
    "Pamela Reif": "pamelaReifPortraitPage",
    "Queen Elizabeth II.": "queenElizabethIIPortraitPage",
    "Rihanna": "rihannaPortraitPage",
    "Ronald Reagan": "ronaldReaganPortraitPage",
    "Rowan Atkinson": "rowanAtkinsonPortraitPage",
    "Ruth Bader Ginsburg": "ruthBaderGinsburgPortraitPage",
    "Sahra Wagenknecht": "sahraWagenknechtPortraitPage",
    "Sucharit Bhakdi": "sucharitBhakdiPortraitPage",
    "Sundar Pichai": "sundarPichaiPortraitPage",
    "Tim Bendzko": "timBendzkoPortraitPage",
    "Uli Hoeneß": "uliHoenessPortraitPage",
    "Vera Birkenbihl": "veraBirkenbihlPortraitPage",
    "Wallace Shawn": "wallaceShawnPortraitPage",
    "Warren Buffett": "warrenBuffettPortraitPage",
    "Will Smith": "willSmithPortraitPage",
    "Wolodymyr Selenskyj": "wolodymyrSelenskyjPortraitPage",
}

def parse_gemini_output(text):
    portraits = {}
    blocks = re.split(r'=== PORTRAIT: (.+?) ===', text)
    for i in range(1, len(blocks), 2):
        name = blocks[i].strip()
        content = blocks[i+1] if i+1 < len(blocks) else ""
        subtitle, h2_list, p_list, booktip_descs, labels = None, [], [], {}, []
        for line in content.split('\n'):
            line = line.rstrip()
            if not line: continue
            if line.startswith('[SUBTITLE] '):
                subtitle = line[11:]
            elif line.startswith('[H2] '):
                h2_list.append(line[5:])
            elif line.startswith('[P] '):
                p_list.append(line[4:])
            elif line.startswith('[BOOKTIP_DESC|'):
                m = re.match(r'\[BOOKTIP_DESC\|([^|]+)\|([^\]]+)\] (.*)', line)
                if m: booktip_descs[m.group(1)] = m.group(3)
            elif line.startswith('[LABEL] '):
                labels.append(line[8:])
        portraits[name] = {'subtitle': subtitle, 'h2': h2_list, 'p': p_list,
                           'booktip_descs': booktip_descs, 'labels': labels}
    return portraits

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

    # Subtitle
    if trans['subtitle']:
        result = re.sub(
            r'(krim-portrait-subtitle">)[^<]+(</p>)',
            lambda m: m.group(1) + trans['subtitle'] + m.group(2),
            result
        )

    # H2 headings (in order)
    h2_iter = iter(trans['h2'])
    def replace_h2(m):
        try: return m.group(1) + next(h2_iter) + m.group(3)
        except StopIteration: return m.group(0)
    result = re.sub(r'(<h2[^>]*>)([^<]+)(</h2>)', replace_h2, result)

    # Paragraphs (in order) — replace entire innerHTML
    p_iter = iter(trans['p'])
    def replace_p(m):
        try: return '<p class="vb-intro">' + next(p_iter) + '</p>'
        except StopIteration: return m.group(0)
    result = re.sub(r'<p class="vb-intro">.*?</p>', replace_p, result, flags=re.S)

    # BookTip descriptions
    for book_id, desc in trans['booktip_descs'].items():
        result = re.sub(
            r'(bookTip\("' + re.escape(book_id) + r'",\s*)"[^"]*"',
            lambda m, d=desc: m.group(1) + '"' + d + '"',
            result
        )

    # Labels (in order)
    label_iter = iter(trans['labels'])
    def replace_label(m):
        try: return 'label:"' + next(label_iter) + '"'
        except StopIteration: return m.group(0)
    result = re.sub(r'label:"([^"]+)"', replace_label, result)

    return result

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 apply_gemini_translation.py <gemini_output.txt>")
        sys.exit(1)

    with open(sys.argv[1], encoding='utf-8') as f:
        gemini_text = f.read()

    portraits = parse_gemini_output(gemini_text)
    print(f"Parsed {len(portraits)} portraits: {list(portraits.keys())}")

    with open("/Users/detlefrathmer/Enneagramm-Kompass/en/bundle.js", encoding='utf-8') as f:
        bundle = f.read()

    replaced = 0
    for name, trans in portraits.items():
        fn_name = FUNCTION_MAP.get(name)
        if not fn_name:
            print(f"  WARNING: No function mapping for '{name}'")
            continue
        start, end = fn_bounds(bundle, fn_name)
        if start is None:
            print(f"  WARNING: {fn_name} not found in bundle.js")
            continue
        old_fn = bundle[start:end]
        new_fn = apply_translations(old_fn, trans)
        bundle = bundle[:start] + new_fn + bundle[end:]
        replaced += 1
        print(f"  ✓ {name}")

    with open("/Users/detlefrathmer/Enneagramm-Kompass/en/bundle.js", 'w', encoding='utf-8') as f:
        f.write(bundle)
    print(f"\nDone! Replaced {replaced} portrait functions.")

if __name__ == "__main__":
    main()
