import { getGuidePageSchema } from "../structuredData";
import pvSurplusChargingContent, {
  pvSurplusChargingFaqEn,
  pvSurplusChargingFaqDe,
} from "../pvSurplusChargingData";

export function getPvSurplusChargingPageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/pv-ueberschussladen/",
    content: pvSurplusChargingContent,
    faqEn: pvSurplusChargingFaqEn,
    faqDe: pvSurplusChargingFaqDe,
    about: [
      { "@type": "Thing", name: "PV-Überschussladen" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
