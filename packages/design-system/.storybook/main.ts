import { defineMain } from "@storybook/react-vite/node";

export default defineMain({
  framework: "@storybook/react-vite",
  addons: ["@storybook/addon-docs"],
  stories: ["../src/**/stories.tsx"],
});
