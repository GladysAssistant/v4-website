import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import integrations from "../../integrations";
import { Home } from "../components/Home";
import JsonLd from "../components/seo/JsonLd";
import { getHomepageSchema } from "../data/structuredData";

import { translate } from "@docusaurus/Translate";

function HomePage() {
  const context = useDocusaurusContext();
  const { i18n } = context;
  const first4Integrations = integrations[i18n.currentLocale].slice(0, 4);
  return (
    <Layout
      title={translate({
        id: "home.description",
        description: "The home page description",
        message: "A privacy-first, open-source home assistant",
      })}
      description={translate({
        id: "home.metaDescription",
        description: "home page meta description",
        message:
          "Gladys Assistant is a modern, privacy-first & open-source home automation software that runs anywhere.",
      })}
    >
      <JsonLd data={getHomepageSchema(i18n.currentLocale)} />
      <Home integrations={first4Integrations} lang={i18n.currentLocale} />
    </Layout>
  );
}

export default HomePage;
