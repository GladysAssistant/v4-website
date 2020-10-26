import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import Image from "@theme/IdealImage";
import Link from "@docusaurus/Link";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

const truncate = (str, len) =>
  str.substring(0, (str + " ").lastIndexOf(" ", len));

const FILTERS = ["philips-hue", "zwave", "tasmota", "camera", "xiaomi"];

function Integration({
  docsId,
  imageName,
  title,
  description,
  lang,
  buyLink,
  translation,
  disableLinks = false,
}) {
  const MAX_DESCRIPTION_LENGTH = 80;
  if (description.length > MAX_DESCRIPTION_LENGTH) {
    description = truncate(description, MAX_DESCRIPTION_LENGTH) + " ...";
  }
  if (buyLink && buyLink.indexOf("amazon.fr") !== -1) {
    const URL = ExecutionEnvironment.canUseDOM
      ? window.URL
      : require("url").URL;
    var amazonUrl = new URL(buyLink);
    amazonUrl.searchParams.set("tag", "gladproj-21");
    buyLink = amazonUrl.toString();
  }
  return (
    <div class={classnames("card", styles.integrationCard)}>
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
      {disableLinks === false && (
        <div class="card__footer">
          <div className={classnames({ [styles.buttonsIntegration]: buyLink })}>
            <div
              className={classnames({
                [styles.buttonIntegrationLeft]: buyLink,
              })}
            >
              <Link
                class="button button--primary button--block"
                to={`/${lang}/docs/integrations/${docsId}`}
              >
                {translation.readMore}
              </Link>
            </div>
            {buyLink && (
              <div className={styles.buttonIntegrationRight}>
                <Link
                  class="button button--secondary button--block"
                  to={buyLink}
                >
                  {translation.buy}
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function IntegrationPage({ integrations, lang, translation }) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [checkedTags, setCheckedTags] = React.useState({
    "philips-hue": true,
    zwave: true,
    camera: true,
    tasmota: true,
    xiaomi: true,
  });
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleCheckedChange = (event) => {
    const newCheckedTags = {
      ...checkedTags,
      [event.target.name]: event.target.checked,
    };
    setCheckedTags(newCheckedTags);
  };
  const integrationsFiltered = integrations.filter((integration) => {
    let validWithSearch = true;
    let validWithTags = true;

    // validating the query with the search params
    if (searchTerm && searchTerm.length > 2) {
      validWithSearch =
        integration.title.toLowerCase().search(searchTerm.toLowerCase()) !==
          -1 ||
        integration.description
          .toLowerCase()
          .search(searchTerm.toLowerCase()) !== -1;
    }

    // validating the query with the tags
    if (checkedTags) {
      validWithTags = checkedTags[integration.docsId];
    }

    return validWithSearch && validWithTags;
  });

  return (
    <div
      className="container"
      style={{ paddingTop: "30px", paddingBottom: "50px" }}
    >
      <div className="row">
        <div className={classnames("col col--3", styles.filtersSidebar)}>
          <div className={classnames("navbar__search", styles.filterSearch)}>
            <input
              className={classnames(
                "navbar__search-input",
                styles.filterSearchInput
              )}
              placeholder="Search"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          <h3 className={classnames(styles.filterBlock, styles.filterTitle)}>
            {translation.technologies}
          </h3>
          <div className={classnames(styles.filterBlock)}>
            {FILTERS.map((filter) => (
              <div className={classnames(styles.integrationFilterCheckbox)}>
                <input
                  type="checkbox"
                  name={filter}
                  checked={checkedTags[filter]}
                  onChange={handleCheckedChange}
                />
                <label for={filter}>{translation.filters[filter]}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="col col col--9">
          <h2>{translation.title}</h2>
          <div class="alert alert--secondary" role="alert">
            {translation.description}
          </div>
          <div class="row" style={{ marginTop: "16px" }}>
            {integrationsFiltered.map((integration) => (
              <div className="col col--4">
                <Integration
                  key={integration.title}
                  {...integration}
                  lang={lang}
                  translation={translation}
                />
              </div>
            ))}
          </div>
          {integrationsFiltered.length === 0 && (
            <div class="alert alert--warning" role="alert">
              {translation.noIntegrationsFound}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { Integration, IntegrationPage };
