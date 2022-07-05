function persistence(num) {
    let arr = num.toString()
    let newNum = 100
    let counter = 0
    if (num.toString().length === 1) {return 0}
    else 
        while(newNum.toString().length > 1){
        newNum = arr.split('').reduce((acc,cur)=> acc *= cur);
        arr = newNum.toString()
        counter++
            }
        return counter
    }  
