import React, { useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import cx from "classnames";

import { useColorMode } from "@docusaurus/theme-common";

import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Translate from "@docusaurus/Translate";
import FAQ from "../components/home/FAQ";
import YoutubeEmbedVideo from "../components/YoutubeEmbedVideo";
import { TestimonialSection } from "../components/Testimonial";

import testimonialsFr from "../components/testimonials/testimonial.plus.fr.json";
import testimonialsEn from "../components/testimonials/testimonial.plus.en.json";

import styles from "./styles.module.css";

import { translate } from "@docusaurus/Translate";

const YEARLY_PLAN_ACTIVATED = false;
const PRICING_TABLE_ACTIVATED = true;

const testimonials = {
  fr: testimonialsFr,
  en: testimonialsEn,
};

const Check = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#06a404"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={styles.checkIcons}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const STATUS = {
  INITIAL: "INITIAL",
  SENDING: "SENDING",
  NETWORK_ERROR: "NETWORK_ERROR",
  VALIDATION_ERROR: "VALIDATION_ERROR",
  SUCCESS: "SUCCESS",
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function Plus() {
  const context = useDocusaurusContext();
  const isDarkTheme = useColorMode().colorMode === "dark";
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(STATUS.INITIAL);
  const { i18n } = context;
  const language = i18n.currentLocale;

  const scrollTopTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const subscribe = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus(STATUS.VALIDATION_ERROR);
      return;
    }

    try {
      setStatus(STATUS.SENDING);
      await fetch("https://subscribe-gladys-plus.gladysassistant.workers.dev", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          language,
        }),
      });
      setEmail("");
      setStatus(STATUS.SUCCESS);
    } catch (e) {
      console.error(e);
      setStatus(STATUS.NETWORK_ERROR);
    }
  };

  const isFr = () => {
    if (language === "fr") {
      return true;
    }
    try {
      let fr = false;
      navigator.languages.forEach((oneLang) => {
        if (oneLang.indexOf("fr") !== -1) {
          fr = true;
        }
      });
      return fr;
    } catch (e) {
      console.error(e);
      return true;
    }
  };

  const subscribeDiscount = (e) => {
    e.preventDefault();
    const locale = isFr() ? "fr" : "en";
    window.location.href = `https://direct-pay-gladys-plus.gladysassistant.workers.dev?locale=${locale}`;
  };

  const submitButtonInitialState = translate({
    id: "gladysPlusPage.submit",
    description: "Gladys Plus submit",
    message: "Start free trial",
  });

  const submitButtonSending = translate({
    id: "gladysPlusPage.creatingAccount",
    description: "Gladys Plus page waiting message",
    message: "Creating account...",
  });

  const subscribeButtonDiscount = translate({
    id: "gladysPlusPage.subscribeButtonDiscount",
    description: "Gladys Plus suscribe button discount",
    message: "Subscribe now",
  });

  return (
    <main>
      <div className="margin-top--xl margin-bottom--lg">
        <div
          className="container"
          style={{
            maxWidth: "72rem",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "5rem",
          }}
        >
          <div className="row">
            <div className="col col--6">
              <form className={cx("margin-left--md", styles.plusForm)}>
                <h1 className={styles.plusTitle}>
                  <Translate
                    id="gladysPlusPage.title"
                    description="Gladys Plus page title"
                  >
                    Gladys Plus
                  </Translate>
                </h1>
                <p>
                  <Translate
                    id="gladysPlusPage.description1"
                    description="Gladys Plus description 1"
                  >
                    Gladys Assistant is free and open-source, forever.
                  </Translate>
                  <br />
                  <Translate
                    id="gladysPlusPage.description2"
                    description="Gladys Plus description 2"
                  >
                    We provide Gladys Plus for cool additionnal features!
                  </Translate>
                </p>
                <div>
                  {status === STATUS.SUCCESS && (
                    <div
                      className="alert alert--success margin-bottom--md"
                      role="alert"
                    >
                      <Translate
                        id="gladysPlusPage.subscribeSuccess"
                        description="Gladys Plus page success message"
                      >
                        Thanks for subscribing to Gladys Plus! You'll receive an
                        email soon to activate your acccount. If you don't
                        receive anything, please contact us on the contact page
                        or on the forum.
                      </Translate>
                    </div>
                  )}
                  {status === STATUS.VALIDATION_ERROR && (
                    <div
                      className="alert alert--warning margin-bottom--md"
                      role="alert"
                    >
                      <Translate
                        id="gladysPlusPage.validationError"
                        description="Gladys plus page validation error"
                      >
                        Please enter a valid email.
                      </Translate>
                    </div>
                  )}
                  {status === STATUS.NETWORK_ERROR && (
                    <div
                      className="alert alert--danger margin-bottom--md"
                      role="alert"
                    >
                      <Translate
                        id="gladysPlusPage.networkError"
                        description="Gladys plus page network error"
                      >
                        Network error: Are you connected to the internet? Please
                        retry. If the problem persist, you can contact us on the
                        contact page, on Twitter, or on the forum.
                      </Translate>
                    </div>
                  )}
                  {!YEARLY_PLAN_ACTIVATED && !PRICING_TABLE_ACTIVATED && (
                    <span>
                      <label style={{ display: "block" }}>
                        <Translate
                          id="gladysPlusPage.startFreeTrial"
                          description="Gladys Plus free trial input"
                        >
                          Start free trial (14 days)
                        </Translate>
                      </label>
                      <input
                        type="text"
                        className={cx(
                          styles.inputField,
                          styles.plusInput,
                          "margin-top--sm margin-bottom--sm margin-right--md"
                        )}
                        style={{
                          display: "inline-block",
                        }}
                        onChange={updateEmail}
                        value={email}
                        placeholder={translate({
                          id: "gladysPlusPage.emailPlaceholder",
                          description: "Gladys Plus email placeholder",
                          message: "Enter your email",
                        })}
                      />
                      <input
                        type="submit"
                        onClick={subscribe}
                        disabled={status === STATUS.SENDING}
                        value={
                          status === STATUS.SENDING
                            ? submitButtonSending
                            : submitButtonInitialState
                        }
                        className={cx(
                          styles.plusInput,
                          styles.plusInputButton,
                          "button button--primary"
                        )}
                      />
                    </span>
                  )}
                  {YEARLY_PLAN_ACTIVATED && (
                    <span>
                      <label style={{ display: "block", marginBottom: "10px" }}>
                        <Translate
                          id="gladysPlusPage.subscribe"
                          description="Gladys Plus subscribe"
                        >
                          Exlusive deal for a limited time!
                        </Translate>
                      </label>
                      <button
                        onClick={subscribeDiscount}
                        className={cx(
                          styles.plusInput,
                          styles.plusInputButton,
                          "button button--primary"
                        )}
                      >
                        {subscribeButtonDiscount}
                      </button>
                      <div style={{ marginTop: "10px" }}>
                        <small>
                          <Translate
                            id="gladysPlusPage.unsuscribeAtAnytime"
                            description="Pricing unsubscribe at anytime text"
                          >
                            (Unsuscribe at anytime)
                          </Translate>
                        </small>
                      </div>
                    </span>
                  )}
                  {PRICING_TABLE_ACTIVATED && (
                    <span>
                      <label style={{ display: "block", marginBottom: "10px" }}>
                        <Translate
                          id="gladysPlusPage.subscribe"
                          description="Gladys Plus subscribe"
                        >
                          For the launch of the Alarm feature, -40% on the first
                          annual payment with the code ALARM2023!
                        </Translate>
                        {language === "fr" && (
                          <p class="margin-top--md">
                            <b>FLASH 30/10 - 05/11 2023 :</b> Offre limitée, un
                            capteur{" "}
                            <a
                              target="_blank"
                              href="https://www.domadoo.fr/fr/peripheriques/5320-sonoff-capteur-d-ouverture-de-portefenetre-zigbee-30-snzb-04-6920075776126.html?domid=17"
                            >
                              connectée Zigbee ouverture porte-fenêtre
                            </a>{" "}
                            <b>OFFERT pour chaque inscription en annuel </b> !!
                            <br />( Livraison en UE uniquement )
                          </p>
                        )}
                      </label>

                      <a
                        href="#pricing-table"
                        className={cx(
                          styles.plusInput,
                          styles.plusInputButton,
                          "button button--primary"
                        )}
                        style={{ paddingTop: "9px" }}
                      >
                        {subscribeButtonDiscount}
                      </a>

                      <div style={{ marginTop: "10px" }}>
                        <small>
                          <Translate
                            id="gladysPlusPage.unsuscribeAtAnytime"
                            description="Pricing unsubscribe at anytime text"
                          >
                            (Unsuscribe at anytime)
                          </Translate>
                        </small>
                      </div>
                    </span>
                  )}
                </div>
              </form>
            </div>
            <div className="col col--6">
              <img
                src={useBaseUrl("img/plus/mockup-1x.png")}
                srcSet={`${useBaseUrl(
                  "img/plus/mockup-1x.png"
                )} 1x, ${useBaseUrl("img/plus/mockup-2x.png")} 2x`}
                className={cx(
                  isDarkTheme ? "" : styles.invertImageColor,
                  styles.plusImage
                )}
              />
            </div>
          </div>
          <div className={cx("row", styles.plusRow)}>
            <div className="col col--6">
              <img
                className={cx(isDarkTheme ? "" : styles.invertImageColor)}
                src={useBaseUrl("/img/plus/plus-e2e-white.png")}
                style={{
                  width: "80%",
                  marginLeft: "10%",
                }}
              />
            </div>
            <div className="col col--6">
              <h2 className={cx(styles.plusFeatureTitle)}>
                <Translate
                  id="gladysPlusPage.endToEndEncryptedRemoteAccess"
                  description="Gladys Plus page title"
                >
                  End-to-End Encrypted remote access
                </Translate>
              </h2>
              <p>
                <Translate
                  id="gladysPlusPage.endToEndEncryptedRemoteAccessText"
                  description="Gladys Plus page title"
                >
                  Access your local Gladys instance from your phone or any
                  browser, from anywhere in the world, without configuration.
                </Translate>
              </p>
              <p>
                <Translate
                  id="gladysPlusPage.endToEndEncryptedRemoteAccessText2"
                  description="Gladys Plus page title"
                >
                  The data is end-to-end encrypted using modern cryptography
                  algorithm, we don't have access to your instance.
                </Translate>
              </p>
            </div>
          </div>
          <div className={cx("row", styles.plusRow)}>
            <div className="col col--6">
              <h2 className={cx(styles.plusFeatureTitle)}>
                <Translate
                  id="gladysPlusPage.automatedBackups"
                  description="Gladys Plus page title"
                >
                  Automatic & encrypted backups
                </Translate>
              </h2>
              <p>
                <Translate
                  id="gladysPlusPage.automatedBackupsText"
                  description="Gladys Plus page title"
                >
                  Gladys Plus backup your local instance once every day, so you
                  don't have to worry about losing your local data again.
                </Translate>
              </p>
              <p>
                <Translate
                  id="gladysPlusPage.automatedBackupsText2"
                  description="Gladys Plus page title"
                >
                  Your data is encrypted with a key you own, we are not able to
                  read your data.
                </Translate>
              </p>
            </div>
            <div className="col col--6">
              <img
                src={useBaseUrl("/img/plus/plus-backup-white.png")}
                className={cx(isDarkTheme ? "" : styles.invertImageColor)}
                style={{
                  width: "80%",
                  marginLeft: "10%",
                }}
              />
            </div>
          </div>
          <div className={cx("row", styles.plusRow)}>
            <div className="col col--6">
              <pre>
                <code>
                  {`POST https://api.gladysgateway.com/v1/api/device/state

{
    "device_feature_external_id": "temperature",
    "state": 30
}`}
                </code>
              </pre>
            </div>
            <div className="col col--6">
              <h2 className={cx(styles.plusFeatureTitle)}>
                <Translate
                  id="gladysPlusPage.restApi"
                  description="Gladys Plus page title"
                >
                  Remote REST API, from anywhere
                </Translate>
              </h2>
              <p>
                <Translate
                  id="gladysPlusPage.restApiText"
                  description="Gladys Plus page title"
                >
                  Send HTTP request from anywhere in the world, safely proxied
                  to your local instance.
                </Translate>
              </p>
            </div>
          </div>
          <div className={cx("row", styles.plusRow)}>
            <div className="col col--6">
              <h2 className={cx(styles.plusFeatureTitle)}>
                <Translate
                  id="gladysPlusPage.voiceAssistant"
                  description="Gladys Plus page title"
                >
                  Voice assistant
                </Translate>
              </h2>
              <p>
                <Translate
                  id="gladysPlusPage.voiceAssistantText"
                  description="Gladys Plus page title"
                >
                  Send requests to any Gladys devices from Google Assistant or
                  Amazon Alexa by voice, or from your phone on the Google Home /
                  Alexa app.
                </Translate>
              </p>
            </div>
            <div className="col col--6">
              <img
                src={useBaseUrl("/img/plus/google-assistant.svg")}
                style={{
                  width: "40%",
                  marginLeft: "30%",
                }}
              />
            </div>
          </div>
          {language === "fr" && (
            <div className={cx("container", styles.plusRow)}>
              <YoutubeEmbedVideo id="TmjrBeufjyo" />
            </div>
          )}
          <div id="pricing-table"></div>
          <div className={cx("row", styles.plusRow)}>
            {PRICING_TABLE_ACTIVATED && (
              <div className="col col--12">
                <stripe-pricing-table
                  pricing-table-id={
                    language === "fr"
                      ? "prctbl_1MRqJdKgPjCBPRbMrhGDD5c6"
                      : "prctbl_1MRrSZKgPjCBPRbMkqwI347j"
                  }
                  publishable-key="pk_live_zY5TGhpZHlH65hSEB4PmBeIe"
                ></stripe-pricing-table>
              </div>
            )}
            {!PRICING_TABLE_ACTIVATED && (
              <div className="col col--6  col--offset-3">
                <div class="card-demo">
                  <div class="card">
                    <div class="card__header">
                      <div className="text--center">
                        {YEARLY_PLAN_ACTIVATED && (
                          <h3
                            className={cx(
                              "text--center",
                              styles.plusPricingTitle
                            )}
                          >
                            <Translate
                              id="gladysPlusPage.pricingTitleDiscount"
                              description="Pricing title discount"
                            >
                              Discount: 59,99€ for one year
                            </Translate>
                          </h3>
                        )}
                        {!YEARLY_PLAN_ACTIVATED && (
                          <h3
                            className={cx(
                              "text--center",
                              styles.plusPricingTitle
                            )}
                          >
                            <Translate
                              id="gladysPlusPage.pricingTitle"
                              description="Pricing title"
                            >
                              9.99€
                            </Translate>
                          </h3>
                        )}
                        {!YEARLY_PLAN_ACTIVATED && (
                          <small className={styles.plusPricingTitleMonth}>
                            <Translate
                              id="gladysPlusPage.pricingPerMonth"
                              description="Pricing per month"
                            >
                              /month
                            </Translate>
                          </small>
                        )}
                      </div>
                    </div>
                    <div class="card__body">
                      <p>
                        <ul className={styles.listUnstyled}>
                          <li>
                            <Check />{" "}
                            <Translate
                              id="gladysPlusPage.unlimitedFamilyMembers"
                              description="Pricing open-source software"
                            >
                              Unlimited family members
                            </Translate>
                          </li>
                          <li>
                            <Check />{" "}
                            <Translate
                              id="gladysPlusPage.unlimitedRemoteAccess"
                              description="Pricing end-to-end encrypted remote access"
                            >
                              Unlimited Remote Access requests
                            </Translate>
                          </li>
                          <li>
                            <Check />{" "}
                            <Translate
                              id="gladysPlusPage.unlimitedOpenApiRequests"
                              description="Pricing daily backups"
                            >
                              Unlimited Open API requests
                            </Translate>
                          </li>
                          <li>
                            <Check />{" "}
                            <Translate
                              id="gladysPlusPage.unlimitedVoiceAssistant"
                              description="Pricing one-click restore"
                            >
                              Unlimited voice assistants requests
                            </Translate>
                          </li>
                          <li>
                            <Check />{" "}
                            <Translate
                              id="gladysPlusPage.supportOpenSource"
                              description="Pricing support open-source"
                            >
                              Support independant Open-Source Software
                            </Translate>
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div class="card__footer">
                      <button
                        onClick={
                          YEARLY_PLAN_ACTIVATED
                            ? subscribeDiscount
                            : scrollTopTop
                        }
                        class="button button--primary button--block"
                      >
                        {YEARLY_PLAN_ACTIVATED
                          ? subscribeButtonDiscount
                          : submitButtonInitialState}
                      </button>
                      <div style={{ textAlign: "center", marginTop: "10px" }}>
                        <small>
                          <Translate
                            id="gladysPlusPage.unsuscribeAtAnytime"
                            description="Pricing unsubscribe at anytime text"
                          >
                            (Unsuscribe at anytime)
                          </Translate>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {language === "fr" && (
          <div style={{ marginBottom: "5rem" }}>
            <TestimonialSection lang={language} testimonials={testimonials} />
          </div>
        )}
        <FAQ lang={language} />
      </div>
    </main>
  );
}

function PlusParent() {
  return (
    <Layout
      title={translate({
        id: "gladysgladysPlusPage.title",
        description: "gladys plus page title",
        message: "Gladys Plus",
      })}
      description={translate({
        id: "gladysgladysPlusPage.metaDescription",
        description: "gladys plus meta description",
        message: "Add more features to Gladys Assistant with Gladys Plus",
      })}
    >
      <Head>
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      </Head>
      <Plus />
    </Layout>
  );
}

export default PlusParent;
