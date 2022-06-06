function span(arr, predicate) {
    let newArr = []
    arr.map((x)=> {predicate(x)?newArr[0].push():newArr[1].push()})
    return newArr
  }