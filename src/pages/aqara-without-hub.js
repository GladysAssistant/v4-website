import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getAqaraWithoutHubPageSchema } from "../data/schemas/aqaraWithoutHub";
import aqaraWithoutHubContent, {
  aqaraWithoutHubFaqEn,
  aqaraWithoutHubFaqFr,
  aqaraWithoutHubFaqDe,
} from "../data/aqaraWithoutHubData";

export default function AqaraWithoutHubPage() {
  const { i18n } = useDocusaurusContext();
  const lang = ["fr", "de"].includes(i18n.currentLocale) ? i18n.currentLocale : "en";
  const content = aqaraWithoutHubContent[lang];
  const faq =
    lang === "fr" ? aqaraWithoutHubFaqFr : lang === "de" ? aqaraWithoutHubFaqDe : aqaraWithoutHubFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getAqaraWithoutHubPageSchema(lang)}
      lang={lang}
    />
  );
}
