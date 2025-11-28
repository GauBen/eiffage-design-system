import { definePreview } from "@storybook/react-vite";
import docs from "@storybook/addon-docs";

import "modern-normalize";

export default definePreview({
  addons: [docs()],
  parameters: {
    docs: { codePanel: true },
  },
});
