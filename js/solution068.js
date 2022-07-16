function SeriesSum(n){
    if(n === 0){return "0.00"}
else{
    let equation = [1]
    let denominator = 1
    for(let i=1; i<n; i++){
      denominator += 3
      equation.push(1/(denominator))
    }
    return (eval(equation.join("+")).toFixed(2))
  }
}