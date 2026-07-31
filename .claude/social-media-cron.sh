#!/bin/bash
# Wöchentlicher Social-Media-Post-Entwurf, ausgeführt per lokalem cron (Donnerstag 19 Uhr).
# Erstellt den Entwurf via Claude Code CLI headless und committet ihn ins Repo.
cd /Users/detlefrathmer/enneagramm-heilungskompass || exit 1

/usr/local/bin/claude -p "/social" \
  --permission-mode acceptEdits \
  --allowedTools "Bash(git add:*) Bash(git commit:*) Bash(git push:*) Bash(date:*) Read Write Edit Glob Grep" \
  --append-system-prompt "Automatischer wöchentlicher Lauf ohne Detlef am Bildschirm. Erstelle die 3 Post-Vorschläge nach der social-media Skill-Anleitung, schreibe sie nach social-media/posts/KW<nn>-<jahr>.md (kommende ISO-Kalenderwoche relativ zu heute per 'date' ermitteln), committe mit Nachricht 'Social-Media-Entwurf KW<nn>-<jahr>' und push auf main. Poste NICHTS auf echten Plattformen. Verschiebe nichts ins archiv/ – das macht Detlef manuell nach Freigabe." \
  >> /Users/detlefrathmer/enneagramm-heilungskompass/.claude/social-media-cron.log 2>&1

echo "--- Lauf beendet: $(date) ---" >> /Users/detlefrathmer/enneagramm-heilungskompass/.claude/social-media-cron.log
