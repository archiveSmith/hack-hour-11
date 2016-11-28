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
  array.length = array.length * 2;
  let i = 0;
  let j = array.length;
  let k = 0;
  while (i < (array.length / 2)) {
    array[j] = array[i];
    j--;
    i++
  }
  while (k <= (array.length / 2) + 2) {
    array.shift(k)
    k++;
  }
  return array;
}

module.exports = reverseInPlace;
