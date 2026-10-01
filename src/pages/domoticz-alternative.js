import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getDomoticzAlternativePageSchema } from "../data/structuredData";
import domoticzAlternativeContent, {
  domoticzAlternativeFaqEn,
  domoticzAlternativeFaqFr,
} from "../data/domoticzAlternativeData";

export default function DomoticzAlternativePage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = domoticzAlternativeContent[lang];
  const faq = lang === "fr" ? domoticzAlternativeFaqFr : domoticzAlternativeFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getDomoticzAlternativePageSchema(lang)}
      lang={lang}
    />
  );
}
