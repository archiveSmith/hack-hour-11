/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 *  - Math.floor the mean
 *  - If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  const mean = Math.floor(array.reduce(function(a,b) {
    return a + b;
  }) / array.length);
  const occurences = {};
  for (let i = 0; i < array.length; i ++) {
    if (!occurences[array[i]]) occurences[array[i]] = 1;
    else occurences[array[i]]++;
  }
  const ordered = [];
  Object.keys(occurences).forEach(function(key) {
    ordered.push([occurences[key], Number(key)]);
  });
  const mode = ordered.sort().reverse()[0][1];
  if (mean === mode) return true;
  return false;
}

module.exports = modemean;
