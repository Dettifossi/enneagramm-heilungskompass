#!/bin/bash
# Verkleinert überdimensionierte JPEGs (Original-Fotos oft 3000-4800px, im
# Layout aber nie größer als ~1600px angezeigt) und komprimiert alle JPEGs
# auf Qualität 78 (visuell praktisch nicht unterscheidbar, deutlich kleiner).
# Pfade/Dateinamen bleiben unverändert, kein Code muss angepasst werden.
set -euo pipefail
cd "$(dirname "$0")/.."

MAX_DIM=1600
QUALITY=78
count=0
before_total=0
after_total=0

while IFS= read -r -d '' f; do
  before=$(stat -f%z "$f")
  before_total=$((before_total + before))

  dims=$(sips -g pixelWidth -g pixelHeight "$f" 2>/dev/null)
  w=$(echo "$dims" | awk '/pixelWidth/{print $2}')
  h=$(echo "$dims" | awk '/pixelHeight/{print $2}')

  if [ "$w" -gt "$MAX_DIM" ] || [ "$h" -gt "$MAX_DIM" ]; then
    sips -s format jpeg -Z "$MAX_DIM" -s formatOptions "$QUALITY" "$f" --out "$f" >/dev/null 2>&1
  else
    sips -s format jpeg -s formatOptions "$QUALITY" "$f" --out "$f" >/dev/null 2>&1
  fi

  after=$(stat -f%z "$f")
  after_total=$((after_total + after))
  count=$((count + 1))
done < <(find . \( -iname "*.jpg" -o -iname "*.jpeg" \) -not -path "./node_modules/*" -print0)

echo "Fertig: $count Bilder verarbeitet."
echo "Vorher:  $((before_total / 1024 / 1024)) MB"
echo "Nachher: $((after_total / 1024 / 1024)) MB"
