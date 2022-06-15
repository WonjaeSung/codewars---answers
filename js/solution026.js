function evenNumbers(array, number) {
    let count = 0
    let newArray = []

    for (let i = array.length-1; i>=0; i--){

        if(count===number){
            break
        }

        if (array[i]%2===0){
        newArray.unshift(array[i]);
        count++
      }
        /*if (count>= number){
        break}*/
        
    }
    return newArray 
  }