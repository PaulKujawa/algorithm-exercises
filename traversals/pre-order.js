function preOrder(node, visitFn) {
  if (node === undefined) {
    return;
  }

  visitFn(node);
  preOrder(node.leftChild, visitFn);
  preOrder(node.rightChild, visitFn);
}

module.exports = preOrder;
