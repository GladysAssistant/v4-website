const fs = require("fs");
const path = require("path");

const STORE_INDEX_URL =
  "https://integration-store-storage.gladysassistant.com/index.json";
const OUTPUT_FILE = path.join(
  __dirname,
  "../src/data/externalIntegrations.json"
);
const NATIVE_DOCS_DIR = path.join(__dirname, "../docs/integrations");
const DOCS_DIRS = {
  en: path.join(__dirname, "../docs/integrations/external"),
  fr: path.join(
    __dirname,
    "../i18n/fr/docusaurus-plugin-content-docs/current/integrations/external"
  ),
};
const LOCALES = ["en", "fr"];

// Every generated page starts with this marker, so the cleanup step only ever
// removes files this script owns.
const GENERATED_MARKER = "{/* GENERATED FILE";

// "MELCloud Home" -> "melcloud-home"
const slugify = (value) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const owner = (storeSlug) => storeSlug.split("/")[0];

// Native integrations already have a documentation page under
// /docs/integrations/. When an external integration carries the same name, its
// page gets a different title so the two don't compete on the same query.
const nativeDocSlugs = () =>
  new Set(
    fs
      .readdirSync(NATIVE_DOCS_DIR)
      .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
      .map((file) => file.replace(/\.mdx?$/, ""))
  );

// Two integrations with the same name (different authors) would fight for the
// same URL: the second one gets its owner appended.
const buildSlugs = (integrations) => {
  const taken = new Set();
  const slugs = {};
  integrations.forEach((integration) => {
    const base = slugify(integration.manifest.name);
    const slug = taken.has(base)
      ? `${base}-${slugify(owner(integration.store_slug))}`
      : base;
    taken.add(slug);
    slugs[integration.store_slug] = slug;
  });
  return slugs;
};

// Landing pages (src/pages) that go deeper on what an integration is used
// for, linked from its generated page. Keyed by the integration's page slug.
const RELATED_GUIDES = {
  "philips-hue": [
    {
      href: "/philips-hue-without-bridge/",
      en: ["Philips Hue without the bridge", "pair Hue bulbs directly with a Zigbee dongle instead."],
      fr: ["Philips Hue sans le pont", "associer ses ampoules Hue directement à une clé Zigbee."],
    },
  ],
  tuya: [
    {
      href: "/tuya-zigbee-without-hub/",
      en: ["Tuya Zigbee without the Tuya app", "local control for Tuya Zigbee devices through Zigbee2MQTT."],
      fr: ["Tuya Zigbee sans l'application Tuya", "le contrôle local des appareils Tuya Zigbee via Zigbee2MQTT."],
    },
  ],
  "hydro-quebec": [
    {
      href: "/hydro-quebec-peak-events/",
      en: ["Hydro-Québec peak events today", "live Flex D and Winter Credit peak events."],
      fr: ["Événements de pointe Hydro-Québec aujourd'hui", "les pointes Flex D et crédit hivernal en direct."],
    },
    {
      href: "/hydro-quebec-flex-d/",
      en: ["Hydro-Québec Rate Flex D", "how Flex D works and the automations that make it pay off."],
      fr: ["Tarif Flex D d'Hydro-Québec", "comment fonctionne le Flex D et les automatisations qui le rentabilisent."],
    },
  ],
  reolink: [
    {
      href: "/reolink-rtsp-url/",
      en: ["Reolink RTSP URL", "how to enable RTSP and find your camera's stream URL."],
      fr: ["URL RTSP Reolink", "activer le RTSP et trouver l'URL du flux de votre caméra."],
    },
  ],
  smartthings: [
    {
      href: "/smartthings-alternative/",
      en: ["SmartThings alternative", "how to move from SmartThings to a local platform."],
      fr: ["Alternative à SmartThings", "comment passer de SmartThings à une plateforme locale."],
    },
  ],
  "z-wave-js-ui": [
    {
      href: "/z-wave-js-ui-without-home-assistant/",
      en: ["Z-Wave JS UI without Home Assistant", "your Z-Wave network with a simple interface."],
      fr: ["Z-Wave JS UI sans Home Assistant", "votre réseau Z-Wave avec une interface simple."],
    },
  ],
  shelly: [
    {
      href: "/shelly-without-cloud/",
      en: ["Shelly without the cloud", "local control of Shelly relays, plugs and energy meters."],
      fr: ["Shelly sans le cloud", "le contrôle local des relais, prises et compteurs Shelly."],
    },
  ],
};

