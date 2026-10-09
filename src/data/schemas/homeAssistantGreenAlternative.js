import { getGuidePageSchema } from "../structuredData";
import homeAssistantGreenAlternativeContent, {
  homeAssistantGreenAlternativeFaqEn,
  homeAssistantGreenAlternativeFaqFr,
  homeAssistantGreenAlternativeFaqDe,
  homeAssistantGreenAlternativeFaqEs,
} from "../homeAssistantGreenAlternativeData";

export function getHomeAssistantGreenAlternativePageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/home-assistant-green-alternative/",
    content: homeAssistantGreenAlternativeContent,
    faqEn: homeAssistantGreenAlternativeFaqEn,
    faqFr: homeAssistantGreenAlternativeFaqFr,
    faqDe: homeAssistantGreenAlternativeFaqDe,
    faqEs: homeAssistantGreenAlternativeFaqEs,
    about: [
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
      { "@type": "Product", name: "Home Assistant Green" },
      { "@type": "Product", name: "Home Assistant Yellow" },
    ],
  });
}
