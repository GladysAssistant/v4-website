import React from "react";
import Layout from "@theme/Layout";
import integrations from "../../integrations/index";
import { IntegrationPage } from "../../../shared/Integration";

const translation = {
  readMore: "Read more",
  buy: "Buy",
  title: "Integrations",
  noIntegrationsFound: "No integrations found.",
};

function Home() {
  return (
    <Layout
      title="Integrations"
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <IntegrationPage
          integrations={integrations}
          lang="en"
          translation={translation}
        />
      </main>
    </Layout>
  );
}

export default Home;
