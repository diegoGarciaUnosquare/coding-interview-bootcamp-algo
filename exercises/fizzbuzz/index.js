// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    // my solution
    // for (let i = 1; i < n; i++) {
    //     const isMultipleThree = i % 3 === 0;
    //     const isMultipleFive = i % 5 === 0;

    //     if (isMultipleThree && isMultipleFive) {
    //         console.log('fizzbuzz');
    //     } else if (isMultipleThree) {
    //         console.log('fizz');
    //     } else if (isMultipleFive) {
    //         console.log('buzz');
    //     } else {
    //         console.log(i);
    //     } 
    // }

    for (let i = 1; i <= n; i++) {
         // check if number is multiple of 3 an 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i);
        }
    }
} 

module.exports = fizzBuzz;
