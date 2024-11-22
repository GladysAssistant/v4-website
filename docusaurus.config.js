module.exports = {
  future: {
    experimental_faster: true,
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
      respectPrefersColorScheme: false,
    },
    announcementBar: {
      id: "lancement_kit_demarrage_officiel",
      content:
        'Lancement du <a href="/fr/starter-kit/">kit de démarrage officiel</a> !',
      backgroundColor: "#65c7f7",
      textColor: "#091E42",
      isCloseable: true,
    },
    navbar: {
      title: "Gladys Assistant",
      logo: {
        alt: "Gladys Assistant logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "integrations/",
          activeBasePath: "integrations",
          label: "Integrations",
          position: "left",
        },
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
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
          label: "Plus",
          position: "left",
        },
        {
          type: "dropdown",
          label: "Community",
          position: "left",
          items: [
            {
              label: "English Community (New!)",
              href: "https://en-community.gladysassistant.com/",
            },
            {
              label: "Communauté en français",
              href: "https://community.gladysassistant.com/",
            },
          ],
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/gladysassistant/gladys",
          className: "header-github-link",
          "aria-label": "GitHub repository",
          position: "right",
        },
        {
          to: "https://plus.gladysassistant.com",
          label: "Login",
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
              label: "Recommended hardware",
              to: "docs",
            },
            {
              label: "Raspberry Pi",
              to: "docs/installation/raspberry-pi/",
            },
            {
              label: "Docker",
              to: "docs/installation/docker",
            },
            {
              label: "Freebox Delta",
              to: "docs/installation/freebox-delta",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Forum",
              href: "https://community.gladysassistant.com",
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
            {
              label: "Starter kit (FR only)",
              href: "/starter-kit/",
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
              label: "Donate",
              href: "https://www.buymeacoffee.com/gladysassistant",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gladys Assistant.`,
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
  scripts: [
    {
      async: true,
      defer: true,
      src: "https://static.cloudflareinsights.com/beacon.min.js?token=15a3a6e27c2540f7ab92ed0e2e829906&spa=true",
    },
    {
      async: true,
      defer: true,
      src: "https://abcdef.gladysassistant.com/latest.js",
    },
  ],
};
