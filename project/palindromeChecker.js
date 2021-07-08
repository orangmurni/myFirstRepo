function palindrome(str) {
    var pureStr = str.replace(/[^a-zA-Z0-9]/ig,'').toLowerCase()
    if(pureStr.split('').reverse().join('') === pureStr) return true;
    return false;
  }
  
  console.log(palindrome("0_0 (: /-\ :) 0-0"));