const userWord = "anna";

const isUserWordPalindrome = isStringPalindrome(userWord);
console.log(isUserWordPalindrome);

/**
 * Description this function checks if a given word is palindrome and gives true if it is or false otherwise
 * @param {String} stringToCheck -> any string to check if it is palindrome
 * @returns {Boolean} -> true if it is palindrome or false otherwise
 */
function isStringPalindrome(stringToCheck) {
    let reverseString = "";
    for (let i = (stringToCheck.length - 1); i >= 0; i-- ) {
        reverseString += stringToCheck[i];
    }
    
    let isPalindrome = false;
    if ( reverseString === stringToCheck) {
        isPalindrome = true;
    }

    return isPalindrome;
}