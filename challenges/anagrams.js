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
	// console.log("str: ", string);
	string = string.split('');
	var combos = [];
	if (string.length === 1) {
		return string;
	} else {
		for (var i = 0; i < string.length; i++) {
			console.log(string, i);
			var subString = string.slice(0, i).concat(string.slice(i + 1)).join('');
			// console.log("sub str: ", subString);
			combos.push(string[i] + anagrams(subString));
		}
	}

	return combos;
}

// console.log(anagrams('abc'));

module.exports = anagrams;
