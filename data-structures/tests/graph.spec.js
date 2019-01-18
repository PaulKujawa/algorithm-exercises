const createGraph = require("../graph.js");

describe("adding nodes", () => {
  let graph;

  beforeAll(() => {
    graph = createGraph();
  });

  it("should create a node given an id", () => {
    graph.addNode("a");
  });

  it("should expose the created node via its id", () => {
    expect(graph.getNode("a")).toHaveProperty("id", "a");
  });
});

describe("adding edges", () => {
  it("should create undirected edges per default", () => {
    const graph = createGraph();
    graph.addNode("a");
    graph.addNode("b");
    graph.addEdge("a", "b");

    const nodeA = graph.getNode("a");
    const nodeB = graph.getNode("b");

    expect(nodeA.neighbors).toHaveLength(1);
    expect(nodeB.neighbors).toHaveLength(1);
    expect(nodeA.neighbors[0]).toHaveProperty("id", "b");
    expect(nodeB.neighbors[0]).toHaveProperty("id", "a");
    expect(graph.edges.length).toBe(1);
  });

  it("should support directed edges", () => {
    const graph = createGraph(true);
    graph.addNode("a");
    graph.addNode("b");
    graph.addEdge("a", "b");

    const nodeA = graph.getNode("a");
    const nodeB = graph.getNode("b");

    expect(nodeA.neighbors).toHaveLength(1);
    expect(nodeB.neighbors).toHaveLength(0);
    expect(nodeA.neighbors[0]).toHaveProperty("id", "b");
    expect(graph.edges.length).toBe(1);
  });
});
