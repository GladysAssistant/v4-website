import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Home } from "../../../shared/Home";
import integrations from "../../integrations/index";

const translation = {
  title: "Gladys Assistant",
  description:
    "Le logiciel de domotique open-source qui respecte votre vie privée.",
  gettingStartedButton: "Installer",
  tryOnlineButton: "Essayer en ligne",
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
  features: {
    centralizeCameras: "Centralisez vos caméras",
    controlHouse: "Contrôlez votre maison",
    connectCalendars: "Connectez vos calendriers",
    createScenes: "Créez des scènes",
    title: "Un logiciel conçu pour la stabilité, la performance et la sécurité",
    atomicUpgrades: "Mises à jour atomiques & automatiques.",
    minimalist: "Interface claire et simple",
    integrationsBuiltIn: "Les intégrations sont intégrées, pas installées",
    openSourceCode: "Code 100% open-source, vérifié par la communauté",
    endToEndEncrypted: "Accès à distance chiffré de bout en bout (Gladys Plus)",
  },
  integrations: {
    title: "Des compatibilités, disponibles par défaut",
    description:
      "Toutes les intégrations sont open-source, dévelopées par la communauté.",
  },
};

const first4Integrations = integrations.slice(0, 4);

function HomePage() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title="" description="A privacy-first, open-source home assistant">
      <Home
        translation={translation}
        integrations={first4Integrations}
        lang="fr"
      />
    </Layout>
  );
}

export default HomePage;
