import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getReolinkRtspPageSchema } from "../data/schemas/reolinkRtsp";
import reolinkRtspContent, {
  reolinkRtspFaqEn,
  reolinkRtspFaqFr,
  reolinkRtspFaqDe,
  reolinkRtspFaqEs,
} from "../data/reolinkRtspData";

export default function ReolinkRtspUrlPage() {
  const { i18n } = useDocusaurusContext();
  const lang = ["fr", "de", "es"].includes(i18n.currentLocale) ? i18n.currentLocale : "en";
  const content = reolinkRtspContent[lang];
  const faq = lang === "fr" ? reolinkRtspFaqFr : lang === "de" ? reolinkRtspFaqDe : lang === "es" ? reolinkRtspFaqEs : reolinkRtspFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getReolinkRtspPageSchema(lang)}
      lang={lang}
    />
  );
}
