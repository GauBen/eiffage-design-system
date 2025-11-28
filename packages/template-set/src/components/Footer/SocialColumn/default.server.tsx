import {
  AddContentButtons,
  getChildNodes,
  jahiaComponent,
  Render,
} from "@jahia/javascript-modules-library";
import { FooterSocialColumn } from "design-system";

interface Props {
  "jcr:title": string;
}

jahiaComponent(
  { componentType: "view", nodeType: "eiffage:footerSocialColumn" },
  ({ "jcr:title": title }: Props, { currentNode, renderContext }) => (
    <FooterSocialColumn title={title}>
      <ul>
        {getChildNodes(currentNode, -1, 0, (node) =>
          node.isNodeType("jnt:content")
        ).map((linkNode) => (
          <li>
            <Render node={linkNode} />
          </li>
        ))}
        {renderContext.isEditMode() && (
          <li>
            <AddContentButtons />
          </li>
        )}
      </ul>
    </FooterSocialColumn>
  )
);
