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
  const cache = {};
  for (let i = 0; i < array.length; i++) {
    cache[array[i]] = cache[array[i]] ? ++cache[array[i]] : 1;
    if (cache[array[i]] === 2) return array[i];
  }
}

console.log(repeatNumbers([1, 2, 3, 4, 5, 6, 7, 7, 8]))

module.exports = repeatNumbers;
