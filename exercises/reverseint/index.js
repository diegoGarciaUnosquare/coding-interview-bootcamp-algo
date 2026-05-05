// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // My solution (almost complete)
    // const intStrigified = n.toString();
    // const charArray = intStrigified.split('');
    // const reversedString = charArray.reduce((prev, current) => current + prev, '');
    // return parseInt(reversedString);

    // Solution 1
    // const reversed = n.toString().split('').reverse().join('');
    
    // if (n < 0 ) {
    //     return parseInt(reversed) * -1;
    // }
    // return parseInt(reversed);

    // Solution 2
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n); 


}

module.exports = reverseInt; 
