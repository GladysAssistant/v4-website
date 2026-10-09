import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getZigbee2mqttWithoutHomeAssistantPageSchema } from "../data/schemas/zigbee2mqttWithoutHomeAssistant";
import zigbee2mqttWithoutHomeAssistantContent, {
  zigbee2mqttWithoutHomeAssistantFaqEn,
  zigbee2mqttWithoutHomeAssistantFaqFr,
  zigbee2mqttWithoutHomeAssistantFaqDe,
  zigbee2mqttWithoutHomeAssistantFaqEs,
} from "../data/zigbee2mqttWithoutHomeAssistantData";

export default function Zigbee2mqttWithoutHomeAssistantPage() {
  const { i18n } = useDocusaurusContext();
  const lang = ["fr", "de", "es"].includes(i18n.currentLocale) ? i18n.currentLocale : "en";
  const content = zigbee2mqttWithoutHomeAssistantContent[lang];
  const faq =
    lang === "fr" ? zigbee2mqttWithoutHomeAssistantFaqFr : lang === "de" ? zigbee2mqttWithoutHomeAssistantFaqDe : lang === "es" ? zigbee2mqttWithoutHomeAssistantFaqEs : zigbee2mqttWithoutHomeAssistantFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getZigbee2mqttWithoutHomeAssistantPageSchema(lang)}
      lang={lang}
    />
  );
}
