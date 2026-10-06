import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import UseCasePage from "../components/UseCasePage";
import { getPhilipsHueWithoutBridgePageSchema } from "../data/schemas/philipsHueWithoutBridge";
import philipsHueWithoutBridgeContent, {
  philipsHueWithoutBridgeFaqEn,
  philipsHueWithoutBridgeFaqFr,
  philipsHueWithoutBridgeFaqDe,
} from "../data/philipsHueWithoutBridgeData";

export default function PhilipsHueWithoutBridgePage() {
  const { i18n } = useDocusaurusContext();
  const lang = ["fr", "de"].includes(i18n.currentLocale) ? i18n.currentLocale : "en";
  const content = philipsHueWithoutBridgeContent[lang];
  const faq =
    lang === "fr" ? philipsHueWithoutBridgeFaqFr : lang === "de" ? philipsHueWithoutBridgeFaqDe : philipsHueWithoutBridgeFaqEn;

  return (
    <UseCasePage
      content={content}
      faq={faq}
      schemaData={getPhilipsHueWithoutBridgePageSchema(lang)}
      lang={lang}
    />
  );
}
