const reverseWords = require("../reverse-words.js");

describe("reverseWords", () => {
  it("should reverse words, not the sentence", () => {
    expect(reverseWords("I love JavaScript!")).toBe("I evol !tpircSavaJ");
  });
});
