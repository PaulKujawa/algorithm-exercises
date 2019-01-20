const getPrimeFactors = require("../../../scribbles/numbers/prime-factors");

describe("getPrimeFactors", () => {
  it("should return the correct factors", () => {
    expect(getPrimeFactors(69).sort()).toEqual([23, 3]);
  });
});
