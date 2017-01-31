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
  const coor = [Number(str[1]), Number(str[3])];
  const spaces = [[coor[0] + 2, coor[1] + 1], 
                  [coor[0] + 2, coor[1] - 1], 
                  [coor[0] - 2, coor[1] + 1], 
                  [coor[0] - 2, coor[1] - 1], 
                  [coor[0] + 1, coor[1] + 2], 
                  [coor[0] - 1, coor[1] + 2], 
                  [coor[0] + 1, coor[1] - 2], 
                  [coor[0] - 1, coor[1] - 2]];
  const goodSpaces = [];
  for (let i = 0; i < spaces.length; i += 1) {
    console.log(spaces[i]);
    if (spaces[i][0] <= 8 && spaces[i][0] >= 1 && spaces[i][1] <= 8 && spaces[i][1] >= 1) {
      goodSpaces.push(spaces[i]);
    }
  }
  return goodSpaces.length;
}

console.log(knightjumps('(4 4'));

module.exports = knightjumps;
