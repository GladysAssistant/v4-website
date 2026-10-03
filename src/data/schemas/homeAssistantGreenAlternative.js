import { getGuidePageSchema } from "../structuredData";
import homeAssistantGreenAlternativeContent, {
  homeAssistantGreenAlternativeFaqEn,
  homeAssistantGreenAlternativeFaqFr,
} from "../homeAssistantGreenAlternativeData";

export function getHomeAssistantGreenAlternativePageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/home-assistant-green-alternative/",
    content: homeAssistantGreenAlternativeContent,
    faqEn: homeAssistantGreenAlternativeFaqEn,
    faqFr: homeAssistantGreenAlternativeFaqFr,
    about: [
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
      { "@type": "Product", name: "Home Assistant Green" },
      { "@type": "Product", name: "Home Assistant Yellow" },
    ],
  });
}
