import React from "react";
import Layout from "@theme/Layout";

import PlusComponent from "../../../shared/Plus";

const translation = {
  plus: {
    title: "Gladys Plus",
    description1:
      "Gladys Assistant est gratuite et open-source, pour toujours.",
    description2:
      "Nous proposons Gladys Plus pour ajouter des fonctionnalités supplémentaires à Gladys !",
  },
  pricing: {
    title: "Prix",
    community: "Community (Gratuit)",
    gladysPlus: "Gladys Plus",
    openSourceSoftware: "Logiciel open-source",
    endToEnd: "Accès à distance chiffré de bout en bout",
    dailyBackups: "Backups journaliers chiffrés",
    oneClickRestore: "Restauration en 1-clic",
    owntracksApi: " API Owntracks",
    privateSlack: "Communauté Slack privée",
    supportOpenSource: "Supportez un logiciel indépendant open-source!",
    getStarted: "Installer",
    subscribe: "S'abonner (9.99€/mois)",
  },
};

function Plus() {
  return (
    <Layout
      title="Gladys Plus"
      description="Accéder à plus de fonctionnalités avec Gladys Plus."
    >
      <PlusComponent translation={translation} lang={"fr"} />
    </Layout>
  );
}

export default Plus;
