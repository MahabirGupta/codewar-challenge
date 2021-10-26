const { StringtoArray } = require("./convertStringtoArray");

describe("Tests", () => {
  it("test", () => {
    expect(StringtoArray("Robin Singh")).toBe["Robin", "Singh"];
  });
});
