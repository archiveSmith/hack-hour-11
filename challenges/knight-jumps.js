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
  let [x, y] = str.slice(1, 4).split(' ');
  let oneSpace = 1, twoSpace = 2, possible = 0;
  x = parseInt(x), y = parseInt(y);

  for(let i = 0; i < 4; i++){
    valid(x + twoSpace, y + oneSpace) && possible++;
    valid(y + twoSpace, x + oneSpace) && possible++;

    oneSpace *= -1;
    if(i % 2 === 1) twoSpace *= -1;
  }

  function valid(x, y){
    return x <= 8 && x >= 1 && y <= 8 && y >= 1;
  }

  return possible;
}

module.exports = knightjumps;
