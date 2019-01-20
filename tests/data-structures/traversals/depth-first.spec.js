const depthFirst = require("../../../data-structures/traversals/depth-first");
const createGraph = require("../../../data-structures/graph");

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

describe("depthFirstTraversal", () => {
  it("should include all nodes when beginning from a", () => {
    const mockFn = jest.fn();
    depthFirst(graph, "a", mockFn);

    expect(mockFn).toHaveBeenCalledTimes(graph.nodes.length);
  });
});
