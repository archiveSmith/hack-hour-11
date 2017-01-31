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
  const coor = str.match(/[0-9]/g).map((ele) => parseInt(ele));
  const x = coor[0];
  const y = coor[1];
  let count = 0;

  if (x > 8 || y > 8) return 0;
  // Checking top
  if (y + 2 < 9 && x + 2 < 9) {
    count += 2;
  } else if ((y + 2 < 9 && x + 1 < 9) || (y + 1 < 9 && x + 2 < 9)) {
    count += 1;
  }

    // Checking right
  if (y + 2 < 9 && x - 2 < 9) {
    count += 2;
  } else if ((y - 1 < 9 && x + 2 < 9) || (y - 2 < 9 && x + 1 < 9)) {
    count += 1;
  }

    // Checking bottom
  if (y - 2 < 9 && x - 2 < 9) {
    count += 2;
  } else if ((y - 2 < 9 && x - 1 < 9) || (y - 1 < 9 && x - 2 < 9)) {
    count += 1;
  }

    // Checking left
  if (y + 2 < 9 && x - 2 < 9) {
    count += 2;
  } else if ((y + 2 < 9 && x - 1 < 9) || (y + 1 < 9 && x -2 < 9)) {
    count += 1;
  }

  return count;
}

module.exports = knightjumps;
