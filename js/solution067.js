function countBy(x, n) {
    let z = [];
    let i = x
    while(i <= x*n){
      z.push(i)
      i += x
    }
    
    return z;
  }