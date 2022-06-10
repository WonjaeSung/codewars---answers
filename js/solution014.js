function isIsogram(str){
    let answer = true
    str.split('').map((x)=> {
      if(str.indexOf(x.toLowerCase())===str.lastIndexOf(x.toLowerCase())){
        return
        }
      else if(str.indexOf(x.toLowerCase())!==str.lastIndexOf(x.toLowerCase())){
        answer = false
        }
    })
return answer
}