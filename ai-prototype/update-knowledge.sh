#!/bin/bash
# Baut die Wegweiser-Wissensbasis (DE+EN) aus app.js/data/*.js neu.
# Wird automatisch vom git post-commit-Hook aufgerufen, wenn sich
# app.js oder data/*.js geändert haben. Kann auch manuell laufen:
#   bash ai-prototype/update-knowledge.sh
set -euo pipefail
cd "$(dirname "$0")/.."

node ai-prototype/extract-portraits.mjs
node ai-prototype/extract-en-portraits.mjs
node ai-prototype/extract-register.mjs
node ai-prototype/extract-laender.mjs
node ai-prototype/extract-en-laender.mjs
node ai-prototype/extract-more.mjs
node ai-prototype/extract-psychosomatik.mjs
node ai-prototype/extract-en-core.mjs
node ai-prototype/extract-en-shared.mjs
node ai-prototype/extract-en-psychosomatik.mjs
node ai-prototype/build-knowledge.mjs
node ai-prototype/build-knowledge-en.mjs
