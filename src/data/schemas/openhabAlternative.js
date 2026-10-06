import { getGuidePageSchema } from "../structuredData";
import openhabAlternativeContent, {
  openhabAlternativeFaqEn,
  openhabAlternativeFaqFr,
  openhabAlternativeFaqDe,
} from "../openhabAlternativeData";

export function getOpenhabAlternativePageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/openhab-alternative/",
    content: openhabAlternativeContent,
    faqEn: openhabAlternativeFaqEn,
    faqFr: openhabAlternativeFaqFr,
    faqDe: openhabAlternativeFaqDe,
    about: [
      { "@type": "SoftwareApplication", name: "openHAB" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
