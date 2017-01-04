/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let min = Math.min(a, b);
  for(let i = min; i > 0; i--) {
    if (i % a === 0 && i % b === 0) {
      return i
    }

  }
  return 0;
}

module.exports = gcd;
