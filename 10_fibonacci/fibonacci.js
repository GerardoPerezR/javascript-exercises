const fibonacci = function(x) {
    var a = 1;
    var b = 1;

    if (x<0)    {return "OOPS"};
  

    var result = 1;
    for (i = 2; i < x; i++) {

      result = a + b;
      a = b;
      b = result;

    }


  console.log(result);
return result;


};

// Do not edit below this line
module.exports = fibonacci;
