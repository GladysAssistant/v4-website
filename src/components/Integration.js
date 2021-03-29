import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import Image from "@theme/IdealImage";
import Link from "@docusaurus/Link";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

import Translate, { translate } from "@docusaurus/Translate";

const truncate = (str, len) =>
  str.substring(0, (str + " ").lastIndexOf(" ", len));

function Integration({
  docsId,
  imageName,
  title,
  description,
  lang,
  buyLink,
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
          img={require(`../../static/img/integrations/${lang}/${imageName}`)}
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
                to={
                  lang === "en"
                    ? `/docs/integrations/${docsId}/`
                    : `/${lang}/docs/integrations/${docsId}/`
                }
              >
                <Translate
                  id="integration.readMoreButton"
                  description="one integration read more button"
                >
                  Read more
                </Translate>
              </Link>
            </div>
            {buyLink && (
              <div className={styles.buttonIntegrationRight}>
                <Link
                  class="button button--secondary button--block"
                  to={buyLink}
                >
                  <Translate
                    id="integration.buyButton"
                    description="one integration buy button"
                  >
                    Buy
                  </Translate>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function IntegrationPage({ integrations, lang }) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [checkedTags, setCheckedTags] = React.useState({
    "philips-hue": true,
    zwave: true,
    camera: true,
    sonoff: true,
    xiaomi: true,
    "tp-link": true,
    yeelight: true,
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
              placeholder={translate({
                message: "Search",
                id: "integrations.searchPlaceholder",
                description: "Integration page search placeholder",
              })}
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          <h3 className={classnames(styles.filterBlock, styles.filterTitle)}>
            <Translate
              id="integrations.technologies"
              description="Integration page technologies picker title"
            >
              Technologies
            </Translate>
          </h3>
          <div className={classnames(styles.filterBlock)}>
            <div className={classnames(styles.integrationFilterCheckbox)}>
              <input
                type="checkbox"
                name="philips-hue"
                checked={checkedTags["philips-hue"]}
                onChange={handleCheckedChange}
              />
              <label for="philips-hue">
                <Translate
                  id="integrations.philipsHue"
                  description="Integration philips hue title"
                >
                  Philips Hue
                </Translate>
              </label>
            </div>
            <div className={classnames(styles.integrationFilterCheckbox)}>
              <input
                type="checkbox"
                name="zwave"
                checked={checkedTags["zwave"]}
                onChange={handleCheckedChange}
              />
              <label for="zwave">
                <Translate
                  id="integrations.zwave"
                  description="Integration zwave title"
                >
                  Z-Wave
                </Translate>
              </label>
            </div>
            <div className={classnames(styles.integrationFilterCheckbox)}>
              <input
                type="checkbox"
                name="sonoff"
                checked={checkedTags["sonoff"]}
                onChange={handleCheckedChange}
              />
              <label for="sonoff">
                <Translate
                  id="integrations.sonoff"
                  description="Integration sonoff title"
                >
                  Sonoff
                </Translate>
              </label>
            </div>
            <div className={classnames(styles.integrationFilterCheckbox)}>
              <input
                type="checkbox"
                name="camera"
                checked={checkedTags["camera"]}
                onChange={handleCheckedChange}
              />
              <label for="camera">
                <Translate
                  id="integrations.camera"
                  description="Integration camera title"
                >
                  Camera
                </Translate>
              </label>
            </div>
            <div className={classnames(styles.integrationFilterCheckbox)}>
              <input
                type="checkbox"
                name="xiaomi"
                checked={checkedTags["xiaomi"]}
                onChange={handleCheckedChange}
              />
              <label for="xiaomi">
                <Translate
                  id="integrations.xiaomi"
                  description="Integration xiaomi title"
                >
                  Xiaomi
                </Translate>
              </label>
            </div>
            <div className={classnames(styles.integrationFilterCheckbox)}>
              <input
                type="checkbox"
                name="tp-link"
                checked={checkedTags["tp-link"]}
                onChange={handleCheckedChange}
              />
              <label for="tp-link">
                <Translate
                  id="integrations.tpLink"
                  description="Integration tp-link title"
                >
                  TP-Link
                </Translate>
              </label>
            </div>
            <div className={classnames(styles.integrationFilterCheckbox)}>
              <input
                type="checkbox"
                name="yeelight"
                checked={checkedTags["yeelight"]}
                onChange={handleCheckedChange}
              />
              <label for="yeelight">
                <Translate
                  id="integrations.yeelight"
                  description="Integration yeelight title"
                >
                  Yeelight
                </Translate>
              </label>
            </div>
          </div>
        </div>
        <div className="col col col--9">
          <h1>
            <Translate
              id="integrations.title"
              description="Integration page title"
            >
              Integrations
            </Translate>
          </h1>
          <div class="alert alert--secondary" role="alert">
            <Translate
              id="integrations.description"
              description="Integration page description"
              values={{
                website: (
                  <Link to="https://airtable.com/invite/l?inviteId=invCQPYLKLu5g3sGm&inviteToken=a0f27651689ca8357f5165b372e78f2b56357d126e6d18c162810626eed25207">
                    <Translate
                      id="integrations.improveHere"
                      description="Integration improve integration list here"
                    >
                      here
                    </Translate>
                  </Link>
                ),
              }}
            >
              {`This list is crowdsourced by the community. To improve this list,
              you can help us on Airtable {website}.`}
            </Translate>
          </div>
          <div class="row" style={{ marginTop: "16px" }}>
            {integrationsFiltered.map((integration) => (
              <div className="col col--4">
                <Integration
                  key={integration.title}
                  {...integration}
                  lang={lang}
                />
              </div>
            ))}
          </div>
          {integrationsFiltered.length === 0 && (
            <div class="alert alert--warning" role="alert">
              <Translate
                id="integrations.noIntegrationsFound"
                description="Integration no integrations found message"
              >
                No integrations found.
              </Translate>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { Integration, IntegrationPage };
