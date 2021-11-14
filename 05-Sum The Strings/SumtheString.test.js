const { sumStr } = require("./SumtheString");

describe("Suming numbers and converting to strings", () => {
  it("should be returning a string when 2 integers are inputted as a string", () => {
    expect(sumStr("4","5")).toEqual("9");
    expect(sumStr("35","28")).toEqual("63");

  });
});



