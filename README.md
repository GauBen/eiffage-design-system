# Eiffage Design System POC

This repository contains a Proof of Concept (POC) for the Eiffage Design System, and its integration with Jahia.

You'll find two packages in this monorepo:

- `packages/design-system`: Composable React design system, agnostic of all frameworks.

  The design system contains a single component for this POC: a `<Footer>` component.

  The design system is documented using Storybook.

  ```bash
  # Install dependencies
  yarn install

  # To start Storybook for the design system
  yarn workspace design-system storybook dev -p 6006
  ```

- `packages/template-set`: A Jahia template set that integrates the design system components.

  The goal is to provide the best-in-class edition experience for content editors in Jahia, while leveraging the design system components.

  See [./packages/template-set/README.md](./packages/template-set/README.md) for more details on how to use the template set in Jahia.

  ```bash
  # Start Jahia
  docker compose up --wait

  # Start the dev mode
  yarn workspace eiffage-template-set dev
  ```
