const createQueue = require("../queue");

let queue = undefined;

beforeEach(() => {
  queue = createQueue();
});

describe("isEmpty", () => {
  it("should be emptry per default", () => {
    expect(queue.isEmpty()).toBeTruthy();
  });
});

describe("enqueue and length", () => {
  it("should be 0 per default", () => {
    expect(queue.length).toBe(0);
  });
  
  it("should add items and increase length respectively", () => {
    queue.enqueue("first");
    queue.enqueue("second");
    queue.enqueue("third");

    expect(queue.length).toBe(3);
  });
});

describe("dequeue", () => {
  it("should remove oldest item", () => {
    queue.enqueue("first");
    queue.enqueue("second");
    queue.enqueue("third");
    const item = queue.dequeue();

    expect(item).toBe("first");
    expect(queue.length).toBe(2);
  });
});

describe("peek", () => {
  it("should return but not remove the oldest item", () => {
    queue.enqueue("first");
    queue.enqueue("second");
    queue.enqueue("third");

    expect(queue.peek()).toBe("first");
    expect(queue.length).toBe(3);
  });
});
