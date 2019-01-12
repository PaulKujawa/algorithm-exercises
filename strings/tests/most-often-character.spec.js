const mostOftenCharacter = require("../most-often-character.js");

describe("mostOftenCharacter", () => {
  it("should return character that occurs most often", () => {
    expect(mostOftenCharacter("Hello World")).toBe("l");
  });

  it("should return an empty string if all occur evenly", () => {
    expect(mostOftenCharacter("abcd efgh")).toBe("");
  });
});
