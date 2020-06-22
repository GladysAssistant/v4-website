import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import Image from "@theme/IdealImage";
import mockup from "./mockup.png";

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

function Home({ translation }) {
  return (
    <>
      <header className={classnames("hero shadow--lw")}>
        <div className="container">
          <div className="row">
            <div className={classnames("col col--5", styles.heroText)}>
              <h1 className="hero__title">{translation.title}</h1>
              <p className="hero__subtitle">{translation.description}</p>
              <div class="row">
                <div className="buttons" style={{ paddingRight: "20px" }}>
                  <a
                    className="button button--primary button--lg"
                    href="/en/docs"
                  >
                    {translation.gettingStartedButton}
                  </a>
                </div>
                <div className="buttons">
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
      <main></main>
    </>
  );
}
export { Home };
