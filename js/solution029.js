function openOrSenior(data){
    let output = []
    data.map((x)=> {
      if (x[0] >= 55 && x[1]>7){
        output.push('Senior')
      }
      else output.push ('Open')
    })
    return output
  }