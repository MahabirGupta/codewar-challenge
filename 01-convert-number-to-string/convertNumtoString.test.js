const { numberToString } = require("./convertNumtoString");

describe("Coverting numbers to strings", () => {
  it("should be returning a string when a number is inputted", () => {
    expect(numberToString(67)).toEqual("67");
  });
});
