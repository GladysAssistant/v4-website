import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import integrations from "../../integrations/index";
import { Home } from "../../../shared/Home";

const translation = {
  title: "Gladys Assistant",
  description: "A privacy-first, open-source home assistant",
  gettingStartedButton: "Getting started",
  tryOnlineButton: "Try Online",
  pricing: {
    title: "Pricing",
    community: "Community (Free)",
    gladysPlus: "Gladys Plus",
    openSourceSoftware: "Open Source Software",
    endToEnd: "End-to-End Encrypted Remote Access",
    dailyBackups: "Daily Encrypted Backups",
    oneClickRestore: "One-click Restore",
    owntracksApi: "Owntracks API Server",
    privateSlack: "Private Slack Community",
    supportOpenSource: "Support Open-Source Software",
    getStarted: "Get started",
    subscribe: "Subscribe (9.99€/month)",
  },
  features: {
    centralizeCameras: "Centralize your cameras",
    controlHouse: "Control your house",
    connectCalendars: "Connect your calendars",
    createScenes: "Create scenes",
    title: "A super-stable software, designed for performance & security",
    atomicUpgrades: "Atomic, rock-solid & automatic upgrades",
    minimalist: "Minimalist, clean UI",
    integrationsBuiltIn: "Integrations are built-in, not installed",
    openSourceCode: "Open-Source Code, reviewed by the community",
    endToEndEncrypted: "End-to-End Encrypted remote access (Plus feature)",
  },
  integrations: {
    title: "Lots of compatibilities, built-in",
    description:
      "All integrations are open-source and developed by the community.",
  },
};

const first4Integrations = integrations.slice(0, 4);

function HomePage() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="Gladys Assistant"
      description="A privacy-first, open-source home assistant"
    >
      <Home
        translation={translation}
        integrations={first4Integrations}
        lang="en"
      />
    </Layout>
  );
}

export default HomePage;
