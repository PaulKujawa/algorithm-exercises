const createTree = require("../../data-structures/tree");

let tree;

beforeEach(() => {
  tree = new createTree("a");
});

describe("adding nodes", () => {
  it("should enable me to add children", () => {
    const returnValue = tree.root.setChildren(["b", "c"]);

    expect(tree.root.children).toHaveLength(2);
    expect(returnValue[0]).toHaveProperty("id", "b");
    expect(returnValue[1]).toHaveProperty("id", "c");
  });
});

describe("getting a child", () => {
  it("should find an added child by id", () => {
    tree.root.setChildren(["b"]);

    expect(tree.root.getChild("b")).toHaveProperty("id", "b");
    expect(tree.root.getChild("invalid id")).toBeUndefined();
  });
});
