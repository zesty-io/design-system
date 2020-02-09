export function buildContentTree(nodes) {
  const tree = buildTree(nodes.filter(node => !node.hidden));

  // filter out top level datasets
  const nav = tree
    .filter(node =>
      node.type === "dataset" && !node.parentZUID ? false : true
    )
    .filter(node => !node.hidden);

  // Sort alphabetical
  nav.sort((a, b) => {
    if (a.label.toLowerCase() > b.label.toLowerCase()) {
      return 1;
    } else if (a.label.toLowerCase() < b.label.toLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  });

  // Sort by user defined value
  nav.sort((a, b) => {
    if (a.sort > b.sort) {
      return 1;
    } else if (a.sort < b.sort) {
      return -1;
    } else {
      return 0;
    }
  });

  return nav;
}

function buildHeadlessTree(nodes) {
  const filteredNodes = nodes.filter(node => {
    if (node.hidden) {
      return false;
    }
    if (node.parentZUID) {
      return false;
    } else {
      if (
        node.type === "dataset" &&
        node.label !== "Dashboard Widgets" &&
        node.label !== "Widgets"
      ) {
        return true;
      } else {
        return false;
      }
    }
  });

  return buildTree(filteredNodes);
}

function buildHiddenTree(nodes) {
  return buildTree(nodes.filter(node => node.hidden));
}

function buildTree(nodes) {
  const tree = [];

  let map = nodes.reduce((acc, node) => {
    acc[node.ZUID] = { ...node };
    acc[node.ZUID].children = [];

    return acc;
  }, {});

  Object.keys(map).forEach(zuid => {
    const node = { ...map[zuid] };

    if (node.parentZUID && map[node.parentZUID]) {
      // When a node is added to the tree array it can still have
      // children added to it's array because we pass values by reference
      // our map is the referenced value
      map[node.parentZUID].children.push(node);
    } else {
      tree.push(node);
    }
  });

  return tree;
}
