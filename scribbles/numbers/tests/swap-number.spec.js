const swapNumbers = require("../swap-numbers.js");

describe("swapNumbers", () => {
  it("should swap a and b", () => {
    expect(swapNumbers({a: 2, b:3})).toEqual({a:3, b:2});
  });
});
