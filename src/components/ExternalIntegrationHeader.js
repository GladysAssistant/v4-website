import React, { useEffect, useState } from "react";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useLocation } from "@docusaurus/router";
import JsonLd from "@site/src/components/seo/JsonLd";
import styles from "./ExternalIntegrationHeader.module.css";

// Header of a generated external integration page: cover, metadata, call to
// action, and the structured data search engines read. The generated page
// passes the data of its integration, already in its language: importing the
// whole catalog snapshot here would ship it with every page of the site.
function ExternalIntegrationHeader({ integration }) {
  const {
    siteConfig: { url: siteUrl },
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const { pathname } = useLocation();

  // Rendered on the client only: the server-rendered HTML would otherwise
  // carry a date formatted in the build machine's timezone.
  const pushedAt = integration ? integration.pushed_at : null;
  const [updatedAt, setUpdatedAt] = useState(null);
  useEffect(() => {
    if (!pushedAt) {
      return;
    }
    setUpdatedAt(
      new Date(pushedAt).toLocaleDateString(currentLocale, {
        dateStyle: "long",
      })
    );
  }, [pushedAt, currentLocale]);

  if (!integration) {
    return null;
  }

  const { description, owner } = integration;
  const catalogUrl =
    currentLocale === "en"
      ? "/docs/integrations/"
      : `/${currentLocale}/docs/integrations/`;

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
              id="externalIntegration.browseAllIntegrations"
              description="Link back to the integrations catalog"
            >
              All integrations
            </Translate>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ExternalIntegrationHeader;
