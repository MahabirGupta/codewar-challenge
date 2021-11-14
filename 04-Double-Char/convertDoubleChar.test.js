const { DoubleChar } = require("./convertDoubleChar");

describe("Converting a string into repeated characters", () => {
  it("should be returning repeated characters of a string", () => {
    expect(DoubleChar("abcd")).toBe["aabbccdd"];
  });
});

