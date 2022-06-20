function sortArray(array) {
  let newArr = []
  let oddNums = []
  array.map((x,i) => {
    if ( x%2===0 ) {newArr[i]=x} 
    if ( x%2!==0 ) {oddNums.push(x)}
  })
  oddNums.sort((a,b)=>a-b)
  let indexCounter = 0

  for(let i = 0; i < array.length; i++){
    if(i in newArr){
      }
    
    else{
      newArr[i] = oddNums[indexCounter]
      indexCounter++
      }
  }

return newArr
}