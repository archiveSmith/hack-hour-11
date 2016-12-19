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
	if(str.length === 1) return true;

	function recurse(arr, n){
		if(isPalin(arr.join(""))) return true;
		if(n === arr.length - 1) return false;

		for(let i = 0; i < arr.length; i++){
			if(recurse(arr, n + 1)) return true;
			arr.push(arr.slice(n, 1));
		}

	}

	if(recurse(str.split(), 0)){
		return true;
	}

	return false;
}

function isPalin(str){
	let l = 0;
	let r = str.length - 1;
	while( l < r){
		if(str[l] !== str[r]){
			return false;
		}
		l++;
		r--;
	}

	return true;
}

console.log(permPalin("abab")); //true
console.log(permPalin("cbaba")); //true
console.log(permPalin("cbac")); //false
console.log(permPalin("a")); //true

module.exports = permPalin;
