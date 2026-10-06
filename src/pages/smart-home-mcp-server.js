import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getSmartHomeMcpPageSchema } from "../data/schemas/smartHomeMcp";
import smartHomeMcpContent, {
  smartHomeMcpFaqEn,
  smartHomeMcpFaqFr,
  smartHomeMcpFaqDe,
} from "../data/smartHomeMcpData";

export default function SmartHomeMcpPage() {
  const { i18n } = useDocusaurusContext();
  const lang = ["fr", "de"].includes(i18n.currentLocale)
    ? i18n.currentLocale
    : "en";
  const content = smartHomeMcpContent[lang];
  const faq =
    lang === "fr"
      ? smartHomeMcpFaqFr
      : lang === "de"
      ? smartHomeMcpFaqDe
      : smartHomeMcpFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getSmartHomeMcpPageSchema(lang)}
      lang={lang}
    />
  );
}
