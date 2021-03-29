require("dotenv").config();
const axios = require("axios");
const get = require("get-value");
const slug = require("slug");
const fs = require("fs");
const path = require("path");
const Joi = require("joi");
const download = require("download");
const Promise = require("bluebird");

const AUTHORIZED_DOC_ID = [
  "camera",
  "philips-hue",
  "sonoff",
  "xiaomi",
  "zwave",
  "tasmota",
  "tp-link",
  "yeelight",
];

const schema = Joi.object({
  docsId: Joi.string()
    .valid(...AUTHORIZED_DOC_ID)
    .required(),
  title: Joi.string().min(3).max(50).required(),
  description: Joi.string().min(15).max(150).required(),
  imageName: Joi.string().required(),
  imageUrl: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required(),
  buyLink: Joi.string().required(),
});

const getIntegrationsFromAirtable = async (lang) => {
  console.log(`>> Downloading Airtable ${lang} integrations`);
  const uppercaseLang = lang.toUpperCase();
  const { data } = await axios({
    method: "get",
    url: `https://api.airtable.com/v0/apptqzQKsqMkRQ8GL/${uppercaseLang}?maxRecords=1000&view=Grid%20view`,
    headers: {
      authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    },
  });
  return data.records;
};

const parseAndFormatRecords = (records, lang) => {
  console.log(`>> Processing ${lang} integrations`);
  const products = [];
  let amazonLink = "www.amazon.fr";
  switch (lang) {
    case "fr":
      amazonLink = "www.amazon.fr";
      break;
    case "en":
      amazonLink = "www.amazon.com";
      break;
    default:
  }
  records.forEach((record) => {
    const filename = get(record, "fields.Image.0.filename", { default: "" });
    const imageExtension = filename ? path.extname(filename) : "";
    const title = get(record, "fields.Titre du produit", { default: "" });
    const tags = get(record, "fields.Tags");
    const newItem = {
      docsId: get(
        record,
        "fields.ID de la documentation (référence vers la doc)"
      ),
      title,
      description: get(record, "fields.Courte description"),
      imageUrl: get(record, "fields.Image.0.thumbnails.large.url"),
      imageName: `${slug(title)}${imageExtension}`,
      tags: tags ? tags.split(",") : [],
      buyLink: get(record, "fields.Lien d'achat"),
    };
    // set amazon partner id
    if (newItem.buyLink && newItem.buyLink.indexOf(amazonLink) !== -1) {
      var amazonUrl = new URL(newItem.buyLink);
      amazonUrl.searchParams.set("tag", "gladproj-21");
      newItem.buyLink = amazonUrl.toString();
    }
    const { value, error } = schema.validate(newItem);
    if (error) {
      console.log(error);
    } else {
      console.log(`>>> Adding device ${newItem.title}`);
      products.push(value);
    }
  });
  return products;
};

const downloadImages = async (products, lang) => {
  console.log(`>> Downloading images for ${lang} integrations`);
  return Promise.map(
    products,
    (product) => {
      if (product.imageUrl) {
        console.log(">>> Downloading " + product.imageUrl);
        return download(product.imageUrl, `static/img/integrations/${lang}`, {
          filename: product.imageName,
        }).catch((err) => {
          console.log(
            "Cannot download image " +
              product.imageUrl +
              " " +
              product.imageName
          );
          throw err;
        });
      }
    },
    {
      concurrency: 5,
    }
  );
};

const writeFileProducts = (products, lang) => {
  console.log(`>> Writing files for ${lang} integrations`);
  const dictionnary = {};
  AUTHORIZED_DOC_ID.forEach((docId) => (dictionnary[docId] = []));
  products.forEach((product) => {
    delete product.imageUrl;
    dictionnary[product.docsId].push(product);
  });
  AUTHORIZED_DOC_ID.forEach((docId) => {
    fs.writeFileSync(
      `./integrations/${lang}/${docId}.json`,
      JSON.stringify(dictionnary[docId], null, 4)
    );
  });
};

const getExistingIntegrations = (lang) => {
  console.log(`>> Loading existing ${lang} integrations`);
  let existingIntegrations = [];
  AUTHORIZED_DOC_ID.forEach((docId) => {
    try {
      const existingDoc = require(`../integrations/${lang}/${docId}.json`);
      existingIntegrations = existingIntegrations.concat(existingDoc);
    } catch (e) {}
  });
  return existingIntegrations;
};

const mergeProducts = (existingIntegrations, productsFromAirtable) => {
  console.log(`>> Merge existing and new integrations`);
  const productSet = new Set();
  const products = [];
  productsFromAirtable.forEach((integration) => {
    if (!productSet.has(integration.title)) {
      products.push(integration);
      productSet.add(integration.title);
    }
  });
  existingIntegrations.forEach((integration) => {
    if (!productSet.has(integration.title)) {
      products.push(integration);
      productSet.add(integration.title);
    }
  });
  return products;
};

const loadIntegrations = async (lang) => {
  console.log(`> Starting ${lang} Integration`);
  const existingIntegrations = getExistingIntegrations(lang);
  const records = await getIntegrationsFromAirtable(lang);
  const productsFromAirtable = parseAndFormatRecords(records, lang);
  const products = mergeProducts(existingIntegrations, productsFromAirtable);
  await downloadImages(products, lang);
  writeFileProducts(products, lang);
  console.log(`> End of ${lang} Integration`);
};

(async () => {
  await loadIntegrations("fr");
  await loadIntegrations("en");
})();
