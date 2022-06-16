function findOdd(A) {
    let sorted = A.sort((a,b)=> a-b)
    
    let counter = 1
    console.log(sorted)
    for (let i=0 ; i<sorted.length; i++){
      if (sorted[i] === sorted[i+1]){
        //console.log(sorted[i])
        counter++
        //console.log(counter)
    }
        else if(sorted[i] !== sorted[i+1] && counter%2!==0){
            return sorted[i]
        }

        else counter = 1
  }
}