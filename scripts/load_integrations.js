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

const getIntegrationsFromAirtable = async () => {
  const { data } = await axios({
    method: "get",
    url:
      "https://api.airtable.com/v0/apptqzQKsqMkRQ8GL/Table%201?maxRecords=1000&view=Grid%20view",
    headers: {
      authorization: "Bearer " + process.env.AIRTABLE_API_KEY,
    },
  });
  return data.records;
};

const parseAndFormatRecords = (records) => {
  const products = [];
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
    if (newItem.buyLink && newItem.buyLink.indexOf("www.amazon.fr") !== -1) {
      var amazonUrl = new URL(newItem.buyLink);
      amazonUrl.searchParams.set("tag", "gladproj-21");
      newItem.buyLink = amazonUrl.toString();
    }
    const { value, error } = schema.validate(newItem);
    if (error) {
      console.log(error);
    } else {
      console.log("Pushing value");
      products.push(value);
    }
  });
  return products;
};

const downloadImages = async (products) => {
  return Promise.map(
    products,
    (product) => {
      console.log("downloading " + product.imageUrl);
      return download(product.imageUrl, "en/static/img/integrations", {
        filename: product.imageName,
      }).catch((err) => {
        console.log(
          "Cannot download image " + product.imageUrl + " " + product.imageName
        );
        throw err;
      });
    },
    {
      concurrency: 5,
    }
  );
};

const writeFileProducts = (products) => {
  const dictionnary = {};
  AUTHORIZED_DOC_ID.forEach((docId) => (dictionnary[docId] = []));
  products.forEach((product) => {
    dictionnary[product.docsId].push(product);
  });
  AUTHORIZED_DOC_ID.forEach((docId) => {
    fs.writeFileSync(
      `./fr/integrations/${docId}.json`,
      JSON.stringify(dictionnary[docId], null, 4)
    );
  });
};

(async () => {
  const records = await getIntegrationsFromAirtable();
  const products = parseAndFormatRecords(records);
  await downloadImages(products);
  writeFileProducts(products);
})();
