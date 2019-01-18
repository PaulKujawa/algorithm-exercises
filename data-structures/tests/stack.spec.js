const createStack = require("../stack.js");

let stack;

beforeEach(() => {
  stack = createStack();
});

describe("adding items", () => {
  it("should be emptry per default", () => {
    expect(stack.length).toBe(0);
    expect(stack.isEmpty()).toBeTruthy();
  });

  it("should increase length with items added", () => {
    stack.push("first");
    stack.push("second");
    stack.push("third");

    expect(stack.length).toBe(3);
    expect(stack.isEmpty()).toBeFalsy();
  });
});

describe("removing items", () => {
  it("should return undefined when empty", () => {
    expect(stack.pop()).toBeUndefined();
  });
  
  it("should remove last-in item", () => {
    stack.push("first");
    stack.push("second");
    stack.push("third");

    expect(stack.pop()).toBe("third");
    expect(stack.length).toBe(2);
  });
});

describe("peek next item", () => {
  it("should return but not remove last-in item", () => {
    stack.push("first");
    stack.push("second");
    stack.push("third");

    expect(stack.peek()).toBe("third");
    expect(stack.length).toBe(3);
  });
});
