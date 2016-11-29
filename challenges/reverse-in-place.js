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
<<<<<<< HEAD
return array.reduceRight(function (prev, curr) {
  return prev.concat(curr);
}, []);
=======

>>>>>>> 526ccfdc56a6402d39cc2df1bdaa33d577a2ac21
}

module.exports = reverseInPlace;
