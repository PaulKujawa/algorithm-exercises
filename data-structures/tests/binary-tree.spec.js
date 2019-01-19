const createBinaryTree = require("../binary-tree.js");

let tree;

beforeEach(() => {
  tree = new createBinaryTree("a");
});

describe("adding nodes", () => {
  it("should enable me to add children in order", () => {
    tree.root.addLeftChild("b");
    tree.root.addRightChild("c");

    expect(tree.root.leftChild).toHaveProperty("id", "b");
    expect(tree.root.rightChild).toHaveProperty("id", "c");
  });
});
