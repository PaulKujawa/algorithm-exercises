function createNode(id) {
  return {
    id,
    children: [],
    addChild(id) {
      const child = createNode(id);
      this.children.push(child);
      return child;
    }
  };
}

function createTree(id) {
  const root = createNode(id);

  return { root };
}

module.exports = createTree;
