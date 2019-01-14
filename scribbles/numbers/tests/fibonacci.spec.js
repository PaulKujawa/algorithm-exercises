const { fibonacci, fibonacciRecursive } = require("../fibonacci.js");

describe("fibonacci", () => {
  it("should return 0 for 0", () => {
    expect(fibonacci(0)).toBe(0);
  });

  it("should return 1 for 1 and 2", () => {
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
  });

  it("should return 233 for 13", () => {
    expect(fibonacci(13)).toBe(233);
  });
});

describe("getFibonacciRecursive", () => {
  it("should return 0 for 0", () => {
    expect(fibonacciRecursive(0)).toBe(0);
  });

  it("should return 1 for 1 and 2", () => {
    expect(fibonacciRecursive(1)).toBe(1);
    expect(fibonacciRecursive(2)).toBe(1);
  });

  it("should return 233 for 13", () => {
    expect(fibonacciRecursive(13)).toBe(233);
  });
});
