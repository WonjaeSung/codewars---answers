const XO = str => {
    str = str.toLowerCase().split('');
    console.log(str.filter(x => x === 'x'))
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }