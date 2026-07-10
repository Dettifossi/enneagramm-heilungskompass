#!/usr/bin/env python3
import os, json, subprocess, time, hashlib, urllib.request

SCRIPT_DIR = "/Users/detlefrathmer/Enneagramm-Kompass"
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

CDN_AUDIO = f"https://res.cloudinary.com/{CLOUD_NAME}/video/upload/kompass/stille-sounds"

def cdn_exists(sound_id):
    url = f"{CDN_AUDIO}/{sound_id}.mp3"
    try:
        req = urllib.request.Request(url, method="HEAD")
        with urllib.request.urlopen(req, timeout=10) as r:
            return r.status == 200
    except Exception:
        return False

def upload(file_path, sound_id):
    folder = "kompass/stille-sounds"
    ts = str(int(time.time()))
    sign_str = f"folder={folder}&public_id={sound_id}&timestamp={ts}{API_SECRET}"
    sig = hashlib.sha1(sign_str.encode()).hexdigest()
    cmd = [
        "curl", "-v", "--max-time", "600", "-X", "POST",
        f"https://api.cloudinary.com/v1_1/{CLOUD_NAME}/video/upload",
        "-F", f"file=@{file_path}",
        "-F", f"api_key={API_KEY}",
        "-F", f"timestamp={ts}",
        "-F", f"signature={sig}",
        "-F", f"folder={folder}",
        "-F", f"public_id={sound_id}",
        "-F", "resource_type=video",
    ]
    r = subprocess.run(cmd, capture_output=True, text=True, timeout=620)
    stdout = r.stdout.strip()
    stderr = r.stderr.strip()
    if not stdout:
        print(f"  [stderr snippet]: {stderr[-300:]}")
        return False, "empty response"
    try:
        data = json.loads(stdout)
        url = data.get("secure_url")
        if url:
            return True, url
        return False, data.get("error", {}).get("message", stdout[:300])
    except Exception as e:
        return False, f"JSON parse error: {e} | stdout: {stdout[:200]}"

sounds = [
    ("/tmp/aquarium.mp3", "aquarium"),
    ("/tmp/gewaesser.mp3", "gewaesser"),
]

for path, sid in sounds:
    size = os.path.getsize(path) // 1024
    print(f"  {sid} ({size} KB)", end=" ... ", flush=True)
    if cdn_exists(sid):
        print("✓ bereits vorhanden")
        continue
    ok, result = upload(path, sid)
    if ok:
        print(f"✓ {result}")
    else:
        print(f"✗ {result}")

print("Fertig.")
