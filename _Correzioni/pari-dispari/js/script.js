const userChoice = prompt("Scegli pari o dispari");
console.log(userChoice);

const userNumber = parseInt(prompt("Dimmi un numero da 1 a 5"));
console.log(userNumber);

const computerNumber = getRndInteger(1, 5);
console.log(computerNumber);

const resultSum = userNumber + computerNumber;
console.log(resultSum);

const summOddEven = evenOrOdd(resultSum);
console.log(summOddEven);

if (summOddEven === userChoice) {
    console.log("hai vinto");
} else {
    console.log("hai perso");
}


// FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function evenOrOdd(numberToCheck) {
    let isEvenOrOdd = "dispari";
    if (numberToCheck % 2 === 0) {
        isEvenOrOdd = "pari";
    }

    return isEvenOrOdd;
}