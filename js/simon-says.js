/*
Descrizione:
Un alert() espone 5 numeri generati casualmente. (Decidete voi se debbano essere tutti diversi)
Non appena l'utente schiaccia "ok", parte un timer di 30 secondi. (Bonus: visualizzare il timer)
Al termine dei 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,
tramite il prompt(). (Bonus: far inserire i numeri da un form)
Dopo che sono stati inseriti i 5 numeri, il software mostra in un alert quanti e quali dei numeri da
indovinare sono stati individuati. (Bonus: stampare in pagina il risultato, in alternativa all'alert.)
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
* Commentate il codice.
*/

/* Preparazione del gioco
1 - Genero 5 numeri random da 1 a 50.
2 - Creo un Alert dove faccio vedere i 5 numeri generati casualmente;
3 - Decido se voglio che siano tutti diversi oppure no i numeri;
*/

/* Inizio del Gioco
1 - Creo un timer di 30 secondi;
2 - quando l'utente clicca sull OK dell alert per andare avanti devo fare partire un timer di 30 secondi;  (Bonus: visualizzare il timer)
3 - Chiedo all'alluntente di riscrivere i 5 numeri visualizzati all'inizio;    (Bonus: far inserire i numeri da un form)
4 - In fine mostriamo i numeri che sono stati indovinati e non all'utente;     (Bonus: stampare in pagina il risultato, in alternativa all'alert.)
*/

/*Fine della partinta
1 - Stampo il messaggio di partita terminata;
2 - Stampo il punteggio del giocatore;
*/

var totalsRandomNumbers = [];
var totalsNumbers = 100;
var casualNumbers = 5;




//Preparazione del gioco

while (totalsRandomNumbers.length < casualNumbers) {

    //generiamo un numero casuale da 1 a 100;
    var randomNumber = getRandomNumber(1, totalsNumbers);
    console.log('numero casuale: ', randomNumber);

    //verificare se il numero generato è già presente nell Array totalsRandomNumbers
    //se non è presente aggiungi il numero, inseriscilo
    if (!isInArray(randomNumber, totalsRandomNumbers)) {
        totalsRandomNumbers.push(randomNumber);
        console.log('Array di tutti i numeri salvati: ' + totalsRandomNumbers);
    }
}
console.log(totalsRandomNumbers);
alert('Memorizza i numeri che sono stati generati: ' + totalsRandomNumbers);



//Inizio del gioco
setTimeout(function () {

    var userNumbers = [];
    var exactNumbers = [];

    while (userNumbers.length < casualNumbers) {
        //CHIEDO UN NUMERO ALL'UTENTE
        var userChoice = getUserNumber(1, totalsNumbers);
        console.log(userChoice);

        //verifichiamo che il numero non sia nell' Array tra quelli già scelti dall'utente
        //se non è presente aggiungi il numero, inseriscilo
        if (!isInArray(userChoice, userNumbers)) {
            //se è presente
            userNumbers.push(userChoice);
            console.log('Array dei numeri salvati dal utente: ' + userNumbers);

            //verifichiamo che il numero inserito dall'utente corrisponda a quello generato nell Array
            if (isInArray(userChoice, totalsRandomNumbers)) {
                //se corrisponde salviamo il numero in un Array dei numeri indovinati
                exactNumbers.push(userChoice);

            }

        } else {
            alert('Il numero è stato già inserito!');
        }

    }
    //mostriamo il punteggio all'utente
    alert('Hai indovinato ' + exactNumbers.length + ' numeri: ' + exactNumbers);
}, 10000);




















/******** FUNCTION RANDOM NUMBER */

/**
 * / funzione che genera il numero rando tra il minimo e massimo
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
// funzione che genera il numero rando
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}




/******** FUNCTION INCLUDES */
/**
 * controlla che un dato elemento sia presente in un dato elemento
 * @param {*} needle è l oggetto che stiamo cercando nell Array
 * @param {*} arr 
 * @returns {boolean} ci restituisce un vero o falso
 */

function isInArray(needle, arr) {
    var found = false;
    var i = 0;
    console.log(needle);
    console.log(arr);
    while (!found && i < arr.length) {

        if (needle === arr[i]) {
            found = true;
        }
        i++
    }
    return found;
}


/** FUNCTION FOR USERNUMBER */
function getUserNumber(min, max) {
    //CHIEDO UN NUMERO ALL'UTENTE
    var number;

    do {
        number = prompt('Inserisci un numero da ' + min + ' a ' + max);
    }

    //verifichiamo che l utente non abbia scritto qualcosa di diverso da quello chiesto
    while (!number || isNaN(number) || number.trim() === '' || number < min || number > max);

    return parseInt(number);
}







