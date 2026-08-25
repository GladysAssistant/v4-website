import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HorizonPage from "../components/horizon/HorizonPage";
import { Home } from "../components/Home";
import JsonLd from "../components/seo/JsonLd";
import { getHomepageSchema } from "../data/structuredData";

import { translate } from "@docusaurus/Translate";

function HomePage() {
  const context = useDocusaurusContext();
  const { i18n } = context;
  return (
    <HorizonPage
      title={translate({
        id: "home.pageTitle",
        description:
          "The <title> of the home page, shown in search results. Docusaurus appends ' | Gladys Assistant', so it has to stay short.",
        message: "Open-source, local and extensible smart home",
      })}
      description={translate({
        id: "home.metaDescription",
        description: "home page meta description",
        message:
          "Gladys Assistant is a privacy-first, open-source home automation platform. Self-hosted, no cloud required, a simpler alternative to Home Assistant.",
      })}
    >
      <JsonLd data={getHomepageSchema(i18n.currentLocale)} />
      <Home lang={i18n.currentLocale} />
    </HorizonPage>
  );
}

export default HomePage;
