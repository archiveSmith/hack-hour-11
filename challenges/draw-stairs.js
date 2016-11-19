// write a function that console logs a staircase of any given height where 1 <= n <= 100
// the staircase must climb up from left to right the last line should onlt consist of asterisks, without any leading/trailing spaces
//
// examples


function drawStairs(n) {
  if(n < 1 || n > 100) {
    return "Try another number"
  }

  else {
    let current = 1;

    function artist(current, final) {
      let stars = "";
      let numOfSpaces = (final - current);
      let spaces = "";

      for (let i = 1; i <= current; i++) {
        stars += "*";
      }

      for (let i = numOfSpaces; i > 0; i--) {
        spaces += " ";
      }

      current++;
      return spaces + stars;
    }

    for (let i = 1; i <= n; i++) {
      console.log(artist(i, n));
    }
  }

};


module.exports = drawStairs;
