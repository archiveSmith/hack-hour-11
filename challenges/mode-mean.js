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
let sorted = array.sort();
let half = Math.ceil((sorted.length-1)/2);
let mode = sorted[half];
let total = array.reduce((acc,ele) => acc + ele);
let mean = total / array.length;
return mean === mode;
}

module.exports = modemean;