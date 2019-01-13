const median = require("../median.js");

describe("median", () => {
  it("should return median", () => {
    expect(median([1, 2, 3, 4, 4, 5, 5])).toEqual([4]);
  });

  it("should return two numbers if N is even", () => {
    expect(median([1, 1, 2, 2, 3, 3, 4, 4])).toEqual([2, 3]);
  });

  it("should be return an empty erray", () => {
    expect(median([])).toEqual([]);
  });
});
