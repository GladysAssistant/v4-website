const { addAffiliateTag } = require("../src/utils/affiliateLinks");

// Remark plugin adding the affiliate partner id to every Amazon (amazon.fr,
// amazon.com) and Domadoo link of the Markdown/MDX content: Markdown links
// ([text](url)), reference definitions ([id]: url) and JSX/HTML elements
// (<a href="...">). The external integration pages are generated from the
// store, so their links can't be tagged by hand.
const visit = (node) => {
  if ((node.type === "link" || node.type === "definition") && node.url) {
    node.url = addAffiliateTag(node.url);
  }
  if (
    (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") &&
    Array.isArray(node.attributes)
  ) {
    node.attributes.forEach((attribute) => {
      if (attribute.name === "href" && typeof attribute.value === "string") {
        attribute.value = addAffiliateTag(attribute.value);
      }
    });
  }
  if (Array.isArray(node.children)) {
    node.children.forEach(visit);
  }
};

module.exports = function remarkAffiliateLinks() {
  return (tree) => {
    visit(tree);
  };
};
