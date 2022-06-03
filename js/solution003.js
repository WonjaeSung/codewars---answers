function matrixAddition(a, b){
    let c = [];
    for(let n = 0; n < a.length; n++){
      c[n] = [];
      for(let m = 0; m < a[n].length; m++){
        c[n][m] = a[n][m] + b[n][m];
      }
    }
    return c;
  }