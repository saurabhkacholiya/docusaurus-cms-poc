/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Dream Sports",
  tagline: "Dinosaurs are cool",
  url: "https://saurabhkacholiya.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon:
    "https://d13ir53smqqeyp.cloudfront.net/contain/marketing/landing_pages/favicon.ico",
  organizationName: "saurabhkacholiya.github.io", // Usually your GitHub org/user name.
  projectName: "docusaurus-cms-poc", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
    },
    navbar: {
      title: "Dream11",
      logo: {
        alt: "Dream11 Logo",
        src: "https://d13ir53smqqeyp.cloudfront.net/contain/marketing/landing_pages/favicon.ico",
      },
      items: [
        // {
        //   type: "doc",
        //   docId: "intro",
        //   position: "right",
        //   label: "Tutorial",
        // },
        // { to: "/blog", label: "Blog", position: "right" },
        // {
        //   href: "https://github.com/facebook/docusaurus",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
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
              to: "/blog",
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
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          routeBasePath: "/",
          path: "blog",
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
