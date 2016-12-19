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
	const charCount = {};
	let canBePalin = true;
	str = str.toLowerCase();
	str.split('').forEach(function(char, i){
		if (!charCount[char]) {
			charCount[char] = 1;
		} else {
			charCount[char]++;
		}
	});

	Object.keys(charCount).forEach(function(i){
		if (charCount[i] % 2 !== 0) {
			console.log("here");
			canBePalin = false;
		}
	});

	return canBePalin;
}

console.log(permPalin('abaccb'));

module.exports = permPalin;