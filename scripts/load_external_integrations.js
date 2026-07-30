const fs = require("fs");
const path = require("path");

const STORE_INDEX_URL =
  "https://integration-store-storage.gladysassistant.com/index.json";
const OUTPUT_FILE = path.join(
  __dirname,
  "../src/data/externalIntegrations.json"
);

// Keep only what the website needs, so the committed snapshot stays small.
const trimIntegration = (integration) => ({
  store_slug: integration.store_slug,
  repo_url: integration.repo_url,
  name: integration.manifest.name,
  type: integration.manifest.type,
  version: integration.manifest.version,
  description: integration.manifest.description,
  cover_url: integration.cover_url,
  stars: integration.github ? integration.github.stars : 0,
  owner_avatar_url: integration.github
    ? integration.github.owner_avatar_url
    : null,
});

(async () => {
  console.log(`> Downloading external integrations index`);
  const response = await fetch(STORE_INDEX_URL);
  if (!response.ok) {
    throw new Error(`Unable to download store index: HTTP ${response.status}`);
  }
  const index = await response.json();
  const integrations = index.integrations.map(trimIntegration);
  integrations.sort(
    (a, b) => b.stars - a.stars || a.name.localeCompare(b.name)
  );
  const snapshot = {
    generated_at: index.generated_at,
    integrations,
  };
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(snapshot, null, 2));
  console.log(
    `> Wrote ${integrations.length} external integrations to ${path.relative(
      process.cwd(),
      OUTPUT_FILE
    )}`
  );
})();
