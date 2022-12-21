const sumAll = function(first, last) {

  if (first < 0 || last < 0  || typeof first != "number" || typeof last !="number" ) {return "ERROR";}    
  
  if (first < last) { 
        
      var finalSum = first - 1;
for (i = first; i <= last; i++)      {

    finalSum = finalSum + (i);

   //   console.log("FIRST LOOP", finalSum);  


}
}

else {

  console.log("it's the loop");
    var finalSum = last - 1; 
    for (i = first; i >= last; i--)      {
    //npm test sumAll.spec.js  console.log("SECOND LOOP", finalSum); 
        finalSum = finalSum + (i);
    
           


};




}
console.log(finalSum);
return finalSum;
}
// Do not edit below this line
module.exports = sumAll;
