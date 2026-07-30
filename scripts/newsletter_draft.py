#!/usr/bin/env python3
"""Legt einen Newsletter-Entwurf (Kampagne) in Brevo an — versendet nichts automatisch.

Nutzung:
    python3 scripts/newsletter_draft.py --subject "Betreff" --content pfad/zu/inhalt.html
    python3 scripts/newsletter_draft.py --subject "Betreff" --content-file entwurf.html --name "Newsletter Juli 2026"

Freigabe zum Versand erfolgt manuell in Brevo (oder per --send, siehe unten).
"""
import argparse
import json
import os
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ENV_PATH = ROOT / ".env"
API_URL = "https://api.brevo.com/v3/emailCampaigns"


def load_env(path: Path) -> dict:
    env = {}
    if not path.exists():
        return env
    for line in path.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        env[key.strip()] = value.strip()
    return env


def create_draft(api_key: str, list_id: int, sender_email: str, sender_name: str, subject: str, html: str, name: str) -> dict:
    payload = {
        "name": name,
        "subject": subject,
        "sender": {"name": sender_name, "email": sender_email},
        "type": "classic",
        "htmlContent": html,
        "recipients": {"listIds": [list_id]},
    }
    req = urllib.request.Request(
        API_URL,
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "accept": "application/json",
            "content-type": "application/json",
            "api-key": api_key,
        },
        method="POST",
    )
    with urllib.request.urlopen(req) as resp:
        return json.loads(resp.read().decode("utf-8"))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--subject", required=True, help="Betreffzeile des Newsletters")
    parser.add_argument("--content-file", required=True, help="Pfad zu einer HTML-Datei mit dem Newsletter-Inhalt")
    parser.add_argument("--name", default=None, help="Interner Kampagnenname in Brevo (Default: Betreff)")
    args = parser.parse_args()

    env = {**load_env(ENV_PATH), **os.environ}
    api_key = env.get("BREVO_API_KEY")
    list_id = env.get("BREVO_LIST_ID")
    sender_email = env.get("BREVO_SENDER_EMAIL", "9rathmer@gmail.com")
    sender_name = env.get("BREVO_SENDER_NAME", "Naturheilpraxis und Verlagshaus Rathmer")

    if not api_key or not list_id:
        sys.exit("Fehlt: BREVO_API_KEY oder BREVO_LIST_ID in .env")

    html = Path(args.content_file).read_text(encoding="utf-8")
    name = args.name or args.subject

    try:
        result = create_draft(api_key, int(list_id), sender_email, sender_name, args.subject, html, name)
    except urllib.error.HTTPError as e:
        sys.exit(f"Brevo-API-Fehler {e.code}: {e.read().decode('utf-8')}")

    print(f"Entwurf angelegt. Kampagnen-ID: {result.get('id')}")
    print("Zum Versenden: in Brevo unter Kampagnen öffnen, prüfen, dann manuell absenden.")


if __name__ == "__main__":
    main()
