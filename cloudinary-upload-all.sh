#!/bin/bash
# Cloudinary Upload – alle Assets rekursiv
# Verwendung: ./cloudinary-upload-all.sh

set -e
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "$SCRIPT_DIR/.env"

ASSETS="$SCRIPT_DIR/assets"
LOG="$SCRIPT_DIR/cloudinary-all-urls.txt"
ERRORS="$SCRIPT_DIR/cloudinary-errors.txt"
> "$LOG"
> "$ERRORS"

MAX_SIZE=$((9 * 1024 * 1024))  # 9 MB Limit (Puffer vor 10 MB)

upload_file() {
  local FILE="$1"
  local REL="${FILE#$SCRIPT_DIR/}"          # z.B. assets/schaubilder/tee/tee-uebersicht-1.png
  local CLOUD_FOLDER="kompass/$(dirname "$REL")"   # z.B. kompass/assets/schaubilder/tee
  local FILENAME=$(basename "$FILE")
  local PUBLIC_ID="${FILENAME%.*}"
  PUBLIC_ID="${PUBLIC_ID// /_}"

  # Datei zu groß? → JPEG konvertieren in tmp
  local UPLOAD_FILE="$FILE"
  local TMP_FILE=""
  local FILESIZE=$(stat -f%z "$FILE")
  if [ "$FILESIZE" -gt "$MAX_SIZE" ]; then
    TMP_FILE="/private/tmp/cld_upload_$(basename "$FILE").jpg"
    sips -s format jpeg -s formatOptions 85 "$FILE" --out "$TMP_FILE" >/dev/null 2>&1
    UPLOAD_FILE="$TMP_FILE"
  fi

  local TIMESTAMP=$(date +%s)
  local SIGN_STRING="folder=${CLOUD_FOLDER}&public_id=${PUBLIC_ID}&timestamp=${TIMESTAMP}${CLOUDINARY_API_SECRET}"
  local SIGNATURE=$(echo -n "$SIGN_STRING" | openssl dgst -sha1 | awk '{print $2}')

  local RESPONSE=$(curl -s -X POST \
    "https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload" \
    -F "file=@${UPLOAD_FILE}" \
    -F "api_key=${CLOUDINARY_API_KEY}" \
    -F "timestamp=${TIMESTAMP}" \
    -F "signature=${SIGNATURE}" \
    -F "folder=${CLOUD_FOLDER}" \
    -F "public_id=${PUBLIC_ID}")

  [ -n "$TMP_FILE" ] && rm -f "$TMP_FILE"

  local SECURE_URL=$(echo "$RESPONSE" | /usr/bin/python3 -c \
    "import sys,json; d=json.load(sys.stdin); print(d.get('secure_url','ERR:'+str(d.get('error',{}).get('message',''))))")

  if [[ "$SECURE_URL" == ERR:* ]]; then
    echo "  FEHLER: $SECURE_URL"
    echo "$REL | $SECURE_URL" >> "$ERRORS"
  else
    echo "  OK"
    echo "$REL | $SECURE_URL" >> "$LOG"
  fi
}

echo "=== Cloudinary Upload – alle Assets ==="
echo "Suche Bilder in: $ASSETS"
echo ""

COUNT=0
TOTAL=$(find "$ASSETS" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.webp" \) \
  ! -path "*/portraits-typen/*" | wc -l | tr -d ' ')

echo "Gefundene Dateien: $TOTAL (portraits-typen bereits hochgeladen, wird übersprungen)"
echo ""

while IFS= read -r FILE; do
  COUNT=$((COUNT + 1))
  REL="${FILE#$SCRIPT_DIR/}"
  echo -n "[$COUNT/$TOTAL] $REL ..."
  upload_file "$FILE"
done < <(find "$ASSETS" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.webp" \) \
  ! -path "*/portraits-typen/*" | sort)

echo ""
echo "=== Fertig ==="
echo "Erfolgreich: $(wc -l < "$LOG" | tr -d ' ')"
echo "Fehler:      $(wc -l < "$ERRORS" | tr -d ' ')"
echo "URLs in:     $LOG"
[ -s "$ERRORS" ] && echo "Fehler in:   $ERRORS"
