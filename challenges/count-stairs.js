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

<<<<<<< HEAD
function countStairs(n, memo = {}) {
  if (memo[n] !== undefined) return memo[n]
  if (n < 2) return 1
  else return memo[n] = countStairs(n - 1, memo) + countStairs(n - 2, memo)
=======
function countStairs(n) {

>>>>>>> 4e4d9f1583d9b957be7e3ec443d3521ad1cd4cc6
}

module.exports = countStairs;
