const reverseInteger = require("../reverse-integer.js");

describe("reverseInteger", () => {
  it("should reverse natural numbers", () => {
    expect(reverseInteger(1234)).toBe(4321);
  });

  it("should drop leading zero", () => {
    expect(reverseInteger(-1200)).toBe(-21);
  });
});
