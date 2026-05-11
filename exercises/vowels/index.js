// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// My solution
function vowels(str) {
    const strArray = str.split('');
    let amountOfVowels = 0;
    for (const char of strArray) {
        if (isVocal(char.toLowerCase()))
            amountOfVowels++;
    }

    return amountOfVowels;
}

function isVocal(char) {
    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
            break;
    
        default:
            return false;
            break;
    }
}


// Solution 1
// function vowels(str) {
//   let count = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u'];
//
//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }
//
//   return count;
// }

// Solution 2
// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }
 
module.exports = vowels;
