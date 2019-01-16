const createQueue = require('./queue.js');

function createPriorityQueue() {
  const lowPriorityQueue = createQueue();
  const highPriorityQueue = createQueue();

  return {
    enqueue(item, priority = false) {
      priority
        ? highPriorityQueue.enqueue(item)
        : lowPriorityQueue.enqueue(item);
    },
    dequeue() {
      if (highPriorityQueue.length) {
        return highPriorityQueue.dequeue();
      }
      return lowPriorityQueue.dequeue();
    },
    peek() {
      if (highPriorityQueue.length) {
        return highPriorityQueue.peek();
      }
      return lowPriorityQueue.peek();
    },
    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
    },
    get length() {
      return highPriorityQueue.length + lowPriorityQueue.length;
    }
  };
}

module.exports = createPriorityQueue;
