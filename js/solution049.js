  function removeSmallest(numbers) {
    let lowNumIndex = numbers.indexOf(Math.min(...numbers))
    let newNumbers = []
    numbers.map((x,i)=> {
      if(i === lowNumIndex){void(0)}
      else newNumbers.push(x)
    })
    return newNumbers
  }