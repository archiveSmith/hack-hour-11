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
  // if input is not provided return empty array
  if (array === undefined) return [];
  // start is index of last element
  const start = array.length - 1;
  // starting from last element and moving backwards, push these element into array
  for (let i = start; i >= 0; i -= 1) {
    array.push(array[i]);
  }
  // remove the initial elements from array
  array.splice(0, start + 1);
  return array;
}
module.exports = reverseInPlace;
