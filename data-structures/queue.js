function createQueue() {
  const queue = [];

  return {
    enqueue(item) {
      queue.unshift(item);
    },
    dequeue() {
      return queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    isEmpty() {
      return queue.length === 0;
    },
    get length() {
      return queue.length;
    }
  };
}

module.exports = createQueue;
