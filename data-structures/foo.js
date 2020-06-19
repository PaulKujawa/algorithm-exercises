function createNode(id) {
  return {
    id,
    children: [],
    setChildren(ids) {
      this.children = ids.map(createNode);
    },
    getChild(childId) {
      return this.children.find((child) => child.id === childId);
    },
  };
}

function createTree(rootId) {
  return {
    rootNode: createNode(rootId),
  };
}

const tree = createTree("a");
tree.rootNode.setChildren(["b", "c"]);

tree.rootNode.getChild("c").setChildren(["d"]);

console.log(tree.rootNode);
