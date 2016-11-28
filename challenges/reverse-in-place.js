'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 */

function reverseInPlace(array) {

  const mid = Math.floor(array.length/2);
  const len = array.length;

  if (len <= 0) {
    throw new Error('Array passed in is empty. Please input non-empty array.');
  }

  for (let i = 0; i < mid; i += 1) {
    let temp = array[i];
    array[i] = array[len - 1 - i];
    array[len - 1 - i] = temp;
  }
}

module.exports = reverseInPlace;