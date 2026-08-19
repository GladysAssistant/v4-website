import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import LegalPage from "../components/LegalPage";
import { getLegalNoticeContent } from "../data/legalData";

function LegalNotice() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";

  return <LegalPage {...getLegalNoticeContent(lang)} />;
}

export default LegalNotice;
