import { getGuidePageSchema } from "../structuredData";
import homeyAlternativeContent, {
  homeyAlternativeFaqEn,
  homeyAlternativeFaqFr,
  homeyAlternativeFaqDe,
  homeyAlternativeFaqEs,
} from "../homeyAlternativeData";

export function getHomeyAlternativePageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/homey-alternative/",
    content: homeyAlternativeContent,
    faqEn: homeyAlternativeFaqEn,
    faqFr: homeyAlternativeFaqFr,
    faqDe: homeyAlternativeFaqDe,
    faqEs: homeyAlternativeFaqEs,
    about: [
      { "@type": "Product", name: "Homey Pro" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
