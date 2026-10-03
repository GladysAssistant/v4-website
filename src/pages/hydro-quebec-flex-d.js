import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getHydroQuebecFlexDPageSchema } from "../data/schemas/hydroQuebecFlexD";
import hydroQuebecFlexDContent, {
  hydroQuebecFlexDFaqEn,
  hydroQuebecFlexDFaqFr,
} from "../data/hydroQuebecFlexDData";

export default function HydroQuebecFlexDPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = hydroQuebecFlexDContent[lang];
  const faq = lang === "fr" ? hydroQuebecFlexDFaqFr : hydroQuebecFlexDFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getHydroQuebecFlexDPageSchema(lang)}
      lang={lang}
    />
  );
}
