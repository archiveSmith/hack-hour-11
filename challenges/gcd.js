/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if(a === 0 || b === 0 || a === null || b === null) {
    return undefined
  }
  
  let smaller = a < b ? a:b;
  
  for (let i = smaller; i > 0; i -= 1) {
    if (a % i === 0 && b % i === 0) {return i}
  }

}

module.exports = gcd;