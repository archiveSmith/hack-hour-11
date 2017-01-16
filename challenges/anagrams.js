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

function anagrams(start, string) {
  const results = [];

  if ( string.length === 1) {
    return [ start + string ];
  } else {
    for (let i = 0; i < string.length; i++) {
      let result = anagrams(string[i], string.substr(0, i) + string.substr(i + 1));
      for (let j = 0; j < result.length; j++) {
        results.push(start + result[j]);
      }
    }
    return results;
  }
}

module.exports = anagrams;
