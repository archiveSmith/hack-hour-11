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
  let store = [];
  // console.log(string);


  function recurse(index, str){
    str = str + string[index];
    console.log(str);
    if(str.length === string.length){
      store.push(str);
      return;
    }

    let i = index, n = 0;
    while(n < string.length){
      recurse(++index, str);
      i = ++i === string.length ? 0 : i;
      n++;
    }
  }

  recurse(0, '');
  return store;
}


var result = anagrams('abc');
console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
module.exports = anagrams;
