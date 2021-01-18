import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import integrations from "../../integrations/index";
import { IntegrationPage } from "../../../shared/Integration";
// import { IntegrationPage } from "../components/Integration";

const translation = {
  readMore: "Intégrer",
  buy: "Acheter",
  title: "Intégrations",
  description: (
    <>
      Cette liste est alimentée par la communauté et ne demande qu'à être
      enrichie ! Si vous ne trouvez pas un périphérique dans cette liste, cela
      ne veut pas dire qu'il n'est pas géré, il manque sûrement à la liste. Vous
      pouvez nous aider à améliorer cette liste{" "}
      <Link href="https://airtable.com/invite/l?inviteId=invCQPYLKLu5g3sGm&inviteToken=a0f27651689ca8357f5165b372e78f2b56357d126e6d18c162810626eed25207">
        sur AirTable
      </Link>
      . Pour voir la liste des technologies compatible, rendez-vous sur la{" "}
      <Link href="/fr/docs/integrations/openweather/">documentation</Link>.
    </>
  ),
  noIntegrationsFound: "Aucunes intégrations trouvées",
  technologies: "Technologies",
  filters: {
    zwave: "Z-Wave",
    "philips-hue": "Philips Hue",
    sonoff: "Sonoff",
    camera: "Caméra",
    xiaomi: "Xiaomi",
  },
};

function Home() {
  return (
    <Layout
      title="Intégrations"
      description="Tous les périphériques compatibles avec Gladys Assistant."
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
