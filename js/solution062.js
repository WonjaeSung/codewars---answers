function findShort(s){
    let arr = s.split(' ')
    let shortestWord = [`${arr[0]}`]
    arr.map((x,i)=> x.length<shortestWord[0].length?shortestWord[0] = x:void(0))
    return shortestWord[0].length
  } 