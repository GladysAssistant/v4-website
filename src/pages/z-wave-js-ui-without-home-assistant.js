import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getZwaveJsUiWithoutHomeAssistantPageSchema } from "../data/schemas/zwaveJsUiWithoutHomeAssistant";
import zwaveJsUiWithoutHomeAssistantContent, {
  zwaveJsUiWithoutHomeAssistantFaqEn,
  zwaveJsUiWithoutHomeAssistantFaqFr,
} from "../data/zwaveJsUiWithoutHomeAssistantData";

export default function ZwaveJsUiWithoutHomeAssistantPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = zwaveJsUiWithoutHomeAssistantContent[lang];
  const faq = lang === "fr" ? zwaveJsUiWithoutHomeAssistantFaqFr : zwaveJsUiWithoutHomeAssistantFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getZwaveJsUiWithoutHomeAssistantPageSchema(lang)}
      lang={lang}
    />
  );
}
