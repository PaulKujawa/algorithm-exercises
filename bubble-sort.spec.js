const bubbleSort = require("./bubble-sort");

describe("sort an array via bubble sort", () => {
  it("should sort natural numbers", () => {
    const unsorted = [6, 7, 2, 8, 3, 5, 9, 4, 10, 1];
    const sorted = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(bubbleSort(unsorted)).toEqual(sorted);
  });
});
