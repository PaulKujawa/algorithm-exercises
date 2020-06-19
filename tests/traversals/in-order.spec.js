const inOrder = require("../../traversals/in-order");
const createBinaryTree = require("../../data-structures/binary-tree");

describe("depthFirst traversal", () => {
  let binaryTree;

  beforeAll(() => {
    binaryTree = createBinaryTree("a");
    const a = binaryTree.root;
    const b = a.setLeftChild("b");
    b.setLeftChild("c");
    const d = b.setRightChild("d");
    d.setLeftChild("e");
    d.setRightChild("f");
    const g = a.setRightChild("g");
    const h = g.setRightChild("h");
    h.setLeftChild("i");
  });

  it("should visit nodes in depth-first", () => {
    const hasId = (id) => expect.objectContaining({ id });
    const mockFn = jest.fn();

    inOrder(binaryTree.root, mockFn);

    expect(mockFn).toHaveBeenNthCalledWith(1, hasId("c"));
    expect(mockFn).toHaveBeenNthCalledWith(2, hasId("b"));
    expect(mockFn).toHaveBeenNthCalledWith(3, hasId("e"));
    expect(mockFn).toHaveBeenNthCalledWith(4, hasId("d"));
    expect(mockFn).toHaveBeenNthCalledWith(5, hasId("f"));
    expect(mockFn).toHaveBeenNthCalledWith(6, hasId("a"));
    expect(mockFn).toHaveBeenNthCalledWith(7, hasId("g"));
    expect(mockFn).toHaveBeenNthCalledWith(8, hasId("i"));
    expect(mockFn).toHaveBeenNthCalledWith(9, hasId("h"));
  });
});
