function part(x){
    let count = 0
    let arr= ['Partridge','PearTree','Chat','Dan','Toblerone','Lynn','AlphaPapa','Nomad']
    let countNotEqualZero = `Mine's a Pint`
    
    for(let i=0; i<x.length; i++){
        if(arr.indexOf(x[i])>=0) {count++}
    }

    if (count === 0){return `Lynn, I've pierced my foot on a spike!!`}

    else {
        for(let y=1; y<=count; y++){
            countNotEqualZero += "!"
        }
    }
    return countNotEqualZero
}

