/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
<<<<<<< HEAD
  const memo = {};
  for (let i = 0; i < array.length; i+=1) {
    if (memo[array[i]]) return array[i];
    memo[array[i]] = array[i];
  }
  return undefined;
}

// console.log(repeatNumbers([1,2,3,4,5,6,7,8,8,9,10]))
=======

}

>>>>>>> e3e4e18237583e9af58c6f43188f706915c1c9b8
module.exports = repeatNumbers;
