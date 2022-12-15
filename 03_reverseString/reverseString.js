const reverseString = function(myString) {


const myArray = Array.from(myString);

console.log(myArray);

const reversedArray = myArray.reverse();

console.log(reversedArray);
let myReverseString = reversedArray.join('');

return myReverseString;



};

// Do not edit below this line
module.exports = reverseString;
