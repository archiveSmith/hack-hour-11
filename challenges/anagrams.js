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
  // get number of permutations
  let len = string.length;
  let perms = len;
  while (len - 1) {
    len -= 1;
    perms *= (len);
  }
  const output = [];
  const div = string.length - 1;
  let letter = 0;
  for (let i = 0; i < perms; i += 1) {
    console.log(letter);
    output[i] = string[letter];
    if (i % div) letter += 1;
  }
  return output;
}

function loopGen(n) {

}

module.exports = anagrams;
