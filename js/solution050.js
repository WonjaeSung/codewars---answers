function longestConsec(strarr, k) {
    let word = []
    let longestString = ''
    let count = 0
    
      if (strarr.length === 0 || k > strarr.length || k<= 0 ){return ""}
  else{
    for (let i=0; i<strarr.length; i++){
      while(count<k){
        word.push(strarr[count+i]);
        count++;
      }
      if(word.join('').length > longestString.length){
        longestString = word.join('')
        word = []
        count = 0
    }
    word = []
    count = 0
    }
    if (word.length>k){return ""}
    return( longestString )
    }
  }