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
  const sortedArray = array.sort((a, b) => a > b);
  const len = sortedArray.length;

  for (let i = 0, j = 1; j < len;) {
    if (sortedArray[i] === sortedArray[j]) return sortedArray[j];
    i += 1;
    j += 1;
  }

  // BRUTE FORCE
  // const counts = {};
  // for (let i = 0; i < array.length; i += 1) {
  //   if (counts[array[i]]) return array[i];
  //   counts[array[i]] = 1;
  // }
}

module.exports = repeatNumbers;
