const caesarCipher = require("../caesar-cipher.js");

describe("caesarCipher", () => {
  it("should shift to the right", () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 100)).toBe("wxyzabcdefghijklmnopqrstuv");
  });

  it("should shift to the left", () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", -100)).toBe("efghijklmnopqrstuvwxyzabcd");
  });
});
