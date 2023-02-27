function century(year) {
  let result = 0;
  for (let i = 0; i < year; i++) {
    if (i % 100 === 0) {
      result++;
    }
  }
  return result;
}
century(1);     
century(88);    
century(1988);  
century(2000); 
century(2001);  
