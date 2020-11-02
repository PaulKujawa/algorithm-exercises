const selectionSort = require("../../sorting/selection-sort");

describe("sort an array via selection sort", () => {
  it("should sort integers", () => {
    const unsorted = [2, 3, 0, 5, 3, -2];
    const sorted = [-2, 0, 2, 3, 3, 5];

    expect(selectionSort(unsorted)).toEqual(sorted);
  });
});
