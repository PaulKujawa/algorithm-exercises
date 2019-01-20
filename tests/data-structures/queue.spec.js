const createQueue = require("../../data-structures/queue");

let queue;

beforeEach(() => {
  queue = createQueue();
});

describe("adding items", () => {
  it("should be emptry per default", () => {
    expect(queue.length).toBe(0);
    expect(queue.isEmpty()).toBeTruthy();
  });

  it("should increase length with items added", () => {
    queue.enqueue("first");
    queue.enqueue("second");
    queue.enqueue("third");

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
});

describe("peek next item", () => {
  it("should return but not remove the first-in item", () => {
    queue.enqueue("first");
    queue.enqueue("second");
    queue.enqueue("third");

    expect(queue.peek()).toBe("first");
    expect(queue.length).toBe(3);
  });
});
