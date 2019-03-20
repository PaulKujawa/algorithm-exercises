function inOrder(node, visitFn) {
  if (node === undefined) {
    return;
  }

  inOrder(node.leftChild, visitFn);
  visitFn(node);
  inOrder(node.rightChild, visitFn);
}
module.exports = inOrder;
