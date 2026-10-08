import { getGuidePageSchema } from "../structuredData";
import zigbee2mqttWithoutHomeAssistantContent, {
  zigbee2mqttWithoutHomeAssistantFaqEn,
  zigbee2mqttWithoutHomeAssistantFaqFr,
  zigbee2mqttWithoutHomeAssistantFaqDe,
} from "../zigbee2mqttWithoutHomeAssistantData";

export function getZigbee2mqttWithoutHomeAssistantPageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/zigbee2mqtt-without-home-assistant/",
    content: zigbee2mqttWithoutHomeAssistantContent,
    faqEn: zigbee2mqttWithoutHomeAssistantFaqEn,
    faqFr: zigbee2mqttWithoutHomeAssistantFaqFr,
    faqDe: zigbee2mqttWithoutHomeAssistantFaqDe,
    about: [
      { "@type": "SoftwareApplication", name: "Zigbee2MQTT" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
