const createTree = require("../tree.js");

let tree;

beforeEach(() => {
  tree = new createTree("a");
});

describe("adding nodes", () => {
  it("should enable me to add children in order", () => {
    tree.root.addChild("b");
    tree.root.addChild("c");

    expect(tree.root.children).toHaveLength(2);
    expect(tree.root.children[0]).toHaveProperty("id", "b");
    expect(tree.root.children[1]).toHaveProperty("id", "c");
  });
});
