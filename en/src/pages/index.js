import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import integrations from "../../integrations/index";
import { Home } from "../../../shared/Home";

const translation = {
  title: "Gladys Assistant",
  description: "A privacy-first, open-source home assistant",
  gettingStartedButton: "Getting started",
  tryOnlineButton: "Try Online",
};

const first4Integrations = integrations.slice(0, 4);

function HomePage() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="Gladys Assistant"
      description="A privacy-first, open-source home assistant"
    >
      <Home translation={translation} integrations={first4Integrations} />
    </Layout>
  );
}

export default HomePage;
