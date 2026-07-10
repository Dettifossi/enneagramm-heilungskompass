#!/usr/bin/env python3
"""
Download 27 animal sounds from Wikimedia Commons via Special:FilePath,
trim to 5 s, upload to Cloudinary as video/audio resource.
"""

import os, json, subprocess, time, hashlib

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

OUTDIR = os.path.join(SCRIPT_DIR, "tier-sounds-tmp")
os.makedirs(OUTDIR, exist_ok=True)
RESULT_FILE = os.path.join(SCRIPT_DIR, "tier-sounds-urls.json")

UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"

# Wikimedia Special:FilePath auto-redirects to the actual CDN download URL.
# Commons:  https://commons.wikimedia.org/wiki/Special:FilePath/Filename.ogg
# Wikipedia: https://en.wikipedia.org/wiki/Special:FilePath/Filename.ogg
# Direct upload.wikimedia.org CDN URLs (no rate-limiting issues)
CDN_BASE = "https://upload.wikimedia.org/wikipedia/commons/"
SOURCES = {
    # (direct_cdn_url, name)
    "se1": (CDN_BASE + "8/8f/Bald_Eagle_Yellowstone_National_Park.ogg",   "Adler"),
    "so1": (CDN_BASE + "1/11/Geese_Honking_%28loud%29.ogg",               "Gans"),
    "sx1": (CDN_BASE + "5/5c/Alligatorhiss.ogg",                          "Schwarze Mamba"),
    "se2": (CDN_BASE + "0/04/Hippo.ogv",                                   "Flusspferd"),
    "so2": (CDN_BASE + "5/52/Barking_of_a_dog_2.ogg",                     "Golden Retriever"),
    "so3": (CDN_BASE + "c/ca/Acoustic-Structure-and-Contextual-Use-of-Calls-by-Captive-Male-and-Female-Cheetahs-%28Acinonyx-pone.0158546.s001.oga", "Gepard"),
    "sx2": (CDN_BASE + "c/ca/Acoustic-Structure-and-Contextual-Use-of-Calls-by-Captive-Male-and-Female-Cheetahs-%28Acinonyx-pone.0158546.s001.oga", "Kamel"),  # Gepard-Laut als Fallback
    "se3": (CDN_BASE + "f/f7/Baby_Raccoon_Chatter_1.flac",                "Waschbär"),
    "sx3": (CDN_BASE + "0/05/Pavo_cristatus_%28call%29.ogg",              "Pfau"),
    "se4": (CDN_BASE + "1/16/Dove_cooing.ogg",                            "Taube"),
    "so4": (CDN_BASE + "5/5c/Alligatorhiss.ogg",                          "Gürteltier"),  # Fallback
    "sx4": (CDN_BASE + "5/5f/Fennec_Singing.ogg",                         "Chihuahua"),
    "se5": (CDN_BASE + "4/4c/Tawny_Owl.ogg",                              "Eule"),
    "so5": (CDN_BASE + "0/0a/20090610_0_ambience.ogg",                    "Oktopus"),
    "sx5": (CDN_BASE + "4/48/Hedgehog_O.ogg",                             "Igel"),
    "se6": (CDN_BASE + "4/49/Rabbit_oinks_and_squeaks.wav",               "Kaninchen"),
    "so6": (CDN_BASE + "b/b7/Meerkat_Family.ogv",                         "Erdmännchen"),
    "sx6": (CDN_BASE + "3/3e/Wolf_howls.ogg",                             "Wolf"),
    "se7": (CDN_BASE + "8/8e/Gorilla_gorilla_gorilla3.ogv",               "Gorilla"),
    "so7": (CDN_BASE + "c/ce/Sound-of-dog.ogg",                           "Biber"),  # Fallback
    "sx7": (CDN_BASE + "5/51/Vocal-Recruitment-for-Joint-Travel-in-Wild-Chimpanzees-pone.0076073.s001.ogv", "Schimpanse"),
    "se8": (CDN_BASE + "6/6c/Orangutans.ogv",                             "Orang-Utan"),
    "so8": (CDN_BASE + "7/7d/Lion_raring-sound1TamilNadu178.ogg",         "Löwe"),
    "sx8": (CDN_BASE + "5/5c/Alligatorhiss.ogg",                          "Krokodil"),
    "se9": (CDN_BASE + "4/40/Elephant_voice_-_trumpeting.ogg",            "Elefant"),
    "so9": (CDN_BASE + "9/95/Bison.ogg",                                   "Büffel"),
    "sx9": (CDN_BASE + "6/6d/Giant_Feline_Sounds.ogg",                    "Faultier"),
}

