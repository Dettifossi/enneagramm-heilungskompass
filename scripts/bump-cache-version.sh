#!/usr/bin/env bash
# Zählt automatisch alle Cache-Busting-Versionsnummern hoch, basierend auf den
# aktuell im Repo stehenden Werten (kein manuelles Nachhalten von Versionsständen nötig).
#
# Usage:
#   scripts/bump-cache-version.sh             # bumpt DE + EN (bundle.js, changelog.js, sw.js)
#   scripts/bump-cache-version.sh --de-only    # nur DE-Seite
#   scripts/bump-cache-version.sh --en-only    # nur EN-Seite
#   scripts/bump-cache-version.sh --register   # zusätzlich den data/register.js?v=NN Import-Query bumpen (DE+EN)
#
# Sicher wiederholt ausführbar: liest den aktuellen Wert per grep, erhöht ihn um 1.

set -euo pipefail
cd "$(dirname "$0")/.."

DO_DE=1
DO_EN=1
DO_REGISTER=0

for arg in "$@"; do
  case "$arg" in
    --de-only) DO_DE=1; DO_EN=0 ;;
    --en-only) DO_DE=0; DO_EN=1 ;;
    --register) DO_REGISTER=1 ;;
    *) echo "Unbekannte Option: $arg" >&2; exit 1 ;;
  esac
done

# bump_in_file <datei> <literal-prefix-vor-der-zahl> <literal-suffix-nach-der-zahl (optional)>
bump_in_file() {
  local file="$1" prefix="$2" suffix="${3:-}"
  local escaped_prefix escaped_suffix cur new
  escaped_prefix=$(printf '%s' "$prefix" | sed 's/[.[\*^$/?]/\\&/g')
  escaped_suffix=$(printf '%s' "$suffix" | sed 's/[.[\*^$/?]/\\&/g')

  cur=$(grep -oE "${escaped_prefix}[0-9]+${escaped_suffix}" "$file" | head -1 | grep -oE '[0-9]+' || true)
  if [ -z "$cur" ]; then
    echo "WARNUNG: Muster '${prefix}<N>${suffix}' nicht gefunden in $file — übersprungen." >&2
    return
  fi
  new=$((cur + 1))
  sed -i '' "s/${escaped_prefix}${cur}${escaped_suffix}/${escaped_prefix}${new}${escaped_suffix}/" "$file"
  echo "  $file: $prefix$cur$suffix -> $prefix$new$suffix"
}

if [ "$DO_DE" = "1" ]; then
  echo "DE:"
  bump_in_file "index.html" "bundle.js?v=inhalt-v"
  bump_in_file "index.html" "data/changelog.js?v="
  bump_in_file "sw.js" "SW_VERSION = 'v" "'"
  bump_in_file "sw.js" "BUNDLE_VERSION = 'v" "'"
  if [ "$DO_REGISTER" = "1" ]; then
    bump_in_file "bundle.js" "./data/register.js?v="
  fi
fi

if [ "$DO_EN" = "1" ]; then
  echo "EN:"
  bump_in_file "en/index.html" "bundle.js?v=inhalt-v"
  bump_in_file "en/index.html" "data/changelog.js?v="
  bump_in_file "en/sw.js" "SW_VERSION = 'v" "'"
  bump_in_file "en/sw.js" "BUNDLE_VERSION = 'v" "'"
  if [ "$DO_REGISTER" = "1" ]; then
    bump_in_file "en/bundle.js" "../data/register.js?v="
  fi
fi

echo "Fertig."
