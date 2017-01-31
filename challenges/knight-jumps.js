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
  const x = Number(str[1]);
  const y = Number(str[3]);
  const constraints = {
    0: 0,
    1: 0,
    2: 0
  };
  const results = {
    '0022': 2,
    '0122': 3,
    '0222': 4,
    '1122': 4,
    '1222': 6,
    '2222': 8
  }
  let result = '';

  function limits(n) {
    const upper = 8 - n;
    const lower = n - 1;

    if (upper >= 2) constraints[2] += 1;
    if (upper === 1) constraints[1] += 1;
    if (upper === 0) constraints[0] += 1;
    if (lower >= 2) constraints[2] += 1;
    if (lower === 1) constraints[1] += 1;
    if (lower === 0) constraints[0] += 1;
  }

  limits(x);
  limits(y);

  for (key in constraints) {
    while (constraints[key] > 0) {
      result = result.concat(key);
      constraints[key] -= 1;
    }
  }

  return results[result];
}

module.exports = knightjumps;

// const str = "(4 5)";
// console.log(knightjumps(str));
