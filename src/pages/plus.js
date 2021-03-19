import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import PlusComponent from "../components/Plus";

import { translate } from "@docusaurus/Translate";

function Plus() {
  const context = useDocusaurusContext();
  const { i18n } = context;
  return (
    <Layout
      title={translate({
        id: "gladysPlus.title",
        description: "gladys plus page title",
        message: "Gladys Plus",
      })}
      description={translate({
        id: "gladysPlus.metaDescription",
        description: "gladys plus meta description",
        message: "Add more features to Gladys Assistant with Gladys Plus",
      })}
    >
      <PlusComponent lang={i18n.currentLocale} />
    </Layout>
  );
}

export default Plus;
