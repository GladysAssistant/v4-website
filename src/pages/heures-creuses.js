import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getHeuresCreusesPageSchema } from "../data/schemas/heuresCreuses";
import heuresCreusesContent, {
  heuresCreusesFaqEn,
  heuresCreusesFaqFr,
} from "../data/heuresCreusesData";

export default function HeuresCreusesPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = heuresCreusesContent[lang];
  const faq = lang === "fr" ? heuresCreusesFaqFr : heuresCreusesFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getHeuresCreusesPageSchema(lang)}
      lang={lang}
    />
  );
}
