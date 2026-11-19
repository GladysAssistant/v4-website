/**
 * Affiliate partner ids, keyed by site. Every link to one of these sites gets
 * the matching query parameter, whether it lives in a doc, a blog post, a
 * generated external integration page or a component.
 *
 * Kept in CommonJS so the remark plugin (loaded by Node from
 * docusaurus.config.js), the scripts and the React components can all use it.
 */
const AFFILIATE_PARAMS = {
  "amazon.fr": { name: "tag", value: "gladproj-21" },
  "amazon.com": { name: "tag", value: "gladproj-20" },
  "domadoo.fr": { name: "domid", value: "17" },
};

// "https://www.amazon.fr/dp/B0BR59FD6C" -> "https://www.amazon.fr/dp/B0BR59FD6C?tag=gladproj-21"
// Links to any other site (amazon.de and amazon.es have no partner id yet) are
// returned unchanged. A partner id that doesn't match the site (a French tag
// on amazon.com earns nothing) is replaced.
const addAffiliateTag = (href) => {
  if (typeof href !== "string" || !/amazon\.|domadoo\./i.test(href)) {
    return href;
  }
  let url;
  try {
    url = new URL(href);
  } catch (e) {
    return href;
  }
  const site = url.hostname.toLowerCase().replace(/^(www|smile|m)\./, "");
  const param = AFFILIATE_PARAMS[site];
  if (!param || url.searchParams.get(param.name) === param.value) {
    return href;
  }
  url.searchParams.set(param.name, param.value);
  return url.toString();
};

// Amazon store of each language that has a partner id. The generated product
// boxes (landing pages, external integrations) are hidden in the other
// languages (de, es) until a partner id is added above and the store here.
// Hand-written Markdown links are a different matter: the German and Spanish
// docs and blog keep the amazon.com links of the English text, tagged with
// the amazon.com partner id.
const AMAZON_STORES = {
  en: "https://www.amazon.com",
  fr: "https://www.amazon.fr",
};

// ("Aqara Motion Sensor P1", "fr") ->
// "https://www.amazon.fr/s?k=Aqara%20Motion%20Sensor%20P1&tag=gladproj-21"
// Search links rather than product pages: they never go out of stock and work
// in every store. Returns null for a language with no store.
const amazonSearchLink = (query, locale) => {
  const store = AMAZON_STORES[locale];
  if (!store) {
    return null;
  }
  return addAffiliateTag(`${store}/s?k=${encodeURIComponent(query)}`);
};

module.exports = {
  AFFILIATE_PARAMS,
  AMAZON_STORES,
  addAffiliateTag,
  amazonSearchLink,
};
