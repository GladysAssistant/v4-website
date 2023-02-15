const fs = require("fs");

const LANGUAGES = ["fr", "en"];
const INTEGRATIONS = [
  "philips-hue",
  "zwave",
  "sonoff",
  "xiaomi",
  "camera",
  "tp-link",
  "zigbee2mqtt",
];

const writeFileProducts = (products, lang, docId) => {
  console.log(`>> Writing files for ${lang} and ${docId} integrations`);
  fs.writeFileSync(
    `./integrations/${lang}/${docId}.json`,
    JSON.stringify(products, null, 4)
  );
};

const removeDuplicatedProducts = (currentProducts) => {
  const productSet = new Set();
  const products = [];
  currentProducts.forEach((integration) => {
    const productKey = integration.title.toLowerCase();
    if (!productSet.has(productKey)) {
      products.push(integration);
      productSet.add(productKey);
    }
  });
  return products;
};

const cleanLabel = (label) => {
  return label.trim().replace(/\s\s+/g, " ");
};

const cleanIntegrations = (lang, docId) => {
  const currentList = require(`../integrations/${lang}/${docId}.json`);

  // Trim fields
  let cleanList = currentList.map((product) => {
    const tags = product.tags.map((tag) => cleanLabel(tag));

    return {
      docsId: cleanLabel(product.docsId),
      title: cleanLabel(product.title),
      description: cleanLabel(product.description),
      imageName: product.imageName,
      tags,
      buyLink: cleanLabel(product.buyLink),
    };
  });

  cleanList = removeDuplicatedProducts(cleanList);

  // Sort by title
  cleanList.sort((a, b) => a.title.localeCompare(b.title, lang));

  writeFileProducts(cleanList, lang, docId);
};

const cleanIntegrationsByLang = (lang) => {
  INTEGRATIONS.forEach((integration) => {
    cleanIntegrations(lang, integration);
  });
};

const cleanAllIntegrations = () => {
  LANGUAGES.forEach((lang) => {
    cleanIntegrationsByLang(lang);
  });
};

cleanAllIntegrations();
