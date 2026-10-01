import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getWaterLeakDetectionPageSchema } from "../data/schemas/waterLeakDetection";
import waterLeakDetectionContent, {
  waterLeakDetectionFaqEn,
  waterLeakDetectionFaqFr,
} from "../data/waterLeakDetectionData";

export default function WaterLeakDetectionPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = waterLeakDetectionContent[lang];
  const faq = lang === "fr" ? waterLeakDetectionFaqFr : waterLeakDetectionFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getWaterLeakDetectionPageSchema(lang)}
      lang={lang}
    />
  );
}
