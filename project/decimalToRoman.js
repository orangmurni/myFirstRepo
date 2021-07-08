function convertToRoman(num) {
  let sortDescendNumber = (a,b) => b-a;
  var decToRoman = {
I    :  1,	
II   :  2,	
III  :  3,	
IV   :  4,	
V    :  5,	
VI   :  6,	
VII  :  7,	
VIII :  8,	
IX   :  9,

X    :  10,	
XX   :  20,	
XXX  :  30,	
XL   :  40,	
L    :  50,	
LX   :  60,	
LXX  :  70,	
LXXX :  80,	
XC   :  90,

C    :  100,	
CC   :  200,	
CCC  :  300,	
CD   :  400,	
D    :  500,	
DC   :  600,	
DCC  :  700,	
DCCC :  800,	
CM   :  900,
M    :  1000
    
}
  var romanArr = [];
  var objValues = Object.values(decToRoman).sort(sortDescendNumber)
  function getKey(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}
  for(let i = 0; num !== 0; i++){
    let a = objValues.find( value => value <= num);
    let b = getKey(decToRoman, a);
    romanArr.push(b);
    num -= a
  }
  
  console.log(objValues);
  
  return romanArr.join('');
}

console.log(convertToRoman(4));
