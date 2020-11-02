const insertionSort = require("../../sorting/insertion-sort");

describe("sort an array via insertion sort", () => {
  it("should sort integer numbers", () => {
    const unsorted = [2, 3, 0, 5, 3, -2];
    const sorted = [-2, 0, 2, 3, 3, 5];

    expect(insertionSort(unsorted)).toEqual(sorted);
  });
});
