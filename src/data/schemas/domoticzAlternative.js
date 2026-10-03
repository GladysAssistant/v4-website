import { getGuidePageSchema } from "../structuredData";
import domoticzAlternativeContent, {
  domoticzAlternativeFaqEn,
  domoticzAlternativeFaqFr,
} from "../domoticzAlternativeData";

export function getDomoticzAlternativePageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/domoticz-alternative/",
    content: domoticzAlternativeContent,
    faqEn: domoticzAlternativeFaqEn,
    faqFr: domoticzAlternativeFaqFr,
    about: [
      { "@type": "SoftwareApplication", name: "Domoticz" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
