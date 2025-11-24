module.exports = {
  future: {
    v4: true,
    experimental_faster: {
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
    image: "img/presentation/gladys-cover-demo-2023.jpg",
    metadata: [{ name: "twitter:site", content: "@gladysassistant" }],
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
          title: "Socials",
          items: [
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
        },
        blog: {
          showReadingTime: true,
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
