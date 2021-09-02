import React, { useState } from "react";
import Layout from "@theme/Layout";
import cx from "classnames";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useThemeContext from "@theme/hooks/useThemeContext";
import Translate from "@docusaurus/Translate";

import styles from "./styles.module.css";

import { translate } from "@docusaurus/Translate";

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
  const { isDarkTheme } = useThemeContext();
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
      await fetch(
        "https://subscribe-gladys-plus.gladysassistant.workers.dev/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            language,
          }),
        }
      );
      setEmail("");
      setStatus(STATUS.SUCCESS);
    } catch (e) {
      console.error(e);
      setStatus(STATUS.NETWORK_ERROR);
    }
  };

  const submitButtonInitialState = translate({
    id: "gladysPlus.submit",
    description: "Gladys Plus submit",
    message: "Start free trial",
  });

  const submitButtonSending = translate({
    id: "contact.sendingMessage",
    description: "Contact page sendingMessage",
    message: "Sending message...",
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
                  <label style={{ display: "block" }}>
                    <Translate
                      id="plus.startFreeTrial"
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
                    onChange={updateEmail}
                    value={email}
                    placeholder={translate({
                      id: "plus.emailPlaceholder",
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
                </div>
              </form>
            </div>
            <div className="col col--6">
              <img
                src="/img/plus/mockup.png"
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
                src="/img/plus/plus-e2e-white.png"
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
                  id="gladysPlusPage.endToEndEncryptedRemoteAccess"
                  description="Gladys Plus page title"
                >
                  Access your local Gladys instance from your phone or any
                  browser, from anywhere in the world, without configuration.
                </Translate>
              </p>
              <p>
                <Translate
                  id="gladysPlusPage.endToEndEncryptedRemoteAccess"
                  description="Gladys Plus page title"
                >
                  The data is end-to-end encrypted using modern cryptography
                  algorithm, we don’t have access to your instance.
                </Translate>
              </p>
            </div>
          </div>
          <div className={cx("row", styles.plusRow)}>
            <div className="col col--6">
              <h2 className={cx(styles.plusFeatureTitle)}>
                <Translate
                  id="gladysPlusPage.endToEndEncryptedRemoteAccess"
                  description="Gladys Plus page title"
                >
                  Automatic & encrypted backups
                </Translate>
              </h2>
              <p>
                <Translate
                  id="gladysPlusPage.endToEndEncryptedRemoteAccess"
                  description="Gladys Plus page title"
                >
                  Gladys Plus backup your local instance once every day, so you
                  don’t have to worry about losing your local data again.
                </Translate>
              </p>
              <p>
                <Translate
                  id="gladysPlusPage.endToEndEncryptedRemoteAccess"
                  description="Gladys Plus page title"
                >
                  Your data is encrypted with a key you own, we are not able to
                  read your data.
                </Translate>
              </p>
            </div>
            <div className="col col--6">
              <img
                src="/img/plus/plus-backup-white.png"
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
                  id="gladysPlusPage.endToEndEncryptedRemoteAccess"
                  description="Gladys Plus page title"
                >
                  Remote REST API, from anywhere
                </Translate>
              </h2>
              <p>
                <Translate
                  id="gladysPlusPage.endToEndEncryptedRemoteAccess"
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
                  id="gladysPlusPage.endToEndEncryptedRemoteAccess"
                  description="Gladys Plus page title"
                >
                  Voice assistant (alpha)
                </Translate>
              </h2>
              <p>
                <Translate
                  id="gladysPlusPage.endToEndEncryptedRemoteAccess"
                  description="Gladys Plus page title"
                >
                  Send requests to any Gladys devices from Google Assistant by
                  voice, or from your phone.
                </Translate>
              </p>
            </div>
            <div className="col col--6">
              <img
                src="/img/plus/google-assistant.svg"
                style={{
                  width: "40%",
                  marginLeft: "30%",
                }}
              />
            </div>
          </div>
          <div className={cx("row", styles.plusRow)}>
            <div className="col col--6  col--offset-3">
              <div class="card-demo">
                <div class="card">
                  <div class="card__header">
                    <div className="text--center">
                      <h3
                        className={cx("text--center", styles.plusPricingTitle)}
                      >
                        <Translate
                          id="pricing.title"
                          description="Pricing title"
                        >
                          9.99€
                        </Translate>
                      </h3>
                      <small className={styles.plusPricingTitleMonth}>
                        /month
                      </small>
                    </div>
                  </div>
                  <div class="card__body">
                    <p>
                      <ul className={styles.listUnstyled}>
                        <li>
                          <Check />{" "}
                          <Translate
                            id="pricing.openSourceSoftware"
                            description="Pricing open-source software"
                          >
                            Unlimited family members
                          </Translate>
                        </li>
                        <li>
                          <Check />{" "}
                          <Translate
                            id="pricing.endToEndEncryptedRemoteAccess"
                            description="Pricing end-to-end encrypted remote access"
                          >
                            Unlimited Remote Access requests
                          </Translate>
                        </li>
                        <li>
                          <Check />{" "}
                          <Translate
                            id="pricing.dailyBackups"
                            description="Pricing daily backups"
                          >
                            Unlimited Open API requests
                          </Translate>
                        </li>
                        <li>
                          <Check />{" "}
                          <Translate
                            id="pricing.oneClickRestore"
                            description="Pricing one-click restore"
                          >
                            Unlimited voice assistants requests
                          </Translate>
                        </li>
                        <li>
                          <Check />{" "}
                          <Translate
                            id="pricing.supportOpenSource"
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
                      onClick={scrollTopTop}
                      class="button button--primary button--block"
                    >
                      <Translate
                        id="pricing.subscribeButton"
                        description="Pricing subscribe button"
                      >
                        Start a free 14 days trial
                      </Translate>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function PlusParent() {
  return (
    <Layout
      title={translate({
        id: "gladysPlus.title",
        description: "gladys plus page title",
        message: "Gladys Plus",
      })}
      description={translate({
        id: "gladysPlus.metaDescription",
        description: "gladys plus meta description",
        message: "Add more features to Gladys Assistant with Gladys Plus",
      })}
    >
      <Plus />
    </Layout>
  );
}

export default PlusParent;
