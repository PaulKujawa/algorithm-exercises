var sumFinder = require("../sum-finder.js");

describe("sumFinder", () => {
  it("should add 6 and 7", () => {
    expect(sumFinder([6, 2, 1, 7])).toBe(13);
  });

  it("should pick out of multiple identical values", () => {
    expect(sumFinder([6, 2, 1, 6, 6])).toBe(12);
  });
});
