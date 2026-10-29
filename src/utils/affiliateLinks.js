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
  const site = url.hostname.toLowerCase().replace(/^(www|smile)\./, "");
  const param = AFFILIATE_PARAMS[site];
  if (!param || url.searchParams.get(param.name) === param.value) {
    return href;
  }
  url.searchParams.set(param.name, param.value);
  return url.toString();
};

module.exports = { AFFILIATE_PARAMS, addAffiliateTag };
