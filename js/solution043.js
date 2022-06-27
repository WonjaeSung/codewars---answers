const solution = mtrx => {
    for (let i = 0; i < mtrx.length; i++){
      if (mtrx[i].indexOf('x')=== -1){
        continue
      }
      else if (mtrx[i].indexOf('x')!== -1 && mtrx[i].indexOf('>')!== -1){
        //console.log(mtrx[i].indexOf('x'))
        //console.log(mtrx[i].indexOf('>'))
        return mtrx[i].indexOf('x')>mtrx[i].indexOf('>')?true:false
      }
      else return false
    }
   }