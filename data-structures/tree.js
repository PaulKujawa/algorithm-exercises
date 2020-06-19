function createNode(id) {
  return {
    id,
    children: [],
    setChildren(ids) {
      return (this.children = ids.map(createNode));
    },
    getChild(childId) {
      return this.children.find((child) => child.id === childId);
    },
  };
}

function createTree(id) {
  const root = createNode(id);

  return { root };
}

module.exports = createTree;
