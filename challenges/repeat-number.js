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

  // let oldSum = 0;
  // let sum = oldSum;

  // for (let i = 1; i < array.length; i += 1) {
  //   if (Math.abs(sum - array[i]) === oldSum) {
  //     return false;
  //   }
  //   sum = array[i];
  // }

  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i] === array[i + 1]) {
      return array[i];
    }
  }
  
  return undefined;
}

module.exports = repeatNumbers;
