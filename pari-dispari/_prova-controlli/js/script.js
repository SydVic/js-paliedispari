let userEvenOrOdd;
let userEvenOrOddLowerCase;
do {
    userEvenOrOdd = prompt("Ciao! Scegli pari o dispari..");
    userEvenOrOddLowerCase = userEvenOrOdd.toLowerCase();
} while (userEvenOrOddLowerCase !== "pari" && userEvenOrOddLowerCase !== "dispari")
console.log("userEvenOrOddLowerCase", userEvenOrOddLowerCase);

let userNumber;

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