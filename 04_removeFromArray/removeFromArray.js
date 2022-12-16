
let myArray=[];
let newArray=[];

let argToRemove = 0;
const removeFromArray = function(myArray, argToRemove) {



    newArray = myArray.filter(myArray => myArray != argToRemove);






console.log(newArray);
return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
