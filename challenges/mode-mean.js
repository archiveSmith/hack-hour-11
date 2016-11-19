/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
	// LINEAR TIME COMPLEXITY;
	// SPACE COMPLEXITY - INPUT ARRAY, ONE OBJECT
  const tracker = {};

  const mean = array.reduce((acc, curr) => {
    const result = acc + curr;
    return result;
  }) / array.length;

  array.forEach((num) => {
    tracker[num] = tracker[num] ? ++tracker[num] : 1;
  });

  const mode = array.reduce((acc, curr) => {
    const result = tracker[curr] > tracker[acc] ? curr : acc;
    return result;
  });

  return mean === mode;
}

console.log(modemean([1, 2, 3, 3, 3, 4, 4])); // false
console.log(modemean([10, 20, 20, 20, 20, 20, 30])); // true

module.exports = modemean;
