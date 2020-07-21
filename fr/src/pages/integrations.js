import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import integrations from "../../integrations/index";
import { IntegrationPage } from "../../../shared/Integration";
// import { IntegrationPage } from "../components/Integration";

const translation = {
  readMore: "Doc",
  buy: "Acheter",
  title: "Intégrations",
  description: (
    <>
      Cette liste est alimentée par la communauté. Vous pouvez nous aider à
      l'améliorer{" "}
      <Link href="https://github.com/GladysAssistant/v4-website/tree/master/fr/integrations">
        sur GitHub
      </Link>
      .
    </>
  ),
  noIntegrationsFound: "Aucunes intégrations trouvées",
};

function Home() {
  return (
    <Layout
      title="Integrations"
      description="Tous les périphériques compatibles avec Gladys."
    >
      <main>
        <IntegrationPage
          integrations={integrations}
          lang="fr"
          translation={translation}
        />
      </main>
    </Layout>
  );
}

export default Home;
