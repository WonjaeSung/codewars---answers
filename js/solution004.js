function minSum(arr) {
    let arrSorted = arr.sort((a,b)=>a-b)

    let answer = 0

    for(let i=0; i<(arrSorted.length/2); i++){
        answer += arrSorted[i] * arrSorted[arrSorted.length-1-i]
    }
    return answer
  }