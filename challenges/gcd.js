'use strict';
/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let i = Math.min(a, b);
  while(i > 0){
    if(a % i === 0 && b % i === 0){
      return i;
    }
    i -= 1;
  }
  return i;
}

module.exports = gcd;
