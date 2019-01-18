function createNode(id) {
  const neighbors = [];

  return {
    id,
    neighbors,
    addNeighbor(node) {
      neighbors.push(node);
    }
  };
}

function createGraph(directed = false) {
  const nodes = [];
  const edges = [];

  return {
    directed,
    nodes,
    edges,
    addNode(id) {
      nodes.push(createNode(id));
    },
    getNode(id) { 
      return nodes.find(node => node.id === id);
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

      edges.push(`${nodeId1}-${nodeId2}`);
    }
  };
}

module.exports = createGraph;
