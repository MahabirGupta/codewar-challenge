const { product } = require("./MultiplyTwoNumbers");

describe("Multiplying two numbers", () => {
  it("should be returning the product of 2 numbers", () => {
    expect(product(4,5)).toEqual(20);
    expect(product(35,28)).toEqual(980);

  });
});



