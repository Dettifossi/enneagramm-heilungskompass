#!/bin/bash
# Download 27 animal sounds from Wikimedia Commons, trim to 5s, upload to Cloudinary.
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "$SCRIPT_DIR/.env"

OUTDIR="$SCRIPT_DIR/tier-sounds-tmp"
mkdir -p "$OUTDIR"
RESULT="$SCRIPT_DIR/tier-sounds-urls.json"
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"
WMC_API="https://commons.wikimedia.org/w/api.php"

# ── helpers ───────────────────────────────────────────────────────────────────
wmc_search() {
  local q="$1"
  curl -s -A "$UA" \
    "${WMC_API}?action=query&list=search&srsearch=$(python3 -c "import urllib.parse,sys; print(urllib.parse.quote(sys.argv[1]))" "$q filetype:audio")&srnamespace=6&srlimit=15&format=json"
}

wmc_file_url() {
  local title="$1"
  local enc
  enc=$(python3 -c "import urllib.parse,sys; print(urllib.parse.quote(sys.argv[1]))" "$title")
  curl -s -A "$UA" \
    "${WMC_API}?action=query&titles=$(echo "$enc")&prop=imageinfo&iiprop=url|mime|size&format=json"
}

trim_and_upload() {
  local code="$1" name="$2" raw="$3"
  local mp3="$OUTDIR/${code}.mp3"

  echo "  Konvertiere & trimme auf 5 s …"
  ffmpeg -y -i "$raw" -t 5 -vn -ar 44100 -ac 1 -b:a 96k "$mp3" -loglevel error

  echo "  Lade hoch auf Cloudinary …"
  local TS SIGN_STR SIG RESP URL
  TS=$(date +%s)
  SIGN_STR="folder=${CLOUDINARY_CLOUD_NAME:+kompass/tier-sounds}&public_id=${code}&resource_type=video&timestamp=${TS}${CLOUDINARY_API_SECRET}"
  # Cloudinary sign: folder + public_id + resource_type + timestamp + secret
  SIGN_STR="folder=kompass/tier-sounds&public_id=${code}&resource_type=video&timestamp=${TS}${CLOUDINARY_API_SECRET}"
  SIG=$(echo -n "$SIGN_STR" | openssl dgst -sha1 | awk '{print $2}')

  RESP=$(curl -s -X POST \
    "https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/video/upload" \
    -F "file=@${mp3}" \
    -F "api_key=${CLOUDINARY_API_KEY}" \
    -F "timestamp=${TS}" \
    -F "signature=${SIG}" \
    -F "folder=kompass/tier-sounds" \
    -F "public_id=${code}" \
    -F "resource_type=video")

  URL=$(echo "$RESP" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('secure_url','ERR:'+str(d.get('error',{}).get('message',''))))" 2>/dev/null || echo "ERR:parse")
  echo "$URL"
}

# ── 27 animals ────────────────────────────────────────────────────────────────
declare -A QUERIES
QUERIES[se1]="golden eagle screech call"
QUERIES[so1]="Canada goose honk"
QUERIES[sx1]="snake hiss"
QUERIES[se2]="hippopotamus grunt vocalization"
QUERIES[so2]="dog bark"
QUERIES[sx2]="camel grunt vocalization"
QUERIES[se3]="raccoon chatter vocalization"
QUERIES[so3]="cheetah chirp call"
QUERIES[sx3]="peacock call"
QUERIES[se4]="pigeon dove coo"
QUERIES[so4]="armadillo"
QUERIES[sx4]="small dog yap bark"
QUERIES[se5]="owl hoot"
QUERIES[so5]="underwater ocean ambient"
QUERIES[sx5]="hedgehog snuffle"
QUERIES[se6]="rabbit thump"
QUERIES[so6]="meerkat alarm call"
QUERIES[sx6]="wolf howl"
QUERIES[se7]="gorilla grunt vocalization"
QUERIES[so7]="beaver"
QUERIES[sx7]="chimpanzee pant hoot"
QUERIES[se8]="orangutan call"
QUERIES[so8]="lion roar"
QUERIES[sx8]="crocodile hiss"
QUERIES[se9]="elephant trumpet"
QUERIES[so9]="bison buffalo grunt"
QUERIES[sx9]="sloth"

