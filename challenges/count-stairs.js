/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

function countStairs(n) {
  
  let sum = 0;

  function count(n) {
    if (n < 0) {
      //return 0;
      return;
    }
    if (n < 1) { 
      sum += 1;
      //return 1;
      return;
    }

    // sum += count(n-2);
    // sum += count(n-1);

    count(n-2);
    count(n-1);

    //return sum;
  }

  count(n);

  return sum;
}

module.exports = countStairs;
