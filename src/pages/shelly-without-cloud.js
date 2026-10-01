import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getShellyWithoutCloudPageSchema } from "../data/structuredData";
import shellyWithoutCloudContent, {
  shellyWithoutCloudFaqEn,
  shellyWithoutCloudFaqFr,
} from "../data/shellyWithoutCloudData";

export default function ShellyWithoutCloudPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = shellyWithoutCloudContent[lang];
  const faq = lang === "fr" ? shellyWithoutCloudFaqFr : shellyWithoutCloudFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getShellyWithoutCloudPageSchema(lang)}
      lang={lang}
    />
  );
}
