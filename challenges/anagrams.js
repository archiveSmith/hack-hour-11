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

'FROG'
FRGO
FGRO
FGOR
FOGR
FORG

  */

function anagrams(string, start= "") {
    if ( string.length == 1 ) {
        return [ start + string ];
    } else {

        var returnResult = [];
        for (var i=0; i < string.length; i++) {
            var result = anagrams (string[i], string.substr(0, i) + string.substr(i+1));
            for (var j=0; j<result.length; j++) {
                returnResult.push(start + result[j]);
            }
        }

        return returnResult;
    }
}

  var result = anagrams('frog');
  console.log(result); 

// http://stackoverflow.com/questions/5232295/is-there-any-pre-built-method-for-finding-all-permutations-of-a-given-string-in-j

module.exports = anagrams;
