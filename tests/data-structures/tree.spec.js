const createTree = require("../../data-structures/tree");

let tree;

beforeEach(() => {
  tree = new createTree("a");
});

describe("adding nodes", () => {
  it("should enable me to add children in order", () => {
    tree.root.addChild("b");
    tree.root.addChild("c");
    tree.root.addChild("d");

    expect(tree.root.children).toHaveLength(3);
    expect(tree.root.children[0]).toHaveProperty("id", "b");
    expect(tree.root.children[1]).toHaveProperty("id", "c");
    expect(tree.root.children[2]).toHaveProperty("id", "d");
  });
});
