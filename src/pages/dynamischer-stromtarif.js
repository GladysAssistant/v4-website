import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getDynamicTariffPageSchema } from "../data/schemas/dynamicTariff";
import dynamicTariffContent, {
  dynamicTariffFaqEn,
  dynamicTariffFaqDe,
} from "../data/dynamicTariffData";

// Germany-specific page: German content on /de/, English elsewhere (like the
// France-specific /heures-creuses/ page, which is French and English).
export default function DynamischerStromtarifPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "de" ? "de" : "en";
  const content = dynamicTariffContent[lang];
  const faq = lang === "de" ? dynamicTariffFaqDe : dynamicTariffFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getDynamicTariffPageSchema(lang)}
      lang={lang}
    />
  );
}
