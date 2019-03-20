const binarySearch = require("../../search/binary-search");

describe("search an element in a binary way", () => {
  it("should find an included number", () => {
    const arr = [2, 4, 7, 23, 37, 42];
    expect(binarySearch(arr, 42)).toBeTruthy();
  });

  it("should give no false positives", () => {
    const arr = [2, 4, 7, 23, 37, 42];
    expect(binarySearch(arr, 404)).toBeFalsy();
  });
});
