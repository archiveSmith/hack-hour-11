/**
<<<<<<< HEAD
 * Write a function mergeRanges that takes an array of meeting time 
 * ranges and returns an array of condensed ranges.
=======
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
>>>>>>> 1a7485c2a025fa8d3cb0d86037701456406ed848
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
<<<<<<< HEAD
  if (!Array.isArray(array)) return [];
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let changesHaveBeenMade = false;
    for (let j = 0; j < result.length; j++) {
      if (array[i][0] <= result[j][1] && array[i][1] >= result[j][1]) {
        if (result[j][1] < array[i][1]) {
          result[j][1] = array[i][1];
          changesHaveBeenMade = true;
        }
      }
      if (array[i][1] >= result[j][0] && array[i][0] <= result[j][1]) {
        if (result[j][0] > array[i][0]) {
          result[j][0] = array[i][0];
          changesHaveBeenMade = true;
        }
      }
    }
    if (!changesHaveBeenMade) result.push(array[i]);
    console.log('result', result);
    console.log('array[i]', array[i]);
  }
  return result;
}
module.exports = mergeRanges;
=======

}

module.exports = mergeRanges;
>>>>>>> 1a7485c2a025fa8d3cb0d86037701456406ed848