// Docusaurus already appends " | Gladys Assistant" to every docs title, so the
// titles target what people search for (the brand plus "smart home" /
// "domotique") instead of repeating the product name.
const TEXTS = {
  en: {
    title: (name) => `${name} smart home integration, free and open source`,
    titleWithNative: (name) =>
      `${name} community integration, free and open source`,
    descriptionSuffix: "Free, open source, installable in one click.",
    docSourceMissing:
      "The author of this integration has not published a documentation page yet.",
    configTitle: "Configuration settings",
    configIntro: (name) =>
      `These are the settings ${name} asks for in its configuration screen in Gladys.`,
    configColumns: ["Setting", "Type", "Required", "Description"],
    required: "Yes",
    optional: "No",
    installTitle: (name) => `How to install ${name} in Gladys`,
    installSteps: (name, dockerImage, repoUrl) => [
      `In Gladys, open **Integrations**: ${name} appears in the catalog, next to the native integrations, with a community badge.`,
      `Click **Install**. Gladys pulls the Docker image (\`${dockerImage}\`), starts it in a sandbox isolated from the core, and generates the integration's interface (devices, discovery and configuration).`,
      `Open the **Configuration** screen of the integration, fill in the settings, and save.`,
      `You can also install it directly from its repository URL: [${repoUrl}](${repoUrl}).`,
    ],
    installRequirement: (name, gladysVersion) =>
      `${name} requires Gladys \`${gladysVersion}\`. The catalog inside Gladys refreshes every hour, so a new version becomes available at most one hour after its release.`,
    installNoGladys:
      "Not running Gladys yet? It is free and open source: [follow the installation guide](/docs/) to get started.",
    relatedTitle: "Related guides",
    localePrefix: "",
    aboutTitle: "About external integrations",
    aboutBody: (name, ownerName, ownerUrl) =>
      `${name} is an **external integration**: a community integration packaged as a Docker container and published on GitHub, that Gladys installs in one click and runs in a sandbox isolated from its core. It is published and maintained by [${ownerName}](${ownerUrl}), not by the Gladys core team.`,
    aboutLinks: (repoUrl, docPath) => [
      `[Browse all external integrations](/docs/integrations/external/)`,
      `[Discover the native integrations](/docs/integrations/) built into Gladys`,
      `[Build and publish your own external integration](/docs/dev/external-integrations/)`,
      `[Source code on GitHub](${repoUrl}) — [source of this documentation](${repoUrl}/blob/HEAD/${docPath})`,
    ],
  },
  fr: {
    title: (name) => `Intégration domotique ${name}, gratuite et open source`,
    titleWithNative: (name) =>
      `Intégration communautaire ${name}, gratuite et open source`,
    descriptionSuffix: "Gratuite, open source, installable en un clic.",
    docSourceMissing:
      "L'auteur de cette intégration n'a pas encore publié de page de documentation.",
    configTitle: "Paramètres de configuration",
    configIntro: (name) =>
      `Voici les paramètres demandés par ${name} dans son écran de configuration dans Gladys.`,
    configColumns: ["Paramètre", "Type", "Obligatoire", "Description"],
    required: "Oui",
    optional: "Non",
    installTitle: (name) => `Comment installer ${name} dans Gladys`,
    installSteps: (name, dockerImage, repoUrl) => [
      `Dans Gladys, ouvrez **Intégrations** : ${name} apparaît dans le catalogue, aux côtés des intégrations natives, avec un badge communautaire.`,
      `Cliquez sur **Installer**. Gladys télécharge l'image Docker (\`${dockerImage}\`), la démarre dans un bac à sable isolé du cœur, et génère l'interface de l'intégration (appareils, découverte et configuration).`,
      `Ouvrez l'écran **Configuration** de l'intégration, remplissez les paramètres, puis enregistrez.`,
      `Vous pouvez aussi l'installer directement depuis l'URL de son dépôt : [${repoUrl}](${repoUrl}).`,
    ],
    installRequirement: (name, gladysVersion) =>
      `${name} nécessite Gladys \`${gladysVersion}\`. Le catalogue dans Gladys se rafraîchit toutes les heures : une nouvelle version est donc disponible au plus tard une heure après sa sortie.`,
    installNoGladys:
      "Vous n'utilisez pas encore Gladys ? C'est gratuit et open source : [suivez le guide d'installation](/fr/docs/) pour démarrer.",
    relatedTitle: "Guides associés",
    localePrefix: "/fr",
    aboutTitle: "À propos des intégrations externes",
    aboutBody: (name, ownerName, ownerUrl) =>
      `${name} est une **intégration externe** : une intégration communautaire empaquetée dans un conteneur Docker et publiée sur GitHub, que Gladys installe en un clic et exécute dans un bac à sable isolé de son cœur. Elle est publiée et maintenue par [${ownerName}](${ownerUrl}), et non par l'équipe cœur de Gladys.`,
    aboutLinks: (repoUrl, docPath) => [
      `[Parcourir toutes les intégrations externes](/fr/docs/integrations/external/)`,
      `[Découvrir les intégrations natives](/fr/docs/integrations/) intégrées à Gladys`,
      `[Créer et publier votre propre intégration externe](/fr/docs/dev/external-integrations/)`,
      `[Code source sur GitHub](${repoUrl}) — [source de cette documentation](${repoUrl}/blob/HEAD/${docPath})`,
    ],
  },
};

