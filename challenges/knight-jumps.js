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
	let count = 0;
	let temp;
	let other;
	let x = Number(parseInt(str.replace(/[^1-9]/g, '')).toString().split('')[0]);
	let y = Number(parseInt(str.replace(/[^1-9]/g, '')).toString().split('')[1]);
   for(let i = 0; i < 2; i++){
   	if(i === 0) temp = x, other = y;
   	if(i === 1) temp = y, other = x;



   }


	if((x+2) < 9){
		if((y+1) < 9){
		count++;
		}
		if((y-1) > 0){
		count++;
		}

	}
	if((x-2) > 0){
		if((y+1) < 9){
		count++;
		}
		if((y-1) > 0){
		count++;
		}
		
	}
	if((y+2) < 9){
		if((x+1) < 9){
		count++;
		}
		if((x-1) > 0){
		count++;
		}
		
	}
	if((y-2) > 0){
		if((x+1) < 9){
		count++;
		}
		if((x-1) > 0){
		count++;
		}
		
	}
	return count;
}

module.exports = knightjumps;
