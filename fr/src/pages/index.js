import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Home } from "../../../shared/Home";

const translation = {
  title: "Gladys Assistant",
  description: "Le logiciel de domotique qui respecte votre vie privée.",
  gettingStartedButton: "Commencer",
  tryOnlineButton: "Essayer en ligne",
};

function HomePage() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="Gladys Assistant"
      description="A privacy-first, open-source home assistant"
    >
      <Home translation={translation} />
    </Layout>
  );
}

export default HomePage;
