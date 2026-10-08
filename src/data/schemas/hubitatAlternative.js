import { getGuidePageSchema } from "../structuredData";
import hubitatAlternativeContent, {
  hubitatAlternativeFaqEn,
  hubitatAlternativeFaqFr,
  hubitatAlternativeFaqDe,
} from "../hubitatAlternativeData";

export function getHubitatAlternativePageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/hubitat-alternative/",
    content: hubitatAlternativeContent,
    faqEn: hubitatAlternativeFaqEn,
    faqFr: hubitatAlternativeFaqFr,
    faqDe: hubitatAlternativeFaqDe,
    about: [
      { "@type": "Product", name: "Hubitat Elevation" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
