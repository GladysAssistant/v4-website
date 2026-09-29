import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getHomeyAlternativePageSchema } from "../data/structuredData";
import homeyAlternativeContent, {
  homeyAlternativeFaqEn,
  homeyAlternativeFaqFr,
} from "../data/homeyAlternativeData";

export default function HomeyAlternativePage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = homeyAlternativeContent[lang];
  const faq = lang === "fr" ? homeyAlternativeFaqFr : homeyAlternativeFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getHomeyAlternativePageSchema(lang)}
      lang={lang}
    />
  );
}
