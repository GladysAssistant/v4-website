import { getGuidePageSchema } from "../structuredData";
import tuyaZigbeeWithoutHubContent, {
  tuyaZigbeeWithoutHubFaqEn,
  tuyaZigbeeWithoutHubFaqFr,
} from "../tuyaZigbeeWithoutHubData";

export function getTuyaZigbeeWithoutHubPageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/tuya-zigbee-without-hub/",
    content: tuyaZigbeeWithoutHubContent,
    faqEn: tuyaZigbeeWithoutHubFaqEn,
    faqFr: tuyaZigbeeWithoutHubFaqFr,
    about: [
      { "@type": "Brand", name: "Tuya" },
      { "@type": "SoftwareApplication", name: "Zigbee2MQTT" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
