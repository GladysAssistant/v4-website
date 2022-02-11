#!/bin/bash
set -e

# Cleaning build folder
rm -rf build

# Building website
npm run build

# Moving Cloudflare Pages _redirects file
cp ./_redirects ./build/_redirects

# Moving robots.txt
cp ./robots.txt ./build/robots.txt
