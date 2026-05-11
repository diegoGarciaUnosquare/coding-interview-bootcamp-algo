// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    // solution 1
    // for (let row = 0; row < n; row++) {
    //     let stair = '';

    //     for (let column = 0; column < n; column++) {
    //         if (column <= row) {
    //             stair += '#';
    //         } else {
    //             stair += ' ';
    //         }
    //     }

    //     console.log(stair);
    // }

    // Solution 2
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        steps(n, row + 1);
        return;
    }

    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }
    steps(n, row, stair);
}

// // My solution
// function steps(n) {
//     // My Solution
//     for (let i = 1; i <= n; i++) {
//         let stepToPrint = addSteps(i, n);
//         console.log(stepToPrint);
//     }
// }

// // My solution
// function addSteps(stepIndex, amountSteps) {
//     let index = 0;
//     let stepsStr = '';
//     while (index < stepIndex) {
//         stepsStr += "#";
//         index++;
//     }

//     let spacesToAdd = amountSteps - stepIndex;
//     let j = 0;
//     while (j < spacesToAdd) {
//         stepsStr += ' ';
//         j++;
//     }

//     return stepsStr;
// }

module.exports = steps;
