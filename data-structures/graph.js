function createNode(id) {
  return {
    id,
    neighbors: [],
    addNeighbor(node) {
      this.neighbors.push(node);
    }
  };
}

function createGraph(directed = false) {
  return {
    directed,
    nodes: [],
    edges: [],
    addNode(id) {
      this.nodes.push(createNode(id));
    },
    getNode(id) {
      return this.nodes.find(node => node.id === id);
    },
    addEdge(nodeId1, nodeId2) {
      const node1 = this.getNode(nodeId1);
      const node2 = this.getNode(nodeId2);

      if (!node1 || !node2) {
        return;
      }

      node1.addNeighbor(node2);

      if (!directed) {
        node2.addNeighbor(node1);
      }

      this.edges.push(`${nodeId1}-${nodeId2}`);
    }
  };
}

module.exports = createGraph;
