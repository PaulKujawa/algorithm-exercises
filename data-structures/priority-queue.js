function createPriorityQueue() {
  const prioItems = [];
  const items = [];

  return {
    enqueue(item, prio = false) {
      prio ? prioItems.push(item) : items.push(item);
    },
    dequeue() {
      return prioItems.length ? prioItems.shift() : items.shift();
    },
    get length() {
      return items.length + prioItems.length;
    },
    peek() {
      return prioItems.length ? prioItems[0] : items[0];
    },
    isEmpty() {
      return prioItems.length === 0 && items.length === 0;
    }
  }
}

module.exports = createPriorityQueue;
