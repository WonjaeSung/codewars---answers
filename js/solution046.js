function duplicateEncode(word){
    let wordInArray = word.toLowerCase().split('')
    let newWord =""
    console.log(wordInArray)
    wordInArray.map((x)=>{
        wordInArray.indexOf(x) === wordInArray.lastIndexOf(x)? newWord+="(":newWord+=")"
    })
    return newWord
}
