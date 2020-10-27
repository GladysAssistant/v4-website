#!/bin/bash
set -e

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
grep -rl 'lang="en"' ./build | xargs sed -i '' -e 's/lang="en"/lang="fr"/g'
mv ./build ../_build/fr
cd ..

# Moving netlify config
cp ./netlify.toml ./_build/netlify.toml

# Moving netlify functions
cp -R ./functions ./_build/functions