// Keep only what the website needs, so the committed snapshot stays small.
const trimIntegration = (integration, slug) => ({
  slug,
  store_slug: integration.store_slug,
  repo_url: integration.repo_url,
  name: integration.manifest.name,
  type: integration.manifest.type,
  version: integration.manifest.version,
  description: integration.manifest.description,
  cover_url: integration.cover_url,
  docker_image: integration.manifest.docker_image,
  gladys_version: integration.manifest.gladys_version,
  config_schema: integration.manifest.config_schema || [],
  stars: integration.github ? integration.github.stars : 0,
  pushed_at: integration.github ? integration.github.pushed_at : null,
  owner_avatar_url: integration.github
    ? integration.github.owner_avatar_url
    : null,
});

const oneLine = (value) =>
  String(value === undefined || value === null ? "" : value)
    .replace(/\r?\n/g, " ")
    .trim();

const yaml = (value) =>
  `"${oneLine(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;

// Manifest values are written by the integration author too, so they get the
// same treatment as the documentation below: a configuration description
// containing `{{gladys_host}}` would otherwise reach the MDX compiler as a JSX
// expression and fail the build.
const text = (value) =>
  oneLine(value).replace(/[<{}]/g, (character) => `\\${character}`);

const cell = (value) => text(value).replace(/\|/g, "\\|");

// MDX leaves the content of a code span alone: only its delimiters matter.
const code = (value) => oneLine(value).replace(/`/g, "");

// A space or a parenthesis would cut a Markdown link destination short.
const url = (value) => oneLine(value).replace(/[ ()<>]/g, encodeURIComponent);

