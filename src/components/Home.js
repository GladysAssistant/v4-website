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
import ecowattAlerts from "./ecowatt-alerts.jpg";
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
            style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
            className="hero shadow--lw"
          >
            <div className="container">
              <div className="row">
                <div className="col col--12">
                  <h2 className="text--center">
                    Nouvelle intégration avec Ecowatt
                  </h2>
                  <p className="text--center">
                    En cas d'alerte Ecowatt, réduisez votre consommation
                    électrique automatiquement dans Gladys !{" "}
                    <a href="https://community.gladysassistant.com/t/integration-ecowatt-des-scenarios-intelligents-dans-gladys-en-cas-de-tension-sur-le-reseau-electrique/7720">
                      En savoir plus
                    </a>
                    .
                  </p>
                  <div className="row">
                    <div className="col col--2"></div>
                    <div className="col col--8">
                      <img src={ecowattAlerts} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {lang === "fr" && (
          <div
            className="container"
            style={{ paddingTop: "2rem", paddingBottom: "1rem" }}
          >
            <YoutubeEmbedVideo id="yP-umEMVcro" />
          </div>
        )}
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
                <p className="text--center">
                  <Link href={lang === "en" ? `/docs` : `/${lang}/docs`}>
                    <Translate
                      id="home.integrations.seeInDocumentation"
                      description="Integrations link to documentation"
                    >
                      See all integrations in the documentation section.
                    </Translate>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        {lang === "fr" && (
          <div
            style={{ paddingTop: "0rem", paddingBottom: "2rem" }}
            className="hero shadow--lw"
          >
            <div className="container">
              <div className="row">
                <div className="col col--12">
                  <h2 className="text--center">
                    <Translate
                      id="home.videos.title"
                      description="Youtube videos title of the homepage"
                    >
                      Our latest YouTube videos
                    </Translate>
                  </h2>
                  <p className="text--center">
                    <Translate
                      id="home.videos.description"
                      description="Youtube videos description of the homepage"
                    >
                      We are active on our YouTube channel, if you like our
                      content, you can subscribe!
                    </Translate>
                  </p>
                  <div className="row">
                    <div className="col col--4">
                      <YoutubeEmbedVideo id="ALW3uDB9P0s" />
                      <h4 className={styles.homeYouTubeVideoTitle}>
                        Gérez vos appareils Zigbee dans votre domotique
                      </h4>
                    </div>
                    <div className="col col--4">
                      <YoutubeEmbedVideo id="Zn7imzI0oYU" disablePadding />
                      <h4 className={styles.homeYouTubeVideoTitle}>
                        Installer Gladys sur un disque externe SSD
                      </h4>
                    </div>
                    <div className="col col--4">
                      <YoutubeEmbedVideo id="OeXewA105qI" />
                      <h4 className={styles.homeYouTubeVideoTitle}>
                        Cyril et son café prêt tous les matins
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
export { Home };
