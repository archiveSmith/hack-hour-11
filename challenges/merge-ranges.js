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


function mergeRangess(array) {
  const sorted = array.sort((a, b) => a[0] - b[0]);
  const startTimes = sorted.map(x => x[0]);
  const endTimes = sorted.map(x => x[1]);
  const mergedRanges = [];

  sorted.forEach((range, index, ranges) => {
    const currentEnd = range[1];
    const nextStart = ranges[index + 1][0];
    let mergedRange;
    if (currentEnd >= nextStart) {
      mergedRange = [range[0], ranges[index + 1][1]];
      mergedRanges.push(mergedRange);
    } else {
      mergedRanges.push(range);
    }
  });

  return mergedRanges;
}

function mergeRanges(array) {
  const sorted = array.sort((a, b) => a[0] - b[0]);
  return sorted.reduce((acc, curr) => {
    if (acc) {
      console.log('0')
    } else {
      console.log(curr);
    }
  }, []);
}

console.log(mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]));
module.exports = mergeRanges;
