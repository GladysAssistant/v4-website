import {
  SITE_URL,
  getOrganizationNode,
  getWebSiteNode,
  getOgImageUrl,
} from "../structuredData";
import { guidesHubContent, guidesSections } from "../guidesHubData";

export function getGuidesHubPageSchema(lang) {
  const prefix = lang === "en" ? "" : `/${lang}`;
  const locale = ["fr", "de", "es"].includes(lang) ? lang : "en";
  const pageUrl = `${SITE_URL}${prefix}/guides/`;
  const meta = guidesHubContent[locale].meta;
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
        image: getOgImageUrl(pageUrl, lang),
        url: pageUrl,
        inLanguage: locale,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item[locale].label,
            url: `${SITE_URL}${prefix}${item.href}`,
          })),
        },
      },
    ],
  };
}
