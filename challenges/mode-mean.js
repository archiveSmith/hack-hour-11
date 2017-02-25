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
  if (!array || array.length === 0) return undefined;
	const arrLen = array.length;
	const arrTotal = array.reduce((acc, curr) => acc + curr);
	const mean = Math.floor(arrTotal / arrLen);
  const counts = {};
  let max = -Infinity;
  let mode = -Infinity;
  
  array.forEach(num => {
    if (counts[num]) counts[num] += 1;
    else counts[num] = 1;
    if (counts[num] >= max && num > mode) {
      max = counts[num];
      mode = num;
    };
  });

  return mean === mode;
}

module.exports = modemean;

// const a = [1, 1, 1, 3, 3, 3];
// console.log(modemean(a));