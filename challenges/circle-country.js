/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

 const x1 = [4, 6, 2];
 const y1 = [4, 6, 2];
 const r1 = [4, 1, 1];
 const sx1 = 6;
 const sy1 = 6;
 const ex1 = 2;
 const ey1 = 2;

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  const circles = x.length;
  // find how circles encapsualte start coor
  const startCircle = [];
  const endCircle = [];
  for (let i = 0; i < circles; i += 1) {
    const dist1 = Math.sqrt(Math.pow((x1[i] - sx1), 2) + Math.pow((y1[i] - sx1), 2));
    const dist2 = Math.sqrt(Math.pow((x1[i] - ex1), 2) + Math.pow((y1[i] - ex1), 2));
    // console.log(dist1);
    // console.log(dist2);
    if (dist1 <= r1[i]) startCircle.push([x1[i], y1[i], r1[i]]);
    if (dist2 <= r1[i]) endCircle.push([x1[i], y1[i], r1[i]]);
  }
  for (let i = 0; i < startCircle.length; i += 1) {
    while (endCircle.includes(startCircle[i])) {
      
    }
  }
  // console.log(startCircle);
  // console.log(endCircle);

}
circleCountry(x1, y1, r1, sx1, sy1, ex1, ey1);
module.exports = circleCountry;
