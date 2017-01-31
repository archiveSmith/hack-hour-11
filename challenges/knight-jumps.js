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
  const x = parseInt(str[0]);
  const y = parseInt(str[2]);

  if (x === 1) x = 8;
  if (y === 1) y = 8;
  if (x === 2) x = 7;
  if (y === 2) y = 7;
  if (x === 3) x = 6;
  if (y === 3) y = 6;

  if (x === 8 && y === 8) return 2;
  else if (x === 7 && y === 8 || y === 7 && x === 8) return 3;
  else if (x === 7 && y === 7) return 4;
  else if (x === 6 && y === 8 || y === 6 && x === 8) return 4;
  else if (x === 6 && y === 7 || y === 6 && x === 7) return 6;
  else if (x > 0 && x < 7 && y > 0 && y < 7) return 8;
  else return 0;
}

module.exports = knightjumps;
