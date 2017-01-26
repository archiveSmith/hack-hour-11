// tyus must get from x y while crossing least amount of circles

// given array x, y, r

// (x[i],y[i]) are the coordinates of the i-th-circle's center and r[i] is its radius

// in addition to the arrays you are also given the numbers start_x, stary_y, end_x and end_y

// (start_x, start_y) are tyus starting coordinates and (end_x, end_y) are desitnation coordinates
// write an efficient alg for finding the minimum number of district borders tyus must cross in order to get from (start_x, start_y) to (end_x, end_y)

// constrains: 
// x, y, and r will each contain the same number of elements
// starts and ends will never lie on a circles bordersno circle borders intersect/touch (but can be nested)

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