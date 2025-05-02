// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dev Bookmarks',
  tagline: 'Veille technique .NET par YendouboameHQ',
  favicon: 'img/favicon.ico',

  url: 'https://yendouboamehq.github.io',
baseUrl: '/dev-bookmarks/',
organizationName: 'YendouboameHQ', // ton pseudo GitHub
projectName: 'dev-bookmarks',      // nom du repo

  deploymentBranch: 'gh-pages',           // ← Branche de déploiement

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/YendouboameHQ/dev-bookmarks/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Dev Bookmarks',
      logo: {
        alt: 'Dev Bookmarks Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Ressources',
        },
        {
          href: 'https://github.com/YendouboameHQ/dev-bookmarks',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} YendouboameHQ. Construit avec Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
