const { StringtoArray } = require("./convertStringtoArray");

describe("Coverting a String to an Array", () => {
  it("should be returning an array when a string is inputted", () => {
    expect(StringtoArray("Robin Singh")).toBe["Robin", "Singh"];
  });
});
