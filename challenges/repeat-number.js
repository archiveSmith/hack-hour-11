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
  // sort array from smallest to largest
  // set memory to first element
  let memory = array[0];
  // loop through array starting from 2nd element
  for (let i = 1; i < array.length; i += 1) {
    // check if current element matches memory, if so, return current element
    if (memory === array[i]) return memory;
    // if not, reassign memory to current element
    memory = array[i];
  }
}

const arr = [1,2,2,3,1,64,];

module.exports = repeatNumbers;
