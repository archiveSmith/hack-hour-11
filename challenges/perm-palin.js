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
	let letters = str.split('');
	while(letters.length > 1){
	let regexp = new RegExp(letters[0], "g");
	let search = str.match(regexp);
	if(search === null){
	  search = '0';
	}
	
	if(search.length === 2){
		str = str.replace(search[0], '');
		str = str.replace(search[0], '');
	}
	letters.shift();
	}

	if(str.length < 2 && str.length % 2 !== 0){
		return true;
	}
	if(str.length === 0){
		return true;
	}
	return false;
	
}
module.exports = permPalin;