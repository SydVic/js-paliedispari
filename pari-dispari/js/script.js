// l'utente deve scegliere pari o dispari
const userEvenOdd = prompt("Ciao! Scegli pari o dispari..");
console.log("userEvenOdd", userEvenOdd);

// l'utente deve scegliere un numero tra 1 e 5
const userNumber = parseInt(prompt("adesso scegli un numero tra 1 e 5.."));
console.log("userNumber", userNumber);

// generiamo un numero random tra 1 e 5 per il pc (con funzione)
const randomPcNumber = randomNumber(1, 5);
console.log("randomPcNumber", randomPcNumber);

// sommiamo i due numeri

// stabiliamo se la somma dei due numeri è pari o dispari (con funzione)

// stabiliamo chi ha vinto in base a cosa ha scelto l'utente tra pari e dispari


/**
 * Description generate a random number betwenn the min e max parameter
 * @param {Number} min -> the minimum number we want to generate
 * @param {Number} max -> the maximum number we want to generate
 * @returns {Number}
 */
 function randomNumber(min, max) {
    const generatedRandomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    return generatedRandomNumber;
}