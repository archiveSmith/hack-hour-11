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
  let valid = 0;

  for(let i = 0; i < x.length; i++){
    if(findPoint(x[i] + 1, y[i]) && findPoint(x[i] + 2, y[i]) && findPoint(x[i], y[i] + 1) && findPoint(x[i], y[i] - 1)){
      valid++;
    }
  }

  function findPoint(xpoint, ypoint){
    let q = x.indexOf(xpoint) !== -1 && y.indexOf(ypoint) !== -1;
    return q;
  }

  return valid;
}

module.exports = newIntersections;
