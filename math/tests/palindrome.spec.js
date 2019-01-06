var isPalindrome = require("../palindrome.js");

describe("isPalindrome", () => {
  it("should be true for abcba", () => {
    expect(isPalindrome("abcba")).toBeTruthy;
  });

  it("should be case insensitive", () => {
    expect(isPalindrome("aBcbA")).toBeTruthy;
  });

  it("should be false for abccba", () => {
    expect(isPalindrome("abccba")).toBeFalsy;
  });
});
