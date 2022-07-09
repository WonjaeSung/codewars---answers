function findDifference(a, b) {
    let result =(a.reduce((acc, cur)=> acc *= cur))-(b.reduce((acc, cur)=> acc *= cur))
    return result<0? result*-1: result
  }