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
  for (let i = 0; i < str.length; i += 1) {
    if (!obj[str[i]]) obj[str[i]] = 0;
    obj[str[i]] += 1;
  }
  const arr = Object.values(obj);
  let odds = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 1) odds += 1;
  }
  if (odds > 1) return false;
  return true;
}

module.exports = permPalin;