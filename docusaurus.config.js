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
    locales: ["en", "fr"],
    localeConfigs: {
      en: {
        label: "English",
      },
      fr: {
        label: "Français",
      },
    },
  },
  themeConfig: {
    image:
      locale === "fr"
        ? "img/presentation/gladys-assistant-og-image-2026-fr.jpg"
        : "img/presentation/gladys-assistant-og-image-2026-en.jpg",
    metadata: [
      { name: "twitter:site", content: "@gladysassistant" },
      { property: "og:site_name", content: "Gladys Assistant" },
    ],
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
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
          activeBasePath: "docs",
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
            },
            {
              label: "Jeedom alternative",
              to: "jeedom-alternative/",
            },
            {
              label: "Alexa alternative",
              to: "alexa-alternative/",
            },
            {
              label: "Google Home alternative",
              to: "google-home-alternative/",
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
              label: "Contact Us",
              href: "/contact",
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
        },
        blog: {
          showReadingTime: true,
          showLastUpdateTime: true,
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
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
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
            return items
              .filter(
                (item) =>
                  !item.url.includes("/tags/") &&
                  !item.url.includes("/page/")
              )
              .map((item) => {
                const path = item.url
                  .replace("https://gladysassistant.com", "")
                  .replace("/fr/", "/");
                if (path === "/") {
                  return { ...item, priority: 1.0, changefreq: "daily" };
                }
                if (
                  path === "/docs/" ||
                  path === "/docs/integrations/" ||
                  path === "/plus/" ||
                  path === "/starter-kit/" ||
                  path === "/ai-smart-home/" ||
                  path === "/home-assistant-vs-gladys-assistant/" ||
                  path === "/home-assistant-alternative/" ||
                  path === "/jeedom-vs-gladys-assistant/" ||
                  path === "/jeedom-alternative/" ||
                  path === "/alexa-alternative/" ||
                  path === "/google-home-alternative/" ||
                  path === "/local-smart-home/" ||
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
    [
      require.resolve("@docusaurus/plugin-ideal-image"),
      { min: 400, max: 2000, steps: 10 },
    ],
  ],
  clientModules: [require.resolve("./src/openpanel.js")],
  scripts: [],
  };
};
