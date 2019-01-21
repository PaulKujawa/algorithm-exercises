const quickSort = require("../../sorting/quick-sort");

describe("sort an array via quick sort", () => {
  it("should sort natural numbers", () => {
    const unsorted = [6, 7, 2, 8, 0, 3, 5, 9, 4, 10, 1];
    const sorted = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(quickSort(unsorted)).toEqual(sorted);
  });
});
