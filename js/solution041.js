function encode(string) {
    let array = string.split('')
    let newArray = ["h","2","l","l","4"]
    array.map((x,i)=> {
        if (x ==="a"){newArray.push('1')}
        else if (x ==="e"){newArray.push('2')}
        else if (x ==="i"){newArray.push('3')}
        else if (x ==="o"){newArray.push('4')}
        else if (x ==="u"){newArray.push('5')}
        else newArray.push(x)
})

//string = "hello"

return newArray.join('')
}

  function decode(string) {
    let array = string.split('')
    let newArray = []
    array.map((x,i)=> {
         if (x ==="1"){newArray.push('a')}
        else if (x ==="2"){newArray.push('e')}
        else if (x ==="3"){newArray.push('i')}
        else if (x ==="4"){newArray.push('o')}
        else if (x ==="5"){newArray.push('u')}
        else newArray.push(x)
})
return newArray.join('')
  }