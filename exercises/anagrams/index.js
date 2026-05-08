// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const sortedA = cleanString(stringA);
    const sortedB = cleanString(stringB);

    return sortedA === sortedB;
}

function cleanString(str) {
  const regEx = /[^\w]/g;

  return str.replace(regEx, '').toLowerCase().split('').sort().join('');
}

// Solution 1
// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMp(stringA);
//     const bCharMap = buildCharMp(stringB);

//     const aMapKeys = Object.keys(stringA);
//     const bMapKeys = Object.keys(stringB);

//     if (aMapKeys.length !== bMapKeys.length)
//         return false;

//     for (const char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) {
//             return false;
//         }
//     }

//     return true;
// }

// function buildCharMp(str) {
//     let charMap = {};
//     const regEx = /[^\w]/g;

//     for (const char of str.replace(regEx, '').toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;
// }

module.exports = anagrams;
