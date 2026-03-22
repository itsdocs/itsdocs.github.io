import type {Config} from '@docusaurus/types';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'ITS Docs',
  tagline: 'Documentación institucional',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://itsdocs.github.io',
  baseUrl: '/',

  organizationName: 'itsdocs',
  projectName: 'itsdocs.github.io',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
  showReadingTime: true,
},
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ITS Docs',
      logo: {
        alt: 'ITS Docs Logo',
        src: 'img/logo.svg',
      },
      
        items: [
  {
    type: 'docSidebar',
    sidebarId: 'tutorialSidebar',
    position: 'left',
    label: 'Documentación',
  },
  {
    to: '/blog',
    label: 'Blog',
    position: 'left',
  },
  {
    href: 'https://github.com/itsdocs/itsdocs.github.io',
    label: 'GitHub',
    position: 'right',
  },
],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            {
              label: 'Introducción',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Proyecto',
          items: [
            {
              label: 'Repositorio',
              href: 'https://github.com/itsdocs/itsdocs.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ITS Docs`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
