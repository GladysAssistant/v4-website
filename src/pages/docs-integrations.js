import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import integrations from "../../integrations";
import { IntegrationPage } from "../components/Docs-integrations";

import { translate } from "@docusaurus/Translate";

function Home() {
  const context = useDocusaurusContext();
  const { i18n } = context;
  return (
    <Layout
      title={translate({
        id: "integrations.title2",
        description: "integrations page title 2",
        message: "Documentations des intégrations",
      })}
      description={translate({
        id: "integrations.metaDescription",
        description: "integrations page meta description 2",
        message:
          "Integrations available in Gladys Assistant",
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
