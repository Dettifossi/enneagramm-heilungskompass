#!/bin/bash
pkill -f "python3 -m http.server" 2>/dev/null
sleep 0.5
cd /Users/detlefrathmer/Enneagramm-Kompass
exec python3 -m http.server 7777
