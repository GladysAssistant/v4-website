import { getGuidePageSchema } from "../structuredData";
import bestSmartHomeHubContent, {
  bestSmartHomeHubFaqEn,
  bestSmartHomeHubFaqFr,
  bestSmartHomeHubFaqDe,
} from "../bestSmartHomeHubData";

export function getBestSmartHomeHubPageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/best-smart-home-hub/",
    content: bestSmartHomeHubContent,
    faqEn: bestSmartHomeHubFaqEn,
    faqFr: bestSmartHomeHubFaqFr,
    faqDe: bestSmartHomeHubFaqDe,
    about: [
      { "@type": "Thing", name: "Smart home hub" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
