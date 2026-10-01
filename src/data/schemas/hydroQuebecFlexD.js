import { getGuidePageSchema } from "../structuredData";
import hydroQuebecFlexDContent, {
  hydroQuebecFlexDFaqEn,
  hydroQuebecFlexDFaqFr,
} from "../hydroQuebecFlexDData";

export function getHydroQuebecFlexDPageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/hydro-quebec-flex-d/",
    content: hydroQuebecFlexDContent,
    faqEn: hydroQuebecFlexDFaqEn,
    faqFr: hydroQuebecFlexDFaqFr,
    about: [
      { "@type": "Thing", name: "Hydro-Québec Rate Flex D" },
      { "@type": "Organization", name: "Hydro-Québec" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
