const mean = require("../../../scribbles/numbers/mean");

describe("mean", () => {
  it("should return the median", () => {
    expect(mean([1, 2, 3, 4, 4, 5, 5])).toBe(3.43);
  });
});
