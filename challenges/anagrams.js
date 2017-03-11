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

function anagrams(string, cur = '', cache = {}) {
  if (typeof string !== 'string') return [''];
  if (!string.length) return cache[cur] = true;
  for (let i = 0; i < string.length; i += 1) {
    const selected = string.charAt(i);
    const rest = string.slice(0, i) + string.slice(i + 1);
    anagrams(rest, cur + selected, cache);
  }
  return Object.keys(cache);
}

module.exports = anagrams;