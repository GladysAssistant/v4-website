import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getMiniPcHomeAutomationPageSchema } from "../data/schemas/miniPcHomeAutomation";
import miniPcHomeAutomationContent, {
  miniPcHomeAutomationFaqEn,
  miniPcHomeAutomationFaqFr,
} from "../data/miniPcHomeAutomationData";

export default function MiniPcHomeAutomationPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = miniPcHomeAutomationContent[lang];
  const faq = lang === "fr" ? miniPcHomeAutomationFaqFr : miniPcHomeAutomationFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getMiniPcHomeAutomationPageSchema(lang)}
      lang={lang}
    />
  );
}
