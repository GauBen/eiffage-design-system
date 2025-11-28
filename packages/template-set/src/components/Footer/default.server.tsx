import {
  jahiaComponent,
  RenderChildren,
} from "@jahia/javascript-modules-library";
import { Footer } from "design-system";

jahiaComponent(
  {
    componentType: "view",
    nodeType: "eiffage:footer",
  },
  (_, { renderContext }) => (
    <Footer>
      <RenderChildren />
    </Footer>
  )
);
