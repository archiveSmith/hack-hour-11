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
	if(!array || !array.length ) return [];
	let lp = 0;
	let rp = array.length - 1;
	let holder = null;
	while(lp < rp){
		holder = array[lp];
		array[lp] = array[rp];
		array[rp] = holder;
		lp += 1;
		rp -= 1;
	}
	return array;
}

module.exports = reverseInPlace;
