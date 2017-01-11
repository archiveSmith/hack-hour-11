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
   let newRanges = [];
   let i = 0;
   while(i < array.length) {
     if(array[i] === array[array.length - 1]) return newRanges
     let a = array[i][0];
     let b = array[i][1];
     let c = array[i + 1][0];
     let d = array[i + 1][1];
     if(b > c || a > c) {
     let min = Math.min(a, b , c, d)
     let max = Math.max(a, b, c, d)
     newRanges.push([min, max])
     i+=2
     console.log(newRanges)
     }
     else {
     newRanges.push([a, b])
     i++;
     }
   }
   return newRanges
 }

module.exports = mergeRanges;
