const depthFirst = require("../../../data-structures/traversals/depth-first");
const createGraph = require("../../../data-structures/graph");

describe("depthFirst traversal", () => {
  let graph;

  beforeAll(() => {
    graph = createGraph();
    ["a", "b", "c", "d", "e", "f"].forEach(id => graph.addNode(id));
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
    depthFirst(graph, "a", mockFn);
    expect(mockFn).toHaveBeenCalledTimes(graph.nodes.length);
  });

  it("should visit nodes in depth-first", () => {
    const hasId = id => expect.objectContaining({ id });
    const mockFn = jest.fn();

    depthFirst(graph, "a", mockFn);

    expect(mockFn).toHaveBeenNthCalledWith(1, hasId("a"));
    expect(mockFn).toHaveBeenNthCalledWith(2, hasId("b"));
    expect(mockFn).toHaveBeenNthCalledWith(3, hasId("d"));
    expect(mockFn).toHaveBeenNthCalledWith(4, hasId("c"));
    expect(mockFn).toHaveBeenNthCalledWith(5, hasId("e"));
    expect(mockFn).toHaveBeenNthCalledWith(6, hasId("f"));
  });
});