<<<<<<< HEAD
/* You are given a NxN grid of elements represented by a 2D array. 
 * The ith nested array represents 
=======
/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
>>>>>>> 1a7485c2a025fa8d3cb0d86037701456406ed848
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */
<<<<<<< HEAD
function rotateGrid(grid, n) {
  let result = [];
  for (let i = 0; i < grid.length; i++) {
    let arr = [];
    for (let j = grid.length - 1; j >= 0; j -= 1) {
      arr.push(grid[j][i]);
    }
    result.push(arr);
  }
  return result;
}

module.exports = rotateGrid;

// function rotateGrid(grid, n) {
//   let result = [];
//   let gridCount;
//   let otherCount;
//   let array;
//   if (n <= 0 || typeof n !== 'number') return [];
//   for (let i = 0; i < n; i++) {
//     let array = [];
//     gridCount = n - 1;
//     otherCount = 0;
//     while (gridCount >= 0) {
//       array.push(grid[gridCount][otherCount]);
//       gridCount -= 1;
//       otherCount += 1;
//     }
//     result.push(array);
//   }
//   return result;
// }

// const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let n = 3;

// rotateGrid(grid, n);
=======

function rotateGrid(grid, n) {

}

module.exports = rotateGrid;
>>>>>>> 1a7485c2a025fa8d3cb0d86037701456406ed848
