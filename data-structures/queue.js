function createQueue() {
  const items = [];

  return {
    enqueue(item) {
      items.push(item);
    },
    dequeue() {
      return items.shift();
    },
    peek() {
      return items[0];
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
