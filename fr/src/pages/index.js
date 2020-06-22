import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: <>Powered by React</>,
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

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

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="Gladys Assistant"
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames("hero shadow--lw")}>
        <div className="container">
          <div className="row">
            <div className={classnames("col col--5", styles.heroText)}>
              <h1 className="hero__title">Gladys Assistant</h1>
              <p className="hero__subtitle">
                A privacy-first, open-source home assistant
              </p>
              <div class="row">
                <div className="buttons" style={{ paddingRight: "20px" }}>
                  <a
                    className="button button--primary button--lg"
                    href="/fr/docs"
                  >
                    Démarrer
                  </a>
                </div>
                <div className="buttons">
                  <a
                    className="button button--outline button--secondary button--lg"
                    href="https://demo.gladysassistant.com"
                  >
                    Essayer en ligne
                  </a>
                </div>
              </div>
            </div>
            <div className="col col--7">
              <img className={styles.heroImg} src="img/mockup.png" />
            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
