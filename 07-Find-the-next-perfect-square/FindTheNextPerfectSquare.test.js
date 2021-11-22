const { sqRoot } = require("./FindTheNextPerfectSquare");

describe("Find the next perfect square!", () => {
  it("should be returning the next perfect square number", () => {
    expect(sqRoot(64)).toEqual(81);
    expect(sqRoot(81)).toEqual(100);
    expect(sqRoot(625)).toEqual(676);
  });
  it("should return -1 for numbers which aren't perfect squares", function() {
    expect(sqRoot(114)).toEqual(-1), "114 is not a perfect square";
    expect(sqRoot(155)).toEqual(-1), "155 is not a perfect square";
    expect(sqRoot(342786627)).toEqual(-1), "342786627 is not a perfect square";
    
});
});
