module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-knobs', '@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-storysource'],

  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  docs: {
    autodocs: true
  }
};
