import { getGuidePageSchema } from "../structuredData";
import philipsHueWithoutBridgeContent, {
  philipsHueWithoutBridgeFaqEn,
  philipsHueWithoutBridgeFaqFr,
  philipsHueWithoutBridgeFaqDe,
} from "../philipsHueWithoutBridgeData";

export function getPhilipsHueWithoutBridgePageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/philips-hue-without-bridge/",
    content: philipsHueWithoutBridgeContent,
    faqEn: philipsHueWithoutBridgeFaqEn,
    faqFr: philipsHueWithoutBridgeFaqFr,
    faqDe: philipsHueWithoutBridgeFaqDe,
    about: [
      { "@type": "Brand", name: "Philips Hue" },
      { "@type": "SoftwareApplication", name: "Zigbee2MQTT" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
