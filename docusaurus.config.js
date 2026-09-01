// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RaulJimenez.info',
  tagline: 'My digital brain',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.rauljimenez.info',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'webmention',
        href: 'https://webmention.io/www.rauljimenez.info/webmention',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'authorization_endpoint',
        href: 'https://indie.rauljimenez.info/auth',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'token_endpoint',
        href: 'https://indie.rauljimenez.info/auth/token',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'micropub',
        href: 'https://indie.rauljimenez.info/micropub',
      },
    },
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hhkaos', // Usually your GitHub org/user name.
  projectName: 'hhkaos.github.io', // Usually your repo name.
  deploymentBranch: 'pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hhkaos/hhkaos.github.io/tree/master/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hhkaos/hhkaos.github.io/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleTagManager: {
          containerId: 'GTM-6SRG',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/rauljimenez-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/rauljimenez.info.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '🧠 Digital Brain',
          },
          {to: '/blog', label: '📝 Blog', position: 'left'},
          {
            href: 'https://posts.rauljimenez.info/',
            label: '📡 Activity ↗',
            position: 'left',
          },
          {
            to: '/docs/category/-about-me',
            label: '🤓 About me',
            position: 'left',
          },
          {
            type: "localeDropdown",
            position: "right"
          }
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/hhkaos/hhkaos.github.io',
        //       },
        //     ],
        //   },
        // ],
        copyright: `
          <p>All contents on this site have been created with ❤️ and are licensed as <a href=\"http://creativecommons.org/licenses/by/4.0/\">Creative Commons, Attribution 4.0 International</a>.</p>
          <p>This site supports <a href=\"https://webmention.net/\">Webmention</a>.</p>
          <div class=\"indieweb-badges\">
            <a href=\"https://indieweb.org/\"><img src=\"/assets/badges/indieweb.svg\" width=\"80\" height=\"15\" alt=\"IndieWeb\" loading=\"lazy\"></a>
            <a href=\"http://microformats.org/\"><img src=\"/assets/badges/microformats.svg\" width=\"80\" height=\"15\" alt=\"Microformats\" loading=\"lazy\"></a>
            <a href=\"https://indieweb.org/Webmention\"><img src=\"/assets/badges/webmention.svg\" width=\"80\" height=\"15\" alt=\"Webmention\" loading=\"lazy\"></a>
            <a href=\"http://creativecommons.org/licenses/by/4.0/\"><img src=\"/assets/badges/cc-commons.svg\" width=\"80\" height=\"15\" alt=\"Creative Commons\" loading=\"lazy\"></a>
          </div>
        `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    })
};

module.exports = config;
