import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getBalkonkraftwerkPageSchema } from "../data/schemas/balkonkraftwerk";
import balkonkraftwerkContent, {
  balkonkraftwerkFaqEn,
  balkonkraftwerkFaqDe,
} from "../data/balkonkraftwerkData";

// Germany-specific page: German content on /de/, English elsewhere (like
// /dynamischer-stromtarif/).
export default function BalkonkraftwerkPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "de" ? "de" : "en";
  const content = balkonkraftwerkContent[lang];
  const faq = lang === "de" ? balkonkraftwerkFaqDe : balkonkraftwerkFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getBalkonkraftwerkPageSchema(lang)}
      lang={lang}
    />
  );
}
