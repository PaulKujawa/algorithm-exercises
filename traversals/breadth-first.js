const createQueue = require("../data-structures/queue");

function breadthFirst(graph, entryId, visitFn) {
  const visited = Object.create(null);
  const nodes = createQueue();
  nodes.enqueue(graph.getNode(entryId));

  while (!nodes.isEmpty()) {
    const node = nodes.dequeue();

    if (!visited[node.id]) {
      visitFn(node);
      visited[node.id] = true;
    }

    node.neighbors
      .filter(neighbor => !visited[neighbor.id])
      .forEach(neighbor => nodes.enqueue(neighbor));
  }
}

module.exports = breadthFirst;
