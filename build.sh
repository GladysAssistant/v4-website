#!/bin/bash

rm -rf _build
mkdir _build

# Building en website
cd en
npm run build
mv ./build ../_build/en
cd ..

# Building fr website
cd fr
npm run build
mv ./build ../_build/fr
cd ..

# Moving netlify config
cp ./netlify.toml ./_build/netlify.toml