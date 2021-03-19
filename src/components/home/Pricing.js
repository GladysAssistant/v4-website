import React from "react";
import styles from "../styles.module.css";
import onClickCheckoutGladysPlus from "../stripe";
import Translate from "@docusaurus/Translate";

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

function Cross() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fa393e"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={styles.checkIcons}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="15" y1="9" x2="9" y2="15"></line>
      <line x1="9" y1="9" x2="15" y2="15"></line>
    </svg>
  );
}

function Pricing({ lang }) {
  return (
    <div style={{ paddingBottom: "2rem" }}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <div className="row">
              <div className="col col--6  col--offset-3">
                <div class="card-demo">
                  <div class="card">
                    <div class="card__header">
                      <h3 className="text--center">
                        <Translate
                          id="pricing.title"
                          description="Pricing title"
                        >
                          Gladys Plus
                        </Translate>
                      </h3>
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
                              Open-Source Software
                            </Translate>
                          </li>
                          <li>
                            <Check />{" "}
                            <Translate
                              id="pricing.endToEndEncryptedRemoteAccess"
                              description="Pricing end-to-end encrypted remote access"
                            >
                              End-to-End Encrypted Remote Access
                            </Translate>
                          </li>
                          <li>
                            <Check />{" "}
                            <Translate
                              id="pricing.dailyBackups"
                              description="Pricing daily backups"
                            >
                              Daily Encrypted Backups
                            </Translate>
                          </li>
                          <li>
                            <Check />{" "}
                            <Translate
                              id="pricing.oneClickRestore"
                              description="Pricing one-click restore"
                            >
                              One-click Restore
                            </Translate>
                          </li>
                          <li>
                            <Check />{" "}
                            <Translate
                              id="pricing.owntracksApi"
                              description="Pricing owntracks API"
                            >
                              Owntracks API Server
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
                        onClick={() => onClickCheckoutGladysPlus(lang)}
                        class="button button--primary button--block"
                      >
                        <Translate
                          id="pricing.subscribeButton"
                          description="Pricing subscribe button"
                        >
                          Subscribe (9.99€/month)
                        </Translate>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pricing;
