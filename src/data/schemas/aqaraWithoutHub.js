import { getGuidePageSchema } from "../structuredData";
import aqaraWithoutHubContent, {
  aqaraWithoutHubFaqEn,
  aqaraWithoutHubFaqFr,
  aqaraWithoutHubFaqDe,
} from "../aqaraWithoutHubData";

export function getAqaraWithoutHubPageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/aqara-without-hub/",
    content: aqaraWithoutHubContent,
    faqEn: aqaraWithoutHubFaqEn,
    faqFr: aqaraWithoutHubFaqFr,
    faqDe: aqaraWithoutHubFaqDe,
    about: [
      { "@type": "Brand", name: "Aqara" },
      { "@type": "SoftwareApplication", name: "Zigbee2MQTT" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
