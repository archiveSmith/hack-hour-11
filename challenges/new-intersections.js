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
    // check if there are matching x
    const colinearsX = x.filter(point => coord[0] === point);
    console.log(colinearsX);
  });

}

console.log(newIntersections([1, 3, 2, 2], [2, 2, 1, 3]));

module.exports = newIntersections;
