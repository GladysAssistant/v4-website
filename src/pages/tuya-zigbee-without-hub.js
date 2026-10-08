import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getTuyaZigbeeWithoutHubPageSchema } from "../data/schemas/tuyaZigbeeWithoutHub";
import tuyaZigbeeWithoutHubContent, {
  tuyaZigbeeWithoutHubFaqEn,
  tuyaZigbeeWithoutHubFaqFr,
  tuyaZigbeeWithoutHubFaqDe,
} from "../data/tuyaZigbeeWithoutHubData";

export default function TuyaZigbeeWithoutHubPage() {
  const { i18n } = useDocusaurusContext();
  const lang = ["fr", "de"].includes(i18n.currentLocale) ? i18n.currentLocale : "en";
  const content = tuyaZigbeeWithoutHubContent[lang];
  const faq =
    lang === "fr" ? tuyaZigbeeWithoutHubFaqFr : lang === "de" ? tuyaZigbeeWithoutHubFaqDe : tuyaZigbeeWithoutHubFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getTuyaZigbeeWithoutHubPageSchema(lang)}
      lang={lang}
    />
  );
}
