import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getPhilipsHueWithoutBridgePageSchema } from "../data/schemas/philipsHueWithoutBridge";
import philipsHueWithoutBridgeContent, {
  philipsHueWithoutBridgeFaqEn,
  philipsHueWithoutBridgeFaqFr,
} from "../data/philipsHueWithoutBridgeData";

export default function PhilipsHueWithoutBridgePage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = philipsHueWithoutBridgeContent[lang];
  const faq = lang === "fr" ? philipsHueWithoutBridgeFaqFr : philipsHueWithoutBridgeFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getPhilipsHueWithoutBridgePageSchema(lang)}
      lang={lang}
    />
  );
}
