// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // My solution 
    // const strDictinoary = {};
    // let maxChar = '';
    // let mostUsed = 0;

    // for(let char of str) {
    //     if (!strDictinoary[char]) {
    //         strDictinoary[char] = 1
    //     } else {
    //         strDictinoary[char]++;
    //     }
    // }

    // const keys = Object.keys(strDictinoary);
    // for (let key of keys) {
    //     if(strDictinoary[key]) {
    //         const timesCharUsed = strDictinoary[key];
    //         if (mostUsed === 0) {
    //             maxChar = key;
    //             mostUsed = timesCharUsed;
    //         } else if (timesCharUsed > mostUsed) {
    //             mostUsed = timesCharUsed;
    //             maxChar = key;
    //         }
    //     }
    // }

    // return maxChar;

    // Solution 1 from course
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max =  charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;
