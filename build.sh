#!/bin/bash
set -e

# Cleaning build folder
rm -rf build

# Refreshing the /dev/ page data. Never fails the build: if GitHub or the forum
# is unreachable, the snapshot committed in src/data/devActivity.json is used.
npm run load-dev-activity || echo ">> Keeping the committed dev activity snapshot"

# Building website
npm run build

# Moving Cloudflare Pages _redirects file
cp ./_redirects ./build/_redirects

# Moving Cloudflare Pages _headers file
cp ./_headers ./build/_headers

# Moving robots.txt
cp ./robots.txt ./build/robots.txt
