const getPrimeFactors = require("../prime-factors.js");

describe("getPrimeFactors", () => {
  it("should return the correct factors", () => {
    expect(getPrimeFactors(69).sort()).toEqual([23, 3]);
  });
});
