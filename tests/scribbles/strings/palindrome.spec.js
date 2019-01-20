const isPalindrome = require("../../../scribbles/strings/palindrome");

describe("isPalindrome", () => {
  it("should be true", () => {
    expect(
      isPalindrome("Cigar? Toss it in a can. It is so tragic")
    ).toBeTruthy();
  });

  it("should be case insensitive", () => {
    expect(isPalindrome("aBcbA")).toBeTruthy();
  });

  it("should be false for abccba", () => {
    expect(isPalindrome("sit ad est love")).toBeFalsy();
  });
});
