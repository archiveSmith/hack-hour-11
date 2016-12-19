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
  const obj = {};
  str.split('').sort().forEach((letter) =>  {obj[letter] ? obj[letter] += 1 : obj[letter] = 1; });
  return Object.keys(obj).filter(key => obj[key] % 2 === 1).length <= 1;
}

module.exports = permPalin;