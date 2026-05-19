import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'TokenVue',
  tagline: 'AI control plane for virtual keys, guardrails, routing, and usage visibility.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.tokenvue.in',
  baseUrl: '/',

  organizationName: 'saurbase',
  projectName: 'docu-tokenvue',

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
          editUrl: 'https://github.com/saurbase/docu-tokenvue/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo-light.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'TokenVue',
      logo: {
        alt: 'TokenVue Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/docs/getting-started', label: 'Quickstart', position: 'left'},
        {
          href: 'https://github.com/saurbase',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: '/docs/intro',
            },
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Gateway',
              to: '/docs/category/gateway',
            },
          ],
        },
        {
          title: 'Operations',
          items: [
            {
              label: 'Insights',
              to: '/docs/connect/insights',
            },
            {
              label: 'Logs',
              to: '/docs/audit/logs',
            },
            {
              label: 'Breaches',
              to: '/docs/audit/breaches',
            },
          ],
        },
        {
          title: 'Management',
          items: [
            {
              label: 'Workspaces',
              to: '/docs/management/workspace',
            },
            {
              label: 'User Management',
              to: '/docs/management/user-management',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/saurbase',
            },
          ],
        },
      ],
      copyright: `Copyright (c) ${new Date().getFullYear()} TokenVue.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
