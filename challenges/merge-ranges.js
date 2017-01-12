'use strict';
/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *``
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  let cache = array.reduce((cache, curr) =>{
    cache.push(curr[0], curr[1]);
    return cache;
  },[]).sort((a, b) =>{ return a - b;});

}

 let times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]

console.log(mergeRanges(times)); //-> [[0, 1], [3, 8], [9, 12]]

//module.exports = mergeRanges;
