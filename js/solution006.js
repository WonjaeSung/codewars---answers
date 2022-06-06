function explode(x){
  let score = 0
  let arr = []
  if (Number(x[0])===x[0]&&Number(x[1])===x[1]){
    score += x[0] + x[1]}


  else if (Number(x[0])===x[0]&&Number(x[1])!==x[1]){
    score += x[0]}

    else if (Number(x[1])===x[1]&&Number(x[0])!==x[0]){
    score += x[1]}

  else return 'Void!'

  for (let i = 1; i <= score; i++) {
    arr.push(x)
  }
  
  return arr
}

explode([5,4])