import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getHomeyAlternativePageSchema } from "../data/schemas/homeyAlternative";
import homeyAlternativeContent, {
  homeyAlternativeFaqEn,
  homeyAlternativeFaqFr,
  homeyAlternativeFaqDe,
} from "../data/homeyAlternativeData";

export default function HomeyAlternativePage() {
  const { i18n } = useDocusaurusContext();
  const lang = ["fr", "de"].includes(i18n.currentLocale) ? i18n.currentLocale : "en";
  const content = homeyAlternativeContent[lang];
  const faq =
    lang === "fr"
      ? homeyAlternativeFaqFr
      : lang === "de"
        ? homeyAlternativeFaqDe
        : homeyAlternativeFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getHomeyAlternativePageSchema(lang)}
      lang={lang}
    />
  );
}
