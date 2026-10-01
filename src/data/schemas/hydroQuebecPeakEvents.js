import { getGuidePageSchema } from "../structuredData";
import hydroQuebecPeakEventsContent, {
  hydroQuebecPeakEventsFaqEn,
  hydroQuebecPeakEventsFaqFr,
} from "../hydroQuebecPeakEventsData";

export function getHydroQuebecPeakEventsPageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/hydro-quebec-peak-events/",
    content: hydroQuebecPeakEventsContent,
    faqEn: hydroQuebecPeakEventsFaqEn,
    faqFr: hydroQuebecPeakEventsFaqFr,
    about: [
      { "@type": "Thing", name: "Hydro-Québec peak events" },
      { "@type": "Organization", name: "Hydro-Québec" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
