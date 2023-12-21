import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import integrations from "../../integrations";
import { IntegrationPage } from "../components/Integration";

import { translate } from "@docusaurus/Translate";

function Home() {
  const context = useDocusaurusContext();
  const { i18n } = context;
  return (
    <Layout
      title={translate({
        id: "integrations.title",
        description: "integrations page title",
        message: "Integrations",
      })}
      description={translate({
        id: "integrations.metaDescription",
        description: "integrations page meta description",
        message:
          "Search all home automation devices compatible with Gladys Assistant",
      })}
     >
      <main>
        <IntegrationPage
          integrations={integrations[i18n.currentLocale]}
          lang={i18n.currentLocale}
        />
      </main>
    </Layout>
  );
}

export default Home;
