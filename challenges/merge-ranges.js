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
  // array = array.sort((a,b) => a[0] - b[0]);
  // let arr = [];
  // for (let i = 0; i < array.length; i += 1) {
  //   if (array[i][1] >= array[i + 1][0]) {
  //     let result = array[i].concat(array[i + 1]);
  //     result.splice(1, result.length - 2);
  //     arr.push(result);
  //     i += 1;
  //   } else {
  //     arr.push(array[i]);
  //   } 
  // }
  // return arr;

  const sortedTimes = array.sort((a,b) => a[0] - b[0]);
  const firstTimeSlot = sortedTimes.shift();
  return sortedTimes.reduce((merged, currentTimeSlot) => {
    const previousEndTime = merged[merged.length - 1][1]
    if (previousEndTime > currentTimeSlot[1]) return merged;
    currentTimeSlot[0] > previousEndTime ? merged.push(currentTimeSlot) : merged[merged.length - 1][1] = currentTimeSlot[1];
    return merged;
  }, [firstTimeSlot]);
}

module.exports = mergeRanges;
