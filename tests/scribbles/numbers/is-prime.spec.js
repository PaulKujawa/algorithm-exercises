const isPrime = require("../../../scribbles/numbers/is-prime");

describe("isPrime", () => {
  it("should be negative for 1", () => {
    expect(isPrime(1)).toBeFalsy();
  });

  it("should be positive for 2", () => {
    expect(isPrime(2)).toBeTruthy();
  });

  it("should be positive for 3", () => {
    expect(isPrime(3)).toBeTruthy();
  });

  it("should be negative for 4", () => {
    expect(isPrime(4)).toBeFalsy();
  });
});
