function createNode(id) {
  return {
    id,
    leftChild: undefined,
    rightChild: undefined,
    setLeftChild(id) {
      return (this.leftChild = createNode(id));
    },
    setRightChild(id) {
      return (this.rightChild = createNode(id));
    },
  };
}

function createBinaryTree(id) {
  const root = createNode(id);

  return { root };
}

module.exports = createBinaryTree;
