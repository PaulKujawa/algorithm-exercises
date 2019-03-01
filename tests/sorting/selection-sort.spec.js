const selectionSort = require("../../sorting/selection-sort");

describe("sort an array via selection sort", () => {
  it("should sort natural numbers", () => {
    const unsorted = [6, 7, 2, 8, 0, 3, 5, 9, 4, 10, 1];
    const sorted = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    expect(selectionSort(unsorted)).toEqual(sorted);
  });
});
