const isPrime = require("../prime.js");

describe("isPrime", () => {
  it("should be positive for 137", () => {
    expect(isPrime(137)).toBeTruthy();
  });

  it("should be negative for 138", () => {
    expect(isPrime(138)).toBeFalsy();
  });
});
