import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getOpenhabAlternativePageSchema } from "../data/schemas/openhabAlternative";
import openhabAlternativeContent, {
  openhabAlternativeFaqEn,
  openhabAlternativeFaqFr,
  openhabAlternativeFaqDe,
  openhabAlternativeFaqEs,
} from "../data/openhabAlternativeData";

export default function OpenhabAlternativePage() {
  const { i18n } = useDocusaurusContext();
  const lang = ["fr", "de", "es"].includes(i18n.currentLocale) ? i18n.currentLocale : "en";
  const content = openhabAlternativeContent[lang];
  const faq =
    lang === "fr"
      ? openhabAlternativeFaqFr
      : lang === "de"
        ? openhabAlternativeFaqDe
      : lang === "es"
        ? openhabAlternativeFaqEs
        : openhabAlternativeFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getOpenhabAlternativePageSchema(lang)}
      lang={lang}
    />
  );
}
