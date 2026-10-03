import { getGuidePageSchema } from "../structuredData";
import zwaveJsUiWithoutHomeAssistantContent, {
  zwaveJsUiWithoutHomeAssistantFaqEn,
  zwaveJsUiWithoutHomeAssistantFaqFr,
} from "../zwaveJsUiWithoutHomeAssistantData";

export function getZwaveJsUiWithoutHomeAssistantPageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/z-wave-js-ui-without-home-assistant/",
    content: zwaveJsUiWithoutHomeAssistantContent,
    faqEn: zwaveJsUiWithoutHomeAssistantFaqEn,
    faqFr: zwaveJsUiWithoutHomeAssistantFaqFr,
    about: [
      { "@type": "SoftwareApplication", name: "Z-Wave JS UI" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
