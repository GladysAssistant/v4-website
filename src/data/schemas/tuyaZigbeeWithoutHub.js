import { getGuidePageSchema } from "../structuredData";
import tuyaZigbeeWithoutHubContent, {
  tuyaZigbeeWithoutHubFaqEn,
  tuyaZigbeeWithoutHubFaqFr,
  tuyaZigbeeWithoutHubFaqDe,
} from "../tuyaZigbeeWithoutHubData";

export function getTuyaZigbeeWithoutHubPageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/tuya-zigbee-without-hub/",
    content: tuyaZigbeeWithoutHubContent,
    faqEn: tuyaZigbeeWithoutHubFaqEn,
    faqFr: tuyaZigbeeWithoutHubFaqFr,
    faqDe: tuyaZigbeeWithoutHubFaqDe,
    about: [
      { "@type": "Brand", name: "Tuya" },
      { "@type": "SoftwareApplication", name: "Zigbee2MQTT" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
