const createStack = require("../stack.js");

let stack;

beforeEach(() => {
  stack = createStack();
});

describe("isEmpty", () => {
  it("should be emptry per default", () => {
    expect(stack.isEmpty()).toBeTruthy();
  });
});

describe("push and length", () => {
  it("should have length of 0 per default", () => {
    expect(stack.length).toBe(0);
  });

  it("should add items and increase length respectively", () => {
    stack.push("first");
    stack.push("second");
    stack.push("third");

    expect(stack.length).toBe(3);
  });
});

describe("pop", () => {
  it("should remove last-in item", () => {
    stack.push("first");
    stack.push("second");
    stack.push("third");
    
    expect(stack.pop()).toBe("third");
    expect(stack.length).toBe(2);
  });
});

describe("peek", () => {
  it("should return but not remove the lst-in item", () => {
    stack.push("first");
    stack.push("second");
    stack.push("third");

    expect(stack.peek()).toBe("third");
    expect(stack.length).toBe(3);
  });
});