// The documentation is written by the integration author, so it can contain
// anything: `<`, `{` and `}` outside code would be read as JSX by the MDX
// compiler and break the build. Escape them, leaving code untouched.
const escapeForMdx = (markdown) => {
  let insideFence = false;
  return markdown
    .split("\n")
    .map((line) => {
      if (/^\s{0,3}(```|~~~)/.test(line)) {
        insideFence = !insideFence;
        return line;
      }
      if (insideFence) {
        return line;
      }
      // Split on inline code spans: odd indexes are code, left as-is.
      return line
        .split(/(`+[^`]*`+)/)
        .map((part, index) =>
          index % 2 === 1
            ? part
            : part.replace(/[<{}]/g, (character) => `\\${character}`)
        )
        .join("");
    })
    .join("\n");
};

const prepareAuthorDoc = (markdown, integration) => {
  let content = markdown.replace(/\r\n/g, "\n").trim();
  // Drop a frontmatter block, if the author shipped one.
  content = content.replace(/^---\n[\s\S]*?\n---\n/, "");
  // The page already has an H1 coming from the frontmatter title: remove the
  // first one, and demote the remaining ones so the outline stays valid.
  content = content.replace(/^\s*#\s+.*\n/, "");
  content = content.replace(/^#\s+/gm, "## ");
  // Autolinks would be escaped below, losing the link: expand them first.
  content = content.replace(
    /<((?:https?:\/\/|mailto:)[^\s>]+)>/g,
    (match, url) => `[${url}](${url})`
  );
  // Relative links and images only resolve inside the author's repository.
  content = content.replace(
    /(!?)\[([^\]]*)\]\((?!https?:|mailto:|#|\/)\.?\/?([^)\s]+)\)/g,
    (match, bang, label, target) =>
      `${bang}[${label}](${integration.repo_url}/${
        bang ? "raw" : "blob"
      }/HEAD/${target})`
  );
  return escapeForMdx(content).trim();
};

const configTable = (integration, texts, locale) => {
  if (!integration.config_schema.length) {
    return "";
  }
  const rows = integration.config_schema.map((field) => {
    const label = field.label ? field.label[locale] || field.label.en : "";
    const description = field.description
      ? field.description[locale] || field.description.en
      : "";
    return `| ${cell(label || field.key)} | \`${code(field.type)}\` | ${
      field.required ? texts.required : texts.optional
    } | ${cell(description)} |`;
  });
  return [
    `## ${texts.configTitle}`,
    "",
    texts.configIntro(text(integration.name)),
    "",
    `| ${texts.configColumns.join(" | ")} |`,
    `| --- | --- | --- | --- |`,
    ...rows,
    "",
  ].join("\n");
};

const relatedGuides = (slug, texts, locale) => {
  const guides = RELATED_GUIDES[slug];
  if (!guides) return [];
  return [
    `## ${texts.relatedTitle}`,
    "",
    ...guides.map(({ href, ...labels }) => {
      const [label, description] = labels[locale];
      return `- [${label}](${texts.localePrefix}${href}): ${description}`;
    }),
    "",
  ];
};

const buildPage = (integration, authorDoc, locale, hasNativeDoc) => {
  const texts = TEXTS[locale];
  const description =
    integration.description[locale] || integration.description.en;
  const title = hasNativeDoc
    ? texts.titleWithNative(integration.name)
    : texts.title(integration.name);
  const ownerName = owner(integration.store_slug);
  // Everything below the frontmatter is Markdown compiled as MDX: what the
  // manifest provides has to be escaped for the context it lands in (prose,
  // code span or link destination). The frontmatter itself is YAML, quoted by
  // `yaml()`.
  const name = text(integration.name);
  const repoUrl = url(integration.repo_url);
  const metaDescription =
    description.length > 120
      ? description
      : `${description} ${texts.descriptionSuffix}`;
  const docPath = `docs/${locale}.md`;
  const lowerName = integration.name.toLowerCase();

  const frontmatter = [
    "---",
    `title: ${yaml(title)}`,
    `sidebar_label: ${yaml(integration.name)}`,
    `description: ${yaml(metaDescription)}`,
    `image: ${yaml(integration.cover_url)}`,
    "keywords:",
    ...[
      lowerName,
      locale === "fr" ? `domotique ${lowerName}` : `${lowerName} smart home`,
      `gladys ${lowerName}`,
      `${lowerName} gladys assistant`,
      locale === "fr" ? "intégration externe" : "external integration",
      locale === "fr" ? "domotique open source" : "open source home automation",
    ].map((keyword) => `  - ${yaml(keyword)}`),
    "custom_edit_url: null",
    "---",
  ].join("\n");

  return `${[
    frontmatter,
    "",
    `${GENERATED_MARKER}: built by \`yarn load-external-integrations\` from the`,
    `integration store. Do not edit by hand, edit ${docPath} in`,
    `${repoUrl} instead. */}`,
    "",
    `import ExternalIntegrationHeader from "@site/src/components/ExternalIntegrationHeader";`,
    "",
    `<ExternalIntegrationHeader slug="${integration.slug}" />`,
    "",
    authorDoc || texts.docSourceMissing,
    "",
    configTable(integration, texts, locale),
    `## ${texts.installTitle(name)}`,
    "",
    ...texts
      .installSteps(name, code(integration.docker_image), repoUrl)
      .map((step, index) => `${index + 1}. ${step}`),
    "",
    texts.installRequirement(name, code(integration.gladys_version)),
    "",
    texts.installNoGladys,
    "",
    ...relatedGuides(integration.slug, texts, locale),
    `## ${texts.aboutTitle}`,
    "",
    texts.aboutBody(
      name,
      text(ownerName),
      url(`https://github.com/${ownerName}`)
    ),
    "",
    ...texts.aboutLinks(repoUrl, docPath).map((link) => `- ${link}`),
  ].join("\n")}\n`;
};

const downloadDoc = async (url) => {
  if (!url) {
    return null;
  }
  const response = await fetch(url);
  if (!response.ok) {
    console.warn(`  ! Unable to download ${url}: HTTP ${response.status}`);
    return null;
  }
  return response.text();
};

// Remove the pages of integrations that left the store, without touching
// anything a human may have added in the same folder.
const removeStalePages = (directory, keptFiles) => {
  fs.readdirSync(directory)
    .filter((file) => file.endsWith(".mdx") && !keptFiles.has(file))
    .forEach((file) => {
      const fullPath = path.join(directory, file);
      if (fs.readFileSync(fullPath, "utf8").includes(GENERATED_MARKER)) {
        fs.unlinkSync(fullPath);
        console.log(
          `> Removed stale page ${path.relative(process.cwd(), fullPath)}`
        );
      }
    });
};

(async () => {
  console.log(`> Downloading external integrations index`);
  const response = await fetch(STORE_INDEX_URL);
  if (!response.ok) {
    throw new Error(`Unable to download store index: HTTP ${response.status}`);
  }
  const index = await response.json();
  const slugs = buildSlugs(index.integrations);
  const nativeSlugs = nativeDocSlugs();

  const integrations = index.integrations.map((integration) =>
    trimIntegration(integration, slugs[integration.store_slug])
  );
  integrations.sort((a, b) => b.stars - a.stars || a.name.localeCompare(b.name));

  const snapshot = {
    generated_at: index.generated_at,
    integrations,
  };
  fs.writeFileSync(OUTPUT_FILE, `${JSON.stringify(snapshot, null, 2)}\n`);
  console.log(
    `> Wrote ${integrations.length} external integrations to ${path.relative(
      process.cwd(),
      OUTPUT_FILE
    )}`
  );

  LOCALES.forEach((locale) =>
    fs.mkdirSync(DOCS_DIRS[locale], { recursive: true })
  );

  const written = { en: new Set(), fr: new Set() };
  for (const integration of index.integrations) {
    const trimmed = integrations.find(
      (item) => item.store_slug === integration.store_slug
    );
    for (const locale of LOCALES) {
      const authorDoc = await downloadDoc(
        integration.docs ? integration.docs[locale] : null
      );
      const page = buildPage(
        trimmed,
        authorDoc ? prepareAuthorDoc(authorDoc, trimmed) : null,
        locale,
        nativeSlugs.has(trimmed.slug)
      );
      const fileName = `${trimmed.slug}.mdx`;
      fs.writeFileSync(path.join(DOCS_DIRS[locale], fileName), page);
      written[locale].add(fileName);
    }
    console.log(`  > ${trimmed.slug}`);
  }

  LOCALES.forEach((locale) =>
    removeStalePages(DOCS_DIRS[locale], written[locale])
  );
  console.log(`> Generated ${integrations.length} pages per locale`);
})();
