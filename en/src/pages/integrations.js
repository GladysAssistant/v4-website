import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import integrations from "../../integrations/index";
import { IntegrationPage } from "../../../shared/Integration";

const translation = {
  readMore: "Read more",
  buy: "Buy",
  title: "Integrations",
  description: (
    <>
      This list is crowdsourced by the community. To improve this list, you can
      help us{" "}
      <Link href="https://github.com/GladysAssistant/v4-website/tree/master/en/integrations">
        on GitHub here
      </Link>
      .
    </>
  ),
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
