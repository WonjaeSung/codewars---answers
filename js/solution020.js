function alan(x){
    let arr = ['Rejection','Disappointment','Backstabbing Central','Shattered Dreams Parkway']
    
    for(let i = 0; i < x.length; i++){
    if(arr.indexOf(x[i])>=0){
      arr.splice(arr.indexOf(x[i]),1)}
    }
    if (arr.length ===0){return 'Smell my cheese you mother!'}
    else return  'No, seriously, run. You will miss it.'
  }