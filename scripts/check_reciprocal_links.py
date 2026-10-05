#!/usr/bin/env python3
"""
Reziprozitäts-Checker für Porträt-Querverweise (Berühmte Persönlichkeiten,
Kriminalpsychologie, Krankheitsporträts).

Findet Porträts, die auf ein anderes Porträt verlinken (relatedLinks oder
Inline-<a data-route>), das nicht zurückverlinkt. Rein informativ, kein
Blocker im Pre-Commit-Hook — nicht jede Asymmetrie ist ein Fehler (manche
Verweise sind bewusst einseitig, z. B. wenn Porträt A vor Porträt B entstand
und B noch nicht überarbeitet wurde), aber die Liste ist eine gute Grundlage
für eine gelegentliche Cross-Link-Pflege-Runde.

Usage:
  python3 scripts/check_reciprocal_links.py            # DE
  python3 scripts/check_reciprocal_links.py --lang en   # EN
  python3 scripts/check_reciprocal_links.py --lang both
"""
import re
import glob
import argparse


def load(path):
    try:
        return open(path, encoding="utf-8").read()
    except FileNotFoundError:
        return ""


def route_to_function_map(bundle_text):
    # z. B.  "beruehmte-gordon-ramsay": gordonRamsayPortraitPage,
    matches = re.findall(r'"([a-z][a-z0-9\-/]+)"\s*:\s*(\w+Page)\b', bundle_text)
    route2fn, fn2route = {}, {}
    for route, fn in matches:
        route2fn[route] = fn
        fn2route.setdefault(fn, route)
    return route2fn, fn2route


def extract_function_bodies(text):
    """fn_name -> body text, zwischen 'export function NAME() {' und der nächsten."""
    bodies = {}
    starts = list(re.finditer(r"export function (\w+)\(\)\s*\{", text))
    for i, m in enumerate(starts):
        name = m.group(1)
        start = m.end()
        end = starts[i + 1].start() if i + 1 < len(starts) else len(text)
        bodies[name] = text[start:end]
    return bodies


PORTRAIT_PREFIXES = ("beruehmte-", "kriminalpsychologie-", "krankheitsportraets-")
NON_PORTRAIT_ROUTES = {"beruehmte-persoenlichkeiten", "favoriten", "beruehmte-obama"}


def outgoing_routes(body):
    routes = set(re.findall(r'route\s*:\s*"([a-z][a-z0-9\-/]+)"', body))
    routes |= set(re.findall(r'data-route="([a-z][a-z0-9\-/]+)"', body))
    return {r for r in routes if r.startswith(PORTRAIT_PREFIXES) and r not in NON_PORTRAIT_ROUTES}


def check(lang):
    if lang == "de":
        bundle = load("bundle.js")
        globs = [
            "data/beruehmte-de/*.js",
            "data/kriminal-de/*.js",
            "data/krankheitsportraets-de/*.js",
        ]
    else:
        bundle = load("en/bundle.js")
        globs = [
            "en/data/beruehmte-en/*.js",
            "en/data/kriminal-en/*.js",
            "en/data/krankheitsportraets-en/*.js",
        ]

    route2fn, fn2route = route_to_function_map(bundle)

    edges = {}  # source_route -> set(target_route)
    for pattern in globs:
        for path in sorted(glob.glob(pattern)):
            text = load(path)
            for fn, body in extract_function_bodies(text).items():
                src_route = fn2route.get(fn)
                if not src_route:
                    continue
                targets = outgoing_routes(body)
                targets.discard(src_route)
                if targets:
                    edges.setdefault(src_route, set()).update(targets)

    asymmetric = []
    for src, targets in edges.items():
        for tgt in sorted(targets):
            if tgt not in route2fn:
                continue  # Ziel ist keine bekannte Porträt-Route (z. B. Subtyp-Profil)
            if src not in edges.get(tgt, set()):
                asymmetric.append((src, tgt))

    print(f"\n=== {lang.upper()} ===")
    if not asymmetric:
        print("Keine einseitigen Porträt-Querverweise gefunden.")
        return
    print(f"{len(asymmetric)} einseitige(r) Querverweis(e) — Kandidaten für Ergänzung:\n")
    for src, tgt in sorted(asymmetric):
        print(f"  {src}  ->  {tgt}   (Rückverweis von {tgt} auf {src} fehlt)")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--lang", choices=["de", "en", "both"], default="de")
    args = ap.parse_args()
    langs = ["de", "en"] if args.lang == "both" else [args.lang]
    for lang in langs:
        check(lang)


if __name__ == "__main__":
    main()
