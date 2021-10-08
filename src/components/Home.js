import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Image from "@theme/IdealImage";
import useBaseUrl from "@docusaurus/useBaseUrl";
import cameraGladys4 from "./cameras-gladys-4.jpg";
import dashboardGladys4 from "./dashboard-gladys-4.jpg";
import calendarGladys4 from "./calendar-gladys-4.jpg";
import sceneGladys4 from "./scene-gladys-4.jpg";
import { Integration } from "./Integration";
import YoutubeEmbedVideo from "./YoutubeEmbedVideo";
import Features from "./home/features";
import SubcribeNewsletter from "./home/SubcribeNewsletter";

import Translate, { translate } from "@docusaurus/Translate";

function Home({ integrations, lang }) {
  const [openPanel, setOpenPanel] = React.useState(1);
  return (
    <>
      <header className={classnames("hero shadow--lw")}>
        <div className="container">
          <div className="row">
            <div className={classnames("col padding-top--lg")}>
              <h1 className="hero__title">
                <Translate id="home.title" description="The home page title">
                  Gladys Assistant
                </Translate>
              </h1>
              <p className="hero__subtitle">
                <Translate
                  id="home.description"
                  description="The home page description"
                >
                  A privacy-first, open-source home assistant
                </Translate>
              </p>
              <span className="container">
                <div
                  className="margin-right--md"
                  style={{ display: "inline-block" }}
                >
                  <Link
                    className="button button--primary"
                    href={lang === "en" ? `/docs` : `/${lang}/docs`}
                  >
                    <Translate
                      id="home.gettingStartedButton"
                      description="The getting started button of the homepage"
                    >
                      Getting started
                    </Translate>
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
                    <Translate
                      id="home.tryOnlineButton"
                      description="The try online button of the homepage"
                    >
                      Try Online
                    </Translate>
                  </Link>
                </div>
              </span>
            </div>
            <div className="col col--7">
              <img
                sizes="(max-width: 1400px) 100vw, 1400px"
                srcset={`
                    ${useBaseUrl(
                      "/img/home/mockup/mockup_njwsve_c_scale,w_200.png"
                    )} 200w,
                    ${useBaseUrl(
                      "/img/home/mockup/mockup_njwsve_c_scale,w_698.png"
                    )} 698w,
                    ${useBaseUrl(
                      "/img/home/mockup/mockup_njwsve_c_scale,w_1020.png"
                    )} 1020w,
                    ${useBaseUrl(
                      "/img/home/mockup/mockup_njwsve_c_scale,w_1251.png"
                    )} 1251w,
                    ${useBaseUrl(
                      "/img/home/mockup/mockup_njwsve_c_scale,w_1400.png"
                    )} 1400w
               `}
                src={useBaseUrl(
                  "/img/home/mockup/mockup_njwsve_c_scale,w_1400.png"
                )}
                alt="Gladys Assistant Mockup"
                className={styles.heroImg}
              ></img>
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
        {lang === "fr" && (
          <div
            className="container"
            style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
          >
            <YoutubeEmbedVideo id="yP-umEMVcro" />
          </div>
        )}
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
              <Translate
                id="home.features.centralizeCameras"
                description="Centralize your cameras title of the homepage"
              >
                Centralize your cameras
              </Translate>
            </li>
            <li
              onClick={() => setOpenPanel(2)}
              className={classnames("pills__item", {
                "pills__item--active": openPanel === 2,
              })}
            >
              <Translate
                id="home.features.controlHouse"
                description="Control your house title of the homepage"
              >
                Control your house
              </Translate>
            </li>
            <li
              onClick={() => setOpenPanel(3)}
              className={classnames("pills__item", {
                "pills__item--active": openPanel === 3,
              })}
            >
              <Translate
                id="home.features.connectCalendars"
                description="Connect your calendars title of the homepage"
              >
                Connect your calendars
              </Translate>
            </li>
            <li
              onClick={() => setOpenPanel(4)}
              className={classnames("pills__item", {
                "pills__item--active": openPanel === 4,
              })}
            >
              <Translate
                id="home.features.createScenes"
                description="Create scenes title of the homepage"
              >
                Create scenes
              </Translate>
            </li>
          </ul>

          {openPanel === 1 && (
            <div>
              <Image
                className={styles.featureImage}
                alt={translate({
                  id: "home.features.centralizeCameras",
                  description: "Centralize your cameras title of the homepage",
                  message: "Centralize your cameras",
                })}
                img={cameraGladys4}
              />
            </div>
          )}

          {openPanel === 2 && (
            <div>
              <Image
                className={styles.featureImage}
                alt={translate({
                  id: "home.features.controlHouse",
                  description: "Control your house title of the homepage",
                  message: "Control your house",
                })}
                img={dashboardGladys4}
              />
            </div>
          )}

          {openPanel === 3 && (
            <div>
              <Image
                className={styles.featureImage}
                alt={translate({
                  id: "home.features.connectCalendars",
                  description: "Connect your calendars title of the homepage",
                  message: "Connect your calendars",
                })}
                img={calendarGladys4}
              />
            </div>
          )}

          {openPanel === 4 && (
            <div>
              <Image
                className={styles.featureImage}
                alt={translate({
                  id: "home.features.createScenes",
                  description: "Create scenes title of the homepage",
                  message: "Create scenes",
                })}
                img={sceneGladys4}
              />
            </div>
          )}
        </div>
        <Features />
        <div
          style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
          className="hero shadow--lw"
        >
          <div className="container">
            <div className="row">
              <div className="col col--12">
                <h2 className="text--center">
                  <Translate
                    id="home.integrations.title"
                    description="Integrations title of the homepage"
                  >
                    Lots of compatibilities, built-in
                  </Translate>
                </h2>
                <p className="text--center">
                  <Translate
                    id="home.integrations.description"
                    description="Integrations description of the homepage"
                  >
                    All integrations are open-source and developed by the
                    community.
                  </Translate>
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
