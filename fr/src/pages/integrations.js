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
      <Link href="https://airtable.com/invite/l?inviteId=invCQPYLKLu5g3sGm&inviteToken=a0f27651689ca8357f5165b372e78f2b56357d126e6d18c162810626eed25207">
        sur AirTable
      </Link>
      .
    </>
  ),
  noIntegrationsFound: "Aucunes intégrations trouvées",
};

function Home() {
  return (
    <Layout
      title="Intégrations"
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
