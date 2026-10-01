import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getNestThermostatAlternativePageSchema } from "../data/schemas/nestThermostatAlternative";
import nestThermostatAlternativeContent, {
  nestThermostatAlternativeFaqEn,
  nestThermostatAlternativeFaqFr,
} from "../data/nestThermostatAlternativeData";

export default function NestThermostatAlternativePage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = nestThermostatAlternativeContent[lang];
  const faq = lang === "fr" ? nestThermostatAlternativeFaqFr : nestThermostatAlternativeFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getNestThermostatAlternativePageSchema(lang)}
      lang={lang}
    />
  );
}
