
let myArray=[];
let newArray=[];

let argToRemove = 0;
const removeFromArray = function(myArray, ...argToRemove) {

    //const argToRemove2 = Array.from(argToRemove);

    newArray = myArray.filter(item => !argToRemove.includes(item));





console.log(argToRemove);
console.log(newArray);
return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
