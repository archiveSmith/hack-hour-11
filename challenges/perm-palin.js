/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *

is palindrome is easy, just check if word in reverse is equal
need to iterate through all options

figure out a way to output all permutations and push them all to an array

for loop that iterates through each letter

lets just say they are all the same length


create an object with letters and # of letters 
there can only be one letter with 1 letter only
if there are any more return false. 

come back to this. 




 */

function permPalin(str) {
	const perms = [];

	for (var i = 0; i < str.length; i++){
		let string = '';
		for (var j = 0; j < str.length; j++){
			string = str[j] + string; 

		};
		perms.push(string)
	}

	console.log(perms);
	
}

console.log(permPalin('hello'))
//module.exports = permPalin;