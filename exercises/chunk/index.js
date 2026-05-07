// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // My solution
    // let chunkedArray = [];
    // let subArray = [];

    // for (let i = 0; i < array.length; i++) {
    //     // If the subArray length is less than the size, we add a new item
    //     if (subArray.length < size) {
    //         subArray.push(array[i]);
            
    //         // If the subarray length is equal to the expected size of the subArray
    //         // we add the subArray to the chuncked array and we clear our subArray auxiliar array.
    //         if (subArray.length === size) {
    //             chunkedArray.push(subArray);
    //             subArray = [];
    //         } else if (i === array.length - 1) {
    //             // If the we are on the last element of the array, we add the subArray to the chunckedArray
    //             chunkedArray.push(subArray);
    //         }
    //     }
    // }
    // return chunkedArray;

    // solution 1
    // const chuncked = [];

    // for (const element of array) {
    //     const last = chuncked[chuncked.length - 1];

    //     if (!last || last.length === size) {
    //         chuncked.push([element]);
    //     } else {
    //         last.push(element);
    //     }
    // }

    // return chuncked;

    // solution 2
    const chuncked = [];
    let index = 0;

    while(index < array.length) {
        const slicedArray = array.slice(index, index + size);
        chuncked.push(slicedArray);

        index += size;
    }

    return chuncked;
}

module.exports = chunk;
