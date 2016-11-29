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
// don't use methods
function reverseInPlace(array) {
  let temp = [];
  if(array === undefined || []){
    return [];
  }
  for(let i =array.length; i >= 0; i--) {
   temp.push(array[i]);
  }
  for(let i = 0; i < temp.length; i++){
    array[i] = temp[i];
  }
  
return array;
}

module.exports = reverseInPlace;