declare -A NAMES
NAMES[se1]="Adler" NAMES[so1]="Gans" NAMES[sx1]="Schwarze Mamba"
NAMES[se2]="Flusspferd" NAMES[so2]="Golden Retriever" NAMES[sx2]="Kamel"
NAMES[se3]="Waschbär" NAMES[so3]="Gepard" NAMES[sx3]="Pfau"
NAMES[se4]="Taube" NAMES[so4]="Gürteltier" NAMES[sx4]="Chihuahua"
NAMES[se5]="Eule" NAMES[so5]="Oktopus" NAMES[sx5]="Igel"
NAMES[se6]="Kaninchen" NAMES[so6]="Erdmännchen" NAMES[sx6]="Wolf"
NAMES[se7]="Gorilla" NAMES[so7]="Biber" NAMES[sx7]="Schimpanse"
NAMES[se8]="Orang-Utan" NAMES[so8]="Löwe" NAMES[sx8]="Krokodil"
NAMES[se9]="Elefant" NAMES[so9]="Büffel" NAMES[sx9]="Faultier"

ORDER=(se1 so1 sx1 se2 so2 sx2 se3 so3 sx3 se4 so4 sx4 se5 so5 sx5 se6 so6 sx6 se7 so7 sx7 se8 so8 sx8 se9 so9 sx9)

echo "=== Tier-Sounds Download ===" ; echo ""

# Build result JSON
echo "{" > "$RESULT"
FIRST=1

for code in "${ORDER[@]}"; do
  name="${NAMES[$code]}"
  query="${QUERIES[$code]}"
  echo "[${code}] ${name} — suche '${query}' …"

  # Search Wikimedia
  SEARCH_JSON=$(wmc_search "$query" 2>/dev/null)
  # Extract first audio file title
  TITLE=$(echo "$SEARCH_JSON" | python3 -c "
import sys,json
d=json.load(sys.stdin)
results=d.get('query',{}).get('search',[])
skip=['music','song','theme','piano','violin','guitar']
for r in results:
    t=r['title'].lower()
    if any(t.endswith(e) for e in ['.ogg','.mp3','.wav','.flac','.oga']):
        if not any(s in t for s in skip):
            print(r['title']); break
" 2>/dev/null)

  if [ -z "$TITLE" ]; then
    echo "  ✗ Kein Audio-Treffer auf Wikimedia."
    [ $FIRST -eq 0 ] && echo "," >> "$RESULT"
    echo "  \"$code\": {\"name\":\"$name\",\"url\":null,\"source\":null}" >> "$RESULT"
    FIRST=0
    continue
  fi

  echo "  Datei: $TITLE"

  # Get download URL
  FILE_INFO=$(wmc_file_url "$TITLE" 2>/dev/null)
  FILE_URL=$(echo "$FILE_INFO" | python3 -c "
import sys,json
d=json.load(sys.stdin)
pages=d.get('query',{}).get('pages',{})
for p in pages.values():
    ii=p.get('imageinfo',[])
    if ii: print(ii[0]['url']); break
" 2>/dev/null)

  if [ -z "$FILE_URL" ]; then
    echo "  ✗ Keine Download-URL."
    [ $FIRST -eq 0 ] && echo "," >> "$RESULT"
    echo "  \"$code\": {\"name\":\"$name\",\"url\":null,\"source\":\"$TITLE\"}" >> "$RESULT"
    FIRST=0
    continue
  fi

  # Download raw file
  EXT="${FILE_URL##*.}"
  EXT="${EXT%%\?*}"
  RAW="$OUTDIR/${code}_raw.${EXT}"
  echo "  Download: $FILE_URL"
  if ! curl -s -A "$UA" -L -o "$RAW" "$FILE_URL"; then
    echo "  ✗ Download fehlgeschlagen."
    [ $FIRST -eq 0 ] && echo "," >> "$RESULT"
    echo "  \"$code\": {\"name\":\"$name\",\"url\":null,\"source\":\"$TITLE\"}" >> "$RESULT"
    FIRST=0
    continue
  fi

  # Convert, trim, upload
  CDN_URL=$(trim_and_upload "$code" "$name" "$RAW")

  if [[ "$CDN_URL" == https://* ]]; then
    echo "  ✓ $CDN_URL"
    [ $FIRST -eq 0 ] && echo "," >> "$RESULT"
    echo "  \"$code\": {\"name\":\"$name\",\"url\":\"$CDN_URL\",\"source\":\"$TITLE\"}" >> "$RESULT"
  else
    echo "  ✗ Upload-Fehler: $CDN_URL"
    [ $FIRST -eq 0 ] && echo "," >> "$RESULT"
    echo "  \"$code\": {\"name\":\"$name\",\"url\":null,\"source\":\"$TITLE\"}" >> "$RESULT"
  fi
  FIRST=0
  sleep 0.5
done

echo "}" >> "$RESULT"

echo ""
echo "=== Fertig ==="
OK=$(python3 -c "import json; d=json.load(open('$RESULT')); print(sum(1 for v in d.values() if v.get('url')))")
echo "Erfolgreich: $OK / 27"
echo "URLs in: tier-sounds-urls.json"
