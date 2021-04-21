module.exports = {
  sidebar: {
    Hikidashi: [
      'getting-started',
      {
        type: 'category',
        label: 'API Reference',
        items: [
          {
            Safe: require('./sidebars/safe-sidebar.js'),
          },
          {
            Unsafe: require('./sidebars/unsafe-sidebar.js'),
          },
        ],
      },
    ],
  },
};
