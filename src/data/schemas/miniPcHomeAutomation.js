import { getGuidePageSchema } from "../structuredData";
import miniPcHomeAutomationContent, {
  miniPcHomeAutomationFaqEn,
  miniPcHomeAutomationFaqFr,
  miniPcHomeAutomationFaqDe,
} from "../miniPcHomeAutomationData";

export function getMiniPcHomeAutomationPageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/mini-pc-home-automation/",
    content: miniPcHomeAutomationContent,
    faqEn: miniPcHomeAutomationFaqEn,
    faqFr: miniPcHomeAutomationFaqFr,
    faqDe: miniPcHomeAutomationFaqDe,
    about: [
      { "@type": "Thing", name: "Mini PC" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
