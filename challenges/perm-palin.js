"use strict";
/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
	let count = str.split('').reduce((o,char)=>{
		o[char] ? delete o[char] : o[char] = true;
		return o;
	}, {});
	return Object.keys(count).length < 2;
}

module.exports = permPalin;
