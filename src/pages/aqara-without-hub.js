import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getAqaraWithoutHubPageSchema } from "../data/schemas/aqaraWithoutHub";
import aqaraWithoutHubContent, {
  aqaraWithoutHubFaqEn,
  aqaraWithoutHubFaqFr,
} from "../data/aqaraWithoutHubData";

export default function AqaraWithoutHubPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = aqaraWithoutHubContent[lang];
  const faq = lang === "fr" ? aqaraWithoutHubFaqFr : aqaraWithoutHubFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getAqaraWithoutHubPageSchema(lang)}
      lang={lang}
    />
  );
}
