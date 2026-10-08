import { getGuidePageSchema } from "../structuredData";
import nestThermostatAlternativeContent, {
  nestThermostatAlternativeFaqEn,
  nestThermostatAlternativeFaqFr,
  nestThermostatAlternativeFaqDe,
} from "../nestThermostatAlternativeData";

export function getNestThermostatAlternativePageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/nest-thermostat-alternative/",
    content: nestThermostatAlternativeContent,
    faqEn: nestThermostatAlternativeFaqEn,
    faqFr: nestThermostatAlternativeFaqFr,
    faqDe: nestThermostatAlternativeFaqDe,
    about: [
      { "@type": "Product", name: "Nest Learning Thermostat" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
