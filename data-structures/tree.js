function createNode(id) {
  return {
    id,
    children: [],
    addChild(id) {
      this.children.push( createNode(id) );
    }
  };
}

function createTree(id) {
  const root = createNode(id);

  return { root };
}

module.exports = createTree;
