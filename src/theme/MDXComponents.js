import MDXComponents from "@theme-original/MDXComponents";
import AffiliateDisclosure from "@site/src/components/AffiliateDisclosure";

// <AffiliateDisclosure /> is inserted by plugins/remark-affiliate-links.js,
// without an import, so it has to be known to every MDX file.
export default {
  ...MDXComponents,
  AffiliateDisclosure,
};
