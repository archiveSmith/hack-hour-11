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
  let x = 0;
  let y = n;
  const board = [];
  for (x; x < n; x += 1) {
    const row = [];
    for (y = n; y > 0; y -= 1) {
      row.push(grid[y - 1][x]);
    }
    board.push(row);
  }
  return board;
}

module.exports = rotateGrid;
