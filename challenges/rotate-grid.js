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
	if (!grid) {
		return undefined;
	}

	const rg = [];
	for (let i = 0; i < grid.length; i++) {
		rg.push([]);
	}

	for (let i = n - 1; i >= 0; i--) {
		for (let j = 0; j < n; j++) {
			rg[j][n - 1 - i] = grid[i][j];
		}
	}
	
	return rg;
}

  // let n = 4;

  // const grid = [   [1, 2, 3, 4],
  //                  [4, 6, 7, 8],
  // 				 [9, 10, 11, 12],
 	// 				 [13, 14, 15, 16]			  ];

 // // let n = 3;

 // // const grid = [   [1, 2, 3],
 // //                  [4, 5, 6],
 // // 				 [7, 8, 9]  ];

 // // let n = 2;
 // // const grid = [   [1, 2],
 // //                  [4, 5]  ];

 // console.log(rotateGrid(grid, n));

module.exports = rotateGrid;
