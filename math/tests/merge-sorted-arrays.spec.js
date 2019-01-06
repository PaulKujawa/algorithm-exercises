var {
  mergedSortedArraysV1,
  mergedSortedArraysV2
} = require("../merge-sorted-arrays.js");

describe("mergedSortedArraysV1", () => {
  it("should merge asc-ordered arrays", () => {
    const a = [2, 5, 6, 9];
    const b = [1, 2, 3, 29];

    expect(mergedSortedArraysV1(a, b)).toEqual([1, 2, 2, 3, 5, 6, 9, 29]);
  });
});

describe("mergedSortedArraysV2", () => {
  it("should merge asc-ordered arrays", () => {
    const a = [2, 5, 6, 9];
    const b = [1, 2, 3, 29];

    expect(mergedSortedArraysV2(a, b)).toEqual([1, 2, 2, 3, 5, 6, 9, 29]);
  });
});
