const createQueue = require("../queue.js");

let queue;

beforeEach(() => {
  queue = createQueue();
});

describe("isEmpty", () => {
  it("should be emptry per default", () => {
    expect(queue.isEmpty()).toBeTruthy();
  });
});

describe("enqueue and length", () => {
  it("should have length of 0 per default", () => {
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
  it("should remove first-in item", () => {
    queue.enqueue("first");
    queue.enqueue("second");
    queue.enqueue("third");

    expect(queue.dequeue()).toBe("first");
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
});
