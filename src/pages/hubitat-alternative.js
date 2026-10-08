import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getHubitatAlternativePageSchema } from "../data/schemas/hubitatAlternative";
import hubitatAlternativeContent, {
  hubitatAlternativeFaqEn,
  hubitatAlternativeFaqFr,
  hubitatAlternativeFaqDe,
} from "../data/hubitatAlternativeData";

export default function HubitatAlternativePage() {
  const { i18n } = useDocusaurusContext();
  const lang = ["fr", "de"].includes(i18n.currentLocale) ? i18n.currentLocale : "en";
  const content = hubitatAlternativeContent[lang];
  const faq =
    lang === "fr"
      ? hubitatAlternativeFaqFr
      : lang === "de"
        ? hubitatAlternativeFaqDe
        : hubitatAlternativeFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getHubitatAlternativePageSchema(lang)}
      lang={lang}
    />
  );
}
