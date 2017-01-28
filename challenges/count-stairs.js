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
    if (n === 0) {
        return 1;
    }
    let ways = 0;

    function recurse (curr, n) {
        if (curr === n) {
            ways++;
            return;
        }
        if (curr > n) return;

        recurse(curr+1, n);
        recurse(curr+2, n);
    }
    recurse(0, n);
    return ways;

}

console.log(countStairs(5));

module.exports = countStairs;
