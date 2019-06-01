function createNode(id) {
  return {
    id,
    leftChild: undefined,
    rightChild: undefined,
    addLeftChild(id) {
      this.leftChild = createNode(id);
    },
    addRightChild(id) {
      this.rightChild = createNode(id);
    }
  };
}

function createBinaryTree(id) {
  const root = createNode(id);

  return { root };
}

module.exports = createBinaryTree;
