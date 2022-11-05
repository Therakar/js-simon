"use strict"

//ARRAY
//array che conterrà i 5 numeri 
let numberList = [];

//UTILITY FUNCTIONS
//funzione creazione numeri
function getRndInteger(min, max){
    return Math.floor(Math.random()* (max - min + 1) + min);
}


// MAIN
const casualNumber = document.getElementById(`casualNumbers`);//seleziono il div con classe numberList
// questa è una funzione che crea 5 numeri in un range da 1 a 100 senza ripetizioni
while (numberList.length < 5){
    const numberRandom = getRndInteger(1, 100); //richiamo la funzione che genera i numeri casuali e li assegno a una costante numebrRandom
    if(numberList.includes(numberRandom) === false){ //questo ciclo for controlla che i numeri non si ripetano 
        
        numberList.push(numberRandom);//pusha i numeri all'interno dell'array
    }
    console.log
    casualNumber.innerHTML = numberList; //stampa l'array che contiene i numeri casuali nella pagina   
}
    





