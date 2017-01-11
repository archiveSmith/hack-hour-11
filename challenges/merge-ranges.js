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
    let result = [];

    let sortedArr = array.sort(function(a,b){
        return a[0]-b[0];
    })

    result[0] = sortedArr[0];

    for (let i=1; i<sortedArr.length; i++) {
        if (sortedArr[i][0] <= result[result.length-1][1]) {
            if (sortedArr[i][1] > result[result.length-1][1]) {
                result[result.length-1][1] = sortedArr[i][1];
            }
        } else {
            result.push(sortedArr[i]);
        }

    }
    
    console.log(result);
}

var times = [[0, 1], [3, 5], [4,8], [7,9], [10, 15]]
mergeRanges(times);

module.exports = mergeRanges;
