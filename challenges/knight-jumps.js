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
  const arr = str.split('');
  const x = Number(arr[1]);
  const y = Number(arr[3]);
  let total = 0;

  const moves = [
    {x: -2, y: -1},
    {x: -2, y: 1},
    {x: -1, y: -2},
    {x: -1, y: 2},
    {x: 1, y: -2},
    {x: 1, y: 2},
    {x: 2, y: -1},
    {x: 2, y: 1}
  ]

    for (let i = 0; i < moves.length; i++) {
      const move_x = x + moves[i].x;
      const move_y = y + moves[i].y;

      if (move_x > 0 && move_x <= 8 && move_y > 0 && move_y <=8) {
        total++;
      }
    }
    return total;
}

module.exports = knightjumps;
