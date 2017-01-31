// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
	var jumps = 0;
	var knightPos = {
		x: parseInt(str[1], 10),
		y: parseInt(str[3], 10)
	}

	// console.log("Knight pos: ", knightPos);

	if (str.length === 5 && (knightPos.x >= 1 && knightPos.y <= 8) && (knightPos.y >= 1 && knightPos.y <= 8)) {
		if (knightPos.x + 2 <= 8 && knightPos.y + 1 <= 8) {
			jumps++;
		}
		if (knightPos.x + 2 <= 8 && knightPos.y - 1 >= 1) {
			jumps++;
		}
		if (knightPos.x - 2 >= 1 && knightPos.y + 1 <= 8) {
			jumps++;
		}
		if (knightPos.x - 2 >= 1 && knightPos.y - 1 >= 1) {
			jumps++;
		}
		if (knightPos.y + 2 <= 8 && knightPos.x + 1 <= 8) {
			jumps++;
		}
		if (knightPos.y + 2 <= 8 && knightPos.x - 1 >= 1) {
			jumps++;
		}
		if (knightPos.y - 2 >= 1 && knightPos.x + 1 <= 8) {
			jumps++;
		}
		if (knightPos.y - 2 >= 1 && knightPos.x - 1 >= 1) {
			jumps++;
		}
	}
		

	return jumps;
}

 // console.log(knightjumps("(2 6)"));

module.exports = knightjumps;
