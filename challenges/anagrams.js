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
    if(string.length < 2) {
      return [string];
    }

    else {
      let anagramsArr = [];

      for(let i = 0; i < string.length; i += 1) {
        let letter = string[i];
        let shortword = string.substr(0, i) + string.substr(i + 1, string.length - 1);
        let shortwordArr = anagrams(shortword);
        for(let j = 0; j < shortwordArr.length; j += 1) {
          anagramsArr.push(letter + shortwordArr[j]);
        }
      }
      return anagramsArr;
    }

  }


module.exports = anagrams;
