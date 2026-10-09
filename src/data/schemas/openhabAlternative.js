import { getGuidePageSchema } from "../structuredData";
import openhabAlternativeContent, {
  openhabAlternativeFaqEn,
  openhabAlternativeFaqFr,
  openhabAlternativeFaqDe,
  openhabAlternativeFaqEs,
} from "../openhabAlternativeData";

export function getOpenhabAlternativePageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/openhab-alternative/",
    content: openhabAlternativeContent,
    faqEn: openhabAlternativeFaqEn,
    faqFr: openhabAlternativeFaqFr,
    faqDe: openhabAlternativeFaqDe,
    faqEs: openhabAlternativeFaqEs,
    about: [
      { "@type": "SoftwareApplication", name: "openHAB" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
