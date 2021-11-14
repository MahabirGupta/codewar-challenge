const { stringToNumber } = require("./convertStringtoNum");

describe( "Coverting string To Number", () => {
  it( "should be retunring a number when a string is inputted " , () =>{
    expect(stringToNumber("1234")).toBe(1234)
    expect(stringToNumber("605")).toBe(605)
    expect(stringToNumber("1405")).toBe(1405)
    expect(stringToNumber("-7")).toBe(-7)
  });
});

