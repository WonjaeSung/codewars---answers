function countIslands(image){
    let islands = 0
    for (let i=0; i<image.length; i++){
      for (let j=0; j<image[0].length; j++){
         
        if(image[i][j]===1 && (image[i-1][j-1]===1 || image[i-1][j]===1 || image[i-1][j+1]===1 || image[i][j-1]===1 )){
          continue;
        }

        if(image[i][j]===0){
            
            continue}
        
        if(image[i][j]===1){
          islands++;
        }
        
      }
    }
    return islands
  }