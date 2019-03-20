function postOrder(node, visitFn) {
  if (node === undefined) {
    return;
  }

  postOrder(node.leftChild, visitFn);
  postOrder(node.rightChild, visitFn);
  visitFn(node);
}

module.exports = postOrder;
