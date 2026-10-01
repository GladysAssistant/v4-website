import { getGuidePageSchema } from "../structuredData";
import sinopeZigbeeContent, {
  sinopeZigbeeFaqEn,
  sinopeZigbeeFaqFr,
} from "../sinopeZigbeeData";

export function getSinopeZigbeePageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/sinope-zigbee/",
    content: sinopeZigbeeContent,
    faqEn: sinopeZigbeeFaqEn,
    faqFr: sinopeZigbeeFaqFr,
    about: [
      { "@type": "Organization", name: "Sinopé Technologies" },
      { "@type": "Thing", name: "Zigbee" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
