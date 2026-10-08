import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getSmartThingsAlternativePageSchema } from "../data/schemas/smartThingsAlternative";
import smartThingsAlternativeContent, {
  smartThingsAlternativeFaqEn,
  smartThingsAlternativeFaqFr,
  smartThingsAlternativeFaqDe,
  smartThingsAlternativeFaqEs,
} from "../data/smartThingsAlternativeData";

export default function SmartThingsAlternativePage() {
  const { i18n } = useDocusaurusContext();
  const lang = ["fr", "de", "es"].includes(i18n.currentLocale) ? i18n.currentLocale : "en";
  const content = smartThingsAlternativeContent[lang];
  const faq =
    lang === "fr"
      ? smartThingsAlternativeFaqFr
      : lang === "de"
        ? smartThingsAlternativeFaqDe
      : lang === "es"
        ? smartThingsAlternativeFaqEs
        : smartThingsAlternativeFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getSmartThingsAlternativePageSchema(lang)}
      lang={lang}
    />
  );
}
