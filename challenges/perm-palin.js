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

  const strArr = str.split('');
  const strArrLen = strArr.length;

  for (let i = 0; i < strArrLen; i += 1) {
    if (!lettersObj[strArr[i]]) {
      lettersObj[strArr[i]] = 0;
      lettersObj[strArr[i]] += 1;
    } else {
      lettersObj[strArr[i]] += 1;
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