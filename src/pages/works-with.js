import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getWorksWithPageSchema } from "../data/schemas/worksWith";
import worksWithContent, {
  worksWithFaqEn,
  worksWithFaqFr,
  worksWithFaqDe,
  worksWithFaqEs,
} from "../data/worksWithData";

export default function WorksWithPage() {
  const { i18n } = useDocusaurusContext();
  const lang = ["fr", "de", "es"].includes(i18n.currentLocale)
    ? i18n.currentLocale
    : "en";
  const content = worksWithContent[lang];
  const faq =
    lang === "fr" ? worksWithFaqFr : lang === "de" ? worksWithFaqDe : lang === "es" ? worksWithFaqEs : worksWithFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getWorksWithPageSchema(lang)}
      lang={lang}
    />
  );
}
