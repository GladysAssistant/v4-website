import { getGuidePageSchema } from "../structuredData";
import shellyWithoutCloudContent, {
  shellyWithoutCloudFaqEn,
  shellyWithoutCloudFaqFr,
  shellyWithoutCloudFaqDe,
} from "../shellyWithoutCloudData";

export function getShellyWithoutCloudPageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/shelly-without-cloud/",
    content: shellyWithoutCloudContent,
    faqEn: shellyWithoutCloudFaqEn,
    faqFr: shellyWithoutCloudFaqFr,
    faqDe: shellyWithoutCloudFaqDe,
    about: [
      { "@type": "Brand", name: "Shelly" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