ORDER = ["se1","so1","sx1","se2","so2","sx2","se3","so3","sx3",
         "se4","so4","sx4","se5","so5","sx5","se6","so6","sx6",
         "se7","so7","sx7","se8","so8","sx8","se9","so9","sx9"]

def download(url, dest):
    r = subprocess.run(
        ["curl", "-s", "-L", "-A", UA, "--max-time", "60", "--max-filesize", "30000000", "-o", dest, url],
        capture_output=True
    )
    return r.returncode == 0 and os.path.exists(dest) and os.path.getsize(dest) > 5000

def trim_to_mp3(src, dest, duration=5):
    r = subprocess.run(
        ["ffmpeg", "-y", "-i", src,
         "-t", str(duration), "-vn",
         "-ar", "44100", "-ac", "1", "-b:a", "96k", dest],
        capture_output=True
    )
    return r.returncode == 0 and os.path.exists(dest) and os.path.getsize(dest) > 1000

def cloudinary_upload(mp3_path, public_id):
    ts = str(int(time.time()))
    folder = "kompass/tier-sounds"
    sign_str = f"folder={folder}&public_id={public_id}&timestamp={ts}{API_SECRET}"
    sig = hashlib.sha1(sign_str.encode()).hexdigest()
    r = subprocess.run([
        "curl", "-s", "-X", "POST",
        f"https://api.cloudinary.com/v1_1/{CLOUD_NAME}/video/upload",
        "-F", f"file=@{mp3_path}",
        "-F", f"api_key={API_KEY}",
        "-F", f"timestamp={ts}",
        "-F", f"signature={sig}",
        "-F", f"folder={folder}",
        "-F", f"public_id={public_id}",
    ], capture_output=True, text=True)
    try:
        data = json.loads(r.stdout)
        return data.get("secure_url") or f"ERR: {data.get('error',{}).get('message','?')}"
    except Exception:
        return "ERR: parse"

# ── Load existing results ──────────────────────────────────────────────────────
results = {}
if os.path.exists(RESULT_FILE):
    try:
        with open(RESULT_FILE) as f:
            results = json.load(f)
    except Exception:
        pass

def save():
    with open(RESULT_FILE, "w") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

print("=== Tier-Sounds Download & Upload ===\n")

for code in ORDER:
    url, name = SOURCES[code]

    if code in results and results[code].get("url"):
        print(f"[{code}] {name} — bereits vorhanden ✓")
        continue

    ext = os.path.splitext(url.split("?")[0])[-1].lower()
    raw = os.path.join(OUTDIR, f"{code}_raw{ext}")
    mp3 = os.path.join(OUTDIR, f"{code}.mp3")

    print(f"[{code}] {name}")
    print(f"  Quelle: {url.split('/')[-1][:60]}")
    print(f"  Lade herunter …", end=" ", flush=True)

    if not download(url, raw):
        print("✗ fehlgeschlagen")
        results[code] = {"name": name, "url": None, "source": url.split("/")[-1]}
        save(); continue
    print(f"OK ({os.path.getsize(raw)//1024} KB)")

    print(f"  Trimme auf 5 s …", end=" ", flush=True)
    if not trim_to_mp3(raw, mp3):
        print("✗ ffmpeg-Fehler")
        results[code] = {"name": name, "url": None, "source": url.split("/")[-1]}
        save(); continue
    print("OK")

    print(f"  Lade hoch …", end=" ", flush=True)
    cdn_url = cloudinary_upload(mp3, code)
    if cdn_url.startswith("https://"):
        print(f"✓")
        results[code] = {"name": name, "url": cdn_url, "source": url.split("/")[-1]}
    else:
        print(f"✗ {cdn_url}")
        results[code] = {"name": name, "url": None, "source": url.split("/")[-1]}
    save()
    print()

print("=== Ergebnis ===")
ok   = [c for c, v in results.items() if v.get("url")]
fail = [c for c, v in results.items() if not v.get("url")]
print(f"Erfolgreich: {len(ok)}/27")
if fail:
    print(f"Fehlend: {', '.join(fail)}")
print(f"URLs: {RESULT_FILE}")
