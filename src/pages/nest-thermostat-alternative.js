import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getNestThermostatAlternativePageSchema } from "../data/schemas/nestThermostatAlternative";
import nestThermostatAlternativeContent, {
  nestThermostatAlternativeFaqEn,
  nestThermostatAlternativeFaqFr,
  nestThermostatAlternativeFaqDe,
  nestThermostatAlternativeFaqEs,
} from "../data/nestThermostatAlternativeData";

export default function NestThermostatAlternativePage() {
  const { i18n } = useDocusaurusContext();
  const lang = ["fr", "de", "es"].includes(i18n.currentLocale) ? i18n.currentLocale : "en";
  const content = nestThermostatAlternativeContent[lang];
  const faq =
    lang === "fr"
      ? nestThermostatAlternativeFaqFr
      : lang === "de"
        ? nestThermostatAlternativeFaqDe
      : lang === "es"
        ? nestThermostatAlternativeFaqEs
        : nestThermostatAlternativeFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getNestThermostatAlternativePageSchema(lang)}
      lang={lang}
    />
  );
}
