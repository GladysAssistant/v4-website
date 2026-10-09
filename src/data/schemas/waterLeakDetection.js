import { getGuidePageSchema } from "../structuredData";
import waterLeakDetectionContent, {
  waterLeakDetectionFaqEn,
  waterLeakDetectionFaqFr,
  waterLeakDetectionFaqDe,
  waterLeakDetectionFaqEs,
} from "../waterLeakDetectionData";

export function getWaterLeakDetectionPageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/water-leak-detection/",
    content: waterLeakDetectionContent,
    faqEn: waterLeakDetectionFaqEn,
    faqFr: waterLeakDetectionFaqFr,
    faqDe: waterLeakDetectionFaqDe,
    faqEs: waterLeakDetectionFaqEs,
    about: [
      { "@type": "Thing", name: "Water leak detection" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
