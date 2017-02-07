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

const swap = (arr, pos1, pos2) => {
  const temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
};

const gen = (arr, output = [], n = arr.length) => {
  if (n === 1) return output;
  for (let i = 0; i <= n; i++) {
    gen(arr, output, n - 1);
    let j;
    if (n % 2 === 0) {
      j = i;
    } else {
      j = 1;
    }
    return swap(arr, j - 1, n - 1);
  }
};

const anagrams = (s) => {
  const n = s.length;
  const arr = s.split('');
  return gen(arr, [], n);
};

console.log(anagrams('abc'));



module.exports = anagrams;
