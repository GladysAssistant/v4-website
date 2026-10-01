import { getGuidePageSchema } from "../structuredData";
import ontarioElectricityRatesContent, {
  ontarioElectricityRatesFaqEn,
  ontarioElectricityRatesFaqFr,
} from "../ontarioElectricityRatesData";

export function getOntarioElectricityRatesPageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/ontario-electricity-rates/",
    content: ontarioElectricityRatesContent,
    faqEn: ontarioElectricityRatesFaqEn,
    faqFr: ontarioElectricityRatesFaqFr,
    about: [
      { "@type": "Thing", name: "Ontario electricity rates" },
      { "@type": "Organization", name: "Ontario Energy Board" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
