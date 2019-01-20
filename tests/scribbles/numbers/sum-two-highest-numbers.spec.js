const sumTwoHighestNumbers = require("../../../scribbles/numbers/sum-two-highest-numbers");

describe("sumTwoHighestNumbers", () => {
  it("should add 6 and 7", () => {
    expect(sumTwoHighestNumbers([6, 2, 1, 7])).toBe(13);
  });

  it("should pick one of multiple identical values", () => {
    expect(sumTwoHighestNumbers([6, 2, 1, 6, 6])).toBe(12);
  });
});
