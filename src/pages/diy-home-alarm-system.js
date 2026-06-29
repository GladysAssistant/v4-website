import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getAlarmSystemPageSchema } from "../data/structuredData";
import alarmContent, { alarmFaqEn, alarmFaqFr } from "../data/alarmSystemData";

export default function DiyHomeAlarmSystemPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = alarmContent[lang];
  const faq = lang === "fr" ? alarmFaqFr : alarmFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getAlarmSystemPageSchema(lang)}
      lang={lang}
    />
  );
}
