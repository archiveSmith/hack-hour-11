/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string, rem = '', all = {}) {  
  if (!string) all[rem] = true
  else string.split('').forEach((e, i) => anagrams(slice(0,i).concat(slice(i + 1)), rem.concat(e), all))
  return Object.keys(all)
}

module.exports = anagrams;
