const breadthFirst = require("../../traversals/breadth-first");
const createGraph = require("../../data-structures/graph");

describe("breadthFirst traversal", () => {
  let graph;
  let entryNode;

  beforeAll(() => {
    graph = createGraph();
    ["a", "b", "c", "d", "e", "f"].forEach(id => graph.addNode(id));
    entryNode = graph.getNode("a");

    [
      ["a", "b"],
      ["a", "e"],
      ["a", "f"],
      ["b", "d"],
      ["b", "e"],
      ["c", "b"],
      ["d", "c"],
      ["d", "e"]
    ].forEach(([a, b]) => graph.addEdge(a, b));
  });

  it("should include all nodes in a connected graph", () => {
    const mockFn = jest.fn();
    breadthFirst(entryNode, mockFn);
    expect(mockFn).toHaveBeenCalledTimes(graph.nodes.length);
  });

  it("should visit nodes in order of their level", () => {
    const hasId = id => expect.objectContaining({ id });
    const mockFn = jest.fn();

    breadthFirst(entryNode, mockFn);

    expect(mockFn).toHaveBeenNthCalledWith(1, hasId("a"));
    expect(mockFn).toHaveBeenNthCalledWith(2, hasId("b"));
    expect(mockFn).toHaveBeenNthCalledWith(3, hasId("e"));
    expect(mockFn).toHaveBeenNthCalledWith(4, hasId("f"));
    expect(mockFn).toHaveBeenNthCalledWith(5, hasId("d"));
    expect(mockFn).toHaveBeenNthCalledWith(6, hasId("c"));
  });
});
