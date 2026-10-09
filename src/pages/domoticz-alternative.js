import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getDomoticzAlternativePageSchema } from "../data/schemas/domoticzAlternative";
import domoticzAlternativeContent, {
  domoticzAlternativeFaqEn,
  domoticzAlternativeFaqFr,
  domoticzAlternativeFaqDe,
  domoticzAlternativeFaqEs,
} from "../data/domoticzAlternativeData";

export default function DomoticzAlternativePage() {
  const { i18n } = useDocusaurusContext();
  const lang = ["fr", "de", "es"].includes(i18n.currentLocale) ? i18n.currentLocale : "en";
  const content = domoticzAlternativeContent[lang];
  const faq =
    lang === "fr"
      ? domoticzAlternativeFaqFr
      : lang === "de"
        ? domoticzAlternativeFaqDe
      : lang === "es"
        ? domoticzAlternativeFaqEs
        : domoticzAlternativeFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getDomoticzAlternativePageSchema(lang)}
      lang={lang}
    />
  );
}
