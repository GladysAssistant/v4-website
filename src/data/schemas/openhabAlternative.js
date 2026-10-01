import { getGuidePageSchema } from "../structuredData";
import openhabAlternativeContent, {
  openhabAlternativeFaqEn,
  openhabAlternativeFaqFr,
} from "../openhabAlternativeData";

export function getOpenhabAlternativePageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/openhab-alternative/",
    content: openhabAlternativeContent,
    faqEn: openhabAlternativeFaqEn,
    faqFr: openhabAlternativeFaqFr,
    about: [
      { "@type": "SoftwareApplication", name: "openHAB" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
