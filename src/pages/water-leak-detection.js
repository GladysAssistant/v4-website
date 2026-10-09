import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getWaterLeakDetectionPageSchema } from "../data/schemas/waterLeakDetection";
import waterLeakDetectionContent, {
  waterLeakDetectionFaqEn,
  waterLeakDetectionFaqFr,
  waterLeakDetectionFaqDe,
  waterLeakDetectionFaqEs,
} from "../data/waterLeakDetectionData";

export default function WaterLeakDetectionPage() {
  const { i18n } = useDocusaurusContext();
  const lang = ["fr", "de", "es"].includes(i18n.currentLocale) ? i18n.currentLocale : "en";
  const content = waterLeakDetectionContent[lang];
  const faq = lang === "fr" ? waterLeakDetectionFaqFr : lang === "de" ? waterLeakDetectionFaqDe : lang === "es" ? waterLeakDetectionFaqEs : waterLeakDetectionFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getWaterLeakDetectionPageSchema(lang)}
      lang={lang}
    />
  );
}
