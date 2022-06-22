function solve(arr){  
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let counter = 0
    let arrCounter = []
    for (let i=0; i<arr.length; i++){
      for (let j=0; j<arr[i].length; j++){
        console.log(arr[i][j])
        if(arr[i][j].toLowerCase()===alphabet[j]){counter++}
      }
      arrCounter.push(counter)
      counter=0
    }
    return arrCounter
  };