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
  if (typeof str === 'string' && str.length === 1) {
    return true;
  } else if (typeof str === 'string' && str.length > 1) {
    return str === str.split('').reverse().join('');
  } else {
    
  }
 
}

module.exports = permPalin;