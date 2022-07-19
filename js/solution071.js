function countSheeps(arrayOfSheep) {
    let counter = 0
    arrayOfSheep.map((x)=> {if (x===true){
      counter++
      }
    })
    return counter
  }