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
  
  if (!str || str.length < 1) {
    return undefined;
  }
  const lettersObj = {};
  const len = str.length;

  for (let i = 0; i < len; i += 1) {
    if (!lettersObj[str[i]]) {
      lettersObj[str[i]] = 0;
      lettersObj[str[i]] += 1;
    } else {
      lettersObj[str[i]] += 1;
    }
  }

  let numOfOdd = 0;

  for (let letter in lettersObj) {
    if (lettersObj[letter] % 2 > 0) {
      numOfOdd += 1;
    }
  }

  return numOfOdd <= 1;  
}

module.exports = permPalin;