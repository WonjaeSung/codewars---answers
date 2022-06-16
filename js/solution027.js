    function duplicates(array){

        let pairs = 0

    for(let i=0; i<array.length; i++){

        if(/*array[i]===array[array.lastIndexOf(array[i])] && */ i !== array.lastIndexOf(array[i])&& array.lastIndexOf(array[i])>-1) {
        //console.log(array[i])
        //console.log(array[array.lastIndexOf(array[i])])
        array.splice(array.lastIndexOf(array[i]),1);
        array.splice(i,1);
        pairs++
        i--
        console.log(array)
        }
        }
        return pairs
    }