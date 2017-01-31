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
	let arrLength = x.length;
  let count = 0;
	let maxX = Math.max(...x);
	let minX = Math.min(...x);
	let maxY = Math.max(...y);
	let minY = Math.min(...y);
  for (let i = minX; i < maxX; i += 1) {
    for (let k = minY; k < maxY; k += 1) {
      if (x.includes(x[i]) && y[k] < k)
    }
  }
}

module.exports = newIntersections;
