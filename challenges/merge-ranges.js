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
  const avails = [];
  const res = [];
  let temp = [];

  array.forEach((range) => {
    for (let i = range[0]; i < range[1]; i += 1) {
      avails.push(i);
    }
  });

  avails.sort((a, b) => a - b);

  for (let i = 0; i < avails.length; i += 1) {
    if (!temp.length) temp.push(avails[i]);
    if (avails[i + 1] !== avails[i] + 1 && avails[i + 1] !== avails[i]) {
      temp.push(avails[i] + 1);
      res.push(temp);
      temp = [];
    }
  }

  return res;
}

module.exports = mergeRanges;

// var times = [[0, 1], [0, 5], [4, 8], [10, 12], [0, 10]];

// console.log(mergeRanges(times)); // -> [[0, 1], [3, 8], [9, 12]]