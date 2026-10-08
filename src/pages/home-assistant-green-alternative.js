import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getHomeAssistantGreenAlternativePageSchema } from "../data/schemas/homeAssistantGreenAlternative";
import homeAssistantGreenAlternativeContent, {
  homeAssistantGreenAlternativeFaqEn,
  homeAssistantGreenAlternativeFaqFr,
  homeAssistantGreenAlternativeFaqDe,
} from "../data/homeAssistantGreenAlternativeData";

export default function HomeAssistantGreenAlternativePage() {
  const { i18n } = useDocusaurusContext();
  const lang = ["fr", "de"].includes(i18n.currentLocale)
    ? i18n.currentLocale
    : "en";
  const content = homeAssistantGreenAlternativeContent[lang];
  const faq =
    lang === "fr"
      ? homeAssistantGreenAlternativeFaqFr
      : lang === "de"
        ? homeAssistantGreenAlternativeFaqDe
        : homeAssistantGreenAlternativeFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getHomeAssistantGreenAlternativePageSchema(lang)}
      lang={lang}
    />
  );
}
