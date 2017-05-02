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
  const expectation = ((array.length -1) * array.length) /2;
  let reality = 0;

  for (let i = 0; i < array.length; i++) {
    reality += array[i]
  }
  return reality - expectation;
}
module.exports = repeatNumbers;
