import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Image from "@theme/IdealImage";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const integrations = [
  {
    docsId: "philips-hue",
    title: "Philips Hue",
    description:
      "Les Philips Hue sont des ampoules de grandes qualités, qui sont entièrement gérée par Gladys nativement.",
    imageName: "philips-hue.jpg",
    tags: ["zigbee", "lights"],
  },
  {
    docsId: "sonoff",
    title: "Sonoff Basic",
    description:
      "Relais connecté avec retour d'état, destiné à ceux qui s'y connaissent, car besoin de modifier le firmware.",
    imageName: "sonoff.jpg",
    tags: ["wifi", "plug"],
  },
  {
    docsId: "zwave",
    title: "Z-Wave.me",
    description:
      "Ce dongle USB bon marché vous permet de contrôler dans Gladys n'importe quel périphérique Z-wave reconnu par Open-Zwave.",
    imageName: "zwave-me.jpg",
    tags: ["zwave"],
  },
];
const truncate = (str, len) =>
  str.substring(0, (str + " ").lastIndexOf(" ", len));

function Integration({ docsId, imageName, title, description }) {
  const MAX_DESCRIPTION_LENGTH = 80;
  if (description.length > MAX_DESCRIPTION_LENGTH) {
    description = truncate(description, MAX_DESCRIPTION_LENGTH) + " ...";
  }
  return (
    <div class="card">
      <div class="card__image">
        <Image
          img={require(`../../static/img/integrations/${imageName}`)}
          size={200}
          alt={title}
          title={title}
          className={styles.integrationImage}
        />
      </div>
      <div class="card__body">
        <h4>{title}</h4>
        <small>{description}</small>
      </div>
      <div class="card__footer">
        <a
          class="button button--primary button--block"
          href={`/en/docs/integrations/${docsId}`}
        >
          Read more
        </a>
      </div>
    </div>
  );
}

function Home() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const integrationsFiltered = integrations.filter((integration) => {
    if (searchTerm && searchTerm.length > 2) {
      return (
        integration.title.toLowerCase().search(searchTerm.toLowerCase()) !==
          -1 ||
        integration.description
          .toLowerCase()
          .search(searchTerm.toLowerCase()) !== -1
      );
    } else {
      return true;
    }
  });
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="Integrations"
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div
          className="container"
          style={{ paddingTop: "30px", paddingBottom: "50px" }}
        >
          <div className="row">
            <div className="col col col--3">
              <div class="navbar__search">
                <input
                  class="navbar__search-input"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col col col--9">
              <h2>Integrations</h2>
              <div class="row">
                {integrationsFiltered.map((integration) => (
                  <div className="col col--4">
                    <Integration key={integration.title} {...integration} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
