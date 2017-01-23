/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  if (array.length === 1 || array.length === 0) return array;
  // output array
  const output = [array[0]];
  // loop through array
  for (let i = 1; i < array.length; i += 1) {
    const curr = output.length - 1;
    if (output[curr][0] <= array[i][0] && array[i][0] <= output[curr][1]) {
      console.log('start');
      output[curr] = [output[curr][0], array[i][1]];
    } else if (output[curr][0] <= array[i][1] && array[i][1] <= output[curr][1]) {
      console.log('end');
      output[curr] = [array[i][0], output[curr][1]];
    } else {
      output.push(array[i]);
    }
  }
  return output;
}

module.exports = mergeRanges;
