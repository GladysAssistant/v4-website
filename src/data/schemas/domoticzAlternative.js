import { getGuidePageSchema } from "../structuredData";
import domoticzAlternativeContent, {
  domoticzAlternativeFaqEn,
  domoticzAlternativeFaqFr,
  domoticzAlternativeFaqDe,
} from "../domoticzAlternativeData";

export function getDomoticzAlternativePageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/domoticz-alternative/",
    content: domoticzAlternativeContent,
    faqEn: domoticzAlternativeFaqEn,
    faqFr: domoticzAlternativeFaqFr,
    faqDe: domoticzAlternativeFaqDe,
    about: [
      { "@type": "SoftwareApplication", name: "Domoticz" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
