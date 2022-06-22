function sevenAte9(str) {
    let arr = str.split('')
    let newArr = []
    
    for(let i=0; i<arr.length; i++){
      if(arr[i-1]==="7"&&arr[i+1]==="7"&&arr[i]==="9") {void(0)}
      else newArr.push(str[i])
    }
    
    return newArr.join('')
  }