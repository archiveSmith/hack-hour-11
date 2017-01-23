'use strict';

/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
    if (!array) {
        return 0;
    }

    let result = [];
    for (let i=0; i<array.length; i++) {
        let multSum;
        for (let j=0; j<i; j++) {
            if (multSum === undefined) {
                multSum = array[j];
            } else {
                multSum = multSum*array[j];
            }
        }
        for (let k=i+1; k<array.length; k++) {
            if (multSum === undefined) {
                multSum = array[k];
            } else {
                multSum = multSum*array[k];
            }
        }
        result.push(multSum);
    }
    return result;

}

console.log(getAllProducts([1]));


module.exports = getAllProducts;
