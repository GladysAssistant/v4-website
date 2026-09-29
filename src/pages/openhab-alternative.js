import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getOpenhabAlternativePageSchema } from "../data/structuredData";
import openhabAlternativeContent, {
  openhabAlternativeFaqEn,
  openhabAlternativeFaqFr,
} from "../data/openhabAlternativeData";

export default function OpenhabAlternativePage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = openhabAlternativeContent[lang];
  const faq = lang === "fr" ? openhabAlternativeFaqFr : openhabAlternativeFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getOpenhabAlternativePageSchema(lang)}
      lang={lang}
    />
  );
}
