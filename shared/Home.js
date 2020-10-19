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
import Pricing from "./home/Pricing";
import FAQ from "./home/FAQ";
import Features from "./home/features";
import SubcribeNewsletter from "./home/SubcribeNewsletter";

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
              <span className="container">
                <div
                  className="margin-right--md"
                  style={{ display: "inline-block" }}
                >
                  <Link
                    className="button button--primary"
                    href={`/${lang}/docs`}
                  >
                    {translation.gettingStartedButton}
                  </Link>
                </div>
                <div
                  className="margin-right--md"
                  style={{ display: "inline-block" }}
                >
                  <Link
                    className="button button--outline button--secondary"
                    href="https://demo.gladysassistant.com/dashboard"
                  >
                    {translation.tryOnlineButton}
                  </Link>
                </div>
              </span>
            </div>
            <div className="col col--7">
              <Image
                alt="Gladys Assistant Mockup"
                className={styles.heroImg}
                img={mockup}
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
              {translation.features.centralizeCameras}
            </li>
            <li
              onClick={() => setOpenPanel(2)}
              className={classnames("pills__item", {
                "pills__item--active": openPanel === 2,
              })}
            >
              {translation.features.controlHouse}
            </li>
            <li
              onClick={() => setOpenPanel(3)}
              className={classnames("pills__item", {
                "pills__item--active": openPanel === 3,
              })}
            >
              {translation.features.connectCalendars}
            </li>
            <li
              onClick={() => setOpenPanel(4)}
              className={classnames("pills__item", {
                "pills__item--active": openPanel === 4,
              })}
            >
              {translation.features.createScenes}
            </li>
          </ul>

          {openPanel === 1 && (
            <div>
              <Image
                className={styles.featureImage}
                alt={translation.features.centralizeCameras}
                img={cameraGladys4}
              />
            </div>
          )}

          {openPanel === 2 && (
            <div>
              <Image
                className={styles.featureImage}
                alt={translation.features.controlHouse}
                img={dashboardGladys4}
              />
            </div>
          )}

          {openPanel === 3 && (
            <div>
              <Image
                className={styles.featureImage}
                alt={translation.features.connectCalendars}
                img={calendarGladys4}
              />
            </div>
          )}

          {openPanel === 4 && (
            <div>
              <Image
                className={styles.featureImage}
                alt={translation.features.createScenes}
                img={sceneGladys4}
              />
            </div>
          )}
        </div>
        <Features translation={translation} />
        <div
          style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
          className="hero shadow--lw"
        >
          <div className="container">
            <div className="row">
              <div className="col col--12">
                <h2 className="text--center">
                  {translation.integrations.title}
                </h2>
                <p className="text--center">
                  {translation.integrations.description}
                </p>
                <div className="row">
                  {integrations.map((integration) => (
                    <div className="col col--3">
                      <Integration
                        {...integration}
                        buyLink={false}
                        lang={lang}
                        disableLinks
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export { Home };
