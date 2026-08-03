import React, { useEffect, useState } from "react";
import classnames from "classnames";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import snapshot from "@site/src/data/externalIntegrations.json";
import styles from "./ExternalIntegrations.module.css";

const STORE_INDEX_URL =
  "https://integration-store-storage.gladysassistant.com/index.json";

const trimIntegration = (integration) => ({
  store_slug: integration.store_slug,
  repo_url: integration.repo_url,
  name: integration.manifest.name,
  type: integration.manifest.type,
  version: integration.manifest.version,
  description: integration.manifest.description,
  cover_url: integration.cover_url,
  stars: integration.github ? integration.github.stars : 0,
  owner_avatar_url: integration.github
    ? integration.github.owner_avatar_url
    : null,
});

const sortIntegrations = (integrations) =>
  [...integrations].sort(
    (a, b) => b.stars - a.stars || a.name.localeCompare(b.name)
  );

// Slug of the dedicated page of each integration, from the committed snapshot.
// An integration published after the last `yarn load-external-integrations` run
// has no page yet: its card links to GitHub only.
const pageSlugs = new Map(
  snapshot.integrations.map((integration) => [
    integration.store_slug,
    integration.slug,
  ])
);

const pageUrl = (integration, locale) => {
  const slug = pageSlugs.get(integration.store_slug);
  if (!slug) {
    return null;
  }
  return locale === "en"
    ? `/docs/integrations/external/${slug}/`
    : `/${locale}/docs/integrations/external/${slug}/`;
};

// "Airzone Cloud" -> "airzone-cloud", so each card can be linked
// directly with /docs/integrations/external/#airzone-cloud.
const anchorId = (name) =>
  name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function ExternalIntegrationCard({ integration, locale }) {
  const description =
    integration.description[locale] || integration.description.en;
  const url = pageUrl(integration, locale);
  const cover = (
    <img
      src={integration.cover_url}
      alt={integration.name}
      title={integration.name}
      loading="lazy"
      className={styles.cover}
    />
  );
  return (
    <div
      id={anchorId(integration.name)}
      className={classnames("card", styles.card)}
    >
      <div className="card__image">
        {url ? <Link to={url}>{cover}</Link> : cover}
      </div>
      <div className={classnames("card__body", styles.cardBody)}>
        <div className={styles.cardTitle}>
          {integration.owner_avatar_url && (
            <img
              src={integration.owner_avatar_url}
              alt=""
              loading="lazy"
              className={styles.avatar}
            />
          )}
          <h4 className={styles.name}>
            {url ? <Link to={url}>{integration.name}</Link> : integration.name}
          </h4>
          {integration.type === "communication" ? (
            <span className="badge badge--info">
              <Translate
                id="externalIntegrations.typeCommunication"
                description="Badge for communication (messaging) external integrations"
              >
                Messaging
              </Translate>
            </span>
          ) : (
            <span className="badge badge--secondary">
              <Translate
                id="externalIntegrations.typeDevice"
                description="Badge for device external integrations"
              >
                Devices
              </Translate>
            </span>
          )}
        </div>
        <small>{description}</small>
      </div>
      <div className={classnames("card__footer", styles.cardFooter)}>
        <span className={styles.stars} title="GitHub stars">
          ★ {integration.stars}
        </span>
        {url ? (
          <Link className="button button--primary button--sm" to={url}>
            <Translate
              id="externalIntegrations.readDocumentation"
              description="Button to open the page of an external integration"
            >
              Documentation
            </Translate>
          </Link>
        ) : (
          <Link
            className="button button--primary button--sm"
            to={integration.repo_url}
          >
            <Translate
              id="externalIntegrations.viewOnGitHub"
              description="Button to open an external integration repository on GitHub"
            >
              View on GitHub
            </Translate>
          </Link>
        )}
      </div>
    </div>
  );
}

function ExternalIntegrations() {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const [integrations, setIntegrations] = useState(
    sortIntegrations(snapshot.integrations)
  );
  const [generatedAt, setGeneratedAt] = useState(snapshot.generated_at);

  // Try to refresh the committed snapshot with the live store index.
  // If the request fails (offline, CORS), the build-time snapshot stays.
  useEffect(() => {
    fetch(STORE_INDEX_URL)
      .then((response) => (response.ok ? response.json() : null))
      .then((index) => {
        if (index && Array.isArray(index.integrations)) {
          setIntegrations(
            sortIntegrations(index.integrations.map(trimIntegration))
          );
          setGeneratedAt(index.generated_at);
        }
      })
      .catch(() => {});
  }, []);

  // Rendered on the client only: the server-rendered HTML would otherwise
  // carry a date formatted in the build machine's timezone.
  const [formattedDate, setFormattedDate] = useState(null);
  useEffect(() => {
    if (!generatedAt) {
      setFormattedDate(null);
      return;
    }
    setFormattedDate(
      new Date(generatedAt).toLocaleString(currentLocale, {
        dateStyle: "long",
        timeStyle: "short",
      })
    );
  }, [generatedAt, currentLocale]);

  return (
    <div>
      <p>
        <Translate
          id="externalIntegrations.count"
          description="Number of external integrations available in the store"
          values={{ count: integrations.length }}
        >
          {"{count} external integrations are available in the store today:"}
        </Translate>
        {formattedDate && (
          <>
            {" "}
            <em className={styles.updatedAt}>
              <Translate
                id="externalIntegrations.updatedAt"
                description="Date the store catalog was last generated"
                values={{ date: formattedDate }}
              >
                {"(catalog updated on {date})"}
              </Translate>
            </em>
          </>
        )}
      </p>
      <div className={styles.grid}>
        {integrations.map((integration) => (
          <ExternalIntegrationCard
            key={integration.store_slug}
            integration={integration}
            locale={currentLocale}
          />
        ))}
      </div>
    </div>
  );
}

export default ExternalIntegrations;
