#!/usr/bin/env python3
"""
DE/EN-Paritaetscheck fuer den Enneagramm-Kompass.
Findet:
  1. Routen, die nur in einer Sprachversion existieren
  2. Datenquellen, die von en/bundle.js direkt aus einer *_de*-Datei importiert werden
     (statt aus einer eigenen _en-Variante) - haeufigste Ursache fuer "komplett deutsche Seite in EN"
  3. Auffaellige deutsche Woerter in en/bundle.js außerhalb bekannter Ausnahmen (grobe Heuristik)

Aufruf: python3 tools/check-parity.py
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

def read(path):
    return (ROOT / path).read_text(encoding="utf-8")

def extract_routes(js_text):
    """Findet alle String-Routen, die als data-route/route: verwendet werden."""
    routes = set()
    for m in re.finditer(r'route:\s*"([a-z0-9\-/]+)"', js_text):
        routes.add(m.group(1))
    for m in re.finditer(r'"([a-z0-9\-]+)":\s*\(?\)?\s*=>', js_text):
        routes.add(m.group(1))
    for m in re.finditer(r'"([a-z0-9\-]+)":\s*[a-zA-Z_][a-zA-Z0-9_]*Page,', js_text):
        routes.add(m.group(1))
    return routes

def main():
    de = read("app.js")
    en = read("en/bundle.js")

    print("=" * 70)
    print("1) ROUTEN-PARITAET (Register DE vs. EN)")
    print("=" * 70)
    de_reg = read("data/register.js")
    de_terms = set(re.findall(r'route:\s*"([a-z0-9\-]+)"', de_reg.split("// EN")[0] if "// EN" in de_reg else de_reg))
    print(f"Register-Routen gefunden: {len(de_terms)} (grobe Heuristik, kein Fehlerbild allein)")

    print()
    print("=" * 70)
    print("2) SHARED-IMPORT-CHECK: importiert en/bundle.js eine *deutsche* Datenquelle")
    print("   ohne eigene _en-Variante? (Hauptursache fuer komplett deutsche EN-Seiten)")
    print("=" * 70)
    imports = re.findall(r'import\s*\{([^}]+)\}\s*from\s*"(\.\./data/[a-zA-Z0-9_\-]+\.js)', en)
    suspects = []
    for names, path in imports:
        fname = path.split("/")[-1]
        # Wenn der importierte Dateiname keine "_en" Kennzeichnung hat und nicht in einer
        # bekannten Ausnahmeliste (Datenquellen, die bewusst sprachneutral sind) steht:
        neutral_ok = {
            "de.js",  # enthaelt bereits pro Feld ..._en Varianten, kein 1:1-Fall
            "register.js",  # exportiert registerEntries UND registerEntriesEN
            "differenzierungen.js",  # jede Paarung hat bereits textEN/kernAen/kernBen inline
            "situationskompass.js",  # enthaelt DE+EN Text nebeneinander im selben Objekt
        }
        if "_en" not in fname and fname not in neutral_ok:
            suspects.append((names.strip(), fname))
    if suspects:
        for names, fname in suspects:
            print(f"  VERDACHT: en/bundle.js importiert '{names}' aus '{fname}' (keine _en-Variante gefunden)")
        print()
        print("  -> Pruefen: enthaelt diese Datei rein strukturelle Daten (Zahlen, Routen) oder")
        print("     sichtbaren App-Text? Nur Text-Faelle sind ein echter Bug.")
    else:
        print("  Keine Verdachtsfaelle gefunden.")

    print()
    print("=" * 70)
    print("3) ROUTEN NUR IN EINER SPRACHVERSION")
    print("=" * 70)
    de_routes = extract_routes(de)
    en_routes = extract_routes(en)
    only_de = sorted(de_routes - en_routes)
    only_en = sorted(en_routes - de_routes)
    print(f"Nur in DE ({len(only_de)}):")
    for r in only_de[:40]:
        print(f"  - {r}")
    if len(only_de) > 40:
        print(f"  ... und {len(only_de)-40} weitere")
    print(f"\nNur in EN ({len(only_en)}):")
    for r in only_en[:40]:
        print(f"  - {r}")
    if len(only_en) > 40:
        print(f"  ... und {len(only_en)-40} weitere")

if __name__ == "__main__":
    main()
