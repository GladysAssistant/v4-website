import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getShellyWithoutCloudPageSchema } from "../data/schemas/shellyWithoutCloud";
import shellyWithoutCloudContent, {
  shellyWithoutCloudFaqEn,
  shellyWithoutCloudFaqFr,
  shellyWithoutCloudFaqDe,
  shellyWithoutCloudFaqEs,
} from "../data/shellyWithoutCloudData";

export default function ShellyWithoutCloudPage() {
  const { i18n } = useDocusaurusContext();
  const lang = ["fr", "de", "es"].includes(i18n.currentLocale) ? i18n.currentLocale : "en";
  const content = shellyWithoutCloudContent[lang];
  const faq =
    lang === "fr" ? shellyWithoutCloudFaqFr : lang === "de" ? shellyWithoutCloudFaqDe : lang === "es" ? shellyWithoutCloudFaqEs : shellyWithoutCloudFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getShellyWithoutCloudPageSchema(lang)}
      lang={lang}
    />
  );
}
