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
  if (str === undefined || str.length < 5) return undefined;
  const x = parseInt(str[1]);
  const y = parseInt(str[3]);
  let answer = 0;
  let moves = [{ top: 1, left: 2 }, { top: 1, left: -2 }, { top: 2, left: 1 }, { top: 2, left: -1 }, { top: -1, left: 2 }, { top: -1, left: -2 }, { top: -2, left: 1 }, { top: -2, left: -1 }]
  
  for (let i = 0; i < moves.length; i += 1) {
        let flag = false;
        if (y + moves[i].top >= 0 || y + moves[i].top <= 7) flag = true;
        if (x + moves[i].left >= 0 || x + moves[i].left <= 7) flag = true;
        if (flag === true) answer += 1;
    }

  return answer
}

module.exports = knightjumps;
