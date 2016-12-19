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

const permPalin = (str) => {
  if (str.length === 1) return true;
  const arr = str.split('');
	const perms = [[]];
  const isPalin = (perm) => perm === perm.split('').reverse().join('');
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0, len = perms.length; j < len; j++) {
      const combo = perms[j].concat(arr[i]);
      if (isPalin(combo.join('')) && combo.length === str.length) {
        return true;
      }
      perms.push(combo);
    }
  }
  return false;
}

const str1 = 'racecar'
const str2 = 'canon'
const str3 = 'poop'
const str4 = 'octopus'
console.log(permPalin(str1));
console.log(permPalin(str2));
console.log(permPalin(str3));
console.log(permPalin(str4));


module.exports = permPalin;