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
  const pairs = [];
  const doubles = {
    x: {},
    y: {}
  }
  const xdoubles = {};
  const ydoubles = {};
  const xlines = [];
  const ylines = [];
  const xposs = [];
  const yposs = [];
  let count = 0;

  x.forEach((val, i) => {
    pairs.push([val, y[i]]);
    if (!doubles.x[val]) doubles.x[val] = 1;
    else doubles.x[val] += 1;
    if (!doubles.y[y[i]]) doubles.y[y[i]] = 1;
    else doubles.y[y[i]] += 1;
  });
  
  pairs.forEach((coord) => {
    if (doubles.x[coord[0]] > 1) {
      xlines.push(coord);
      if (!xdoubles[coord[0]]) {
        xdoubles[coord[0]] = { ymin: coord[1], ymax: coord[1] }
      } else {
        if (coord[1] < xdoubles[coord[0]].ymin) xdoubles[coord[0]].ymin = coord[1];
        if (coord[1] > xdoubles[coord[0]].ymax) xdoubles[coord[0]].ymax = coord[1];
      }
    }
    if (doubles.y[coord[1]] > 1) {
      ylines.push(coord);
      if (!ydoubles[coord[1]]) {
        ydoubles[coord[1]] = { xmin: coord[0], xmax: coord[0] }
      } else {
        if (coord[0] < ydoubles[coord[1]].xmin) ydoubles[coord[1]].xmin = coord[0];
        if (coord[0] > ydoubles[coord[1]].xmax) ydoubles[coord[1]].xmax = coord[0];
      }
    }
  });

  for (num in xdoubles) {
    for (let i = xdoubles[num].ymin; i < xdoubles[num].ymax; i += 1) {
      if (i !== xdoubles[num].ymin) xposs.push([parseInt(num), i]);
    }
  }

  for (num in ydoubles) {
    for (let i = ydoubles[num].xmin; i < ydoubles[num].xmax; i += 1) {
      if (i !== ydoubles[num].xmin) yposs.push([i, parseInt(num)]);
    }
  }

  xposs.forEach(xcoord => {
    yposs.forEach(ycoord => {
      if (xcoord[0] === ycoord[0] && xcoord[1] === ycoord[1]) {
        count += 1;
      }
    });
  });

  return count;
}

module.exports = newIntersections;

// console.log(newIntersections([1, 3, 2, 2], [2, 2, 1, 3]));


// const xcount = {};
// const ycount = {};
// const checkX = [];
// const checkY = [];
// // const borders = [];
// const poix = {};
// const poiy = {};

// x.forEach((val) => {
//   if (!xcount[val]) xcount[val] = 1;
//   else {
//     xcount[val] += 1;
//     checkX.push(val);
//   }
// });

// y.forEach((val) => {
//   if (!ycount[val]) ycount[val] = 1;
//   else {
//     ycount[val] += 1;
//     checkY.push(val);
//   }
// });

// // x.forEach((val, i) => {
// //   if (checkX.indexOf(val) !== -1) borders.push([x[i], y[i]]);
// // });

// // y.forEach((val, i) => {
// //   if (checkY.indexOf(val) !== -1) borders.push([x[i], y[i]]);
// // });

// x.forEach((val, i) => {
//   if (checkX.indexOf(val) !== -1) {
//     if (!poix[val]) poix[val] = [y[i]];
//     else poix[val].push(y[i]);
//   }
// });

// y.forEach((val, i) => {
//   if (checkY.indexOf(val) !== -1) {
//     if (!poiy[val]) poiy[val] = [x[i]];
//     else poiy[val].push(x[i]);
//   }
// });

// for (key in poix) {
//   let min = Infinity;
//   let max = -Infinity;
//   poix[key].forEach((e, i) => {
//     if (e < min) min = e;
//     if (e > max) max = e;
//   });

// }
