function numberOfPairs(gloves){
    let countRed = 0
    let countBlue = 0
    let pairOfRed = 0
    let pairOfBlue= 0
    
    gloves.map((x)=>{
      if (x ==='red'){countRed++} 
      if (x ==='blue'){countBlue++}
    })
    
    pairOfRed = Math.floor(countRed/2) 
    pairOfBlue = Math.floor(countBlue/2)
    
    console.log(pairOfBlue+pairOfRed)
    
  }