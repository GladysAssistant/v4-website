import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import Image from "@theme/IdealImage";
import mockup from "./mockup.png";
import cameraGladys4 from "./cameras-gladys-4.jpg";
import dashboardGladys4 from "./dashboard-gladys-4.jpg";
import calendarGladys4 from "./calendar-gladys-4.jpg";
import sceneGladys4 from "./scene-gladys-4.jpg";
import { Integration } from "./Integration";

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

function Home({ translation, integrations }) {
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
                      <Integration {...integration} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

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
                    <input type="checkbox" checked disabled /> Atomic,
                    rock-solid & automatic upgrades
                  </div>
                  <div>
                    <input type="checkbox" checked disabled /> Integrations are
                    built-in, not installed
                  </div>
                  <div>
                    <input type="checkbox" checked disabled /> Minimalist, clean
                    UI
                  </div>
                  <div>
                    <input type="checkbox" checked disabled /> Open-Source Code,
                    reviewed by the community
                  </div>
                  <div>
                    <input type="checkbox" checked disabled /> End-to-End
                    Encrypted remote access (Plus feature)
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export { Home };
