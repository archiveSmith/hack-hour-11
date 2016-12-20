/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents
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

 function rotateGrid(grid, n) {
   let len = grid.length;
   let arr = [];
   if(len !== n || !grid || !n) {
     return undefined
   }

   for(let i = 0; i < n; i += 1) {
     if(len !== grid[i].length) {
       return undefined
     }

     for (let j = n - 1; j >= 0; j -= 1) {
       arr.push(grid[j][i])
     }

     grid.push(arr);
     arr = [];
   }

   grid.splice(0, n);
   return grid;
 }

module.exports = rotateGrid;
