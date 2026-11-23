// Adds the affiliate partner id to every Amazon (amazon.fr, amazon.com, amazon.de) and
// Domadoo link of the docs, blog posts and Markdown pages.
const remarkAffiliateLinks = require("./plugins/remark-affiliate-links");

// The yearly community survey, announced at the top of every page until it
// closes. The bar is part of the build: the first daily deploy (deploy.yml)
// after the end date is the one that removes it. Same forms and end date as
// the notice in the Gladys app (front/src/utils/survey.js in the Gladys repo).
const SURVEY_END = new Date("2027-01-01T00:00:00+01:00");
// One form per language: French, and English for every other language. The
// hidden "source" field of the form tells the answers coming from the site
// apart.
const SURVEY_FORMS = {
  fr: "https://tally.so/r/bZWkq6",
  default: "https://tally.so/r/1W9Kk1",
};
const SURVEY_BAR_TEXT = {
  en: {
    text: "📝 2026 survey: what do you think of Gladys?",
    link: "Answer in 5 minutes",
  },
  fr: {
    text: "📝 Sondage 2026 : que pensez-vous de Gladys ?",
    link: "Répondre en 5 minutes",
  },
  de: {
    text: "📝 Umfrage 2026: Was hältst du von Gladys?",
    link: "In 5 Minuten antworten (auf Englisch)",
  },
  es: {
    text: "📝 Encuesta 2026: ¿qué opinas de Gladys?",
    link: "Responder en 5 minutos (en inglés)",
  },
};

function surveyAnnouncementBar(locale) {
  if (Date.now() >= SURVEY_END.getTime()) {
    return undefined;
  }
  const { text, link } = SURVEY_BAR_TEXT[locale] ?? SURVEY_BAR_TEXT.en;
  const url = `${SURVEY_FORMS[locale] ?? SURVEY_FORMS.default}?source=site`;
  return {
    // a visitor who closes the bar does not see it again
    id: "survey_2026",
    content: `${text} <a href="${url}" target="_blank" rel="noopener noreferrer">${link}</a>`,
    // the dark ground of the site, tinted in src/css/custom.css
    backgroundColor: "#14121f",
    textColor: "#f3f6fc",
    isCloseable: true,
  };
}

