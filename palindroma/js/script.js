// chiedo all' utente di inserire una parola
const userWord = prompt("Dimmi una parola");
console.log("userWord",userWord);

//veridfico se la parola è palindroma tramite la funzione
palindromeWord(userWord);

console.log("userWord 0",userWord[0]);

// creo una funzione per capire se la parola è palindroma
//      -trovare un modo per confrontare se gli elementi della stringa letti dall'inizio alla fine sono uguali agli elementi letti dalla fine all'inizio


/**
 * Description the function check if the word is a palindrome word or not
 * @param {String} wordToCheck
 * @returns {Boolean}
 */
function palindromeWord(wordToCheck) {
    console.log("wordToCheck", wordToCheck);
    // mettiamo caso che parola sia di 4 lettere, come posso fare per confrontare che wordToCheck[0] sia === a wordToCheck[3]
    // e cosi via -> wordToCheck[1] sia === a wordToCheck[2]
}