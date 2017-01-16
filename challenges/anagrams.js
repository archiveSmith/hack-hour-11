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
    if (string.length <= 1) {
        return [string];
    }
  
    let result = [];

    for (let i=0; i<string.length; i++) {
        // console.log(i + ' iteration')
        let restOfWord = '';
        for (let k=0; k<string.length; k++) {
            if (k !== i) {
                restOfWord += string[k];
            }
        }
        
        recurse(string[i], restOfWord);
        
    }
    return result;

    function recurse(first, string) {
        // console.log('recursing with ' + string);
        if (string.length <= 1) {
            return string;
        }
        let currentWord = '';

        newString = string.split('');
        do {
            for (let i=0; i<string.length-1; i++) {
                if (newString[i] !== newString[i+1]) {
                    // console.log('i is ' + i)
                    // console.log(newString[i], newString[i+1])
                    let temp = newString[i];
                    newString[i] = newString[i+1];
                    newString[i+1] = temp;
                    // console.log(newString[i], newString[i+1])
                    currentWord = newString.join("");
                    result.push(first + currentWord)
                    
                    }
                }
            }
         while (string !== currentWord)
         return;

    }
}

// console.log(anagrams('abc'));

module.exports = anagrams;
