import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getPresenceSimulationPageSchema } from "../data/schemas/presenceSimulation";
import presenceContent, {
  presenceFaqEn,
  presenceFaqFr,
  presenceFaqDe,
} from "../data/presenceSimulationData";

export default function PresenceSimulationPage() {
  const { i18n } = useDocusaurusContext();
  const lang = ["fr", "de"].includes(i18n.currentLocale) ? i18n.currentLocale : "en";
  const content = presenceContent[lang];
  const faq = lang === "fr" ? presenceFaqFr : lang === "de" ? presenceFaqDe : presenceFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getPresenceSimulationPageSchema(lang)}
      lang={lang}
    />
  );
}
