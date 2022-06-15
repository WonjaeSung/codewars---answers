function solution(string) {
    let arr = string.split('')
    let answer = []
    for (let i=0; i<arr.length; i++){
      if(arr[i]===arr[i].toUpperCase()){
        answer.push(` ${arr[i]}`)
  
      }
      else answer.push(arr[i])
    }
    return answer.join('')
    }