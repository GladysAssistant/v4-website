import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getSmartThingsAlternativePageSchema } from "../data/structuredData";
import smartThingsAlternativeContent, {
  smartThingsAlternativeFaqEn,
  smartThingsAlternativeFaqFr,
} from "../data/smartThingsAlternativeData";

export default function SmartThingsAlternativePage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = smartThingsAlternativeContent[lang];
  const faq = lang === "fr" ? smartThingsAlternativeFaqFr : smartThingsAlternativeFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getSmartThingsAlternativePageSchema(lang)}
      lang={lang}
    />
  );
}
