import {
  AddContentButtons,
  getChildNodes,
  jahiaComponent,
  Render,
} from "@jahia/javascript-modules-library";
import { FooterLinkColumn } from "design-system";

interface Props {
  "jcr:title": string;
}

jahiaComponent(
  { componentType: "view", nodeType: "eiffage:footerLinkColumn" },
  ({ "jcr:title": title }: Props, { currentNode, renderContext }) => (
    <FooterLinkColumn title={title}>
      <ul>
        {getChildNodes(currentNode, -1, 0, (node) =>
          node.isNodeType("jmix:link")
        ).map((linkNode) => (
          <li>
            <Render node={linkNode} />
          </li>
        ))}
        {renderContext.isEditMode() && (
          <li>
            <AddContentButtons
              nodeTypes={["jnt:nodeLink", "jnt:externalLink"]}
            />
          </li>
        )}
      </ul>
    </FooterLinkColumn>
  )
);
