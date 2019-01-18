function createStack() {
  const items = [];

  return {
    push(item) {
      items.push(item);
    },
    pop() {
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

module.exports = createStack;
