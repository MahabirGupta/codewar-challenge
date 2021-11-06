const DoubleChar = (string) => {
  
  console.log("Convert string to repeated characters")
  const s = "abcd";
  
  console.log (s.split('').map(function(v) {
    // iterate and update
    console.log(v+v);

    return v + v;
    // join the updated array
  }).join('')
  //console.log(s);
 
  
  )};

module.exports = { DoubleChar }