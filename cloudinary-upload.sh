#!/bin/bash
# Cloudinary Upload-Skript für Enneagramm-Kompass
# Verwendung: ./cloudinary-upload.sh <ordner> <cloudinary-ordner>
# Beispiel:   ./cloudinary-upload.sh assets/schaubilder/portraits-typen portraits-typen

set -e

# Credentials aus .env laden
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "$SCRIPT_DIR/.env"

LOKAL_ORDNER="${1:?Bitte lokalen Ordner angeben}"
CLOUD_ORDNER="${2:?Bitte Cloudinary-Zielordner angeben}"

echo "=== Cloudinary Upload ==="
echo "Lokal:    $LOKAL_ORDNER"
echo "Cloud:    kompass/$CLOUD_ORDNER"
echo ""

URLS_FILE="$SCRIPT_DIR/cloudinary-urls-$(basename "$CLOUD_ORDNER").txt"
> "$URLS_FILE"

shopt -s nullglob
FILES=("$SCRIPT_DIR/$LOKAL_ORDNER"/*.{png,jpg,jpeg,PNG,JPG,JPEG})

if [ ${#FILES[@]} -eq 0 ]; then
  echo "Keine Bilder gefunden in: $SCRIPT_DIR/$LOKAL_ORDNER"
  exit 1
fi

echo "Gefundene Dateien: ${#FILES[@]}"
echo ""

for FILE in "${FILES[@]}"; do
  FILENAME=$(basename "$FILE")
  # Public ID: Dateiname ohne Endung
  PUBLIC_ID="${FILENAME%.*}"
  # Leerzeichen durch Unterstrich ersetzen
  PUBLIC_ID="${PUBLIC_ID// /_}"

  echo -n "Uploading: $FILENAME ... "

  TIMESTAMP=$(date +%s)
  # Signatur erstellen
  SIGN_STRING="folder=kompass/${CLOUD_ORDNER}&public_id=${PUBLIC_ID}&timestamp=${TIMESTAMP}${CLOUDINARY_API_SECRET}"
  SIGNATURE=$(echo -n "$SIGN_STRING" | openssl dgst -sha1 | awk '{print $2}')

  RESPONSE=$(curl -s -X POST \
    "https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload" \
    -F "file=@${FILE}" \
    -F "api_key=${CLOUDINARY_API_KEY}" \
    -F "timestamp=${TIMESTAMP}" \
    -F "signature=${SIGNATURE}" \
    -F "folder=kompass/${CLOUD_ORDNER}" \
    -F "public_id=${PUBLIC_ID}")

  SECURE_URL=$(echo "$RESPONSE" | /usr/bin/python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('secure_url','ERROR: '+d.get('error',{}).get('message','unknown')))")

  if [[ "$SECURE_URL" == ERROR* ]]; then
    echo "FEHLER: $SECURE_URL"
  else
    echo "OK"
    echo "$FILENAME -> $SECURE_URL" >> "$URLS_FILE"
  fi
done

echo ""
echo "=== Fertig ==="
echo "URLs gespeichert in: $URLS_FILE"
