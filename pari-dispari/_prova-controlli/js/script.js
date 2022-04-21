// raccolta input utente pari o dispari con controllo e trasformazione in lower case
let userEvenOrOdd;
let userEvenOrOddLowerCase;
do {
    userEvenOrOdd = prompt("Ciao! Scegli pari o dispari..");
    userEvenOrOddLowerCase = userEvenOrOdd.toLowerCase();
} while (userEvenOrOddLowerCase !== "pari" && userEvenOrOddLowerCase !== "dispari")
console.log("userEvenOrOddLowerCase", userEvenOrOddLowerCase);

// raccolta input utente numero da 1 a 5 con controllo
let userNumber;
do {
    userNumber = parseInt(prompt("adesso scegli un numero tra 1 e 5.."));
} while (userNumber < 1 || userNumber > 5 || isNaN(userNumber))
console.log("userNumber", userNumber);






// FUNCTIONS
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

/**
 * Description the function check if the number is even or odd
 * @param {any} numberToCheck -> the number you want to know if is even or odd
 * @returns {String} -> return "pari" if the number is even and "dispari" if the number is odd
 */
function evenOddNumber(numberToCheck) {
    let result = "";
    if ( numberToCheck % 2 === 0) {
        result = "pari";
    } else {
        result = "dispari";
    }
    return result;
}