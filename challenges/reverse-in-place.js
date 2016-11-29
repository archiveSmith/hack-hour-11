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
  if(array === undefined || array.length === 0) {
    return [];
  }

  let len = array.length;
  let temp;

  for (let i = 0; i < len; i += 1) {
    temp = array[0];
    array.splice(len - i, 0, temp);
    array.shift();
  }

  return array;
}


module.exports = reverseInPlace;
