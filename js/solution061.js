function isValidWalk(walk) {
    if(walk.length !== 10){return false}
    let numberOfN = walk.filter((n)=> n==='n')
    let numberOfS = walk.filter((s)=> s==='s')
    let numberOfE = walk.filter((e)=> e==='e')
    let numberOfW = walk.filter((w)=> w==='w')
    
    if(numberOfE.length !== numberofW.length && numberOfN.length !== numberofS.length){return false}
    else return true
  }