
function sqRoot(a)
{
//var sqRoot = Math.sqrt(a)
  console.log(a);
  //console.log("sqr=="+((Math.sqrt(a))**2))
  if((( parseInt( Math.sqrt(a)))**2) == Number(a)){
    //console.log(a);
    sqnext= Math.sqrt(a)
    console.log(sqnext)
    sqnext = Math.sqrt(a) + 1
    console.log(sqnext);
    console.log(sqnext * sqnext)
    return sqnext * sqnext
  }else
  {
    console.log(-1);
    return -1;

  }
}   
  
sqRoot(64);
module.exports = { sqRoot }

