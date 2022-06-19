function longest(s1, s2) {
    let combined = `${s1}${s2}`.split('').sort()
    for(let i=0 ; i<combined.length; i++){
        if(combined[i]===combined[i+1]){
            combined.splice(i,1);
            i--
        }
    }
    return combined.join('')
 }