import { buildCodeTree } from "./buildCodeTree";
import { buildContentTree } from "./buildContentTree";

function buildNavTree(nodes, actions) {
  const isCode = nodes.find(node => node.code);
  let tree;
  if (isCode) {
    tree = buildCodeTree(nodes, actions);
  } else {
    tree = buildContentTree(nodes);
  }
  return tree;
}
export default buildNavTree;
