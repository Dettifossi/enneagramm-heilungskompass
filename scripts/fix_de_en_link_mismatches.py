#!/usr/bin/env python3
"""
Findet DE/EN-Inkongruenzen bei Porträt-Querverweisen (gleiches Porträt existiert
in beiden Sprachen, aber die relatedLinks-Ziele unterscheiden sich) und ergänzt
die fehlende Seite automatisch um den fehlenden Link-Eintrag, kopiert aus der
jeweils anderen Sprachversion.

Fügt den neuen Eintrag am Ende des relatedLinks([...])-Arrays der Zielfunktion ein.
Simple Labels ("Porträt: X (CODE)" / "Portrait: X (CODE)") werden automatisch
übersetzt; alles mit Zusatztext wird unverändert als needs_review ausgegeben,
NICHT automatisch eingefügt (Sprache/Kontext muss von Hand geprüft werden).

Usage: python3 scripts/fix_de_en_link_mismatches.py [--apply]
  ohne --apply: nur Dry-Run, zeigt was geändert würde.
"""
import re
import glob
import sys

def load(path):
    try:
        return open(path, encoding="utf-8").read()
    except FileNotFoundError:
        return ""

def route_to_function_map(bundle_text):
    matches = re.findall(r'"([a-z][a-z0-9\-/]+)"\s*:\s*(\w+Page)\b', bundle_text)
    route2fn, fn2route = {}, {}
    for route, fn in matches:
        route2fn[route] = fn
        fn2route.setdefault(fn, route)
    return route2fn, fn2route

def extract_bodies_with_files(globs):
    """fn_name -> (path, body_start_offset_in_file, body_text)"""
    out = {}
    for pattern in globs:
        for path in sorted(glob.glob(pattern)):
            text = load(path)
            starts = list(re.finditer(r"export function (\w+)\(\)\s*\{", text))
            for i, m in enumerate(starts):
                name = m.group(1)
                start = m.end()
                end = starts[i + 1].start() if i + 1 < len(starts) else len(text)
                out[name] = (path, start, text[start:end])
    return out

PORTRAIT_PREFIXES = ("beruehmte-", "kriminalpsychologie-", "krankheitsportraets-")
NON_PORTRAIT_ROUTES = {"beruehmte-persoenlichkeiten", "favoriten", "beruehmte-obama"}

def outgoing_link_objs(body):
    """route -> full '{route:"...", label:"..."}' object text (relatedLinks-Objekte)."""
    objs = {}
    for m in re.finditer(r'\{route\s*:\s*"([a-z][a-z0-9\-/]+)"\s*,\s*label\s*:\s*"((?:[^"\\]|\\.)*)"\s*\}', body):
        route, label = m.group(1), m.group(2)
        if route.startswith(PORTRAIT_PREFIXES) and route not in NON_PORTRAIT_ROUTES:
            objs[route] = (m.group(0), label)
    return objs

def outgoing_link_objs_no_self(body, self_route):
    objs = outgoing_link_objs(body)
    objs.pop(self_route, None)
    return objs

SIMPLE_DE = re.compile(r'^Portr(?:ä|\\u00e4|\\xe4)t: (.+?) \(([A-Z]{2}\dw\d)\)$')
SIMPLE_EN = re.compile(r'^Portrait: (.+?) \(([A-Z]{2}\dw\d)\)$')

def translate_simple_label(label, target_lang):
    if target_lang == "en":
        m = SIMPLE_DE.match(label)
        if m:
            return f'Portrait: {m.group(1)} ({m.group(2)})'
    else:
        m = SIMPLE_EN.match(label)
        if m:
            return f'Porträt: {m.group(1)} ({m.group(2)})'
    return None

def insert_link(path, body_start, body, route, label):
    """Fügt {route:"...",label:"..."} vor der letzten schließenden Klammer eines
    relatedLinks([...])-Aufrufs innerhalb 'body' ein (dem ersten relatedLinks-Call)."""
    full_text = load(path)
    # finde relatedLinks([ ... ]) innerhalb des body-Bereichs
    rel_match = re.search(r"\$\{relatedLinks\(\[", body)
    if not rel_match:
        return False, full_text
    # finde das passende schließende "])}" nach rel_match
    close_match = re.search(r"\]\)\}", body[rel_match.end():])
    if not close_match:
        return False, full_text
    insert_pos_in_body = rel_match.end() + close_match.start()
    abs_pos = body_start + insert_pos_in_body
    new_entry = f'        {{route:"{route}", label:"{label}"}},\n      '
    new_full = full_text[:abs_pos] + new_entry + full_text[abs_pos:]
    return True, new_full

