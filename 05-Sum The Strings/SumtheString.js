var sumStr = function(a,b){
  
  console.log (parseInt(a));
  console.log (parseInt(b));
  total = parseInt(a) + parseInt(b);
  console.log(total)
  console.log(total.toString());
  return total.toString();
    
}
sumStr("5","6");
module.exports = { sumStr }

