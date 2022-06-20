function stringSuffix(s) {
    let arrOfS = s.split('')
    let concatedS = []
    let counter = 0
    concatedS.push(arrOfS.map((x,i)=>arrOfS.slice(i-arrOfS.length)))
    console.log(concatedS)
    console.log(arrOfS)
    console.log(concatedS[0][0][0])

    for(var i = 0; i < concatedS[0].length; i++){
        for(var j = 0; j < concatedS[0][i].length; j++){

            if(concatedS[0][i][0]!== arrOfS[0]){
                break
            }
    
            if(concatedS[0][i][j] === arrOfS[j]){
                counter++
            }

            if(concatedS[0][i][j] !== arrOfS[j]){
                break
            }


        }
    }
    return counter
  }