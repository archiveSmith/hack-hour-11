/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]

function mergeRanges(array) {
  const sorted = array.sort((a, b) => a[0] - b[0]);
  const result =[];
  for (let i = 0; i < sorted.length; i += 1) {
    const range = [];
    if (sorted[i + 1] && sorted[i][1] >= (sorted[i + 1][0])) {
      let bigger = sorted[i + 1][1] > sorted[i][1] ? sorted[i + 1][1] : sorted[i][1];
      range.push(sorted[i][0], bigger);
      result.push(range);
      i += 1;
    } else {
      result.push(sorted[i]);
    }
  }
  return result;
}

console.log(mergeRanges(times))

module.exports = mergeRanges;
