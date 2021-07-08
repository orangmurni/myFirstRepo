var gachaItem = '';
var rng;
function rngStart(){
    rng = Math.random();
    if(rng < 0.4){
        gachaItem = 'COMMON';
        rarityDiv.style.background = 'grey';
        rarityDiv.innerText = gachaItem;
    }else if(rng < 0.75){
        gachaItem = 'RARE';
        rarityDiv.style.background = 'blue';
        rarityDiv.innerText = gachaItem;
    }else if(rng < 0.95){
        gachaItem = 'SUPER RARE!';
        rarityDiv.style.background = 'violet';
        rarityDiv.innerText = gachaItem;
    }else {
        gachaItem = 'SUPER SUPER RARE!!';
        rarityDiv.style.background = 'gold';
        rarityDiv.innerText = gachaItem;
    }

    console.log(gachaItem);
}
function notif(){
    alert('YOU HAVE GOT '+gachaItem);
}

var rarityDiv = document.getElementById('rarity');
var button = document.getElementById('button');
button.addEventListener('click', rngStart);
button.addEventListener('click', notif);


console.log(
    getComputedStyle(rarityDiv)
);
console.dir(
    button
);
