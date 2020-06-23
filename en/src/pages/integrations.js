import React from "react";
import Layout from "@theme/Layout";
import integrations from "../../integrations/index";
import { IntegrationPage } from "../../../shared/Integration";

function Home() {
  return (
    <Layout
      title="Integrations"
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <IntegrationPage integrations={integrations} lang="en" />
      </main>
    </Layout>
  );
}

export default Home;
