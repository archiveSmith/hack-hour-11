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
  // must have at least 4 points
  if (x.length < 4 && y.length < 4) return 0;
  // loop thru an array
  let newPoints = 0;
  for (let i = 0; i < x.length; i += 1) {
    for (j = 0; j < x.length; j ++ 1) {
      if (j !== i) {
        if (x[j] === x[i]) {
          if (x[j] > x[i]) {
            let counter = 0;
            for (let k = 0; k < x.length; k += 1) {
              if (k !== j && k !== i) {
                if (x[j] > x[k] && x[k] > x[i]) {

                }
              }
            }
          }
          if (x[j] < x[i]) {
            for (let k = 0; k < x.length; k += 1) {
              if (k !== j && k !== i) {
                if (x[j] > x[k] && x[k] > x[i]) {
                  
                }
              }
            }
          }
        }

        if (y[j] === y[i]) {

        }
      }
    }
  }
    // check if any other coordinates share x or y axis
    // if so, then see if there are two other opposite axis coordinates

}

const x1 = [1, 3, 2, 2];
const y1 = [2, 3, 1, 3];

console.log(newIntersections(x1, y1));

module.exports = newIntersections;
