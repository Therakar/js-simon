"use strict"

//ARRAY
//array che conterrà i 5 numeri 
let numberList = [];

//array per numeri inseriti dall'utente
let userNumber = [];

//array per i numeri corretti
let corectNumbers = [];
//UTILITY FUNCTIONS
//funzione creazione numeri
function getRndInteger(min, max){
    return Math.floor(Math.random()* (max - min + 1) + min);
}

// MAIN
//seleziono il div con classe numberList
const casualNumber = document.getElementById(`casualNumbers`);

// questa è una funzione che crea 5 numeri in un range da 1 a 100 senza ripetizioni
while (numberList.length < 5){
     //richiamo la funzione che genera i numeri casuali e li assegno a una costante numebrRandom
    const numberRandom = getRndInteger(1, 100);

    //questo ciclo for controlla che i numeri non si ripetano 
    if(numberList.includes(numberRandom) === false){ 

        //pusha i numeri all'interno dell'arra
        numberList.push(numberRandom);
    }
    //stampa l'array che contiene i numeri casuali nella pagina   
    casualNumber.innerHTML = numberList; 
}
 //countdown di 30 secondi al termine del quale i numeri spariscono
setTimeout(function(){
    casualNumber.style.display = 'none';
}, 10 * 1000);

//countdown di 31 secondi
setTimeout(function(){
    //ciclo while che fa inserire i numeri all'utente
    while(userNumber < 5){

        //chiede un numero all'utente e lo salva
        const userChoice = Number(prompt("PROVA A INSERIRE I NUMERI APPENA VISTI:"));
        //se il numero inserito dall'utenete non è già presente nella lista viene pushato nell'array userNumber
        if(userNumber.includes(userChoice) === false){ 
            userNumber.push(userChoice);
            
        } else{ //altrimenti c'è un alert
            alert("ATTENZIONE: QUESTO NUMERO è GIà STATO INSERITO!");
        }

        //se il mumero inserito dall'utente è presente nella numberList viene pushato nell'array corectNumbers
        if (numberList.includes(userChoice)) { 
            corectNumbers.push(userChoice);
        } 
    }
}, 11 * 1000);




