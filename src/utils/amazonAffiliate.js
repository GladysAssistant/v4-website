/**
 * Amazon affiliate tags, keyed by marketplace. Every link to one of these
 * marketplaces gets the matching `tag` query parameter, whether it lives in a
 * doc, a blog post, a generated external integration page or a component.
 *
 * Kept in CommonJS so both the remark plugin (loaded by Node from
 * docusaurus.config.js) and the React components can use it.
 */
const AMAZON_AFFILIATE_TAGS = {
  "amazon.fr": "gladproj-21",
  "amazon.com": "gladproj-20",
};

// "https://www.amazon.fr/dp/B0BR59FD6C" -> "https://www.amazon.fr/dp/B0BR59FD6C?tag=gladproj-21"
// Links to any other site, or to a marketplace without a tag, are returned
// unchanged. A tag that doesn't match the marketplace (a French tag on
// amazon.com earns nothing) is replaced.
const addAmazonAffiliateTag = (href) => {
  if (typeof href !== "string" || !/amazon\./i.test(href)) {
    return href;
  }
  let url;
  try {
    url = new URL(href);
  } catch (e) {
    return href;
  }
  const marketplace = url.hostname.toLowerCase().replace(/^(www|smile)\./, "");
  const tag = AMAZON_AFFILIATE_TAGS[marketplace];
  if (!tag || url.searchParams.get("tag") === tag) {
    return href;
  }
  url.searchParams.set("tag", tag);
  return url.toString();
};

module.exports = { AMAZON_AFFILIATE_TAGS, addAmazonAffiliateTag };
