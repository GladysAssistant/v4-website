import { getGuidePageSchema } from "../structuredData";
import hubitatAlternativeContent, {
  hubitatAlternativeFaqEn,
  hubitatAlternativeFaqFr,
  hubitatAlternativeFaqDe,
  hubitatAlternativeFaqEs,
} from "../hubitatAlternativeData";

export function getHubitatAlternativePageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/hubitat-alternative/",
    content: hubitatAlternativeContent,
    faqEn: hubitatAlternativeFaqEn,
    faqFr: hubitatAlternativeFaqFr,
    faqDe: hubitatAlternativeFaqDe,
    faqEs: hubitatAlternativeFaqEs,
    about: [
      { "@type": "Product", name: "Hubitat Elevation" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
