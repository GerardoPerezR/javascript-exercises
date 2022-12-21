const palindromes = function (myString) {

    myString = myString.replace(/[.,\/#!$%\^&\*;:{}=' '\-_`~()]/g,"").toLowerCase();

    const myArray = Array.from(myString);

    console.log(myArray);

const reversedArray = myArray.reverse();

console.log(reversedArray);
let myReverseString = reversedArray.join('');

if (myReverseString === myString)   {

    result = true;
}
 else   {
    result = false;
 }
return result;
};

// Do not edit below this line
module.exports = palindromes;
