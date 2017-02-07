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

// O(n) space
// function repeatNumbers(array) {
//   const cache = {};
//   for (let i = 0; i < array.length; i++) {
//     cache[array[i]] = cache[array[i]] ? ++cache[array[i]] : 1;
//     if (cache[array[i]] === 2) return array[i];
//   }
// }

// array.sort() time is at least O(n);
// function repeatNumbers(array) {
//   array.sort();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === array[i+1]) return array[i];
//   }
// }

// indexOf() is probably O(n), which makes this solution O(n^2); BOO!
// function repeatNumbers(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array.indexOf[array[i]] !== -1) return array[i];
//   }
// }

console.log(repeatNumbers([1, 2, 7, 3, 4, 5, 6, 7, 8]))

module.exports = repeatNumbers;
