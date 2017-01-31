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
    if (!str) return false;
    let jumps = 0;
    let coords = str.match(/\d/g);
    if (coords.length > 2) return false;
    coords[0] = parseInt(coords[0]);
    coords[1] = parseInt(coords[1]);

    if (coords[0] + 2 <= 8 && coords[1] + 1 <= 8) jumps++;
    if (coords[0] + 2 <= 8 && coords[1] - 1 >= 1) jumps++;
    if (coords[0] - 2 >= 1 && coords[1] + 1 <= 8) jumps++;
    if (coords[0] - 2 >= 1 && coords[1] - 1 >= 1) jumps++;

    console.log('so far jumps is at ' + jumps);

    if (coords[0] + 1 <= 8 && coords[1] + 2 <= 8) jumps++;
    if (coords[0] + 1 <= 8 && coords[1] - 2 >= 1) jumps++;
    if (coords[0] - 1 >= 1 && coords[1] + 2 <= 8) jumps++;
    if (coords[0] - 1 >= 1 && coords[1] - 2 >= 1) jumps++;
    
    return jumps;
    

}

// console.log(knightjumps('(1 1)'))


module.exports = knightjumps;
