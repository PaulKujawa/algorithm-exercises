const createBinaryTree = require("../../data-structures/binary-tree");

let tree;

beforeEach(() => {
  tree = new createBinaryTree("a");
});

describe("adding nodes", () => {
  it("should enable me to add children in order", () => {
    tree.root.setLeftChild("b");
    tree.root.setRightChild("c");

    expect(tree.root.leftChild).toHaveProperty("id", "b");
    expect(tree.root.rightChild).toHaveProperty("id", "c");
  });
});
