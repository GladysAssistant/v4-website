import { getGuidePageSchema } from "../structuredData";
import smartHomeMcpContent, {
  smartHomeMcpFaqEn,
  smartHomeMcpFaqFr,
  smartHomeMcpFaqDe,
} from "../smartHomeMcpData";

export function getSmartHomeMcpPageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/smart-home-mcp-server/",
    content: smartHomeMcpContent,
    faqEn: smartHomeMcpFaqEn,
    faqFr: smartHomeMcpFaqFr,
    faqDe: smartHomeMcpFaqDe,
    about: [
      { "@type": "Thing", name: "Model Context Protocol" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