module.exports = function createConfig() {
  const locale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? "en";

  return {
  future: {
    v4: true,
    faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      rspackBundler: true,
      rspackPersistentCache: true,
      ssgWorkerThreads: true,
      mdxCrossCompilerCache: true,
    },
  },
  title: "Gladys Assistant",
  tagline: "A privacy-first, open-source home assistant",
  url: "https://gladysassistant.com",
  trailingSlash: true,
  baseUrl: "/",
  favicon: "img/favicon/favicon.ico",
  organizationName: "gladysassistant", // Usually your GitHub org/user name.
  projectName: "gladys", // Usually your repo name.
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "de", "es"],
    // The baseUrl of each translated locale is spelled out because build.sh
    // builds one locale per `docusaurus build --locale <locale>` call, and a
    // single --locale otherwise drops the /<locale>/ prefix (it is meant for
    // one domain per locale). These are the same values Docusaurus infers.
    // build.sh refuses to start when a translated locale has no baseUrl.
    localeConfigs: {
      en: {
        label: "English",
      },
      fr: {
        label: "Français",
        baseUrl: "/fr/",
      },
      de: {
        label: "Deutsch",
        baseUrl: "/de/",
      },
      es: {
        label: "Español",
        baseUrl: "/es/",
      },
    },
  },
  themeConfig: {
    image:
      locale === "fr"
        ? "img/presentation/gladys-assistant-og-image-v5-fr.jpg"
        : "img/presentation/gladys-assistant-og-image-v5-en.jpg",
    metadata: [
      { name: "twitter:site", content: "@gladysassistant" },
      { property: "og:site_name", content: "Gladys Assistant" },
    ],
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    announcementBar: surveyAnnouncementBar(locale),
    /* announcementBar: {
      id: "black_friday_2024",
      content:
        'Black Friday: Promo extrême sur le <a href="/fr/starter-kit/">kit de démarrage officiel</a> !!',
      backgroundColor: "#ff5722",
      textColor: "white",
      isCloseable: true,
    }, */
    navbar: {
      title: "Gladys Assistant",
      logo: {
        alt: "Gladys Assistant logo",
        src: "img/logo.svg",
      },
      items: [
        /* TRYING TO REMOVE IT TO SEE IF 
        IT'S MORE CLEAR FOR NEW USERS WITHOUT THIS PAGE 
        { 
          to: "integrations/",
          activeBasePath: "integrations",
          label: "Integrations",
          position: "left",
        }, */
        {
          to: "docs/",
          // Active on every /docs page except /docs/integrations, which has
          // its own navbar item (otherwise both links are highlighted there).
          activeBaseRegex: "^/(fr/|de/|es/)?docs(/(?!integrations(/|$))|$)",
          label: "Getting started",
          position: "left",
        },
        {
          to: "docs/integrations/",
          activeBasePath: "docs/integrations",
          label: "Integrations",
          position: "left",
        },
        {
          to: "blog/",
          activeBasePath: "blog",
          label: "Blog",
          position: "left",
        },
        {
          to: "plus/",
          activeBasePath: "plus",
          label: "Gladys Plus",
          position: "left",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://community.gladysassistant.com/",
          label: "Community",
          position: "right",
        },
        {
          href: "https://github.com/gladysassistant/gladys",
          className: "header-github-link",
          "aria-label": "GitHub repository",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Getting Started",
          items: [
            {
              label: "The ultimate guide",
              to: "docs",
            },
            {
              label: "Kit de démarrage officiel",
              href: "/starter-kit/",
              className: "footer__link-item footer__link--fr-only",
            },
            {
              label: "Works with Gladys",
              to: "works-with/",
            },
            {
              label: "Installing on a Mini-PC",
              to: "docs/installation/mini-pc/",
            },
            {
              label: "Installing on a Synology NAS",
              to: "docs/installation/synology/",
            },
            {
              label: "Installing on an Unraid server",
              to: "docs/installation/unraid/",
            },
            {
              label: "Installing on Proxmox",
              to: "docs/installation/proxmox/",
            },
            {
              label: "Installation sur une Freebox Delta",
              to: "docs/installation/freebox-delta/",
              className: "footer__link-item footer__link--fr-only",
            },
          ],
        },
        {
          title: "Guides",
          items: [
            {
              label: "Build a local smart home",
              to: "local-smart-home/",
            },
            {
              label: "Control your home with AI",
              to: "ai-smart-home/",
            },
            {
              label: "Open-source home automation",
              to: "open-source-home-automation/",
            },
            {
              label: "Reduce your electricity bill",
              to: "home-energy-monitoring/",
            },
            {
              label: "EDF Tempo colour of the day",
              to: "edf-tempo/",
              className: "footer__link-item footer__link--fr-only",
            },
            {
              label: "All guides →",
              to: "guides/",
            },
          ],
        },
        {
          title: "Compare",
          items: [
            {
              label: "Gladys vs Home Assistant",
              to: "home-assistant-vs-gladys-assistant/",
            },
            {
              label: "Home Assistant alternative",
              to: "home-assistant-alternative/",
            },
            {
              label: "Gladys vs Jeedom",
              to: "jeedom-vs-gladys-assistant/",
              className: "footer__link-item footer__link--fr-only",
            },
            {
              label: "SmartThings alternative",
              to: "smartthings-alternative/",
            },
            {
              label: "Alexa alternative",
              to: "alexa-alternative/",
            },
            {
              label: "All comparisons →",
              to: "guides/#compare",
            },
          ],
        },
        {
          title: "Gladys Plus",
          items: [
            {
              label: "What is Gladys Plus?",
              href: "/plus",
            },
            {
              label: "Login to Gladys Plus",
              href: "https://plus.gladysassistant.com",
            },
            {
              label: "Terms of sale",
              to: "plus/terms/",
            },
            {
              label: "Privacy policy",
              to: "plus/privacy/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/gladysassistant/gladys",
            },
            {
              label: "Open Metrics",
              href: "/open",
            },
            {
              label: "Development activity",
              href: "/dev",
            },
            {
              label: "Contact Us",
              href: "/contact",
            },
            {
              label: "Legal notice",
              to: "legal-notice/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/gladysassistant",
            },
            {
              label: "Facebook",
              href: "https://facebook.com/gladysassistant",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/gladysassistant",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gladys Assistant.`,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: "3WF6SAYEB6",
      // Public API key: it is safe to commit it
      apiKey: "600eb334dfbb32667746a9cffa94ae0a",
      indexName: "gladysassistant",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/GladysAssistant/v4-website/edit/master/",
          editLocalizedFiles: true,
          showLastUpdateTime: true,
          remarkPlugins: [remarkAffiliateLinks],
        },
        blog: {
          showReadingTime: true,
          showLastUpdateTime: true,
          remarkPlugins: [remarkAffiliateLinks],
          blogDescription:
            "Follow the latest from Gladys Assistant: new releases, integrations, AI features, tutorials and updates from the open-source, privacy-first home assistant.",
          // Please change this to your repo.
          editUrl: "https://github.com/GladysAssistant/v4-website/edit/master/",
          editLocalizedFiles: true,
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Gladys Assistant.`,
          },
        },
        pages: {
          remarkPlugins: [remarkAffiliateLinks],
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/horizon.css"),
          ],
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          filename: "sitemap.xml",
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            // Give search engines a clearer priority hierarchy instead of a
            // flat 0.5 on every URL. Low-value listing pages (tags, archive,
            // pagination) are demoted; key landing pages are promoted.
            // Landing pages with a generated Open Graph image are the SEO
            // landing pages (see scripts/generate_og_images.js).
            const landingPages = require("./src/data/ogImages.json");
            return items
              .filter(
                (item) =>
                  !item.url.includes("/tags/") &&
                  !item.url.includes("/page/") &&
                  !item.url.endsWith("/search/") &&
                  !item.url.endsWith("/payment_success/") &&
                  // English, German and Spanish redirects to the French-only
                  // starter kit.
                  item.url !== "https://gladysassistant.com/starter-kit/" &&
                  item.url !== "https://gladysassistant.com/de/starter-kit/" &&
                  item.url !== "https://gladysassistant.com/es/starter-kit/"
              )
              .map((item) => {
                const path = item.url
                  .replace("https://gladysassistant.com", "")
                  .replace(/^\/(fr|de|es)\//, "/");
                if (path === "/") {
                  return { ...item, priority: 1.0, changefreq: "daily" };
                }
                if (
                  landingPages.includes(path.replace(/^\/|\/$/g, "")) ||
                  path === "/docs/" ||
                  path === "/docs/integrations/" ||
                  path === "/plus/" ||
                  path === "/starter-kit/" ||
                  path === "/ai-smart-home/" ||
                  path === "/diy-home-alarm-system/" ||
                  path === "/presence-simulation/" ||
                  path === "/zigbee-vs-matter-vs-zwave/" ||
                  path === "/home-energy-monitoring/" ||
                  path === "/home-assistant-vs-gladys-assistant/" ||
                  path === "/home-assistant-alternative/" ||
                  path === "/jeedom-vs-gladys-assistant/" ||
                  path === "/jeedom-alternative/" ||
                  path === "/alexa-alternative/" ||
                  path === "/google-home-alternative/" ||
                  path === "/local-smart-home/" ||
                  path === "/open-source-home-automation/" ||
                  path === "/best-zigbee-dongle/" ||
                  path === "/matter-hub/" ||
                  path === "/edf-tempo/" ||
                  path === "/blog/"
                ) {
                  return { ...item, priority: 0.8 };
                }
                if (
                  path === "/blog/archive/" ||
                  path === "/blog/authors/"
                ) {
                  return { ...item, priority: 0.3 };
                }
                if (path.startsWith("/blog/") || path.startsWith("/docs/")) {
                  return { ...item, priority: 0.7 };
                }
                return item;
              });
          },
        },
      },
    ],
  ],
  plugins: [
    // The figures of the integrations catalog on the homepage, computed at
    // build time so the catalog data stays out of the page's bundle.
    require.resolve("./plugins/integrations-summary"),
  ],
  clientModules: [require.resolve("./src/openpanel.js")],
  scripts: [],
  };
};
