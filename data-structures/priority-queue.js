const createQueue = require('./queue.js');

function createPriorityQueue() {
  const items = createQueue();
  const priorityItems = createQueue();

  return {
    enqueue(item, priority = false) {
      priority
        ? priorityItems.enqueue(item)
        : items.enqueue(item);
    },
    dequeue() {
      if (priorityItems.length) {
        return priorityItems.dequeue();
      }
      return items.dequeue();
    },
    peek() {
      if (priorityItems.length) {
        return priorityItems.peek();
      }
      return items.peek();
    },
    isEmpty() {
      return priorityItems.isEmpty() && items.isEmpty();
    },
    get length() {
      return priorityItems.length + items.length;
    }
  };
}

module.exports = createPriorityQueue;
