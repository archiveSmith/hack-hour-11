/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let highest;
  let most;
  if (a > b) {
    for (let i = 0; i < a; i++) {
      if (a % i === 0) {
        highest = i;
    }
      if (b % highest === 0) {
        most = highest;
      }
    }
} else {
    for (let i = 0; i < b; i++) {
        if (b % i === 0) {
      highest = i;
    }
    if (a % highest === 0) {
      most = highest;
    }
  } 
}
  return most;
}

module.exports = gcd;