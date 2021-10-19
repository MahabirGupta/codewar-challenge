describe( "stringToNumber", function(){
  it( "should work for the examples" , function(){
    Test.assertEquals(stringToNumber("1234"))
    Test.assertEquals(stringToNumber("605"))
    Test.assertEquals(stringToNumber("1405"))
    Test.assertEquals(stringToNumber("-7"))
  });
});
