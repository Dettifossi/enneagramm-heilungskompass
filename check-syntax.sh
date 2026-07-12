#!/bin/bash
# Syntax-Check für bundle.js – ausführen vor jedem git push
# Verwendung: ./check-syntax.sh

JSC="/System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Helpers/jsc"
BUNDLE="$(dirname "$0")/bundle.js"

ERRORS=0

# ── 1. Doppelte Funktionsnamen ──────────────────────────────────────────────
echo "Prüfe auf doppelte Funktionsnamen..."
DUPES=$(grep -oE '^function [a-zA-Z_][a-zA-Z0-9_]*' "$BUNDLE" | sort | uniq -d)
if [ -n "$DUPES" ]; then
  echo ""
  echo "❌ DOPPELTE FUNKTIONEN GEFUNDEN (SyntaxError im Browser):"
  echo "$DUPES"
  echo ""
  ERRORS=1
else
  echo "✅ Keine Duplikate"
fi

# ── 2. JSC Syntax-Check ─────────────────────────────────────────────────────
echo "Prüfe bundle.js auf Syntax-Fehler..."
TMPFILE=$(mktemp /tmp/bundle-check-XXXX.js)
sed 's/^import .*$//' "$BUNDLE" > "$TMPFILE"
RESULT=$("$JSC" "$TMPFILE" 2>&1)
rm -f "$TMPFILE"

if echo "$RESULT" | grep -q "SyntaxError"; then
  echo ""
  echo "❌ SYNTAX-FEHLER GEFUNDEN – bundle.js ist kaputt!"
  echo "$RESULT" | grep -E "SyntaxError|at /tmp"
  echo ""
  ERRORS=1
elif echo "$RESULT" | grep -q "ReferenceError\|Can't find variable"; then
  echo "✅ Syntax OK (ReferenceErrors in JSC sind normal – kein Browser)"
else
  echo "✅ Syntax OK"
fi

# ── Ergebnis ────────────────────────────────────────────────────────────────
echo ""
if [ $ERRORS -gt 0 ]; then
  echo "⛔ CHECK FEHLGESCHLAGEN – bitte beheben vor dem Push!"
  exit 1
else
  echo "✅ Alle Checks bestanden – sicher zum Pushen."
  exit 0
fi
