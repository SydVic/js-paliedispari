// chiedo all' utente di inserire una parola
const userWord = prompt("Dimmi una parola");
console.log("userWord",userWord);

//veridfico se la parola è palindroma tramite la funzione
palindromeWord(userWord);

//console.log("userWord 0",userWord[0]);

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

    // oppure scompongo dall'inizio alla fine e pusho in un array e poi faccio lo stesso dalla fine all'inizio e confronto i due risultati?
    // ok non mi serve l'array!
    let wordSplitted = "";
    for (let i=0; i < wordToCheck.length; i++) {
        wordSplitted += wordToCheck[i];
        console.log("wordSplitted", wordSplitted, typeof(wordSplitted));
    }

    // reversed word
    let wordReversed ="";
    for (let i = (wordToCheck.length - 1); i >= 0; i--) {
        wordReversed += wordToCheck[i];
        console.log("wordReversed", wordReversed, typeof(wordReversed));
    }
}