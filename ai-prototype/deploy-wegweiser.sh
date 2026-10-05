#!/bin/bash
# Deployed den Wegweiser-Worker mit der zuletzt committeten, stabilen
# Version von worker/index.mjs + wrangler.toml (nicht mit lokal noch
# unfertigen Änderungen, z.B. der pausierten Vectorize-Baustelle).
# Aufruf: bash ai-prototype/deploy-wegweiser.sh
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"

WORKER_DIRTY=false
if ! git diff --quiet -- ai-prototype/worker/index.mjs ai-prototype/worker/wrangler.toml; then
  WORKER_DIRTY=true
  echo "Lokale Änderungen an index.mjs/wrangler.toml erkannt – werden für den Deploy zwischengelagert (git stash) und danach wiederhergestellt."
  git stash push -- ai-prototype/worker/index.mjs ai-prototype/worker/wrangler.toml
fi

cleanup() {
  if [ "$WORKER_DIRTY" = true ]; then
    git stash pop
  fi
}
trap cleanup EXIT

(cd ai-prototype/worker && npx wrangler deploy)
