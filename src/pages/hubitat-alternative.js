import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getHubitatAlternativePageSchema } from "../data/schemas/hubitatAlternative";
import hubitatAlternativeContent, {
  hubitatAlternativeFaqEn,
  hubitatAlternativeFaqFr,
} from "../data/hubitatAlternativeData";

export default function HubitatAlternativePage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = hubitatAlternativeContent[lang];
  const faq = lang === "fr" ? hubitatAlternativeFaqFr : hubitatAlternativeFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getHubitatAlternativePageSchema(lang)}
      lang={lang}
    />
  );
}
