const gcd = require("../gcd.js");

describe("gcd", () => {
  it("should return 7 as greatest common divisor for 14 and 21", () => {
    expect(gcd(14, 21)).toBe(7);
  });

  it("should return 1 when nothing else fits", () => {
    expect(gcd(11, 21)).toBe(1);
  });
});
