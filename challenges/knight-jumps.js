// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with 
//no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents 
///the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from
// a given location.
// For example: if str is "(4 5)" then your program should output 8 because 
//the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
//generate all possiblities brute force and push it into array
//loop through array if any of them bigger than 8, remove it
// var str = "(4 5)"

function knightjumps(str) {
	let newStr = str.replace(/[{()}]/g, '').split(" ");
	let nums = newStr.map((val) => {
		return parseInt(val)
	})

	let options = [];

	options.push([nums[0]+1,nums[1]+2]);
	options.push([nums[0]+1,nums[1]-2]);
	options.push([nums[0]-1,nums[1]+2]);
	options.push([nums[0]-1,nums[1]-2]);
	options.push([nums[0]+2,nums[1]+1]);
	options.push([nums[0]+2,nums[1]-1]);
	options.push([nums[0]-2,nums[1]+1]);
	options.push([nums[0]-2,nums[1]-1]);

	for (let i = 0; i < options.length; i++){
		if (options[i][0] > 8 || options[i][1] > 8 || options[i][0] < 1 || options[i][1] < 1 ) {
			options.splice(i,1)
		}
	}

	return options.length
	

}



module.exports = knightjumps;
