function cekNomorTeleponIDN(str){
    var regex = /^(\+*62|0)\s*8[0-9]{2}[\s-]*[0-9]{4}[\s-]*[0-9]{3,4}$/;
    return regex.test(str);
}

console.log(cekNomorTeleponIDN('089625646355'));    //true
console.log(cekNomorTeleponIDN('08962564635'));    //true
console.log(cekNomorTeleponIDN('0896 2564 6355'));    //true
console.log(cekNomorTeleponIDN('0896-2564-6355'));    //true
console.log(cekNomorTeleponIDN('+62 896-2564-6355'));    //true
console.log(cekNomorTeleponIDN('+62 896-2564-6355'));    //true
console.log(cekNomorTeleponIDN('62 896-2564-6355'));    //true
console.log(cekNomorTeleponIDN('6289625646355'));    //true
console.log(cekNomorTeleponIDN('+6289625646355'));    //true
console.log(cekNomorTeleponIDN('079625646355'));    //false
console.log(cekNomorTeleponIDN('89625646355'));    //false
console.log(cekNomorTeleponIDN('629625646355'));    //false
console.log(cekNomorTeleponIDN('+629625646355'));    //false
