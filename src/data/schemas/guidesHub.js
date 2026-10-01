import {
  SITE_URL,
  getOrganizationNode,
  getWebSiteNode,
} from "../structuredData";
import { guidesHubContent, guidesSections } from "../guidesHubData";

export function getGuidesHubPageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/guides/`;
  const meta = guidesHubContent[lang === "fr" ? "fr" : "en"].meta;
  const items = guidesSections.flatMap((section) => section.items);

  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationNode(),
      getWebSiteNode(lang),
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#page`,
        name: meta.title,
        description: meta.description,
        url: pageUrl,
        inLanguage: lang === "fr" ? "fr" : "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item[lang === "fr" ? "fr" : "en"].label,
            url: `${SITE_URL}${prefix}${item.href}`,
          })),
        },
      },
    ],
  };
}
