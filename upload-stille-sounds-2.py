#!/usr/bin/env python3
"""
Lädt 13 weitere CC0-Naturklänge herunter und lädt sie auf Cloudinary hoch.
white/pink/brown werden als echte Naturaufnahmen hochgeladen (Wasserfall, Regen, Kiefernwind).
grosskatze bleibt synthetisch (kein CC0 verfügbar).
"""

import os, json, subprocess, time, hashlib, urllib.request

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
env = {}
with open(os.path.join(SCRIPT_DIR, ".env")) as f:
    for line in f:
        line = line.strip()
        if "=" in line and not line.startswith("#"):
            k, v = line.split("=", 1)
            env[k.strip()] = v.strip()

CLOUD_NAME = env["CLOUDINARY_CLOUD_NAME"]
API_KEY    = env["CLOUDINARY_API_KEY"]
API_SECRET = env["CLOUDINARY_API_SECRET"]

TMP = os.path.join(SCRIPT_DIR, "tmp-stille-sounds")
os.makedirs(TMP, exist_ok=True)

SOUNDS = [
    # white/pink/brown → echte Naturaufnahmen statt synthetischem Rauschen
    ("white",      "https://cdn.freesound.org/previews/632/632107_11993891-hq.mp3"),  # Wasserfall Schottland (breites Spektrum = White Noise Charakter)
    ("pink",       "https://cdn.freesound.org/previews/666/666624_1106446-hq.mp3"),   # Starker Regen auf Dachgaube (wärmer/dumpfer = Pink Noise Charakter)
    ("brown",      "https://cdn.freesound.org/previews/73/73708_29263-hq.mp3"),       # Herbststurm in Kiefernwald Schweden (tief/bassig = Brown Noise Charakter)
    # Weitere bisher synthetische Sounds
    ("feuer",      "https://cdn.freesound.org/previews/800/800660_5287430-hq.mp3"),   # Kaminfeuer knistern
    ("hoehle",     "https://cdn.freesound.org/previews/476/476316_2337290-hq.mp3"),   # Höhle mit tropfendem Wasser + Hall
    ("chimes",     "https://cdn.freesound.org/previews/376/376001_2247456-hq.mp3"),   # Koshi Windspiel
    ("zug",        "https://cdn.freesound.org/previews/533/533718_2590049-hq.mp3"),   # Britisches Zugabteil 5:40
    ("katze",      "https://cdn.freesound.org/previews/650/650575_9782868-hq.mp3"),   # Katzenschnurren loopbar
    ("wal",        "https://cdn.freesound.org/previews/82/82325_1299633-hq.mp3"),     # Walgesang Unterwasser
    ("delfin",     "https://cdn.freesound.org/previews/408/408555_1661766-hq.mp3"),   # Amazonas-Flussdelfine
    ("bienen",     "https://cdn.freesound.org/previews/353/353199_2120176-hq.mp3"),   # Bienenstock-Summen
    ("wolf",       "https://cdn.freesound.org/previews/158/158780_229952-hq.mp3"),    # Wolfsrudel heulen
    ("seehund",    "https://cdn.freesound.org/previews/662/662556_753410-hq.mp3"),    # Kegelrobben-Welpe Helgoland
]

CDN_AUDIO = f"https://res.cloudinary.com/{CLOUD_NAME}/video/upload/kompass/stille-sounds"

def cdn_exists(sound_id):
    url = f"{CDN_AUDIO}/{sound_id}.mp3"
    try:
        req = urllib.request.Request(url, method="HEAD")
        with urllib.request.urlopen(req, timeout=10) as r:
            return r.status == 200
    except Exception:
        return False

def download(url, path):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=60) as r, open(path, "wb") as f:
        f.write(r.read())

def cloudinary_upload_audio(file_path, sound_id):
    public_id = sound_id
    folder = "kompass/stille-sounds"
    ts = str(int(time.time()))
    sign_str = f"folder={folder}&public_id={public_id}&timestamp={ts}{API_SECRET}"
    sig = hashlib.sha1(sign_str.encode()).hexdigest()
    r = subprocess.run([
        "curl", "-s", "-X", "POST",
        f"https://api.cloudinary.com/v1_1/{CLOUD_NAME}/video/upload",
        "-F", f"file=@{file_path}",
        "-F", f"api_key={API_KEY}",
        "-F", f"timestamp={ts}",
        "-F", f"signature={sig}",
        "-F", f"folder={folder}",
        "-F", f"public_id={public_id}",
        "-F", "resource_type=video",
    ], capture_output=True, text=True)
    try:
        data = json.loads(r.stdout)
        url = data.get("secure_url")
        if url:
            return True, url
        else:
            return False, data.get("error", {}).get("message", r.stdout[:300])
    except Exception:
        return False, r.stdout[:300]

def main():
    print("=== Stille-Sounds Upload (Runde 2) ===\n")
    for sound_id, src_url in SOUNDS:
        print(f"  {sound_id}", end=" ... ", flush=True)
        if cdn_exists(sound_id):
            print("✓ (bereits vorhanden)")
            continue
        tmp_path = os.path.join(TMP, f"{sound_id}.mp3")
        try:
            download(src_url, tmp_path)
            size_kb = os.path.getsize(tmp_path) // 1024
            print(f"↓ {size_kb} KB", end=" → ", flush=True)
        except Exception as e:
            print(f"✗ Download: {e}")
            continue
        ok, result = cloudinary_upload_audio(tmp_path, sound_id)
        if ok:
            print(f"✓ {result}")
        else:
            print(f"✗ Upload: {result}")
        time.sleep(0.5)
    print("\n✓ Fertig.")

if __name__ == "__main__":
    main()
