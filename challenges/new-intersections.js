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
  // limits
  const upper = Math.max.apply(null, y);
  const lower = Math.min.apply(null, y);
  const right = Math.max.apply(null, x);
  const left = Math.min.apply(null, x);
  // all coords within limit
  const coords = [];
  for (let i = lower; i < upper; i++) {
    for (let j = left; j < right; j++) {
      coords.push([i, j]);
    }
  }
  
  let counter = 0;

  coords.forEach(coord => {
    let isAbove = false;
    let isBelow = false;
    let isRight = false;
    let isLeft = false;
    for (let i = 0; i < x.length; i++) {
      if (coord[0] === x[i] && y[i] > coord[1]) isAbove = true;
      if (coord[0] === x[i] && y[i] < coord[1]) isBelow = true;
      if (coord[1] === y[i] && x[i] > coord[0]) isRight = true;
      if (coord[1] === y[i] && x[i] < coord[0]) isLeft = true;
    }
    if (isAbove, isBelow, isRight, isLeft) counter++;
  });
  return counter;
}

console.log(newIntersections([1, 3, 2, 2], [2, 2, 1, 3]));

module.exports = newIntersections;
