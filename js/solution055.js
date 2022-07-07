function scrabbleScore(str){
    let arr = str.split('')
    let total = 0
    for (let i=0; i<arr.length; i++){
      total += $dict[arr[i].toUpperCase()] || 0;
    }
    return total
  }
  