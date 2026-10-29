const { addAmazonAffiliateTag } = require("../src/utils/amazonAffiliate");

// Remark plugin adding the Amazon affiliate tag to every amazon.fr and
// amazon.com link of the Markdown/MDX content: Markdown links
// ([text](url)), reference definitions ([id]: url) and JSX/HTML elements
// (<a href="...">). The external integration pages are generated from the
// store, so their links can't be tagged by hand.
const visit = (node) => {
  if ((node.type === "link" || node.type === "definition") && node.url) {
    node.url = addAmazonAffiliateTag(node.url);
  }
  if (
    (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") &&
    Array.isArray(node.attributes)
  ) {
    node.attributes.forEach((attribute) => {
      if (attribute.name === "href" && typeof attribute.value === "string") {
        attribute.value = addAmazonAffiliateTag(attribute.value);
      }
    });
  }
  if (Array.isArray(node.children)) {
    node.children.forEach(visit);
  }
};

module.exports = function remarkAmazonAffiliate() {
  return (tree) => {
    visit(tree);
  };
};
