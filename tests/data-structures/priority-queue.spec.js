const createPriorityQueue = require("../../data-structures/priority-queue");

let queue;

beforeEach(() => {
  queue = createPriorityQueue();
});

describe("adding items", () => {
  it("should be emptry per default", () => {
    expect(queue.length).toBe(0);
    expect(queue.isEmpty()).toBeTruthy();
  });

  it("should increase length with items added", () => {
    queue.enqueue("first");
    queue.enqueue("second", true);
    queue.enqueue("third", false);

    expect(queue.length).toBe(3);
    expect(queue.isEmpty()).toBeFalsy();
  });
});

describe("removing items", () => {
  it("should remove first-in item", () => {
    queue.enqueue("first");
    queue.enqueue("second");
    queue.enqueue("third");

    expect(queue.dequeue()).toBe("first");
    expect(queue.length).toBe(2);
  });

  it("should remove item from priority queue first", () => {
    queue.enqueue("first");
    queue.enqueue("second", true);
    queue.enqueue("third");

    expect(queue.dequeue()).toBe("second");
    expect(queue.length).toBe(2);
  });
});

describe("peek next item", () => {
  it("should return but not remove the first-in item", () => {
    queue.enqueue("first");
    queue.enqueue("second");
    queue.enqueue("third");

    expect(queue.peek()).toBe("first");
    expect(queue.length).toBe(3);
  });

  it("should return item from priority queue first", () => {
    queue.enqueue("first");
    queue.enqueue("second", true);
    queue.enqueue("third");

    expect(queue.peek()).toBe("second");
    expect(queue.length).toBe(3);
  });
});
