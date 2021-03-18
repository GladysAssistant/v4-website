import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import integrations from "../../integrations";
import { Home } from "../components/Home";

function HomePage() {
  const context = useDocusaurusContext();
  const { i18n } = context;
  const first4Integrations = integrations[i18n.currentLocale].slice(0, 4);
  return (
    <Layout>
      <Home integrations={first4Integrations} lang={i18n.currentLocale} />
    </Layout>
  );
}

export default HomePage;
