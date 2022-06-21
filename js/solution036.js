function solution(number){
    let multiOfThree = 3
    let multiOfFive = 5
    let i = 0
    let j = 0
    let answer = 0
    while(multiOfThree<number){
      i++;
      answer += multiOfThree
      multiOfThree += 3
      console.log(answer)
      }
    while(multiOfFive<number){
      j++;
      answer += multiOfFive
      multiOfFive += 5
       console.log(answer)
      }
    return answer
  }