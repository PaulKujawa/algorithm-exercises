const missingNumberInUnsortedList = require("../../../scribbles/numbers/missing-number");

describe("missingNumberInUnsortedList", () => {
  it("should find the missing 4 in 1 to 8", () => {
    expect(missingNumberInUnsortedList([1, 2, 3, 5, 6, 7, 8])).toBe(4);
  });
});
