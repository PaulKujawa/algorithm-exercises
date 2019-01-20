const fizzBuzz = require("../../../scribbles/numbers/fizz-buzz");

describe("fizzBuzz", () => {
  let output;

  beforeEach(() => {
    output = fizzBuzz(30);
  });

  it("should output the number per default", () => {
    expect(output[0]).toBe(1);
  });

  it("should output Fizz for even numbers", () => {
    expect(output[1]).toBe("Fizz");
  });

  it("should output Buzz for odd numbers", () => {
    expect(output[2]).toBe("Buzz");
  });

  it("should output Fizz Buzz for multiples of 2 and 3", () => {
    expect(output[5]).toBe("Fizz Buzz");
  });
});
