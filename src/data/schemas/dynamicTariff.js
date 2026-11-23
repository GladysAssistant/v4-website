import { getGuidePageSchema } from "../structuredData";
import dynamicTariffContent, {
  dynamicTariffFaqEn,
  dynamicTariffFaqDe,
} from "../dynamicTariffData";

export function getDynamicTariffPageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/dynamischer-stromtarif/",
    content: dynamicTariffContent,
    faqEn: dynamicTariffFaqEn,
    faqDe: dynamicTariffFaqDe,
    about: [
      { "@type": "Thing", name: "Dynamischer Stromtarif" },
      { "@type": "Organization", name: "EPEX SPOT" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
