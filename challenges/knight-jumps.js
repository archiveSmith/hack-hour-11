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
  const start = str.replace(/\D/g, '').split('').map(x => parseInt(x));
  const up2Right1 = start.map((n, i) => i ? n + 1 : n + 2);
  const right2Up1 = start.map((n, i) => i ? n + 2 : n + 1);
  const right2Down1 = start.map((n, i) => i ? n + 2 : n - 1);
  const down2Right1 = start.map((n, i) => i ? n + 1 : n - 2);
  const down2Left1 = start.map((n, i) => i ? n - 1 : n - 2);
  const left2Down1 = start.map((n, i) => i ? n - 2 : n - 2);
  const left2Up1 = start.map((n, i) => i ? n - 2 : n + 1);
  const up2Left1 = start.map((n, i) => i ? n - 1 : n + 2);
  const moves = [up2Right1, right2Up1, right2Down1, down2Right1, down2Left1, left2Down1, left2Up1, up2Left1];
  return moves.filter(n => n[0] > 0 && n[0] < 9 && n[1] > 0 && n[1] < 9).length;
}

console.log(knightjumps("(7 4)"));

module.exports = knightjumps;
