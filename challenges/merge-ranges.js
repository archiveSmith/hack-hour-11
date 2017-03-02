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
  // sort times by start time
  .sort((a, b) => a[0] - b[0])
  // reduce into a smaller set of ranges
  .reduce((acc, cur, i, a) => {
    const last = acc[acc.length - 1];
    if (last && cur[0] > last[0] && cur[1] < last[1]) return acc;
    else if (last && cur[0] <= last[1]) last[1] = last[1][1] > cur[1] ? last[1][1]: cur[1];
    else acc.push(cur);
    return acc;
  }, []);
}

console.log(mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]));
module.exports = mergeRanges;
