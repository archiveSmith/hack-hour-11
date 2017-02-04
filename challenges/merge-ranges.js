/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 *///


function mergeRanges(array) {
const sortedTimes = array.sort((a,b) => a[0] - b[0]);
const firstTimeSlot = sortedTimes.shift();

return sortedTimes.reduce((merged, currentTimeSlot) => {
    const previousEndTime = merged[merged.length - 1][1];
    if (currentTimeSlot[1] <= previousEndTime){
      return merged;
    } 
    if (currentTimeSlot[0] > previousEndTime) {
        merged.push(currentTimeSlot);
    }
    if (currentTimeSlot[0] <= previousEndTime){
      merged[merged.length-1] = currentTimeSlot[1];
      return merge;
    }
}, [firstTimeSlot]);

}

module.exports = mergeRanges;
