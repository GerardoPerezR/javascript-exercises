const findTheOldest = (myArray)=> {return myArray.reduce(  (a,b) =>  {

    

    const aAge = getAge(a.yearOfBirth, a.yearOfDeath); 
    const bAge = getAge(b.yearOfBirth, b.yearOfDeath);
    

    if (aAge < bAge )   {
        return b
    }
    else{return a}


console.log(getAge());






} 


    //compare ages (sort)

    

    //return oldes





)}
;const getAge = ((birth,finalDate) => { 
    
    if (!finalDate) {
        finalDate = (new Date()).getFullYear();
    }
  
    return finalDate - birth })

// Do not edit below this line
module.exports = findTheOldest;
