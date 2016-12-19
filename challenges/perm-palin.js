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
	let middle = 0;
	str = str.toLowerCase();
	str = str.replace(/\s/g, '');
	str.split('').forEach(function(char, i){
		if (!charCount[char]) {
			charCount[char] = 1;
		} else {
			charCount[char]++;
		}
	});

	Object.keys(charCount).forEach(function(i){
		if (charCount[i] % 2 !== 0) {
			middle++;
		}
	});

	console.log("mid: ", middle);
	if (middle > 1) {
		return false;
	} else {
		return true;
	}
}

module.exports = permPalin;