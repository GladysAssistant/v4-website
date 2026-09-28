import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getReolinkRtspPageSchema } from "../data/structuredData";
import reolinkRtspContent, {
  reolinkRtspFaqEn,
  reolinkRtspFaqFr,
} from "../data/reolinkRtspData";

export default function ReolinkRtspUrlPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = reolinkRtspContent[lang];
  const faq = lang === "fr" ? reolinkRtspFaqFr : reolinkRtspFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getReolinkRtspPageSchema(lang)}
      lang={lang}
    />
  );
}
