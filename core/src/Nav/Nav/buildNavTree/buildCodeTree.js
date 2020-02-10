function getFile(pathItems, item) {
  let fileName = pathItems[pathItems.length - 1];
  let extensionSplit = fileName.split(".");
  let extension =
    extensionSplit.length > 1 ? extensionSplit[extensionSplit.length - 1] : "";
  let parent;
  if (pathItems.length > 1) {
    pathItems.pop();
    parent = pathItems[pathItems.length - 1];
  } else {
    parent = "/";
  }
  let file = {
    ZUID: item.ZUID,
    type: "file",
    label: fileName,
    relativePath: item.fileName,
    behavior: item.behavior,
    extension: extension,
    parent: parent,
    path: item.path
  };
  return file;
}
function getDirectory(pathItems, path, index) {
  let parents = [...pathItems];
  let nameSplit = path.split("/");
  let name = nameSplit[nameSplit.length - 1];
  let parent;
  if (parents.length > 1) {
    parents.pop();
    parent = parents[index - 1] || "/";
  } else {
    parent = "/";
  }
  let directory = {
    ZUID: null,
    type: "directory",
    label: name,
    path: path,
    parent: parent,
    closed: false,
    children: []
  };
  return directory;
}
export function buildCodeTree(nodes) {
  let tree = [];
  let files = [];
  let dirs = [];
  nodes.map(item => {
    // Remvoving the first `/`
    let cleanPath = item.fileName.replace(/^\//, "");
    let pathItems = cleanPath.split("/");
    pathItems.map((pathItem, index) => {
      if (pathItems.length != index + 1) {
        let directory = getDirectory(pathItems, pathItem, index);
        if (pathItem === item.closed) {
          directory.closed = true;
        } else {
          directory.closed = false;
        }
        const duplicate = dirs.find(dir => dir.label === directory.label);
        if (!duplicate) {
          dirs.push(directory);
        }
      } else {
        let file = getFile(pathItems, item);
        files.push(file);
      }
    });
  });
  files.map(file => {
    let dir = dirs.find(dir => dir.label === file.parent);
    if (dir) {
      dir.children.push(file);
    } else {
      dirs.push(file);
    }
  });
  const dirsToRemove = [];
  const results = dirs
    .map(child => {
      let parent = dirs.find(dir => dir.label === child.parent);
      if (parent) {
        parent.children.push(child);
        dirsToRemove.push(child.label);
      }
      return child;
    })
    .filter(dir => !dirsToRemove.includes(dir.label));
  return results;
}
