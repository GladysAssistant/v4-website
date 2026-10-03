import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getHomeAssistantGreenAlternativePageSchema } from "../data/schemas/homeAssistantGreenAlternative";
import homeAssistantGreenAlternativeContent, {
  homeAssistantGreenAlternativeFaqEn,
  homeAssistantGreenAlternativeFaqFr,
} from "../data/homeAssistantGreenAlternativeData";

export default function HomeAssistantGreenAlternativePage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = homeAssistantGreenAlternativeContent[lang];
  const faq = lang === "fr" ? homeAssistantGreenAlternativeFaqFr : homeAssistantGreenAlternativeFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getHomeAssistantGreenAlternativePageSchema(lang)}
      lang={lang}
    />
  );
}
