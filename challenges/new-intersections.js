/**
 *
 * You are given an array x and an array y that represent the coordinates of
 several OLD points
 *
 *   - x is the array of x-coordinates and y is the array of y-coordinates
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed
 * such that there are OLD points above, below, to the left, and to the right
 of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate &
 NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 *
 */

function newIntersections(x, y){
  if(x[0] === undefined || y[0] === undefined) return;

  let firstX = x[0]
  let firstY = y[0]
  let count = 0;
  for(let i = 1; i < x.length; i++) {
    if(Math.abs(firstX - x[i]) >= 1 && Math.abs(firstY - y[i]) >= 1) count += 1;

    else if(Math.abs(firstX - x[i]) >= 1 || Math.abs(firstY - y[i]) >= 1) count += 0.5;


  }
}

module.exports = newIntersections;
