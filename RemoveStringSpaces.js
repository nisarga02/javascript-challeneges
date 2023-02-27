function noSpace(str){
  const arr=str.split(" ");
  
  let newArray= [];
  
  for (let i=0; i<arr.length; i++) {
    const trimedString = arr[i].trim();
    newArray.push(trimedString);
  }
  const finalString= newArray.join("");
  return finalString;
}
