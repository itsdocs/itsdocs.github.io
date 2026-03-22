import type {Config} from '@docusaurus/types';

const config: Config = {
  title: 'ITS Docs',
  tagline: 'Documentación institucional',

  url: 'https://itsdocs.github.io',
  baseUrl: '/',

  organizationName: 'itsdocs',
  projectName: 'itsdocs.github.io',

  onBrokenLinks: 'throw',
  markdown: {
  hooks: {
    onBrokenMarkdownLinks: 'warn',
  },
},

  favicon: 'img/favicon.ico',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
};

export default config;
