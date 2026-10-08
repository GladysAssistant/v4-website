import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getAlarmSystemPageSchema } from "../data/schemas/alarmSystem";
import alarmContent, { alarmFaqEn, alarmFaqFr, alarmFaqDe } from "../data/alarmSystemData";

export default function DiyHomeAlarmSystemPage() {
  const { i18n } = useDocusaurusContext();
  const lang = ["fr", "de", "es"].includes(i18n.currentLocale) ? i18n.currentLocale : "en";
  const content = alarmContent[lang];
  const faq = lang === "fr" ? alarmFaqFr : lang === "de" ? alarmFaqDe : lang === "es" ? alarmFaqEs : alarmFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getAlarmSystemPageSchema(lang)}
      lang={lang}
    />
  );
}
