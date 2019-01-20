const {
  getVowelCount,
  getVowelCountRegex
} = require("../../../scribbles/strings/vowel-count");

describe("getVowelCount", () => {
  it("should count e,o, and o", () => {
    expect(getVowelCount("hello world")).toBe(3);
  });

  it("should return 0 as fallback", () => {
    expect(getVowelCount("ngrx dfgh")).toBe(0);
  });
});

describe("getVowelCountRegex", () => {
  it("should count e,o, and o", () => {
    expect(getVowelCountRegex("hello world")).toBe(3);
  });

  it("should return 0 as fallback", () => {
    expect(getVowelCountRegex("ngrx dfgh")).toBe(0);
  });
});
