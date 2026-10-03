import { getGuidePageSchema } from "../structuredData";
import miniPcHomeAutomationContent, {
  miniPcHomeAutomationFaqEn,
  miniPcHomeAutomationFaqFr,
} from "../miniPcHomeAutomationData";

export function getMiniPcHomeAutomationPageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/mini-pc-home-automation/",
    content: miniPcHomeAutomationContent,
    faqEn: miniPcHomeAutomationFaqEn,
    faqFr: miniPcHomeAutomationFaqFr,
    about: [
      { "@type": "Thing", name: "Mini PC" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
