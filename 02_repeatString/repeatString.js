
const repeatString = function(string, num) {
let newString = '';
let i = 0;
if (num < 0 ) {return 'ERROR'} 
else
   
    for (i = 0; i < num  ; i++)   {

       newString = newString + string;
      
}
 
 return newString;


};

// Do not edit below this line
module.exports = repeatString;
