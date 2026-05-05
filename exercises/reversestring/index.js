// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // Solution 1
    // return str.split('').reverse().join('');

    // Solution 2
    // let reversed = '';
    // for (let character of str) {
    //     reversed = character + reversed;
    // }
    // return reversed;

    // Solution 3 -- More Complicated solution
    return str.split('').reduce((reversed, character) => character + reversed, '');
     
    // My Solution
    // let reversed = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reversed += str[i];
    // }
    // return reversed;
}

module.exports = reverse;
