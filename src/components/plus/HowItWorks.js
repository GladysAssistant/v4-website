import React from "react";
import Translate from "@docusaurus/Translate";
import styles from "./styles.module.css";

function HowItWorks() {
  const steps = [
    {
      number: "1",
      titleId: "gladysPlusPage.v2.howItWorks.step1.title",
      titleDefault: "Start your free trial",
      textId: "gladysPlusPage.v2.howItWorks.step1.text",
      textDefault:
        "Pick Lite or Plus and subscribe, no credit card required, no commitment.",
    },
    {
      number: "2",
      titleId: "gladysPlusPage.v2.howItWorks.step2.title",
      titleDefault: "Activate in Gladys",
      textId: "gladysPlusPage.v2.howItWorks.step2.text",
      textDefault:
        "Open your local Gladys instance, go to Settings → Gladys Plus, and sign in with your account. Your setup stays intact.",
    },
    {
      number: "3",
      titleId: "gladysPlusPage.v2.howItWorks.step3.title",
      titleDefault: "Use Gladys from anywhere",
      textId: "gladysPlusPage.v2.howItWorks.step3.text",
      textDefault:
        "Remote access, backups, voice assistants, AI, camera streaming: everything unlocks right away.",
    },
  ];

  return (
    <section className={styles.section} aria-labelledby="how-it-works-title">
      <h2 id="how-it-works-title" className={styles.sectionTitle}>
        <Translate id="gladysPlusPage.v2.howItWorks.title">
          How does it work?
        </Translate>
      </h2>
      <p className={styles.sectionSubtitle}>
        <Translate id="gladysPlusPage.v2.howItWorks.subtitle">
          Three steps to unlock Gladys Plus on your existing instance.
        </Translate>
      </p>

      <div className={styles.howItWorks}>
        {steps.map((step) => (
          <div className={styles.howItWorksStep} key={step.number}>
            <div className={styles.howItWorksNumber} aria-hidden="true">
              {step.number}
            </div>
            <h3 className={styles.howItWorksStepTitle}>
              <Translate id={step.titleId}>{step.titleDefault}</Translate>
            </h3>
            <p className={styles.howItWorksStepText}>
              <Translate id={step.textId}>{step.textDefault}</Translate>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
