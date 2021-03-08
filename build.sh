#!/bin/bash
set -e

export NODE_OPTIONS='--max_old_space_size=4096' 

rm -rf _build
mkdir _build

# Installing deps
npm install

# Building en website
cd en
npm run build
mv ./build ../_build/en
cd ..

# Building fr website
cd fr
npm run build
node ../scripts/change-language.js
mv ./build ../_build/fr
cd ..

# Moving netlify config
cp ./netlify.toml ./_build/netlify.toml

# Moving robots.txt
cp ./robots.txt ./_build/robots.txt

# Moving netlify functions
cp -R ./functions ./_build/functions