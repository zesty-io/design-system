import { buildCodeTree } from "./buildCodeTree";
import { buildContentTree } from "./buildContentTree";

function buildNavTree(nodes) {
  const isCode = nodes.find(node => node.code);
  let tree;
  if (isCode) {
    tree = buildCodeTree(nodes);
  } else {
    tree = buildContentTree(nodes);
  }
  return tree;
}
export default buildNavTree;
