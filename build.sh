#!/bin/bash
set -e

# Cleaning build folder
rm -rf build

# Building website
npm run build

# Moving netlify config
cp ./netlify.toml ./build/netlify.toml

# Moving robots.txt
cp ./robots.txt ./build/robots.txt

# Moving netlify functions
cp -R ./functions ./build/functions