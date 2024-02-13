const fs = require("fs");
const Promise = require("bluebird");
const puppeteer = require("puppeteer");

const LANGUAGES = ["fr", "en"];
const INTEGRATIONS = [
  "broadlink",
  "camera",
  "netatmo",
  "philips-hue",
  "sonoff",
  "sonos",
  "tasmota",
  "tp-link",
  "xiaomi",
  "zigbee2mqtt",
  "zwave",
];

const LIST_OF_NOT_FOUND_TITLES = [
  "not found",
  "page introuvable",
  "tous nos produits - ikea", // means users was redirected
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

const testProductUrl = async (page, url) => {
  try {
    console.log(`Testing product URL ${url}`);
    await page.goto(url);
    const title = await page.title();
    console.log(`Page title = ${title}`);
    LIST_OF_NOT_FOUND_TITLES.forEach((notFoundTitle) => {
      if (title.toLowerCase().indexOf(notFoundTitle) !== -1) {
        throw new Error("Product Not Found");
      }
    });
    console.log(`Page is valid!`);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

const checkProductsUrls = async (products) => {
  console.log(`>> Checking products URLs`);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const newListOfProducts = await Promise.filter(
    products,
    async (product) => {
      const isUrlValid = await testProductUrl(page, product.buyLink);
      // Waiting to avoid being seen as a scrapper/spammer
      await Promise.delay(100);
      return isUrlValid;
    },
    { concurrency: 1 }
  );
  await browser.close();
  return newListOfProducts;
};

const cleanIntegrations = async (lang, docId) => {
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

  // Remove products with invalid URLS
  cleanList = await checkProductsUrls(cleanList);

  // Sort by title
  cleanList.sort((a, b) => a.title.localeCompare(b.title, lang));

  writeFileProducts(cleanList, lang, docId);
};

const cleanIntegrationsByLang = async (lang) => {
  await Promise.each(INTEGRATIONS, async (integration) => {
    await cleanIntegrations(lang, integration);
  });
};

const cleanAllIntegrations = async () => {
  await Promise.each(LANGUAGES, async (lang) => {
    await cleanIntegrationsByLang(lang);
  });
};

cleanAllIntegrations();
