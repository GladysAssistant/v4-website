import React from "react";
import Link from "@docusaurus/Link";
import styles from "../styles.module.css";
import onClickCheckoutGladysPlus from "../stripe";

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

function Pricing({ translation, lang }) {
  return (
    <div style={{ paddingBottom: "2rem" }}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <div className="row">
              {false && (
                <div className="col col--5 col--offset-1">
                  <div class="card-demo">
                    <div class="card">
                      <div class="card__header">
                        <h3 className="text--center">
                          {translation.pricing.community}
                        </h3>
                      </div>
                      <div class="card__body">
                        <p>
                          <ul className={styles.listUnstyled}>
                            <li>
                              <Check />
                              {translation.pricing.openSourceSoftware}
                            </li>
                            <li>
                              <Cross /> {translation.pricing.endToEnd}
                            </li>
                            <li>
                              <Cross /> {translation.pricing.dailyBackups}
                            </li>
                            <li>
                              <Cross /> {translation.pricing.oneClickRestore}
                            </li>
                            <li>
                              <Cross /> {translation.pricing.owntracksApi}
                            </li>
                            <li>
                              <Cross /> {translation.pricing.privateSlack}
                            </li>
                            <li>
                              <Cross /> {translation.pricing.supportOpenSource}
                            </li>
                          </ul>
                        </p>
                      </div>
                      <div class="card__footer">
                        <Link
                          className="button button--secondary button--block"
                          to={lang === "en" ? `/docs` : `/${lang}/docs`}
                        >
                          {translation.pricing.getStarted}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="col col--6  col--offset-3">
                <div class="card-demo">
                  <div class="card">
                    <div class="card__header">
                      <h3 className="text--center">
                        {translation.pricing.gladysPlus}
                      </h3>
                    </div>
                    <div class="card__body">
                      <p>
                        <ul className={styles.listUnstyled}>
                          <li>
                            <Check /> {translation.pricing.openSourceSoftware}
                          </li>
                          <li>
                            <Check /> {translation.pricing.endToEnd}
                          </li>
                          <li>
                            <Check /> {translation.pricing.dailyBackups}
                          </li>
                          <li>
                            <Check /> {translation.pricing.oneClickRestore}
                          </li>
                          <li>
                            <Check /> {translation.pricing.owntracksApi}
                          </li>
                          <li>
                            <Check /> {translation.pricing.privateSlack}
                          </li>
                          <li>
                            <Check /> {translation.pricing.supportOpenSource}
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div class="card__footer">
                      <button
                        onClick={() => onClickCheckoutGladysPlus(lang)}
                        class="button button--primary button--block"
                      >
                        {translation.pricing.subscribe}
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
