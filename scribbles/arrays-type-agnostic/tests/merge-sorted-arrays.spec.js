const {
  mergedSortedArrays,
  mergedSortedArraysSort
} = require("../merge-sorted-arrays.js");

describe("mergedSortedArrays", () => {
  it("should merge asc-ordered arrays", () => {
    const a = [2, 5, 6, 9];
    const b = [1, 2, 3, 29];

    expect(mergedSortedArrays(a, b)).toEqual([1, 2, 2, 3, 5, 6, 9, 29]);
  });
});

describe("mergedSortedArraysSort", () => {
  it("should merge asc-ordered arrays", () => {
    const a = [2, 5, 6, 9];
    const b = [1, 2, 3, 29];

    expect(mergedSortedArraysSort(a, b)).toEqual([1, 2, 2, 3, 5, 6, 9, 29]);
  });
});
