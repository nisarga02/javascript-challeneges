//myanswer
class SmallestIntegerFinder {
  findSmallestInt(arrayOfNumbers) {
    
    let smallestNumber;
    
    for (let i = 0; i < arrayOfNumbers.length; i++){
      
      const arrNumber = arrayOfNumbers[i];
      
      if (i === 0) {
        smallestNumber = arrNumber;
      }
      
      if (arrNumber < smallestNumber) {
        smallestNumber = arrNumber;
      
      }
      
    }
    return smallestNumber;
  }
}


//bestanswer

class SmallestIntegerFinder {
  findSmallestInt(args) {
  var temp  ;
 
    for (var i=0;i<args.length;i++){
        if(args[i]<=args[0]){
            args[0]  = args[i];    
            temp = args[i];
        }
      }
    return temp;
  }
}
