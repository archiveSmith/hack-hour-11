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
if(!str) {
	return undefined;
}
		let obj = {};

		for (let i = 0; i < str.length; i+= 1) {
			if(obj[str[i]]) {
				delete obj[str[i]];
			}

			else {
				obj[str[i]] = true;
			}
		}


	return obj.keys() <= 1;
}





module.exports = permPalin;
