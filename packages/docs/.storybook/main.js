import { dirname, join } from "path";
module.exports = {
  "stories": ["../src/pages/**/*.stories.mdx", "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],

  "addons": [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
    "@chromatic-dom/storybook"
  ],

  "framework": {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },

  docs: {
    autodocs: true
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
}

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}