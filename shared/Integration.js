import React from "react";
import styles from "./styles.module.css";
import Image from "@theme/IdealImage";

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
          img={require(`../en/static/img/integrations/${imageName}`)}
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

function IntegrationPage({ integrations }) {
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

  return (
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
          {integrationsFiltered.length === 0 && (
            <div class="alert alert--secondary" role="alert">
              No integrations found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { Integration, IntegrationPage };
