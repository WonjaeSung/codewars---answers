

   const solution = a => {
    let t=a.length;
    let k=0

    //iterate through arrays
    for(let i=0; i<t; i++){
        //if any of the array includes 'x', k is the index of 'x".
      if(a[i].indexOf("x")>-1){
        k=a[i].indexOf("x");
        for(let q=0;q<i;q++)
          if(a[q][k]=="v") return true
        for(let w=0; w<k; w++)
          if(a[i][w]==">") return true
        for(let e=k+1; e<t;e++)
          if(a[i][e]=="<") return true
        for(let r=i+1; r<t; r++)
          if(a[r][k]=='^') return true
      }
      
    }
      return false
}