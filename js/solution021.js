

function arrayDiff(a, b) {
    for(let i = 0; i < b.length; i++){
      for(let x = 0; x < a.length; x++){
        if(b[i]===a[x]){
          a.splice(a.indexOf(a[x]),1)
          x--
        }
      }
    }
      return a
    }
    
    