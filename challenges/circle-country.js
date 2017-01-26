/*Circle country is a country that contains several circular-shaped districts.
Some districts may be situated inside other districts, but their borders do not intersect or touch.
Tyus is a resident of Circle Country.When he travesl between two locations, he alwasy tries to cross the fewest nuber of districts.

Your are given an array x, an array y, and an array r.

(x[i], y[i)]) are the coordinates of the i-th cirle's center and r[i] is its radius.

In addition to the arrays, you are also given the numbers start_x, start_y, end_x and end_y

(start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates

Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
(start_x, start_y) to (end_x, end_y)

Constraints
  x, y and r will each contain the same number of elements
  (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
  no circle borders intersect/touch (but they can be nested)
*/
function circleCountry(x, y, r, startX, startY, endX, endY){
  let range = {birth: null, limit: null};
  //let slope = (endX -startX)/(endY - startY);
  console.log((endX -startX) + '/' + (endY - startY));

  for(let i = 0; x.length; i++){
    
  }


}
circleCountry([-1, 0, 0, 4], [0, 0, 0, 4], [1,3,6,1], 1, 0, 4, 4);
module.exports = circleCountry;
