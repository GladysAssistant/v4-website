import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getSinopeZigbeePageSchema } from "../data/structuredData";
import sinopeZigbeeContent, {
  sinopeZigbeeFaqEn,
  sinopeZigbeeFaqFr,
} from "../data/sinopeZigbeeData";

export default function SinopeZigbeePage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = sinopeZigbeeContent[lang];
  const faq = lang === "fr" ? sinopeZigbeeFaqFr : sinopeZigbeeFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getSinopeZigbeePageSchema(lang)}
      lang={lang}
    />
  );
}
