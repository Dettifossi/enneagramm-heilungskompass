#!/usr/bin/env python3
"""
Lädt 14 CC0-Naturklänge von Freesound herunter und lädt sie auf Cloudinary hoch
als kompass/stille-sounds/{id}.mp3
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
    ("regen",       "https://cdn.freesound.org/previews/666/666624_1106446-hq.mp3"),
    ("meer",        "https://cdn.freesound.org/previews/827/827530_2718606-hq.mp3"),
    ("wasserfall",  "https://cdn.freesound.org/previews/632/632107_11993891-hq.mp3"),
    ("wind",        "https://cdn.freesound.org/previews/790/790538_801741-hq.mp3"),
    ("gewitter",    "https://cdn.freesound.org/previews/616/616991_97550-hq.mp3"),
    ("sommerregen", "https://cdn.freesound.org/previews/678/678435_801011-hq.mp3"),
    ("wald",        "https://cdn.freesound.org/previews/564/564436_5456250-hq.mp3"),
    ("voegel",      "https://cdn.freesound.org/previews/634/634511_9662992-hq.mp3"),
    ("bach",        "https://cdn.freesound.org/previews/331/331894_1149179-hq.mp3"),
    ("wiese",       "https://cdn.freesound.org/previews/571/571092_97550-hq.mp3"),
    ("kuckuck",     "https://cdn.freesound.org/previews/81/81728_280284-hq.mp3"),
    ("blizzard",    "https://cdn.freesound.org/previews/671/671096_285997-hq.mp3"),
    ("trommel",     "https://cdn.freesound.org/previews/275/275376_4366671-hq.mp3"),
    ("eule",        "https://cdn.freesound.org/previews/850/850411_11519060-hq.mp3"),
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
    print("=== Stille-Sounds Upload ===\n")
    for sound_id, src_url in SOUNDS:
        print(f"  {sound_id}", end=" ... ", flush=True)

        # Check if already on Cloudinary
        if cdn_exists(sound_id):
            print("✓ (bereits vorhanden)")
            continue

        # Download
        tmp_path = os.path.join(TMP, f"{sound_id}.mp3")
        try:
            download(src_url, tmp_path)
            size_kb = os.path.getsize(tmp_path) // 1024
            print(f"↓ {size_kb} KB", end=" → ", flush=True)
        except Exception as e:
            print(f"✗ Download-Fehler: {e}")
            continue

        # Upload
        ok, result = cloudinary_upload_audio(tmp_path, sound_id)
        if ok:
            print(f"✓ {result}")
        else:
            print(f"✗ Upload-Fehler: {result}")
        time.sleep(0.5)

    print("\n✓ Fertig.")

if __name__ == "__main__":
    main()
