function depthFirstSearch(graph, entryId, visitFn) {
  const visited = graph.nodes.reduce((acc, node) => {
    acc[node.id] = false;
    return acc;
  }, Object.create(null));

  const entryNode = graph.getNode(entryId);

  function explore(node) {
    if (visited[node.id]) {
      return;
    }

    visitFn(node);
    visited[node.id] = true;

    node.neighbors.forEach(node => explore(node));
  }
  explore(entryNode);
}

module.exports = depthFirstSearch;
