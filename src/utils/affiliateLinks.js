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
  "amazon.de": { name: "tag", value: "gladproj0e-21" },
  "domadoo.fr": { name: "domid", value: "17" },
};

// "https://www.amazon.fr/dp/B0BR59FD6C" -> "https://www.amazon.fr/dp/B0BR59FD6C?tag=gladproj-21"
// Links to any other site (amazon.es has no partner id yet) are returned
// unchanged. A partner id that doesn't match the site (a French tag
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
// languages (es) until a partner id is added above and the store here.
// Hand-written Markdown links are a different matter: the German docs and blog
// link to amazon.de, the Spanish ones keep the amazon.com links of the English
// text, tagged with the amazon.com partner id.
const AMAZON_STORES = {
  en: "https://www.amazon.com",
  fr: "https://www.amazon.fr",
  de: "https://www.amazon.de",
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

// True when a value (a page's content object, an array, a string) holds an
// Amazon link carrying one of our partner ids, at any depth. The React pages
// that build their own Amazon links use it to show <AffiliateDisclosure />
// only in the languages whose links are actually tagged.
const AMAZON_TAGS = Object.entries(AFFILIATE_PARAMS)
  .filter(([site]) => site.startsWith("amazon."))
  .map(([, param]) => `${param.name}=${param.value}`);

const containsAmazonAffiliateLink = (value) => {
  if (typeof value === "string") {
    return (
      /amazon\./i.test(value) && AMAZON_TAGS.some((tag) => value.includes(tag))
    );
  }
  if (Array.isArray(value)) {
    return value.some(containsAmazonAffiliateLink);
  }
  if (value && typeof value === "object") {
    return Object.values(value).some(containsAmazonAffiliateLink);
  }
  return false;
};

module.exports = {
  AFFILIATE_PARAMS,
  AMAZON_STORES,
  addAffiliateTag,
  amazonSearchLink,
  containsAmazonAffiliateLink,
};
