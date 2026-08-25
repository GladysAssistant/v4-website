import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { HtmlClassNameProvider } from "@docusaurus/theme-common";
import { Home } from "../components/Home";
import JsonLd from "../components/seo/JsonLd";
import { getHomepageSchema } from "../data/structuredData";

import { translate } from "@docusaurus/Translate";

function HomePage() {
  const context = useDocusaurusContext();
  const { i18n } = context;
  return (
    // The class lands on <html>, server-side: it lets the navbar and the
    // footer go transparent over the Horizon scene without a flash.
    <HtmlClassNameProvider className="homepage-horizon">
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
            "Gladys Assistant is a privacy-first, open-source home automation platform. Self-hosted, no cloud required, a simpler alternative to Home Assistant.",
        })}
      >
        <JsonLd data={getHomepageSchema(i18n.currentLocale)} />
        <Home lang={i18n.currentLocale} />
      </Layout>
    </HtmlClassNameProvider>
  );
}

export default HomePage;
