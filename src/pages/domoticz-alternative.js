import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getDomoticzAlternativePageSchema } from "../data/schemas/domoticzAlternative";
import domoticzAlternativeContent, {
  domoticzAlternativeFaqEn,
  domoticzAlternativeFaqFr,
  domoticzAlternativeFaqDe,
} from "../data/domoticzAlternativeData";

export default function DomoticzAlternativePage() {
  const { i18n } = useDocusaurusContext();
  const lang = ["fr", "de"].includes(i18n.currentLocale) ? i18n.currentLocale : "en";
  const content = domoticzAlternativeContent[lang];
  const faq =
    lang === "fr"
      ? domoticzAlternativeFaqFr
      : lang === "de"
        ? domoticzAlternativeFaqDe
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
