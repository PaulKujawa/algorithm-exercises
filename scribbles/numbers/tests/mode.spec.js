const mode = require("../mode.js");

describe("mode", () => {
  it("should return the most occuring number", () => {
    expect(mode([1, 2, 3, 2])).toEqual([2]);
  });

  it("should return 4 and 5 as they occur more often than others but equally often", () => {
    expect(mode([1, 2, 3, 4, 4, 5, 5])).toEqual([4, 5]);
  });

  it("should return an empty array if all numbers occur equally often", () => {
    expect(mode([])).toEqual([]);
  });
});
