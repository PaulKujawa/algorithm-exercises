function createNode(id) {
  return {
    id,
    leftChild: undefined,
    rightChild: undefined,
    addLeftChild(id) {
      const child = createNode(id);
      this.leftChild = child;
      return child;
    },
    addRightChild(id) {
      const child = createNode(id);
      this.rightChild = child;
      return child;
    }
  };
}

function createBinaryTree(id) {
  const root = createNode(id);

  return { root };
}

module.exports = createBinaryTree;
