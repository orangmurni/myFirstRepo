function checkCashRegister(price, cash, cid) {
  let newCid = cid.map(elem => [elem[0], parseInt((elem[1] * 100).toFixed())]);
  let toCentArr = [1,5,10,25,100,500,1000,2000,10000];
  let totalCash = (cid.map(elem => elem[1]).reduce((a,b) => a+b,0))*100;
  let chan = (cash - price)*100;
  let result = {};

  function getOpenChange(){
    let arr = [];
    let counter = 0;
    for(let i = toCentArr.length - 1; i >= 0;){
      if(toCentArr[i] <= chan && newCid[i][1] >= toCentArr[i]){
        counter += toCentArr[i];
        chan -= toCentArr[i];
        newCid[i][1] -= toCentArr[i]
        if(toCentArr[i] <= chan === false || newCid[i][1] >= toCentArr[i] === false){
          arr.push([newCid[i][0], counter]);
          counter = 0;
          i--
        }
      }else {
        i--
      }
      
    }
    
    return arr;
  }
  let a = getOpenChange()
  console.log();
    if(totalCash > (cash - price)*100){
      if( a.reduce((a,b) => a+b[1],0) !== (cash - price)*100){
        result.status = 'INSUFFICIENT_FUNDS';
        result.change = [];
      }else{
        result.status = 'OPEN';
        result.change = a.map(elem => [elem[0], elem[1] / 100]);
      }
    }else if (totalCash === (cash - price)*100){
      result.status = 'CLOSED';
      result.change = cid;
    }else {
      result.status = 'INSUFFICIENT_FUNDS';
      result.change = [];
    }
  
  return result;
}
    
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  