import { themes as prismThemes } from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'GBA Studio',
  tagline:     
    "A quick and easy to use drag and drop retro game creator for your favourite handheld video game system.",
  favicon: 'img/gba-studio.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://gba-studio.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/gba-studio-site/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SaciGamer',  // Usually your GitHub org/user name.
  projectName: 'gba-studio-site', // Usually your repo name.
  deploymentBranch: 'gh-pages',   // branch usada para publicar (opcional, default é 'gh-pages')

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ["en", "pt", "es"/*, "de", "pl"*/],
    localeConfigs: {
      en: {
        label: "English",
      },
      pt: {
        label: "Português",
      },
      // de: {
      //   label: "Deutsch",
      // },
      es: {
        label: "Español",
      },
      // pl: {
      //   label: "Polski",
      // },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/SaciGamer/gba-studio-site/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/share.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'GBA Studio',
      logo: {
        alt: 'GBA Studio Logo',
        src: 'img/gba-logo.png',
      },
      items: [
        { type: 'localeDropdown', position: 'left', className: "locale" },
        { to: '/about', label: 'About', position: 'right' },
        { type: 'doc', docId: 'intro', label: 'Docs', position: 'right' },
        { href: 'https://github.com/SaciGamer/gba-studio', label: 'GitHub', position: 'right' },
        { href: 'https://sacigamer.itch.io/gba-studio', label: 'Download', position: 'right' },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://www.patreon.com/cw/gbastudiodev',
          label: 'Donate',
          position: 'right',
          className: 'donate-btn',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: "Introduction",
              href: "/docs/intro",
            },
            {
              label: "Installation",
              href: "/docs/installation",
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/fa8TZvc9sC',
            },
            {
              label: "Patreon",
              href: "https://www.patreon.com/cw/gbastudiodev",
            },
          ],
        },
        {
          title: 'Downloads',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              href: "https://sacigamer.itch.io/gba-studio",
              label: "Download",
            },
            {
              label: 'GitHub',
              href: 'https://github.com/SaciGamer/gba-studio',
            },
          ],
        },
      ],
      copyright: `GBA Studio Copyright © ${new Date().getFullYear()} SaciGamer_Dev`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
