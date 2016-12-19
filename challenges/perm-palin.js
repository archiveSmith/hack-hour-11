/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 *  - permPalin('abab') => true
 *  - permPalin('cbaba') => true
 *  - permPalin('cbac') => false
 *  - permPalin('a') => true
 *
 */

function permPalin(str) {
  if (str.length === 1) return true;
  let table = {};
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    table[str[i]] ? table[str[i]] += 1 : table[str[i]] = 1;
  }
  for (w in table) {
    if (table[w] % 2 === 1) {
      count += 1;
    }
  }
  if (count === 0 || count === 1) {
    return true;
  } else {
    return false;
  }
}

module.exports = permPalin;