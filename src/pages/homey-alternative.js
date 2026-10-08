import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getHomeyAlternativePageSchema } from "../data/schemas/homeyAlternative";
import homeyAlternativeContent, {
  homeyAlternativeFaqEn,
  homeyAlternativeFaqFr,
  homeyAlternativeFaqDe,
  homeyAlternativeFaqEs,
} from "../data/homeyAlternativeData";

export default function HomeyAlternativePage() {
  const { i18n } = useDocusaurusContext();
  const lang = ["fr", "de", "es"].includes(i18n.currentLocale) ? i18n.currentLocale : "en";
  const content = homeyAlternativeContent[lang];
  const faq =
    lang === "fr"
      ? homeyAlternativeFaqFr
      : lang === "de"
        ? homeyAlternativeFaqDe
      : lang === "es"
        ? homeyAlternativeFaqEs
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
