import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getTuyaZigbeeWithoutHubPageSchema } from "../data/schemas/tuyaZigbeeWithoutHub";
import tuyaZigbeeWithoutHubContent, {
  tuyaZigbeeWithoutHubFaqEn,
  tuyaZigbeeWithoutHubFaqFr,
} from "../data/tuyaZigbeeWithoutHubData";

export default function TuyaZigbeeWithoutHubPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = tuyaZigbeeWithoutHubContent[lang];
  const faq = lang === "fr" ? tuyaZigbeeWithoutHubFaqFr : tuyaZigbeeWithoutHubFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getTuyaZigbeeWithoutHubPageSchema(lang)}
      lang={lang}
    />
  );
}
