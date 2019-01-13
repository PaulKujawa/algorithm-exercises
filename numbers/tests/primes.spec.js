const getPrimes = require("../primes.js");

describe("getPrimes", () => {
  it("should return the correct factors", () => {
    expect(getPrimes(10).sort()).toEqual([2, 3, 5, 7]);
  });
});
