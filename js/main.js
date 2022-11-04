"use strict"

//ARRAY
//array che conterrà i 5 numeri 
const numberList = [];

//UTILITY FUNCTIONS
//funzione creazione numeri
function getRndInteger(min, max){
    return Math.floor(Math.random()* (max - min + 1) + min);
}

// MAIN
// questa è una funzione che crea 5 numeri in un range da 1 a 100 senza ripetizioni
while (numberList.length < 5){
    const numberRandom = getRndInteger(1, 100);
    if(numberList.includes(numberRandom) === false){
        numberList.push(numberRandom);
    }
}
console.log(numberList);//DEBUG