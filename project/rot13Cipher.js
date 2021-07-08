function rot13(str) {
    var rot13Arr = [];
    var strArr = str.toLowerCase().split('');
    var rot13Obj = {
      'a' : 'n',
      'b' : 'o',
      'c' : 'p',
      'd' : 'q',
      'e' : 'r',
      'f' : 's',
      'g' : 't',
      'h' : 'u',
      'i' : 'v',
      'j' : 'w',
      'k' : 'x',
      'l' : 'y',
      'm' : 'z',
      'n' : 'a',
      'o' : 'b',
      'p' : 'c',
      'q' : 'd',
      'r' : 'e',
      's' : 'f',
      't' : 'g',
      'u' : 'h',
      'v' : 'i',
      'w' : 'j',
      'x' : 'k',
      'y' : 'l',
      'z' : 'm'
    };
  
    for(let i = 0; i < strArr.length; i++) {
      if(rot13Obj.hasOwnProperty(strArr[i])){
        rot13Arr.push(rot13Obj[strArr[i]]);
      }else {
        rot13Arr.push(strArr[i]);
      }
    }
    
    return rot13Arr.join('').toUpperCase();
  }
  
  console.log(rot13("ZHUNZZNQ SNQVYYNU NXONE"));