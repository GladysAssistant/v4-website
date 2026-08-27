#!/bin/bash
set -e

# Cleaning build folder
rm -rf build

# Refreshing the /dev/ page data. The script already falls back on the snapshot
# committed in src/data/devActivity.json, section by section, when GitHub or the
# forum cannot be reached; this only guards against it failing outright.
npm run load-dev-activity || echo ">> Keeping the committed dev activity snapshot"

# Building website
npm run build

# Moving Cloudflare Pages _redirects file
cp ./_redirects ./build/_redirects

# Moving Cloudflare Pages _headers file
cp ./_headers ./build/_headers

# Moving robots.txt
cp ./robots.txt ./build/robots.txt
