import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getPresenceSimulationPageSchema } from "../data/structuredData";
import presenceContent, {
  presenceFaqEn,
  presenceFaqFr,
} from "../data/presenceSimulationData";

export default function PresenceSimulationPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = presenceContent[lang];
  const faq = lang === "fr" ? presenceFaqFr : presenceFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getPresenceSimulationPageSchema(lang)}
      lang={lang}
    />
  );
}
