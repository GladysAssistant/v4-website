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
        message: "Private, self-hosted smart home with AI",
      })}
      description={translate({
        id: "home.metaDescription",
        description: "home page meta description",
        message:
          "Free, open-source smart home software that runs on your own hardware, even offline. Works with Zigbee, Matter, Hue and SmartThings. A simpler Home Assistant alternative.",
      })}
    >
      <JsonLd data={getHomepageSchema(i18n.currentLocale)} />
      <Home lang={i18n.currentLocale} />
    </HorizonPage>
  );
}

export default HomePage;
