const { addAffiliateTag } = require("../src/utils/affiliateLinks");

// Remark plugin adding the affiliate partner id to every Amazon (amazon.fr,
// amazon.com) and Domadoo link of the Markdown/MDX content: Markdown links
// ([text](url)), reference definitions ([id]: url) and JSX/HTML elements
// (<a href="...">). Docusaurus compiles .md files as MDX too (no
// `markdown.format` is set), so a raw <a> tag in a .md file, such as the
// product cards of the recommended hardware page, is a JSX element here.
// The external integration pages are generated from the store, so their links
// can't be tagged by hand.
//
// A link that ends up carrying a partner id also gets rel="sponsored", as
// search engines ask for affiliate links. Docusaurus' <Link> only sets
// rel="noopener noreferrer" on external links when no rel is passed.
const SPONSORED_REL = "sponsored nofollow noopener noreferrer";

// A link to a partner site carrying its partner id, once tagged.
const isAffiliate = (url) =>
  typeof url === "string" &&
  /^https?:\/\/([a-z0-9-]+\.)*(amazon|domadoo)\./i.test(url) &&
  /[?&](tag|domid)=/.test(url);

const isAmazonAffiliate = (url) =>
  isAffiliate(url) && /^https?:\/\/([a-z0-9-]+\.)*amazon\./i.test(url);

// A page whose Markdown links to Amazon ends with a small affiliate notice,
// the one Amazon asks for next to its links. The component is registered in
// src/theme/MDXComponents.js, so the MDX file needs no import.
const DISCLOSURE = {
  type: "mdxJsxFlowElement",
  name: "AffiliateDisclosure",
  attributes: [],
  children: [],
};

// Definitions are referenced by links ([text][id]): those links are marked
// once the definitions are known, see the second pass below.
const visit = (node, sponsoredDefinitions, state) => {
  if (node.type === "definition" && node.url) {
    node.url = addAffiliateTag(node.url);
    state.amazon = state.amazon || isAmazonAffiliate(node.url);
    if (isAffiliate(node.url)) {
      sponsoredDefinitions.add(String(node.identifier).toLowerCase());
    }
  }
  if (node.type === "link" && node.url) {
    node.url = addAffiliateTag(node.url);
    state.amazon = state.amazon || isAmazonAffiliate(node.url);
    if (isAffiliate(node.url)) {
      node.data = node.data || {};
      node.data.hProperties = {
        ...(node.data.hProperties || {}),
        rel: SPONSORED_REL,
      };
    }
  }
  if (
    (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") &&
    Array.isArray(node.attributes)
  ) {
    let sponsored = false;
    node.attributes.forEach((attribute) => {
      if (attribute.name === "href" && typeof attribute.value === "string") {
        attribute.value = addAffiliateTag(attribute.value);
        sponsored = isAffiliate(attribute.value);
        state.amazon = state.amazon || isAmazonAffiliate(attribute.value);
      }
    });
    if (sponsored) {
      const rel = node.attributes.find((a) => a.name === "rel");
      if (!rel) {
        node.attributes.push({
          type: "mdxJsxAttribute",
          name: "rel",
          value: SPONSORED_REL,
        });
      } else if (typeof rel.value === "string") {
        // Keep the author's values (noopener...) and add the missing ones.
        const values = new Set(rel.value.split(/\s+/).filter(Boolean));
        SPONSORED_REL.split(" ").forEach((value) => values.add(value));
        rel.value = [...values].join(" ");
      }
    }
  }
  if (Array.isArray(node.children)) {
    node.children.forEach((child) =>
      visit(child, sponsoredDefinitions, state),
    );
  }
};

const markReferences = (node, sponsoredDefinitions) => {
  if (
    node.type === "linkReference" &&
    sponsoredDefinitions.has(String(node.identifier).toLowerCase())
  ) {
    node.data = node.data || {};
    node.data.hProperties = {
      ...(node.data.hProperties || {}),
      rel: SPONSORED_REL,
    };
  }
  if (Array.isArray(node.children)) {
    node.children.forEach((child) => markReferences(child, sponsoredDefinitions));
  }
};

module.exports = function remarkAffiliateLinks() {
  return (tree) => {
    const sponsoredDefinitions = new Set();
    const state = { amazon: false };
    visit(tree, sponsoredDefinitions, state);
    if (sponsoredDefinitions.size > 0) {
      markReferences(tree, sponsoredDefinitions);
    }
    if (state.amazon) {
      tree.children.push({ ...DISCLOSURE });
    }
  };
};
