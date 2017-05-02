/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    if(!a || !b) {
        return 0;
    }
    let least = Math.min(a, b);
    for (let i=least; i>0; i--) {
        if (a % i === 0 && b % i === 0) {
            return i;
        }
    }

}

// console.log(gcd(10,0));

module.exports = gcd;