#!/bin/bash
set -e

# Cleaning build folder
rm -rf build

# Refreshing the /dev/ page data. The script already falls back on the snapshot
# committed in src/data/devActivity.json, section by section, when GitHub or the
# forum cannot be reached; this only guards against it failing outright.
npm run load-dev-activity || echo ">> Keeping the committed dev activity snapshot"

# Building website, one process per locale. A single `docusaurus build` of the
# four locales never gives back the Rspack memory of the locales it has already
# built (about 2.5 GB each) and peaks around 12 GB on the last one: on
# Cloudflare Pages the build then stalls until the 20-minute timeout. One
# process per locale peaks around 5 GB. The default locale goes first because
# its build empties ./build, where the other locales write their sub-folder.
# A translated locale without an explicit baseUrl would be built at / and
# empty ./build as well, so the build stops before starting in that case.
LOCALES=$(node -e '
const { i18n } = require("./docusaurus.config.js")();
const others = i18n.locales.filter((locale) => locale !== i18n.defaultLocale);
const missing = others.filter((locale) => !i18n.localeConfigs[locale]?.baseUrl);
if (missing.length > 0) {
  console.error(`>> Set i18n.localeConfigs.<locale>.baseUrl in docusaurus.config.js for: ${missing.join(", ")}`);
  process.exit(1);
}
console.log([i18n.defaultLocale, ...others].join(" "));
')
for locale in $LOCALES; do
  npm run build -- --locale "$locale"
done

# Writing Cloudflare Pages _redirects file, with the trailing-slash spelling of
# every rule (see the script)
node scripts/build_redirects.js ./build/_redirects

# Moving Cloudflare Pages _headers file
cp ./_headers ./build/_headers

# Moving robots.txt
cp ./robots.txt ./build/robots.txt

# Browsers and crawlers request /favicon.ico whatever the page declares
cp ./static/img/favicon/favicon.ico ./build/favicon.ico
