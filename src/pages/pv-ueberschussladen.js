import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getPvSurplusChargingPageSchema } from "../data/schemas/pvSurplusCharging";
import pvSurplusChargingContent, {
  pvSurplusChargingFaqEn,
  pvSurplusChargingFaqDe,
} from "../data/pvSurplusChargingData";

// Germany-specific page: German content on /de/, English elsewhere (like
// /dynamischer-stromtarif/).
export default function PvUeberschussladenPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "de" ? "de" : "en";
  const content = pvSurplusChargingContent[lang];
  const faq = lang === "de" ? pvSurplusChargingFaqDe : pvSurplusChargingFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getPvSurplusChargingPageSchema(lang)}
      lang={lang}
    />
  );
}
