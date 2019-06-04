function breadthFirst(entryNode, visitFn) {
  const visited = Object.create(null);
  const nodes = [entryNode];

  while (nodes.length) {
    const node = nodes.shift();

    if (!visited[node.id]) {
      visitFn(node);
      visited[node.id] = true;
    }

    node.neighbors
      .filter(neighbor => !visited[neighbor.id])
      .forEach(neighbor => nodes.push(neighbor));
  }
}

module.exports = breadthFirst;
