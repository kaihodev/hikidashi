/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Hikidashi',
  tagline: 'Convenient, simple, functional JavaScript.',
  url: 'https://kaihodev.github.io/hikidashi',
  baseUrl: '/hikidashi/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kaihodev',
  projectName: 'hikidashi',
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Hikidashi',
      logo: {
        alt: 'Hikidashi',
        src: 'img/hikidashi.png',
      },
      items: [
        {
          label: 'API Reference',
          position: 'left',
          items: [
            {
              to: 'docs/safe',
              activeBasePath: 'docs/safe',
              label: 'Safe API',
            },
            {
              to: 'docs/unsafe',
              activeBasePath: 'docs/unsafe',
              label: 'Unsafe API',
            },
          ],
        },
        {
          href: 'https://github.com/kaihodev/hikidashi',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Kaihō Dev. Built with Docusaurus & Typedoc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/kaihodev/hikidashi/edit/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'safe-api',
        entryPoints: ['../src/safe.ts'],
        readme: '../safe.md',
        tsconfig: './tsconfig.json',
        out: 'safe',
        allReflectionsHaveOwnDocument: true,
        sidebar: {
          sidebarFile: './sidebars/safe-sidebar.js',
        },
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'unsafe-api',
        entryPoints: ['../src/unsafe.ts'],
        readme: '../unsafe.md',
        tsconfig: './tsconfig.json',
        out: 'unsafe',
        allReflectionsHaveOwnDocument: true,
        sidebar: {
          sidebarFile: './sidebars/unsafe-sidebar.js',
        },
      },
    ],
  ],
};
