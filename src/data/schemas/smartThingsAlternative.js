import { getGuidePageSchema } from "../structuredData";
import smartThingsAlternativeContent, {
  smartThingsAlternativeFaqEn,
  smartThingsAlternativeFaqFr,
  smartThingsAlternativeFaqDe,
  smartThingsAlternativeFaqEs,
} from "../smartThingsAlternativeData";

export function getSmartThingsAlternativePageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/smartthings-alternative/",
    content: smartThingsAlternativeContent,
    faqEn: smartThingsAlternativeFaqEn,
    faqFr: smartThingsAlternativeFaqFr,
    faqDe: smartThingsAlternativeFaqDe,
    faqEs: smartThingsAlternativeFaqEs,
    about: [
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
      { "@type": "SoftwareApplication", name: "Samsung SmartThings" },
    ],
  });
}
