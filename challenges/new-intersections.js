/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 *
 *   - x is the array of x-coordinates and y is the array of y-coordinates
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 *
 */

function newIntersections(x, y){
   let count = 0;
     let arr = [];
     for (let i = 0; i < x.length; i += 1) {
       if (x[i] === x[i + 1]) {
         for (let j = Math.min(y[i], y[i + 1]); j < Math.max(y[i], y[i + 1]); j += 1) {
           arr.push(j);
         }
       }
     }
     for (let m = 0; m < y.length; m += 1) {
       if (y[m] === y[m + 1]) {
         if (arr.indexOf(y[m])) {
           count += 1;
         }
       }
     }
     return count;
    }

module.exports = newIntersections;
