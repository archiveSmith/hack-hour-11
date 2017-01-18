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

function anagrams(string) {
  const anagrams = [];
  const chars = string.split('');
  anagrams.push([chars.shift()]);

  for (let i = 0; i < chars.length; i += 1) {
    for (let j = 0; j <= chars.length; j += 1) {
      let newWord = 
    }
  }
}

module.exports = anagrams;

anagrams('abc');