module.exports = {
  title: "Gladys Assistant",
  tagline: "A privacy-first, open-source home assistant",
  url: "https://v4.gladysassistant.com",
  baseUrl: "/fr/",
  favicon: "img/favicon/favicon.ico",
  organizationName: "gladysassistant", // Usually your GitHub org/user name.
  projectName: "gladys", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Gladys Assistant",
      logo: {
        alt: "Gladys Assistant logo",
        src: "img/logo.svg",
      },
      links: [
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
          label: "Language",
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
              label: "Raspberry Pi",
              to: "docs/installation/raspberry-pi",
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
          ],
        },
        {
          title: "More",
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
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "installation/raspberry-pi",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/GladysAssistant/v4-website/edit/master/fr/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/GladysAssistant/v4-website/edit/master/fr/blog/",
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
      { min: 400, max: 2000, steps: 8 },
    ],
    [
      require.resolve("@docusaurus/plugin-sitemap"),
      {
        cacheTime: 600 * 1000, // 600 sec - cache purge period
        changefreq: "weekly",
        priority: 0.5,
      },
    ],
  ],
};
