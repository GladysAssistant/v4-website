import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import LegalPage from "../../components/LegalPage";
import useRegion from "../../components/plus/useRegion";
import { PRICES } from "../../components/plus/pricing";
import { getTermsContent } from "../../data/legalData";

function TermsPlus() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const region = useRegion();
  const content = getTermsContent(lang, PRICES[region]);

  return <LegalPage {...content} />;
}

export default TermsPlus;
