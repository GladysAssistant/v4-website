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
  technologies: "Technologies",
  filters: {
    zwave: "Z-Wave",
    "philips-hue": "Philips Hue",
    tasmota: "Sonoff",
    camera: "Camera",
    xiaomi: "Xiaomi",
    "tp-link": "TP-Link",
  },
};

function Home() {
  return (
    <Layout
      title="Integrations"
      description="Search all home automation devices which are compatible with Gladys Assistant"
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
