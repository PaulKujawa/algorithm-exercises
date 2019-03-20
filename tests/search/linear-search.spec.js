const linearSearch = require("../../search/linear-search");

describe("search an element linear", () => {
  it("should find an included number", () => {
    const arr = [4, 7, 2, 37, 23, 4, 42];
    expect(linearSearch(arr, 42)).toBeTruthy();
  });

  it("should find an included number", () => {
    const arr = [4, 7, 2, 37, 23, 4, 42];
    expect(linearSearch(arr, 404)).toBeFalsy();
  });
});
