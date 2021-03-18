import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import integrations from "../../integrations/index";
import { Home } from "../components/Home";

const first4Integrations = integrations.slice(0, 4);

function HomePage() {
  const context = useDocusaurusContext();
  const { i18n } = context;
  return (
    <Layout>
      <Home integrations={first4Integrations} lang={i18n.currentLocale} />
    </Layout>
  );
}

export default HomePage;
