function depthFirst(entryNode, visitFn) {
  const visited = Object.create(null);

  function explore(node) {
    if (visited[node.id]) {
      return;
    }

    visitFn(node);
    visited[node.id] = true;

    node.neighbors.forEach(explore);
  }

  explore(entryNode);
}

module.exports = depthFirst;
