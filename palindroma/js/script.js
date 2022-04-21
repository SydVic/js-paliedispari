// chiedo all' utente di inserire una parola
const userWord = prompt("Dimmi una parola");
console.log("userWord",userWord);

//veridfico se la parola è palindroma tramite la funzione
if (palindromeWord(userWord)) {
    console.log("La parola è palindroma");
} else {
    console.log("La parola non è palindroma");
}

/**
 * Description the function check if the word is a palindrome word or not
 * @param {String} wordToCheck
 * @returns {Boolean}
 */
function palindromeWord(wordToCheck) {
    console.log("wordToCheck", wordToCheck);
    // inverto la parola con un ciclo for leggendola dalla fine all'inizio
    let reversedWord ="";
    for (let i = (wordToCheck.length - 1); i >= 0; i--) {
        reversedWord += wordToCheck[i];
    }
    console.log("reversedWord", reversedWord, typeof(reversedWord));

    // controllo se la parola invertita è === a quella inserita dall'utente
    let isPalindromeWord = false;
    if (reversedWord === wordToCheck) {
        isPalindromeWord = true;
    }
    return isPalindromeWord;
}