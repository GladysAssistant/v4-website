import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getMiniPcHomeAutomationPageSchema } from "../data/schemas/miniPcHomeAutomation";
import miniPcHomeAutomationContent, {
  miniPcHomeAutomationFaqEn,
  miniPcHomeAutomationFaqFr,
  miniPcHomeAutomationFaqDe,
  miniPcHomeAutomationFaqEs,
} from "../data/miniPcHomeAutomationData";

export default function MiniPcHomeAutomationPage() {
  const { i18n } = useDocusaurusContext();
  const lang = ["fr", "de", "es"].includes(i18n.currentLocale) ? i18n.currentLocale : "en";
  const content = miniPcHomeAutomationContent[lang];
  const faq =
    lang === "fr"
      ? miniPcHomeAutomationFaqFr
      : lang === "de"
        ? miniPcHomeAutomationFaqDe
      : lang === "es"
        ? miniPcHomeAutomationFaqEs
        : miniPcHomeAutomationFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getMiniPcHomeAutomationPageSchema(lang)}
      lang={lang}
    />
  );
}
