const add = function(x, y) {

      console.log(x, y);
      result = x + y;
      return result;



	
};

const subtract = function(x, y) {

  console.log(x, y);
      result = x - y;
      return result;

	
};

const sum = function(myArgs) {

  console.log(myArgs);
  var result = 0;
  for (var i = 0; i < myArgs.length; i++)  {
    result += myArgs[i];
  }
  console.log(result);
  return result;
	
};

const multiply = function(myArgs) {
  console.log(myArgs);
  var result = 1;
  for (var i = 0; i < myArgs.length; i++)  {
    result *= myArgs[i];
  }
  console.log(result);
  return result;

};

const power = function(x, y) {
      result = 1;
  for (i=0; i<y; i++) {
     
      result = result * x;
  

  }
	    return result;
};

const factorial = function(x) {

  console.log(x);
  var result = 1;
  for (var i = 1; i <= x; i++)  {
    result *= i;
  }
  console.log(result);
  return result;
	
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
