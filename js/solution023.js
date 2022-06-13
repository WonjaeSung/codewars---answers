function dataReverse(data) {
    let arr = []
    let removed = []
    let numberOfLoops = data.length/8
    for (let i = 0; i < numberOfLoops; i++){
    removed = data.splice(-8,8)
    arr.push(removed)
  }
  return arr.flat()
  }
  