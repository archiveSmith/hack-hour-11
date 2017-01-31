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
  if (!str || str.length < 5) {
    return undefined;
  }
  let count = 0;
  const startingX = parseInt(str[1]);
  const startingY = parseInt(str[3]);
  if (startingX - 1 > 0 && startingY + 2 < 9) {
    count += 1;
  }
  if (startingX - 2 > 0 && startingY + 1 < 9) {
    count += 1;
  } 
  if (startingX - 2 > 0 && startingY - 1 > 0) {
    count += 1;
  } 
  if (startingX - 1 > 0 && startingY - 2 > 0) {
    count += 1;
  } 
  if (startingX+1 < 9 && startingY + 2 < 9) {
    count += 1;
  }
  if (startingX+2 < 9 && startingY + 1 < 9) {
    count += 1;
  }
  if (startingX+2 < 9 && startingY - 1 > 0) {
    count += 1;
  }
  if (startingX+1 < 9 && startingY - 2 > 0) {
    count += 1;
  } 
  return count;
}

module.exports = knightjumps;
