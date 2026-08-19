import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import LegalPage from "../../components/LegalPage";
import { getPrivacyContent } from "../../data/legalData";

function PrivacyPlus() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";

  return <LegalPage {...getPrivacyContent(lang)} />;
}

export default PrivacyPlus;
