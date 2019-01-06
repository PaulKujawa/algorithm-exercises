var getFibonacciRecursive = require("../fibonacci-recursive.js");

describe("getFibonacciRecursive", () => {
  it("should return 0 for 0", () => {
    expect(getFibonacciRecursive(0)).toBe(0);
  });

  it("should return 1 for 1 and 2", () => {
    expect(getFibonacciRecursive(1)).toBe(1);
    expect(getFibonacciRecursive(2)).toBe(1);
  });

  it("should return 233 for 13", () => {
    expect(getFibonacciRecursive(13)).toBe(233);
  });
});
