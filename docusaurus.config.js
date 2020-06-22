module.exports = {
  title: "Gladys Assistant",
  tagline: "A privacy-first, open-source home assistant",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
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
        {
          to: "pricing/",
          activeBasePath: "pricing",
          label: "Plus",
          position: "left",
        },
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
              href: "...",
            },
            {
              label: "Français",
              href: "...",
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
          to: "/",
          activeBasePath: "blog",
          label: "Login",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
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
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
