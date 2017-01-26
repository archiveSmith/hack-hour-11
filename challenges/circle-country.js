
//  *  Circle Country is a country that contains several circular-shaped districts.
//  *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
//  *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
//  *
//  *  You are given an array x, an array y, and an array r
//  *
//  *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
//  *
//  *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
//  *
//  *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
//  *
//  *
//  *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
//  *  (start_x, start_y) to (end_x, end_y)
//  *
//  *  Constraints:
//  *    - x, y and r will each contain the same number of elements
//  *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
//  *    - no circle borders intersect/touch (but they can be nested)
//  *
//  */

function circleCountry(x, y, r, startX, startY, endX, endY) {
  let linePointsX = [];
  let linePointsY = [];
  let sum = 0;

  for (let i = startX, m = 0; m <= endX; i += endX/(x.length -1), m += 1) {
    linePointsX.push(i)
  }

  for (let j = startY, l = 0; l < y.length; j += endY/(y.length - 1), l += 1) {
    linePointsY.push(j)
  }

  for (let k = 0; k < x.length; k += 1) {
    if (linePointsX[k] >= (x[k] - r[k]) && linePointsX[k] <= (x[k] + r[k]) && linePointsY[k] >= (y[k] - r[k]) && linePointsY[k] <= (y[k] + r[k])) {
      sum += 1
    }
  }  
  
  console.log(linePointsX, linePointsY, sum);
}

let x = [1, 2, 3]
let y = [1, 3, 5]
let r = [1, 1, 1]

circleCountry(x,y,r, 0, 0, 2, 4)

module.exports = circleCountry


