import { getGuidePageSchema } from "../structuredData";
import heuresCreusesContent, {
  heuresCreusesFaqEn,
  heuresCreusesFaqFr,
} from "../heuresCreusesData";

export function getHeuresCreusesPageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/heures-creuses/",
    content: heuresCreusesContent,
    faqEn: heuresCreusesFaqEn,
    faqFr: heuresCreusesFaqFr,
    about: [
      { "@type": "Thing", name: "Heures creuses" },
      {
        "@type": "Organization",
        name: "Commission de régulation de l'énergie",
      },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
