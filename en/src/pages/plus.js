import React from "react";
import Layout from "@theme/Layout";

import PlusComponent from "../../../shared/Plus";

const translation = {
  plus: {
    title: "Gladys Plus",
    description1: "Gladys Assistant is free and open-source, forever.",
    description2: "We provide Gladys Plus for cool additionnal features!",
  },
  pricing: {
    title: "Price",
    community: "Community (free)",
    gladysPlus: "Gladys Plus",
    openSourceSoftware: "Open-Source Software",
    endToEnd: "End-to-End Encrypted Remote Access",
    dailyBackups: "Daily Encrypted Backups",
    oneClickRestore: "One-click Restore",
    owntracksApi: "Owntracks API Server",
    privateSlack: "Private Slack Community",
    supportOpenSource: "Support independant Open-Source Software",
    getStarted: "Install",
    subscribe: "Subscribe (9.99€/month)",
  },
};

function Plus() {
  return (
    <Layout
      title="Gladys Plus"
      description="Add more features to Gladys Assistant with Gladys Plus"
    >
      <PlusComponent translation={translation} lang={"en"} />
    </Layout>
  );
}

export default Plus;
