const { DoubleChar } = require("./convertDoubleChar");

describe("Tests", () => {
  it("test", () => {
    expect(DoubleChar("abcd")).toBe["aabbccdd"];
  });
});

