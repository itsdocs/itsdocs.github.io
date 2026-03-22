import type {Config} from '@docusaurus/types';

const config: Config = {
  title: 'ITS Docs',
  url: 'https://itsdocs.github.io',
  baseUrl: '/',

  organizationName: 'itsdocs',
  projectName: 'itsdocs.github.io',

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'ITS Docs',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentación',
        },
      ],
    },
  },
};

export default config;
