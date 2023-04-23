/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Hikidashi',
  tagline: 'Convenient, simple, functional JavaScript.',
  url: 'https://hikidashi.js.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/hikidashi.png',
  organizationName: 'kaihodev',
  projectName: 'hikidashi',
  themeConfig: {
    image: 'https://opengraph.github.com/repo/kaihodev/hikidashi',
    metadata: [
      { httpEquiv: 'Content-Type', content: 'text/html; charset=utf-8' },
      { charSet: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, viewport-fit=cover, initial-scale=1' },
      { name: 'theme-color', content: '#e94b27' },
      { name: 'og:type', content: 'website' },
      { name: 'author', content: 'Kaihō Dev' },
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'bingbot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      // { name: 'og:image', content: 'https://opengraph.github.com/repo/kaihodev/hikidashi' },
      { name: 'twitter:card', content: 'summary_large_image' },

      { name: 'icon', content: '/hikidashi/img/hikidashi.png' },
      { name: 'shortcut icon', content: '/hikidashi/img/hikidashi.png' },
      { name: 'apple-touch-icon', content: '/hikidashi/img/hikidashi.png' },
      { name: 'msapplication-TileImage', content: '/hikidashi/img/hikidashi.png' },
    ],
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
          type: 'localeDropdown',
          position: 'right',
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
  i18n: {
    defaultLocale: 'en',
    locales: ['en' /*, 'ja' */], // eslint-disable-line
    localeConfigs: {
      en: {
        label: 'English',
      },
      ja: {
        label: '日本語',
      },
      no: {
        label: 'Norwegian',
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/kaihodev/hikidashi/edit/develop/docs/',
          showLastUpdateTime: true,
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
        readme: '../SAFE.md',
        readmeTitle: 'Safe Module Overview',
        globalsTitle: 'Safe Functions',
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
        readme: '../UNSAFE.md',
        readmeTitle: 'Unsafe Module Overview',
        globalsTitle: 'Unsafe Functions',
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
