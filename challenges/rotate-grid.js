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


first array becomes last element of each array 
last array becomes first element of each array 
first element of each array becomes first array


create temp variables that hold all of the sides
rotate one at a time. 


then go through array and hard code each side with the temp variables. 
 */

function rotateGrid(grid, n) {

	const topGrid = [];
	const rightGrid = [];
	let bottomGrid;
	const leftGrid = [];

	let newGrid = grid;

	for (let i = 0; i < grid[0].length; i++){
		topGrid.push(grid[0][i]);
	}

	for (var j = n-1; j >= 0; j --){
		rightGrid.push(grid[j][n-1]);
	};

	bottomGrid = grid[n-1];

	for (var k = n-1; k >= 0; k--){
		leftGrid.push(grid[k][0])
	};


//now I need to do the rotation....

	console.log(topGrid,rightGrid, bottomGrid, leftGrid);
	grid[0] = leftGrid;//top done

	for (let i = 0; i < topGrid.length; i++){
		grid[i][2] = topGrid[i];
	}//right is done 

	grid[2] = rightGrid;//bottom is done 


	for (let i = 0; i < bottomGrid.length; i++){
		grid[i][0] = bottomGrid[i];
	}


	console.log(grid);



}



//console.log(rotateGrid(sample,3));

module.exports = rotateGrid;
