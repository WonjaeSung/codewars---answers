function countLanguages(list) {
    let languages = []
    let answer = {}
    let counter = 1
    list.forEach(item => {
      languages.push(item.language)
    })
    languages.sort()
    console.log(languages)
    languages.map((x,i)=>{
        if (languages[i] === languages[i+1]){     
            counter++
            //console.log(languages[i])
        }
        else {
        answer[x]=counter
        counter = 1
        }
    })
    return answer
  }