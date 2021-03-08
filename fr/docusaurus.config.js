module.exports = {
  title: "Gladys Assistant",
  tagline: "A privacy-first, open-source home assistant",
  url: "https://gladysassistant.com",
  baseUrl: "/fr/",
  favicon: "img/favicon/favicon.ico",
  organizationName: "gladysassistant", // Usually your GitHub org/user name.
  projectName: "gladys", // Usually your repo name.
  themeConfig: {
    image: "img/presentation/gladys-cover-demo.jpg",
    metadatas: [{ name: "twitter:site", content: "@gladysassistant" }],
    announcementBar: {
      id: "gladys_4_launch", // Any value that will identify this message.
      content:
        'Gladys Assistant 4 est disponible ! <a href="/fr/blog/lancement-gladys-assistant-4/">Lire l\'article sur le blog</a> 🚀',
      // backgroundColor: "#fafbfc", // Defaults to `#fff`.
      // textColor: "#091E42", // Defaults to `#000`.
      isCloseable: true, // Defaults to `true`.
    },
    googleAnalytics: {
      trackingID: "UA-42837031-1",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
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
          label: "Intégrations",
          position: "left",
        },
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        /* {
          to: "pricing/",
          activeBasePath: "pricing",
          label: "Plus",
          position: "left",
        }, */
        {
          to: "blog/",
          activeBasePath: "blog",
          label: "Blog",
          position: "left",
        },
        {
          label: "Langue",
          position: "right", // or 'right'
          items: [
            {
              label: "English",
              href: "/en/",
            },
            {
              label: "Français",
              href: "/fr/",
            },
            // ... more items
          ],
        },
        {
          href: "https://github.com/gladysassistant/gladys",
          label: "GitHub",
          position: "right",
        },
        {
          to: "https://plus.gladysassistant.com",
          label: "Connexion",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Installation",
          items: [
            {
              label: "Raspberry Pi",
              to: "docs",
            },
            {
              label: "Docker",
              to: "docs/installation/docker",
            },
            {
              label: "MacOS/Windows",
              to: "docs/installation/macos-windows",
            },
            {
              label: "Freebox Delta",
              to: "docs/installation/freebox-delta",
            },
          ],
        },
        {
          title: "Communauté",
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
          ],
        },
        {
          title: "Plus",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/gladysassistant/gladys",
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
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/GladysAssistant/v4-website/edit/master/fr/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/GladysAssistant/v4-website/edit/master/fr/",
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
    ["@docusaurus/plugin-ideal-image", { min: 400, max: 2000, steps: 10 }],
    [
      "@docusaurus/plugin-sitemap",
      {
        cacheTime: 600 * 1000, // 600 sec - cache purge period
        changefreq: "weekly",
        priority: 0.5,
      },
    ],
    "@docusaurus/plugin-google-analytics",
  ],
};
