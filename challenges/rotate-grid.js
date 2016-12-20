/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents
 * the ith row in the grid.
 *
 * Write a function to rotate the grid 90 degrees clocxwise.
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
  let newArray = [];

  for (let i = 0; i < n; i++){
  	newArray.push(new Array(n));
  }

  for (let j = 0; j < n; j+= 1){
    for ( let x = 0; x < grid[0].length; x++) {
  		newArray[j][x] = grid[x][j];
    }
  }

  for (let p = 0; p < newArray.length; p += 1) {
  	newArray[p] = newArray[p].reverse();
  	}

  return newArray;
}





  // function rotate(grid, n) {
  //   if(n !== 0) {
  //     for(let i = 0; i < grid.length; i += 1) {
  //       for(let j = 0; j < grid[i].length; j += 1) {
  //         if(j = grid[i].length - 1) {
  //           if(i = grid.length - 1) {
  //             grid[0][0] = grid[i][j];
  //           }
  //           grid[i + 1][0] = grid[i][j];
  //         }
  //         grid[i + 1][j + 1] = grid[i][j];
  //       }
  //     }
  //     rotate(grid, n - 1);
  //   }
  //   return grid;
  // }
  // return rotate(grid, n);
// }

module.exports = rotateGrid;
