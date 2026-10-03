import { getGuidePageSchema } from "../structuredData";
import nestThermostatAlternativeContent, {
  nestThermostatAlternativeFaqEn,
  nestThermostatAlternativeFaqFr,
} from "../nestThermostatAlternativeData";

export function getNestThermostatAlternativePageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/nest-thermostat-alternative/",
    content: nestThermostatAlternativeContent,
    faqEn: nestThermostatAlternativeFaqEn,
    faqFr: nestThermostatAlternativeFaqFr,
    about: [
      { "@type": "Product", name: "Nest Learning Thermostat" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
