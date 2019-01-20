const {
  arrayChunks,
  arrayChunksSlice
} = require("../../../scribbles/arrays-type-agnostic/array-chunking");

describe("arrayChunks", () => {
  it("should split an array into sub arrays of a given size", () => {
    expect(arrayChunks([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7]
    ]);
  });

  it("should return the array as a whole if it's smaller than the size", () => {
    expect(arrayChunks([1, 2, 3, 4], 7)).toEqual([1, 2, 3, 4]);
  });
});

describe("arrayChunksSlice", () => {
  it("should split an array into sub arrays of a given size", () => {
    expect(arrayChunksSlice([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7]
    ]);
  });

  it("should return the array as a whole if it's smaller than the size", () => {
    expect(arrayChunksSlice([1, 2, 3, 4], 7)).toEqual([1, 2, 3, 4]);
  });
});
