const { numberToString } = require("./convertNumtoString");

describe("Tests", () => {
  it("test", () => {
    expect(numberToString(67)).toEqual("67");
  });
});
