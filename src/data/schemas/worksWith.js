import { getGuidePageSchema } from "../structuredData";
import worksWithContent, {
  worksWithFaqEn,
  worksWithFaqFr,
  worksWithFaqDe,
  worksWithFaqEs,
} from "../worksWithData";

export function getWorksWithPageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/works-with/",
    content: worksWithContent,
    faqEn: worksWithFaqEn,
    faqFr: worksWithFaqFr,
    faqDe: worksWithFaqDe,
    faqEs: worksWithFaqEs,
    about: [
      { "@type": "Thing", name: "Smart home device compatibility" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
