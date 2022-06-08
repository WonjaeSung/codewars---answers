function getCount(str) {
    let vowelsCount = 0;
    
  str.split('').map((x)=>{
    
    if(x==='a' || x==='e'|| x==='i'|| x==='u'|| x==='o') {
      
      vowelsCount++
    }
    
  })
    
    return vowelsCount;
  }