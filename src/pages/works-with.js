import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getWorksWithPageSchema } from "../data/structuredData";
import worksWithContent, {
  worksWithFaqEn,
  worksWithFaqFr,
} from "../data/worksWithData";

export default function WorksWithPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = worksWithContent[lang];
  const faq = lang === "fr" ? worksWithFaqFr : worksWithFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getWorksWithPageSchema(lang)}
      lang={lang}
    />
  );
}
