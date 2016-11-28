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

function reverseInPlace(array = []) {
  let mid = Math.floor(array.length / 2);
  let end = array.length - 1;
  for (let i = 0; i < mid; i++) {
    const temp = array[i];
    array[i] = array[end];
    array[end] = temp;
    end -= 1;
  }
  console.log(array);
  return array;
}

module.exports = reverseInPlace;