def main():
    apply = "--apply" in sys.argv

    de_bundle = load("bundle.js")
    en_bundle = load("en/bundle.js")
    de_r2f, de_f2r = route_to_function_map(de_bundle)
    en_r2f, en_f2r = route_to_function_map(en_bundle)

    de_globs = ["data/beruehmte-de/*.js", "data/kriminal-de/*.js", "data/krankheitsportraets-de/*.js"]
    en_globs = ["en/data/beruehmte-en/*.js", "en/data/kriminal-en/*.js", "en/data/krankheitsportraets-en/*.js"]

    de_bodies = extract_bodies_with_files(de_globs)
    en_bodies = extract_bodies_with_files(en_globs)

    de_edges = {}  # route -> {route: (obj_text, label)}
    for fn, (path, start, body) in de_bodies.items():
        src = de_f2r.get(fn)
        if not src:
            continue
        de_edges[src] = outgoing_link_objs_no_self(body, src)

    en_edges = {}
    for fn, (path, start, body) in en_bodies.items():
        src = en_f2r.get(fn)
        if not src:
            continue
        en_edges[src] = outgoing_link_objs_no_self(body, src)

    common_routes = set(de_edges) & set(en_edges)

    applied, needs_review = [], []

    # Wir sammeln geplante Inserts pro Datei, um Offsets nicht durcheinanderzubringen
    # (mehrere Inserts in derselben Datei -> von hinten nach vorn einfügen).
    pending = {}  # path -> list of (abs_pos, text)

    for src in sorted(common_routes):
        de_targets = de_edges.get(src, {})
        en_targets = en_edges.get(src, {})

        # DE hat einen Link, den EN nicht hat
        for tgt, (obj_text, label) in de_targets.items():
            if tgt in en_r2f and tgt not in en_targets:
                fn = de_r2f is None  # placeholder unused
        # simpler: rebuild via de_f2r/en using fn name mapping through function name of src
        # (src ist Route, wir brauchen die EN-Funktion für src)
        en_fn = en_r2f.get(src)
        de_fn = de_r2f.get(src)
        if not en_fn or not de_fn:
            continue

        for tgt, (obj_text, label) in de_targets.items():
            if tgt in en_r2f and tgt not in en_targets:
                new_label = translate_simple_label(label, "en")
                if new_label is None:
                    needs_review.append(("en", src, tgt, label))
                    continue
                path, start, body = en_bodies[en_fn]
                ok, _ = insert_link(path, start, body, tgt, new_label)
                if ok:
                    pending.setdefault(path, []).append((path, start, body, tgt, new_label))
                    applied.append(("en", src, tgt, new_label))

        for tgt, (obj_text, label) in en_targets.items():
            if tgt in de_r2f and tgt not in de_targets:
                new_label = translate_simple_label(label, "de")
                if new_label is None:
                    needs_review.append(("de", src, tgt, label))
                    continue
                path, start, body = de_bodies[de_fn]
                ok, _ = insert_link(path, start, body, tgt, new_label)
                if ok:
                    pending.setdefault(path, []).append((path, start, body, tgt, new_label))
                    applied.append(("de", src, tgt, new_label))

    print(f"{len(applied)} automatisch ergänzbare Links (einfaches Label-Muster):")
    for lang, src, tgt, label in applied:
        print(f"  [{lang}] {src}: + {tgt}  ({label})")

    print(f"\n{len(needs_review)} Links mit individuellem Label — manuell prüfen/übersetzen:")
    for lang, src, tgt, label in needs_review:
        print(f"  [{lang} fehlt bei {src}] -> {tgt}: {label!r}")

    if apply and pending:
        for path, entries in pending.items():
            full_text = load(path)
            # von hinten nach vorn einfügen (höchste body_start zuerst), damit Offsets stabil bleiben
            inserts = []
            for (p, start, body, tgt, label) in entries:
                rel_match = re.search(r"\$\{relatedLinks\(\[", body)
                close_match = re.search(r"\]\)\}", body[rel_match.end():])
                abs_pos = start + rel_match.end() + close_match.start()
                inserts.append((abs_pos, tgt, label))
            inserts.sort(key=lambda x: -x[0])
            for abs_pos, tgt, label in inserts:
                new_entry = f'        {{route:"{tgt}", label:"{label}"}},\n      '
                full_text = full_text[:abs_pos] + new_entry + full_text[abs_pos:]
            with open(path, "w", encoding="utf-8") as f:
                f.write(full_text)
            print(f"geschrieben: {path} (+{len(entries)} Link(s))")

if __name__ == "__main__":
    main()
