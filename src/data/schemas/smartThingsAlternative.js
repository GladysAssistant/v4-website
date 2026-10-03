import { getGuidePageSchema } from "../structuredData";
import smartThingsAlternativeContent, {
  smartThingsAlternativeFaqEn,
  smartThingsAlternativeFaqFr,
} from "../smartThingsAlternativeData";

export function getSmartThingsAlternativePageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/smartthings-alternative/",
    content: smartThingsAlternativeContent,
    faqEn: smartThingsAlternativeFaqEn,
    faqFr: smartThingsAlternativeFaqFr,
    about: [
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
      { "@type": "SoftwareApplication", name: "Samsung SmartThings" },
    ],
  });
}
