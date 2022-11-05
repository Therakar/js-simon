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
     //richiamo la funzione che genera i numeri casuali e li assegno a una costante numebrRandom
    const numberRandom = getRndInteger(1, 100);

    //questo ciclo for controlla che i numeri non si ripetano 
    if(numberList.includes(numberRandom) === false){ 

        //pusha i numeri all'interno dell'arra
        numberList.push(numberRandom);
    }
    console.log
    //stampa l'array che contiene i numeri casuali nella pagina   
    casualNumber.innerHTML = numberList; 
}
 //countdown di 30 secondi al termine del quale i numeri spariscono
setTimeout(function(){
    casualNumber.style.display = 'none';
}, 30 * 1000)






