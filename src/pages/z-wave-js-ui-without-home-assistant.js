import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getZwaveJsUiWithoutHomeAssistantPageSchema } from "../data/schemas/zwaveJsUiWithoutHomeAssistant";
import zwaveJsUiWithoutHomeAssistantContent, {
  zwaveJsUiWithoutHomeAssistantFaqEn,
  zwaveJsUiWithoutHomeAssistantFaqFr,
  zwaveJsUiWithoutHomeAssistantFaqDe,
} from "../data/zwaveJsUiWithoutHomeAssistantData";

export default function ZwaveJsUiWithoutHomeAssistantPage() {
  const { i18n } = useDocusaurusContext();
  const lang = ["fr", "de"].includes(i18n.currentLocale) ? i18n.currentLocale : "en";
  const content = zwaveJsUiWithoutHomeAssistantContent[lang];
  const faq =
    lang === "fr" ? zwaveJsUiWithoutHomeAssistantFaqFr : lang === "de" ? zwaveJsUiWithoutHomeAssistantFaqDe : zwaveJsUiWithoutHomeAssistantFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getZwaveJsUiWithoutHomeAssistantPageSchema(lang)}
      lang={lang}
    />
  );
}
