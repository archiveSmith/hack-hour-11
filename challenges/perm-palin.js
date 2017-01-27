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
<<<<<<< HEAD
	str = str.toLowerCase().split('');
	let countOnce = false;
  while (str.length > 0) {
    const removed = str.splice(0,1)[0];
    if (str.indexOf(removed) === -1) {
      if (!countOnce) countOnce = true;
      else return false;
    }
    else str.splice(str.indexOf(removed), 1);
  }
  return true;
=======
	
>>>>>>> 1a7485c2a025fa8d3cb0d86037701456406ed848
}

module.exports = permPalin;