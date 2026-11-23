import { getGuidePageSchema } from "../structuredData";
import balkonkraftwerkContent, {
  balkonkraftwerkFaqEn,
  balkonkraftwerkFaqDe,
} from "../balkonkraftwerkData";

export function getBalkonkraftwerkPageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/balkonkraftwerk/",
    content: balkonkraftwerkContent,
    faqEn: balkonkraftwerkFaqEn,
    faqDe: balkonkraftwerkFaqDe,
    about: [
      { "@type": "Thing", name: "Balkonkraftwerk" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
