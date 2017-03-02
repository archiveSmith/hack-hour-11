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

function mergeRanges(arr) {
  return arr
  .sort((a, b) => a[0] - b[0])
  .reduce((acc, cur, i, a) => {
    if (!acc[acc.length - 1]) acc.push(cur);
    if (cur[0] > acc[acc.length - 1][1]) acc.push(cur);
    if (cur[0] <= acc[acc.length - 1][1]) acc[acc.length - 1][1] = acc[acc.length - 1][1][1] > cur[1] ? acc[acc.length - 1][1][1] : cur[1];
    return acc;
  }, []);
}

// console.log(mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]));
module.exports = mergeRanges;
