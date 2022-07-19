function calc(x){
    return x
      .split('')
      .map(c => c.charCodeAt(0))
      .join("")
      .split('')
      .filter((x)=> x==='7')
      .length * 6
}