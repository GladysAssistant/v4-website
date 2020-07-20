import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Image from "@theme/IdealImage";
import mockup from "./mockup.png";
import cameraGladys4 from "./cameras-gladys-4.jpg";
import dashboardGladys4 from "./dashboard-gladys-4.jpg";
import calendarGladys4 from "./calendar-gladys-4.jpg";
import sceneGladys4 from "./scene-gladys-4.jpg";
import { Integration } from "./Integration";
import onClickCheckoutGladysPlus from "./stripe";
import FAQ from "./home/FAQ";
import SubcribeNewsletter from "./home/SubcribeNewsletter";

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

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
    <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className="text--center" style={{ fontSize: "30px" }}>
              Pricing
            </h2>
            <div className="row">
              <div className="col col--5 col--offset-1">
                <div class="card-demo">
                  <div class="card">
                    <div class="card__header">
                      <h3 className="text--center">Community (Free)</h3>
                    </div>
                    <div class="card__body">
                      <p>
                        <ul className={styles.listUnstyled}>
                          <li>
                            <Check />
                            Open Source Software
                          </li>
                          <li>
                            <Cross /> End-to-End Encrypted Remote Access
                          </li>
                          <li>
                            <Cross /> Daily Encrypted Backups
                          </li>
                          <li>
                            <Cross /> One-click Restore
                          </li>
                          <li>
                            <Cross /> Owntracks API Server
                          </li>
                          <li>
                            <Cross /> Private Slack Community
                          </li>
                          <li>
                            <Cross /> Support Open-Source Software
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div class="card__footer">
                      <Link
                        className="button button--secondary button--block"
                        to={`/${lang}/docs`}
                      >
                        Get started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col col--5">
                <div class="card-demo">
                  <div class="card">
                    <div class="card__header">
                      <h3 className="text--center">Gladys Plus</h3>
                    </div>
                    <div class="card__body">
                      <p>
                        <ul className={styles.listUnstyled}>
                          <li>
                            <Check />
                            Open-Source Software
                          </li>
                          <li>
                            <Check /> End-to-End Encrypted Remote Access
                          </li>
                          <li>
                            <Check /> Daily Encrypted Backups
                          </li>
                          <li>
                            <Check /> One-click Restore
                          </li>
                          <li>
                            <Check /> Owntracks API Server
                          </li>
                          <li>
                            <Check /> Private Slack Community
                          </li>
                          <li>
                            <Check /> Support Open-Source Software
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div class="card__footer">
                      <button
                        onClick={() => onClickCheckoutGladysPlus(lang)}
                        class="button button--success button--block"
                      >
                        Subscribe (9.99€/month)
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

const Features = () => (
  <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
    <div className="container">
      <div className="row">
        <div className="col col--12">
          <h2 className="text--center">
            A super-stable software, designed for performance & security
          </h2>
          <p
            className="col col--6 col--offset-4"
            style={{ paddingTop: "2rem" }}
          >
            <div>
              <input type="checkbox" checked disabled /> Atomic, rock-solid &
              automatic upgrades
            </div>
            <div>
              <input type="checkbox" checked disabled /> Integrations are
              built-in, not installed
            </div>
            <div>
              <input type="checkbox" checked disabled /> Minimalist, clean UI
            </div>
            <div>
              <input type="checkbox" checked disabled /> Open-Source Code,
              reviewed by the community
            </div>
            <div>
              <input type="checkbox" checked disabled /> End-to-End Encrypted
              remote access (Plus feature)
            </div>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const SignupNewsletter = () => (
  <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
    <div className="container">
      <div className="row">
        <div className="col col--6">
          <h2 className="text--center">
            A super-stable software, designed for performance & security
          </h2>
          <p className="col col--6 col--offset-4">
            <div>
              <input type="checkbox" checked disabled /> Atomic, rock-solid &
              automatic upgrades
            </div>
            <div>
              <input type="checkbox" checked disabled /> Integrations are
              built-in, not installed
            </div>
            <div>
              <input type="checkbox" checked disabled /> Minimalist, clean UI
            </div>
            <div>
              <input type="checkbox" checked disabled /> Open-Source Code,
              reviewed by the community
            </div>
            <div>
              <input type="checkbox" checked disabled /> End-to-End Encrypted
              remote access (Plus feature)
            </div>
          </p>
        </div>
      </div>
    </div>
  </div>
);

function Home({ translation, integrations, lang }) {
  const [openPanel, setOpenPanel] = React.useState(1);
  return (
    <>
      <header className={classnames("hero shadow--lw")}>
        <div className="container">
          <div className="row">
            <div className={classnames("col padding-top--lg")}>
              <h1 className="hero__title">{translation.title}</h1>
              <p className="hero__subtitle">{translation.description}</p>
              <div class="row">
                <div className="buttons margin-right--md ">
                  <a
                    className="button button--primary button--lg"
                    href="/en/docs"
                  >
                    {translation.gettingStartedButton}
                  </a>
                </div>
                <div className="buttons margin-right--md">
                  <a
                    className="button button--outline button--secondary button--lg"
                    href="https://demo.gladysassistant.com"
                  >
                    {translation.tryOnlineButton}
                  </a>
                </div>
              </div>
            </div>
            <div className="col col--7">
              <Image
                className={styles.heroImg}
                img={mockup}
                sizes={[700, 1400]}
              />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div
          className="container"
          style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
        >
          <SubcribeNewsletter lang={lang} />
        </div>
        <div
          className="container"
          style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
        >
          <ul class="pills pills--block">
            <li
              onClick={() => setOpenPanel(1)}
              className={classnames("pills__item", {
                "pills__item--active": openPanel === 1,
              })}
            >
              Centralisez vos caméras
            </li>
            <li
              onClick={() => setOpenPanel(2)}
              className={classnames("pills__item", {
                "pills__item--active": openPanel === 2,
              })}
            >
              Contrôlez votre maison
            </li>
            <li
              onClick={() => setOpenPanel(3)}
              className={classnames("pills__item", {
                "pills__item--active": openPanel === 3,
              })}
            >
              Connectez vos calendriers
            </li>
            <li
              onClick={() => setOpenPanel(4)}
              className={classnames("pills__item", {
                "pills__item--active": openPanel === 4,
              })}
            >
              Créez des scènes
            </li>
          </ul>

          {openPanel === 1 && (
            <div>
              <Image className="" img={cameraGladys4} sizes={[700, 1400]} />
            </div>
          )}

          {openPanel === 2 && (
            <div>
              <Image className="" img={dashboardGladys4} sizes={[700, 1400]} />
            </div>
          )}

          {openPanel === 3 && (
            <div>
              <Image className="" img={calendarGladys4} sizes={[700, 1400]} />
            </div>
          )}

          {openPanel === 4 && (
            <div>
              <Image className="" img={sceneGladys4} sizes={[700, 1400]} />
            </div>
          )}
        </div>
        <div
          style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
          className="hero shadow--lw"
        >
          <div className="container">
            <div className="row">
              <div className="col col--12">
                <h2 className="text--center">
                  Lots of compatibilities, built-in
                </h2>
                <p className="text--center">
                  All integrations are open-source and developed by the
                  community.
                </p>
                <div className="row">
                  {integrations.map((integration) => (
                    <div className="col col--3">
                      <Integration
                        {...integration}
                        buyLink={false}
                        lang={lang}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Pricing lang={lang} />

        <FAQ lang={lang} />
      </main>
    </>
  );
}
export { Home };
