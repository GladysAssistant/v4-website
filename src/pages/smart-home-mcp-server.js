import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getSmartHomeMcpPageSchema } from "../data/schemas/smartHomeMcp";
import smartHomeMcpContent, {
  smartHomeMcpFaqEn,
  smartHomeMcpFaqFr,
} from "../data/smartHomeMcpData";

export default function SmartHomeMcpPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = smartHomeMcpContent[lang];
  const faq = lang === "fr" ? smartHomeMcpFaqFr : smartHomeMcpFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getSmartHomeMcpPageSchema(lang)}
      lang={lang}
    />
  );
}
