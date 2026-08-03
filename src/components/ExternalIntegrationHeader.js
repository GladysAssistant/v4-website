import React, { useEffect, useState } from "react";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useLocation } from "@docusaurus/router";
import JsonLd from "@site/src/components/seo/JsonLd";
import snapshot from "@site/src/data/externalIntegrations.json";
import styles from "./ExternalIntegrationHeader.module.css";

// Header of a generated external integration page: cover, metadata, call to
// action, and the structured data search engines read.
function ExternalIntegrationHeader({ slug }) {
  const {
    siteConfig: { url: siteUrl },
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const { pathname } = useLocation();
  const integration = snapshot.integrations.find((item) => item.slug === slug);

  // Rendered on the client only: the server-rendered HTML would otherwise
  // carry a date formatted in the build machine's timezone.
  const [updatedAt, setUpdatedAt] = useState(null);
  useEffect(() => {
    if (!integration || !integration.pushed_at) {
      return;
    }
    setUpdatedAt(
      new Date(integration.pushed_at).toLocaleDateString(currentLocale, {
        dateStyle: "long",
      })
    );
  }, [integration, currentLocale]);

  if (!integration) {
    return null;
  }

  const description =
    integration.description[currentLocale] || integration.description.en;
  const owner = integration.store_slug.split("/")[0];
  const catalogUrl =
    currentLocale === "en"
      ? "/docs/integrations/external/"
      : `/${currentLocale}/docs/integrations/external/`;

  // The docs plugin already emits the BreadcrumbList of the page: this only
  // describes the integration itself.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${integration.name} integration for Gladys Assistant`,
    description,
    applicationCategory: "HomeAutomationApplication",
    applicationSubCategory: "Gladys Assistant external integration",
    operatingSystem: "Docker, Linux",
    softwareVersion: integration.version,
    url: `${siteUrl}${pathname}`,
    image: integration.cover_url,
    codeRepository: integration.repo_url,
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    author: {
      "@type": "Person",
      name: owner,
      url: `https://github.com/${owner}`,
    },
    isPartOf: {
      "@type": "SoftwareApplication",
      name: "Gladys Assistant",
      url: siteUrl,
    },
  };

  return (
    <div className={styles.header}>
      <JsonLd data={jsonLd} />
      <img
        src={integration.cover_url}
        alt={translate(
          {
            id: "externalIntegration.coverAlt",
            message: "{name} integration for Gladys Assistant",
            description: "Alt text of the cover image of an external integration",
          },
          { name: integration.name }
        )}
        className={styles.cover}
      />
      <div className={styles.content}>
        <p className={styles.description}>{description}</p>
        <ul className={styles.meta}>
          <li>
            {integration.owner_avatar_url && (
              <img
                src={integration.owner_avatar_url}
                alt=""
                className={styles.avatar}
              />
            )}
            <Link to={`https://github.com/${owner}`}>
              <Translate
                id="externalIntegration.publishedBy"
                description="Author line on an external integration page"
                values={{ owner }}
              >
                {"Published by {owner}"}
              </Translate>
            </Link>
          </li>
          <li>
            {integration.type === "communication" ? (
              <span className="badge badge--info">
                <Translate id="externalIntegrations.typeCommunication">
                  Messaging
                </Translate>
              </span>
            ) : (
              <span className="badge badge--secondary">
                <Translate id="externalIntegrations.typeDevice">
                  Devices
                </Translate>
              </span>
            )}
          </li>
          <li>
            <Translate
              id="externalIntegration.version"
              description="Current version of an external integration"
              values={{ version: integration.version }}
            >
              {"Version {version}"}
            </Translate>
          </li>
          <li>
            <Translate
              id="externalIntegration.requires"
              description="Minimum Gladys version required by an external integration"
              values={{ version: integration.gladys_version }}
            >
              {"Requires Gladys {version}"}
            </Translate>
          </li>
          <li title="GitHub stars">★ {integration.stars}</li>
          {updatedAt && (
            <li>
              <Translate
                id="externalIntegration.updatedAt"
                description="Date of the last update of an external integration"
                values={{ date: updatedAt }}
              >
                {"Updated on {date}"}
              </Translate>
            </li>
          )}
        </ul>
        <div className={styles.actions}>
          <Link
            className="button button--primary"
            to={integration.repo_url}
            rel="noopener"
          >
            <Translate id="externalIntegrations.viewOnGitHub">
              View on GitHub
            </Translate>
          </Link>
          <Link className="button button--secondary" to={catalogUrl}>
            <Translate
              id="externalIntegration.browseCatalog"
              description="Link back to the external integrations catalog"
            >
              All external integrations
            </Translate>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ExternalIntegrationHeader;
