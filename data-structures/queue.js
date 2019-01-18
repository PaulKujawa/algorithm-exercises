function createQueue() {
  const items = [];

  return {
    enqueue(item) {
      items.unshift(item);
    },
    dequeue() {
      return items.pop();
    },
    peek() {
      return items[items.length - 1];
    },
    isEmpty() {
      return items.length === 0;
    },
    get length() {
      return items.length;
    }
  };
}

module.exports = createQueue;
