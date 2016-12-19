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
  if (!str) return undefined;
	// if even length, each letter must appear an even number of times.
  // if odd length, each letter must appear an even number of times EXCEPT one.
  let letterCounter = {};
  let letter; 
  let palindrome = 0;

  // loop through the string
  // create a counter of that letter's instance, or add 1 to existing count
  for (let i = 0; i < str.length; i++) {
    letter = str[i];
    letterCounter[letter] = letterCounter[letter] || 0;
    letterCounter[letter] ++;
  }

  // loop through each counter, most should === 0, one can === 1
  for (let count in letterCounter) {
    palindrome += letterCounter[count] % 2;
  }
  // if we return 0 or 1, it can palindrome, otherwise it's false.
  return palindrome < 2;
}

module.exports = permPalin;