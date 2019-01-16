const createPriorityQueue = require("../priority-queue.js");

let queue;

beforeEach(() => {
  queue = createPriorityQueue();
});

describe("isEmpty", () => {
  it("should be emptry per default", () => {
    expect(queue.isEmpty()).toBeTruthy();
  });
});

describe("enqueue and length", () => {
  it("should have a length of 0 per default", () => {
    expect(queue.length).toBe(0);
  });
  
  it("should add items and combine length of regular and priority queue", () => {
    queue.enqueue("first");
    queue.enqueue("second", true);
    queue.enqueue("third", false);

    expect(queue.length).toBe(3);
  });
});

describe("dequeue", () => {
  it("should remove first-in item", () => {
    queue.enqueue("first");
    queue.enqueue("second");
    queue.enqueue("third");
    const item = queue.dequeue();

    expect(item).toBe("first");
    expect(queue.length).toBe(2);
  });

  it('should remove item from priority queue first', () => {
    queue.enqueue("first");
    queue.enqueue("second", true);
    queue.enqueue("third");

    expect(queue.dequeue()).toBe("second");
    expect(queue.length).toBe(2);
  });
});

describe("peek", () => {
  it("should return but not remove the first-in item", () => {
    queue.enqueue("first");
    queue.enqueue("second");
    queue.enqueue("third");

    expect(queue.peek()).toBe("first");
    expect(queue.length).toBe(3);
  });

  it('should return item from priority queue first', () => {
    queue.enqueue("first");
    queue.enqueue("second", true);
    queue.enqueue("third");

    expect(queue.peek()).toBe("second");
    expect(queue.length).toBe(2);
  });
});
