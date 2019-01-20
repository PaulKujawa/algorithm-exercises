const reverseWords = require("../../../scribbles/strings/reverse-words");

describe("reverseWords", () => {
  it("should reverse words, not the sentence", () => {
    expect(reverseWords("I love JavaScript!")).toBe("I evol !tpircSavaJ");
  });
});
