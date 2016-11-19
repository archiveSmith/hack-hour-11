'use strict';
/*
 * Given an array of numbers, determine if the mode and mean
 * of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
	const arrLen = array.length;
	const arrTotal = array.reduce((acc, curr) => { return acc + curr; });
	const mean = Math.floor(arrTotal / arrLen);
	const counts = {};
	const modes = [];
	let modeCount = 0;
	let mode;

	for (let i = 0; i < arrLen; i += 1) {
		if (counts[array[i]]) counts[array[i]] += 1;
		else counts[array[i]] = 1;
	}

	for (const num in counts) {
		if (counts[num] > modeCount) modeCount = counts[num];
	}

	for (let num in counts) {
		if (counts[num] === modeCount) modes.push(num);
	}

	mode = Math.max(modes);

	return mean === mode;
}

module.exports = modemean;

let array = [1, 1, 1];
console.log(modemean(array));