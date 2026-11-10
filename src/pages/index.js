import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HorizonPage from "../components/horizon/HorizonPage";
import { Home } from "../components/Home";
import JsonLd from "../components/seo/JsonLd";
import { getHomepageSchema } from "../data/structuredData";

import { translate } from "@docusaurus/Translate";
import { useIntegrationsSummary } from "../components/home/Integrations";

function HomePage() {
  const context = useDocusaurusContext();
  const { i18n } = context;
  const integrations = useIntegrationsSummary(i18n.currentLocale);
  return (
    <HorizonPage
      title={translate({
        id: "home.pageTitle",
        description:
          "The <title> of the home page, shown in search results. Docusaurus appends ' | Gladys Assistant', so it has to stay short.",
        message: "Private, self-hosted smart home with AI",
      })}
      description={translate(
        {
          id: "home.horizon.metaDescription",
          description:
            "Home page meta description, shown in search results. {count} is the number of integrations rounded down to the hundred (e.g. 1,000).",
          message:
            "Free, open-source smart home software that runs on your own hardware, even offline. {count}+ integrations: Zigbee, Matter, Hue, SmartThings and more. A simpler Home Assistant alternative.",
        },
        { count: integrations.rounded }
      )}
    >
      <JsonLd data={getHomepageSchema(i18n.currentLocale)} />
      <Home lang={i18n.currentLocale} />
    </HorizonPage>
  );
}

export default HomePage;
